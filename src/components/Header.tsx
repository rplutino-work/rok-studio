import Link from "next/link";
import { MoveRight } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full glass border-b border-border-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo-rok-nuevo.png" alt="ROK Logo" className="w-10 h-10 object-contain" />
            <span 
              className="text-primary text-3xl font-bold tracking-tighter" 
              style={{ fontFamily: "'Barrio', cursive" }}
            >
              ROK.
            </span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="#services" className="text-text-muted hover:text-primary transition-colors text-sm font-medium">Services</Link>
            <Link href="#work" className="text-text-muted hover:text-primary transition-colors text-sm font-medium">Work</Link>
            <Link href="#about" className="text-text-muted hover:text-primary transition-colors text-sm font-medium">About</Link>
            <Link href="#blog" className="text-text-muted hover:text-primary transition-colors text-sm font-medium">Blog</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#project-builder" className="group flex items-center gap-2 rounded-full border border-primary text-primary px-5 py-2.5 text-sm font-medium transition-all hover:bg-primary hover:text-white">
              Start a Project
              <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
