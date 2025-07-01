'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <Image src="/logo.png" alt="Dyfusion Logo" width={140} height={40} />
          <p className="text-sm">
          A user-friendly, scalable blockchain built for creatives, backed by an appreciating asset that rewards its holders.
          </p>
        </div>

        {/* Links */}
        <div>
          <h5 className="text-white font-semibold mb-3">Product</h5>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/" className="hover:text-white">Features</Link></li>
            <li><Link href="/" className="hover:text-white">Gallery</Link></li>
            <li><Link href="/" className="hover:text-white">Pricing</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h5 className="text-white font-semibold mb-3">Resources</h5>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white">Docs</Link></li>
            <li><Link href="/" className="hover:text-white">Blog</Link></li>
            <li><Link href="/" className="hover:text-white">Help Center</Link></li>
            <li><Link href="/" className="hover:text-white">Status</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h5 className="text-white font-semibold mb-3">Connect</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="https://twitter.com" target="_blank" className="hover:text-white">Twitter</a></li>
            <li><a href="https://discord.com" target="_blank" className="hover:text-white">Discord</a></li>
            <li><a href="https://linkedin.com" target="_blank" className="hover:text-white">LinkedIn</a></li>
            <li><a href="mailto:support@" className="hover:text-white">Email Us</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} DyFusion. All rights reserved.
      </div>
    </footer>
  );
}
