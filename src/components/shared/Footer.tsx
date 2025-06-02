
import { Mail, Linkedin, Github, Phone } from 'lucide-react';
import Link from 'next/link';
import { cn } from "@/lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm">
        {/* Left Side */}
        <div className={cn("text-muted-foreground mb-4 md:mb-0 text-center md:text-left", "font-body")}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 justify-center md:justify-start">
            <span>&copy; {currentYear} Oussama Berraies</span>
            <span className="hidden sm:inline">-</span>
            <div className="flex items-center justify-center md:justify-start space-x-1 mt-1 sm:mt-0">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span>(+216) 99 44 28 79</span>
            </div>
            <span className="hidden sm:inline">-</span>
            <a
              href="mailto:oberraies@gmail.com"
              className="flex items-center justify-center md:justify-start space-x-1 mt-1 sm:mt-0 text-muted-foreground hover:text-beige transition-colors duration-300 ease-in-out"
            >
              <Mail className="h-4 w-4" />
              <span>oberraies@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex space-x-4">
          <Link href="mailto:oberraies@gmail.com" passHref legacyBehavior>
            <a
              aria-label="Envoyer un email"
              className="text-muted-foreground hover:text-beige transition-colors duration-300 ease-in-out"
            >
              <Mail className="h-6 w-6" />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/oussama-berraies" passHref legacyBehavior>
            <a
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Profil LinkedIn d'Oussama Berraies"
              className="text-muted-foreground hover:text-beige transition-colors duration-300 ease-in-out"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </Link>
          <Link href="https://github.com/oberraies" passHref legacyBehavior>
            <a
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Profil GitHub d'Oussama Berraies"
              className="text-muted-foreground hover:text-beige transition-colors duration-300 ease-in-out"
            >
              <Github className="h-6 w-6" />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
