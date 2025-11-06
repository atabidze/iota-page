"use client";
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">IOTA</Link>
        <ul className="flex space-x-6">
          <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
          {/* აქ არის ცვლილება: href="/services" */}
          <li><Link href="/services" className="hover:text-gray-300">Services</Link></li>
          <li><Link href="#contact" className="hover:text-gray-300">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}