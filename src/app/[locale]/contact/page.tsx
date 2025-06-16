
import { PageHeader } from '@/components/shared/PageHeader';
import { ContactForm } from '@/components/contact/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Locale } from '@/config/i18n';
import { getDictionary } from '@/lib/dictionaries';

interface ContactPageProps {
  params: { locale: Locale };
}

export default async function ContactPage({ params: { locale } }: ContactPageProps) {
  const dict = await getDictionary(locale);
  const tPageHeader = dict.pageHeaders;
  const tContactForm = dict.contactForm;

  return (
    <div>
      <PageHeader 
        title={tPageHeader.contactTitle}
        description={tPageHeader.contactDescription}
        className="py-6 md:py-8 lg:py-10"
      />
      
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6 md:text-right">
          <h2 className={cn("text-2xl font-semibold text-primary", "font-headline")}>{tContactForm.contactInfoTitle}</h2>
          <div className={cn("space-y-4", "font-body")}>
            <div className="flex items-center gap-3 md:justify-end">
              <Mail className="h-6 w-6 text-primary" />
              <a href="mailto:oberraies@gmail.com" className="hover:text-primary transition-colors">oberraies@gmail.com</a>
            </div>
            <div className="flex items-center gap-3 md:justify-end">
              <Phone className="h-6 w-6 text-primary" />
              <span>(+33) 07 80 98 35 04 / (+216) 99 44 28 79</span>
            </div>
            <div className="flex items-center gap-3 md:justify-end">
              <MapPin className="h-6 w-6 text-primary" />
              <span>{tContactForm.contactInfoAvailability}</span>
            </div>
          </div>
          <p className={cn("text-muted-foreground", "font-body")}>
            <a 
              href="https://calendly.com/oberraies" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="underline:none hover:text-buttonCustom transition-colors"
            >
              {tContactForm.contactInfoSocialPrompt}
            </a>
          </p>
        </div>

        <div>
          <h2 className={cn("text-2xl font-semibold text-primary mb-6", "font-headline")}>{tContactForm.sendMessageTitle}</h2>
          {/* ContactForm reçoit déjà les labels traduits via ses props */}
          <ContactForm labels={tContactForm} />
        </div>
      </div>
    </div>
  );
}
