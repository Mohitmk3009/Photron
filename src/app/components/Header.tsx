'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import logo from '../assets/logo.png';

function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (pathname === '/') {
      const onScroll = () => {
        setIsScrolled(window.scrollY > 10);
      };
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    }
  }, [pathname]);

  // Classes based on page path
  const baseClass = 'w-full top-0 transition-all duration-300';
  const homePageHeader =
    `fixed z-50 ${isScrolled ? 'bg-black backdrop-blur-md shadow-md' : 'bg-black/60 shadow-none'}`;
  const otherPageHeader = 'bg-black';

  return (
    <header className={`${baseClass} ${pathname === '/' ? homePageHeader : otherPageHeader}`}>
      <div className="w-full mx-auto px-6 py-4 flex justify-between items-center">
        <div>
          <Image
            src={logo}
            alt="Logo"
            width={100}
            height={100}
            className="h-[50px] w-[100px]"
          />
        </div>
        <nav className="space-x-4 text-xl font-semibold">
          <Link href="/" className="text-white hover:text-gray-300">Home</Link>
          <Link href="/about" className="text-white hover:text-gray-300">About</Link>
          <Link href="/contactus" className="text-white hover:text-gray-300">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
