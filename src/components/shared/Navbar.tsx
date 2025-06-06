'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { NAV_LINKS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) {
    return null; // Avoid rendering mobile/desktop mismatch during hydration
  }

  const NavLinks = ({ mobile = false }: { mobile?: boolean }) => (
    NAV_LINKS.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        onClick={() => mobile && setIsMobileMenuOpen(false)}
        className={cn(
          'flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors',
          pathname === link.href
            ? 'bg-primary text-primary-foreground'
            : 'text-foreground hover:bg-buttonCustom hover:text-buttonCustom-foreground',
          mobile && 'text-lg w-full justify-start'
        )}
      >
        <link.icon className="h-5 w-5" />
        {link.label}
      </Link>
    ))
  );

  return (
    <header className="bg-card shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <span className="w-8 h-8 inline-block" />
            <span className="font-headline text-2xl font-bold text-foreground">Oussama Berraies</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-2">
            <NavLinks />
          </nav>

          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs bg-card p-6">
                <div className="flex flex-col space-y-4">
                  <NavLinks mobile />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
