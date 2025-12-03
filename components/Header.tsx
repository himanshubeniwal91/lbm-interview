"use client";

import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "How it Works?", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
];

export default function Header() {
  return (
    <header className="w-full bg-[#B4D4FB]">
      <div className="mx-auto flex max-w-6xl items-center justify-between py-4 px-4">
      
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="lbm logo" width={180} height={40} className="h-8 w-auto" priority
          />
        </Link>

     
        <nav className="flex items-center gap-8 text-sm text-gray-700">
          {navItems.map((item,index) => (
            <Link
               key={item.href}
      href={item.href}
              className="transition-colors hover:text-black"
            >
            {item.label}
            </Link>
          ))}
        </nav>

     
        <Link
          href="/login"
          className="rounded-full bg-blue-600 px-6 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 transition-colors"
        >
          Login
        </Link>
      </div>

        <div className="mx-auto flex max-w-6xl items-center justify-center px-4 pb-6">
        <div className="inline-flex items-center rounded-md border border-dashed border-blue-400 bg-white/60 px-4 py-2 text-xs font-medium text-gray-700 shadow-sm">
          Marketing Making Bot
        </div>

      </div>
    </header>
  );
}
