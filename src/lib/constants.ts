
import type { LucideIcon } from 'lucide-react';
import { Home, FileText, Briefcase, LayoutGrid, Mail } from 'lucide-react';

export interface NavLinkConfig {
  basePath: string; // Path without locale, e.g. / or /cv
  key: 'home' | 'cv' | 'projects' | 'templates' | 'contact'; // Key for dictionary lookup
  icon: LucideIcon;
}

export const NAV_LINKS_CONFIG: NavLinkConfig[] = [
  { basePath: '/', key: 'home', icon: Home },
  { basePath: '/cv', key: 'cv', icon: FileText },
  { basePath: '/projects', key: 'projects', icon: Briefcase },
  { basePath: '/templates', key: 'templates', icon: LayoutGrid },
  { basePath: '/contact', key: 'contact', icon: Mail },
];
