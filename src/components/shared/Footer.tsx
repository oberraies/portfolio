import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Portfolio Pro. Tous droits réservés.
        </p>
        <p className={cn("text-xs mt-1", "font-body")}>
          Construit avec <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Next.js</a> et <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Tailwind CSS</a>.
        </p>
      </div>
    </footer>
  );
}
