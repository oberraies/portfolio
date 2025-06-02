
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { useState, useRef } from 'react';
import { UploadCloud, XCircle, Paperclip } from 'lucide-react';
import { cn } from '@/lib/utils';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères." }),
  email: z.string().email({ message: "Veuillez entrer une adresse e-mail valide." }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Le message doit contenir au moins 10 caractères." }),
  files: z.custom<FileList>((val) => val instanceof FileList, "Veuillez sélectionner des fichiers.")
    .refine((files) => Array.from(files).every(file => file.size <= MAX_FILE_SIZE), `Chaque fichier ne doit pas dépasser 5MB.`)
    .refine((files) => Array.from(files).every(file => ALLOWED_FILE_TYPES.includes(file.type)), "Types de fichiers non supportés.")
    .optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    if (data.phone) {
      formData.append('phone', data.phone);
    }
    formData.append('message', data.message);
    if (selectedFiles) {
      selectedFiles.forEach(file => {
        formData.append('files', file);
      });
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });
      
      const result = await response.json();
      if (result.success) {
        toast({
          title: "Message Envoyé !",
          description: "Merci pour votre message. Je vous répondrai dès que possible.",
          variant: "default",
        });
        form.reset();
        setSelectedFiles([]);
        if (fileInputRef.current) {
          fileInputRef.current.value = ""; 
        }
      } else {
        toast({
          title: "Erreur",
          description: result.error || "Une erreur s'est produite lors de l'envoi du message.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Erreur Inattendue",
        description: "Une erreur inattendue s'est produite. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      const validFiles = filesArray.filter(file => {
        if (file.size > MAX_FILE_SIZE) {
          toast({ title: "Fichier trop volumineux", description: `${file.name} dépasse 5MB.`, variant: "destructive" });
          return false;
        }
        if (!ALLOWED_FILE_TYPES.includes(file.type)) {
          toast({ title: "Type de fichier non supporté", description: `${file.name} n'est pas un type de fichier autorisé.`, variant: "destructive" });
          return false;
        }
        return true;
      });
      setSelectedFiles(prevFiles => [...prevFiles, ...validFiles].slice(0, 5)); 
    }
  };

  const removeFile = (fileName: string) => {
    setSelectedFiles(prevFiles => prevFiles.filter(file => file.name !== fileName));
     if (fileInputRef.current) {
        const dt = new DataTransfer();
        selectedFiles.filter(file => file.name !== fileName).forEach(file => dt.items.add(file));
        fileInputRef.current.files = dt.files;
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-headline">Nom</FormLabel>
              <FormControl>
                <Input placeholder="Votre nom" {...field} className="font-body border-primary"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-headline">Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Votre adresse e-mail" {...field} className="font-body border-primary"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-headline">Téléphone (Optionnel)</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="Votre numéro de téléphone" {...field} className="font-body border-primary"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-headline">Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Votre message..." {...field} rows={5} className="font-body border-primary"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="files"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-headline">Pièces Jointes (Optionnel, max 5 fichiers, 5MB chacun)</FormLabel>
              <FormControl>
                <div className="relative flex items-center justify-center w-full">
                  <label htmlFor="file-upload" className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-card hover:bg-secondary transition-colors border-primary">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <UploadCloud className="w-8 h-8 mb-2 text-muted-foreground" />
                          <p className="mb-1 text-sm text-muted-foreground font-body"><span className="font-semibold">Cliquez pour choisir</span> ou glissez-déposez</p>
                          <p className="text-xs text-muted-foreground font-body">PDF, DOC(X), JPG, PNG (MAX. 5MB/fichier)</p>
                      </div>
                      <Input 
                        id="file-upload" 
                        type="file" 
                        multiple 
                        className="hidden" 
                        ref={fileInputRef}
                        onChange={(e) => {
                            field.onChange(e.target.files); 
                            handleFileChange(e); 
                        }}
                        accept={ALLOWED_FILE_TYPES.join(',')}
                      />
                  </label>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {selectedFiles.length > 0 && (
          <div className="space-y-2">
            <h4 className={cn("text-sm font-medium", "font-headline")}>Fichiers sélectionnés :</h4>
            <ul className="space-y-1 list-disc list-inside">
              {selectedFiles.map((file, index) => (
                <li key={index} className="flex items-center justify-between text-sm text-muted-foreground p-2 bg-secondary/50 rounded-md">
                  <span className="flex items-center font-body">
                    <Paperclip className="w-4 h-4 mr-2 shrink-0" />
                    {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                  </span>
                  <Button type="button" variant="ghost" size="icon" onClick={() => removeFile(file.name)} className="h-6 w-6">
                    <XCircle className="w-4 h-4 text-destructive" />
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        )}

        <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md border border-primary">
          {isSubmitting ? 'Envoi en cours...' : 'Envoyer le Message'}
        </Button>
      </form>
    </Form>
  );
}

    