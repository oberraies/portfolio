
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { NAV_LINKS_CONFIG } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import type { Locale } from '@/config/i18n';
import { LanguageSwitcher } from './LanguageSwitcher';
import type { NavLinkDictionaryItem, NavbarDictionaryItems } from '@/dictionaries/fr'; // Use fr as base for types

interface NavbarProps {
  navLinksLabels: { [key: string]: NavLinkDictionaryItem } | undefined;
  navbarLabels: NavbarDictionaryItems | undefined;
  currentLocale: Locale;
  defaultLocale: Locale;
}

export function Navbar({ 
  navLinksLabels: navLinksLabelsFromProps, 
  navbarLabels: navbarLabelsFromProps,
  currentLocale,
  defaultLocale 
}: NavbarProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Provide default values if props are undefined
  const navLinksLabels = navLinksLabelsFromProps || {};
  const labels = navbarLabelsFromProps || {
    logoAlt: 'Oussama Berraies Logo',
    switchToEnglish: 'Switch to English',
    switchToFrench: 'Switch to French',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    selectLanguage: 'Select language', // Default added
  };
  
  const navLinks = NAV_LINKS_CONFIG.map(linkConfig => ({
    ...linkConfig,
    label: navLinksLabels[linkConfig.key]?.label || linkConfig.key.charAt(0).toUpperCase() + linkConfig.key.slice(1),
    href: `/${currentLocale}${linkConfig.basePath === '/' ? '' : linkConfig.basePath}`,
  }));

  const NavLinksComponent = ({ mobile = false }: { mobile?: boolean }) => (
    navLinks.map((link) => {
      const isActive = link.basePath === '/' 
        ? pathname === `/${currentLocale}` || pathname === `/${currentLocale}/`
        : pathname.startsWith(link.href);
      
      return (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => mobile && setIsMobileMenuOpen(false)}
          className={cn(
            'flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors',
            isActive
              ? 'bg-primary text-primary-foreground'
              : 'text-foreground hover:bg-buttonCustom hover:text-buttonCustom-foreground',
            mobile && 'text-lg w-full justify-start'
          )}
        >
          <link.icon className="h-5 w-5" />
          {link.label}
        </Link>
      );
    })
  );

  return (
    <header className="bg-card shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href={`/${currentLocale || defaultLocale}`} className="flex items-center" aria-label={labels.logoAlt}>
            <span className="font-headline text-2xl font-bold text-foreground">Oussama Berraies</span>
          </Link>
          
          <div className="flex items-center space-x-1">
            <nav className="hidden md:flex items-center space-x-2">
              <NavLinksComponent />
            </nav>

            <LanguageSwitcher 
              currentLocale={currentLocale}
              selectLanguageLabel={labels.selectLanguage}
              switchToEnglishLabel={labels.switchToEnglish}
              switchToFrenchLabel={labels.switchToFrench}
            />

            <div className="md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label={labels.openMenu}>
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full max-w-xs bg-card p-6">
                  <div className="flex flex-col space-y-4">
                    <NavLinksComponent mobile />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
