'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.png" alt="dyfusion Logo" width={120} height={40} />
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-6 text-sm">
          <Link href="#" className="hover:text-yellow-400 transition">Product</Link>
          <Link href="#" className="hover:text-yellow-400 transition">Pricing</Link>
          <Link href="#" className="hover:text-yellow-400 transition">Gallery</Link>
          <Link href="#" className="hover:text-yellow-400 transition">Blog</Link>
          <Link href="#" className="hover:text-yellow-400 transition">Contact</Link>
        </nav>

        {/* Buttons */}
        <div className="flex space-x-3">
          <button className="text-sm bg-yellow-400 text-black px-4 py-1 rounded hover:bg-yellow-300 transition">
            Launch App
          </button>
        </div>
      </div>
    </header>
  );
}
