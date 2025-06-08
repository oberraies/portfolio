
'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from 'lucide-react';
import type { Locale } from '@/config/i18n';
import { i18n } from '@/config/i18n';
import { cn } from '@/lib/utils';

interface LanguageSwitcherProps {
  currentLocale: Locale;
  selectLanguageLabel: string;
  switchToEnglishLabel: string;
  switchToFrenchLabel: string;
}

const FrenchFlagIcon = ({ className }: { className?: string }) => (
  <svg width="20" height="14" viewBox="0 0 30 20" className={cn("rounded-sm", className)} aria-hidden="true">
    <rect width="10" height="20" fill="#0055A4"/> {/* Blue */}
    <rect x="10" width="10" height="20" fill="#FFFFFF"/> {/* White */}
    <rect x="20" width="10" height="20" fill="#EF4135"/> {/* Red */}
  </svg>
);

const BritishFlagIcon = ({ className }: { className?: string }) => (
  // Simplified Union Jack for small icon purposes
  <svg width="20" height="14" viewBox="0 0 60 30" className={cn("rounded-sm", className)} aria-hidden="true">
    <rect width="60" height="30" fill="#012169"/> {/* Blue field */}
    {/* St Andrew's Saltire (white) */}
    <path d="M0,0L60,30M0,30L60,0" stroke="#FFF" strokeWidth="6"/>
    {/* St Patrick's Saltire (red on St Andrew's) */}
    <path d="M0,0L60,30M0,30L60,0" stroke="#C8102E" strokeWidth="4"/>
    {/* St George's Cross (white fimbriation) */}
    <path d="M30,0V30M0,15H60" stroke="#FFF" strokeWidth="10"/>
    {/* St George's Cross (red) */}
    <path d="M30,0V30M0,15H60" stroke="#C8102E" strokeWidth="6"/>
  </svg>
);


export function LanguageSwitcher({ 
  currentLocale, 
  selectLanguageLabel,
  switchToEnglishLabel,
  switchToFrenchLabel 
}: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();

  const changeLocale = (newLocale: Locale) => {
    if (newLocale === currentLocale) return;

    const newPathname = pathname.startsWith(`/${currentLocale}`)
      ? pathname.substring(`/${currentLocale}`.length) || '/'
      : pathname;
    router.push(`/${newLocale}${newPathname}`);
  };

  const CurrentFlag = currentLocale === 'fr' ? FrenchFlagIcon : BritishFlagIcon;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm" 
          className="p-1.5 h-8 text-foreground hover:bg-buttonCustom hover:text-buttonCustom-foreground focus-visible:ring-1 focus-visible:ring-ring flex items-center gap-1"
          aria-label={selectLanguageLabel}
        >
          <CurrentFlag />
          <ChevronDown className="h-4 w-4 opacity-70" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[120px]">
        {i18n.locales.map((locale) => {
          const Flag = locale === 'fr' ? FrenchFlagIcon : BritishFlagIcon;
          const label = locale === 'fr' ? switchToFrenchLabel : switchToEnglishLabel;
          const langName = locale === 'fr' ? "Français" : "English";
          
          return (
            <DropdownMenuItem
              key={locale}
              onClick={() => changeLocale(locale)}
              disabled={locale === currentLocale}
              className={cn(
                "flex items-center gap-2 cursor-pointer text-popover-foreground", // Base: flex layout, cursor, default text color (white from popover)
                "hover:bg-buttonCustom hover:text-buttonCustom-foreground",      // On hover: green background, dark text
                "focus:bg-buttonCustom focus:text-buttonCustom-foreground"       // On focus: green background, dark text
              )}
              aria-label={label}
            >
              <Flag />
              <span>{langName}</span>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
