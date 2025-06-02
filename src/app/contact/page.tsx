import { PageHeader } from '@/components/shared/PageHeader';
import { ContactForm } from '@/components/contact/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ContactPage() {
  return (
    <div>
      <PageHeader 
        title="Contactez-moi"
        description="Besoin de conseils, d'optimisations ou simplement une envie de collaborer, N'hésitez pas à me contacter"
      />
      
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <h2 className={cn("text-2xl font-semibold text-primary", "font-headline")}>Informations de Contact</h2>
          <div className={cn("space-y-4", "font-body")}>
            <div className="flex items-center gap-3">
              <Mail className="h-6 w-6 text-accent" />
              <a href="mailto:votre.email@example.com" className="hover:text-accent transition-colors">votre.email@example.com</a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-6 w-6 text-accent" />
              <span>+33 6 00 00 00 00</span>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="h-6 w-6 text-accent mt-1" />
              <span>Votre Ville, France</span>
            </div>
          </div>
          <p className={cn("text-muted-foreground", "font-body")}>
            Je suis également disponible sur les réseaux sociaux. N'hésitez pas à me suivre ou à m'envoyer un message.
          </p>
          {/* Add social media links here if desired */}
        </div>

        <div>
          <h2 className={cn("text-2xl font-semibold text-primary mb-6", "font-headline")}>Envoyez-moi un message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
