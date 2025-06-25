'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import type { QuizFormulasPageDictionaryItems, Question } from '@/dictionaries/fr'; // Using fr for type definition
import type { Locale } from '@/config/i18n';
import { Award, Target, BrainCircuit, ArrowLeft, CheckCircle2, XCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { saveAndEmailResult } from '@/app/actions/quiz';

interface QuizClientProps {
  questions: Question[];
  t: QuizFormulasPageDictionaryItems;
  topic: string;
}

type QuizState = 'in-progress' | 'email-capture' | 'results';

export function QuizClient({ questions, t, topic }: QuizClientProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | undefined)[]>(() => Array(questions.length).fill(undefined));
  const [quizState, setQuizState] = useState<QuizState>('in-progress');
  const [score, setScore] = useState(0);
  const [userLevel, setUserLevel] = useState('');
  const [showResultsDetail, setShowResultsDetail] = useState(false);
  const { toast } = useToast();
  const pathname = usePathname();
  const quizTopicsPath = pathname.substring(0, pathname.lastIndexOf('/'));
  const [isSubmittingEmail, setIsSubmittingEmail] = useState(false);

  const handleNext = () => {
    if (selectedAnswers[currentQuestionIndex] === undefined) {
      toast({ title: t.validation.selectAnswer, variant: "destructive" });
      return;
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleFinish = () => {
    const allAnswered = selectedAnswers.every(answer => answer !== undefined);
    if (!allAnswered) {
      toast({ title: t.validation.selectAllAnswers, variant: "destructive" });
      return;
    }

    const finalAnswers = selectedAnswers as number[];
    let correctAnswers = 0;
    questions.forEach((q, index) => {
      if (finalAnswers[index] === q.correctAnswerIndex) {
        correctAnswers++;
      }
    });

    const finalScore = (correctAnswers / questions.length) * 100;
    setScore(finalScore);

    if (finalScore < 50) {
      setUserLevel(t.results.levels.beginner);
    } else if (finalScore < 85) {
      setUserLevel(t.results.levels.intermediate);
    } else {
      setUserLevel(t.results.levels.expert);
    }

    setQuizState('email-capture');
  };
  
  const handleRetakeQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers(Array(questions.length).fill(undefined));
    setQuizState('in-progress');
    setScore(0);
    setUserLevel('');
    setShowResultsDetail(false);
  };

  const EmailCaptureView = () => {
    const locale = pathname.split('/')[1] as Locale;

    const FormSchema = z.object({
      email: z.string().email({ message: t.emailCapture.invalidEmailError }),
    });

    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: { email: "" },
    });

    async function onSubmit(data: z.infer<typeof FormSchema>) {
      setIsSubmittingEmail(true);
      try {
        await saveAndEmailResult({
          email: data.email,
          score,
          level: userLevel,
          topic,
          locale,
          questions,
          answers: selectedAnswers as number[], // Cast is safe here due to component logic
        });
        toast({ title: t.emailCapture.successMessage });
        setQuizState('results');
      } catch (error) {
        console.error(error);
        toast({ title: t.error.title, description: (error as Error).message, variant: 'destructive' });
      } finally {
        setIsSubmittingEmail(false);
      }
    }

    return (
      <Card className="max-w-4xl mx-auto shadow-2xl">
        <CardHeader className="text-center">
          <CardTitle className={cn("text-3xl font-bold", "font-headline")}>{t.emailCapture.title}</CardTitle>
          <CardDescription className={cn("text-lg", "font-body")}>{t.emailCapture.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-sm mx-auto">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t.emailCapture.emailLabel}</FormLabel>
                    <FormControl>
                      <Input placeholder={t.emailCapture.emailPlaceholder} {...field} className="border-primary"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isSubmittingEmail} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                {isSubmittingEmail ? t.emailCapture.submittingButton : t.emailCapture.submitButton}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    );
  };

  if (quizState === 'email-capture') {
    return <EmailCaptureView />;
  }

  if (quizState === 'results') {
    const levelInfo = score < 50 ? t.results.levelInfo.beginner : score < 85 ? t.results.levelInfo.intermediate : t.results.levelInfo.expert;
    const LevelIcon = score < 50 ? Target : score < 85 ? BrainCircuit : Award;

    return (
      <Card className="max-w-4xl mx-auto shadow-2xl">
        <CardHeader className="text-center">
          <CardTitle className={cn("text-3xl font-bold", "font-headline")}>{t.results.title}</CardTitle>
          <CardDescription className={cn("text-lg", "font-body")}>{t.results.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
            <div className="flex flex-col items-center justify-center p-6 bg-secondary/50 rounded-lg">
                <LevelIcon className="h-16 w-16 text-primary mb-4"/>
                <p className={cn("text-xl font-body", "font-body")}>{t.results.yourScore}: <span className="font-bold text-2xl text-primary">{score.toFixed(0)}%</span></p>
                <p className={cn("text-xl font-body", "font-body")}>{t.results.yourLevel}: <span className="font-bold text-2xl text-primary">{userLevel}</span></p>
            </div>
            
            <div className="text-center p-4 border rounded-lg">
              <p className={cn("text-lg", "font-body")}>{levelInfo.description}</p>
              <Button asChild className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href={levelInfo.ctaLink}>{levelInfo.ctaButton}</a>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 border-t pt-6">
                <Button asChild variant="ghost" className="text-foreground hover:bg-buttonCustom hover:text-buttonCustom-foreground">
                  <Link href={quizTopicsPath}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    {t.results.backToQuizzesButton}
                  </Link>
                </Button>
                <Button onClick={handleRetakeQuiz} variant="outline">
                  {t.results.retakeButton}
                </Button>
                <Button onClick={() => setShowResultsDetail(!showResultsDetail)} variant="default">
                  {showResultsDetail ? t.results.hideAnswersButton : t.results.showAnswersButton}
                </Button>
            </div>

            {showResultsDetail && (
                <div className="mt-8 space-y-6 border-t pt-6">
                    {questions.map((q, index) => {
                        const userAnswerIndex = (selectedAnswers as number[])[index];
                        const isCorrect = userAnswerIndex === q.correctAnswerIndex;

                        return (
                            <div key={index} className="p-4 border rounded-lg bg-card shadow-inner">
                                <p className="font-bold font-body text-lg">{t.question} {index + 1}: {q.question}</p>
                                
                                <div className={`mt-3 p-3 rounded-md border flex items-start ${isCorrect ? 'border-primary/50 bg-primary/10' : 'border-destructive/50 bg-destructive/10'}`}>
                                    {isCorrect 
                                        ? <CheckCircle2 className="h-5 w-5 mr-3 mt-1 shrink-0 text-primary" />
                                        : <XCircle className="h-5 w-5 mr-3 mt-1 shrink-0 text-destructive" />
                                    }
                                    <div>
                                        <span className="font-semibold font-body">{t.results.yourAnswerLabel}</span>
                                        <p className="font-body text-muted-foreground">{q.options[userAnswerIndex]}</p>
                                    </div>
                                </div>

                                {!isCorrect && (
                                    <div className="mt-2 p-3 rounded-md border border-primary/50 bg-primary/10 flex items-start">
                                        <CheckCircle2 className="h-5 w-5 mr-3 mt-1 shrink-0 text-primary" />
                                        <div>
                                            <span className="font-semibold font-body">{t.results.correctAnswerLabel}</span>
                                            <p className="font-body text-muted-foreground">{q.options[q.correctAnswerIndex]}</p>
                                        </div>
                                    </div>
                                )}

                                <div className="mt-3 text-sm text-muted-foreground font-body italic pl-4 border-l-2 border-border">
                                    <span className="font-semibold not-italic">{t.results.explanationLabel}</span> {q.explanation}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </CardContent>
      </Card>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <Card className="max-w-4xl mx-auto shadow-lg">
      <CardHeader>
        <Progress value={((currentQuestionIndex + 1) / questions.length) * 100} className="w-full" />
        <p className="text-center text-sm text-muted-foreground mt-2 font-body">{t.question} {currentQuestionIndex + 1} / {questions.length}</p>
        <CardTitle className="pt-4 text-center font-headline text-2xl">{currentQuestion.question}</CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup
          value={selectedAnswers[currentQuestionIndex] !== undefined ? String(selectedAnswers[currentQuestionIndex]) : ""}
          onValueChange={(value) => {
            const newAnswers = [...selectedAnswers];
            newAnswers[currentQuestionIndex] = Number(value);
            setSelectedAnswers(newAnswers);
          }}
          className="space-y-4"
        >
          {currentQuestion.options.map((option, index) => (
            <div key={index} className="flex items-center space-x-3">
              <RadioGroupItem value={String(index)} id={`q${currentQuestionIndex}-o${index}`} />
              <Label htmlFor={`q${currentQuestionIndex}-o${index}`} className="font-body text-base flex-1 cursor-pointer">{option}</Label>
            </div>
          ))}
        </RadioGroup>
        <div className="flex justify-between mt-8">
          <Button 
            onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)} 
            disabled={currentQuestionIndex === 0} 
            variant="outline"
            className="hover:bg-buttonCustom hover:text-buttonCustom-foreground"
          >
            {t.previousButton}
          </Button>
          {currentQuestionIndex < questions.length - 1 ? (
            <Button onClick={handleNext}>
              {t.nextButton}
            </Button>
          ) : (
            <Button onClick={handleFinish} className="bg-accent text-accent-foreground hover:bg-accent/90">
              {t.finishButton}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
