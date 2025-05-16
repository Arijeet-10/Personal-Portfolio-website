
import { CodeXml } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-secondary text-secondary-foreground py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center items-center mb-2">
          <CodeXml className="h-6 w-6 mr-2 text-primary" />
          <span className="font-semibold">PersonaFlow</span>
        </div>
        <p className="text-sm">
          &copy; {currentYear} PersonaFlow. All rights reserved.
        </p>
        <p className="text-xs mt-1">
          Designed with passion.
        </p>
      </div>
    </footer>
  );
}
