import type { LucideIcon } from 'lucide-react';
import { Home, FileText, Briefcase, LayoutGrid, Mail } from 'lucide-react';

export interface NavLink {
  href: string;
  label: string;
  icon: LucideIcon;
}

export const NAV_LINKS: NavLink[] = [
  { href: '/', label: 'Accueil', icon: Home },
  { href: '/cv', label: 'CV', icon: FileText },
  { href: '/projects', label: 'Projets', icon: Briefcase },
  { href: '/templates', label: 'Templates', icon: LayoutGrid },
  { href: '/contact', label: 'Contact', icon: Mail },
];
