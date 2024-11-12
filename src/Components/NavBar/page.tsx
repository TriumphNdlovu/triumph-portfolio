// src/components/NavBar.tsx
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="bg-darkGray text-neonGreen font-pixel p-4 text-center border-b-4 border-neonGreen">
      <Link href="/" className="hover:text-retroPink">🏠 Home</Link> | 
      <Link href="/about" className="hover:text-retroPink">🕹️ About</Link> | 
      <Link href="/projects" className="hover:text-retroPink">🎮 Projects</Link>
    </nav>
  );
}

