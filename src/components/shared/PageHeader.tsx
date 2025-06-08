
import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode; // To allow adding buttons like "Download CV"
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, description, className, children }) => {
  return (
    <div className={cn("py-8 md:py-12 lg:py-16 text-center border-b mb-8 md:mb-12", className)}>
      <h1 className={cn("text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary", "font-headline")}>{title}</h1>
      {description && <p className={cn("mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto", "font-body")}>{description}</p>}
      {children && <div className="mt-6">{children}</div>}
    </div>
  );
};
