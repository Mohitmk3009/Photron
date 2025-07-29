// 'use client';
// import { usePathname } from 'next/navigation';
// import { useEffect, useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import React from 'react';
// import logo from '../assets/logo.png';

// function Header() {
//   const pathname = usePathname();
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     if (pathname === '/') {
//       const onScroll = () => {
//         setIsScrolled(window.scrollY > 10);
//       };
//       window.addEventListener('scroll', onScroll);
//       return () => window.removeEventListener('scroll', onScroll);
//     }
//   }, [pathname]);

//   // Classes based on page path
//   const baseClass = 'w-full top-0 transition-all duration-300';
//   const homePageHeader =
//     `fixed z-50 ${isScrolled ? 'bg-black backdrop-blur-md shadow-md' : 'bg-black/60 shadow-none'}`;
//   const otherPageHeader = 'bg-black';

//   return (
//     <header className={`${baseClass} ${pathname === '/' ? homePageHeader : otherPageHeader}`}>
//       <div className="w-full mx-auto px-6 py-4 flex justify-between items-center">
//         <div>
//           <Image
//             src={logo}
//             alt="Logo"
//             width={100}
//             height={100}
//             className="h-[50px] w-[100px]"
//           />
//         </div>
//         <nav className="space-x-4 text-xl font-semibold">
//           <Link href="/" className="text-white hover:text-gray-300">Home</Link>
//           <Link href="/about" className="text-white hover:text-gray-300">About</Link>
//           <Link href="/contactus" className="text-white hover:text-gray-300">Contact</Link>
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Header;

'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import logo from '../assets/logo.png'; // Make sure this path is correct
// import blackLogo from '../assets/logo-black.png'; // Assuming you have a black logo for the white header background

function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  useEffect(() => {
    if (pathname === '/') {
      const onScroll = () => {
        setIsScrolled(window.scrollY > 10);
      };
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    } else {
      setIsScrolled(true); // Header should be solid black on other pages
    }
  }, [pathname]);

  // Determine header classes based on page path and scroll state
  const baseClass = 'w-full top-0 transition-all duration-300';
  let headerClasses;
  let textColor = 'text-white'; // Default text color for black header
  let currentLogo = logo; // Default logo for black header

  if (pathname === '/') {
    // Home page logic
    if (isScrolled) {
      headerClasses = 'fixed z-50 bg-black backdrop-blur-md shadow-md';
      textColor = 'text-white';
      currentLogo = logo; // Use white logo on black background
    } else {
      headerClasses = ' bg-white shadow-none'; // White header, no shadow initially
      textColor = 'text-gray-800'; // Darker text for white background
      currentLogo = logo; // Use black logo on white background
    }
  } else {
    // Other pages logic
    headerClasses = 'bg-black shadow-md';
    textColor = 'text-white';
    currentLogo = logo; // Use white logo on black background
  }

  const handleServiceClick = (service) => {
    router.push(`/services?service=${encodeURIComponent(service)}`);
    setIsServicesDropdownOpen(false); // Close dropdown after clicking
  };

  return (
    <header className={`${baseClass} ${headerClasses}`}>
      <div className="w-full mx-auto px-6 py-4 flex justify-between items-center">
        <div>
          <Image
            src={currentLogo} // Use dynamic logo based on header state
            alt="Logo"
            width={100}
            height={100}
            className="h-[50px] w-[100px]"
          />
        </div>
        <nav className="space-x-10 text-xl font-semibold flex items-center">
          <Link href="/" className={`${textColor} hover:text-gray-300`}>Home</Link>
          <Link href="/aboutus" className={`${textColor} hover:text-gray-300`}>About</Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsServicesDropdownOpen(true)}
            onMouseLeave={() => setIsServicesDropdownOpen(false)}
          >
            <button className={`${textColor} hover:text-gray-300 focus:outline-none flex items-center`}>
              Services
              <svg
                className={`ml-1 w-4 h-4 transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180' : ''} ${textColor}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {isServicesDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 animate-fade-in-down">
                {/* Dropdown items always use black text on white background */}
                <button
                  onClick={() => handleServiceClick('Water Testing')}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left text-sm"
                >
                  Water Testing
                </button>
                <button
                  onClick={() => handleServiceClick('Environment')}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left text-sm"
                >
                  Environment
                </button>
                <button
                  onClick={() => handleServiceClick('Instrumentation Facilities')}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left text-sm"
                >
                  Instrumentation Facilities
                </button>
                {/* <button
                  onClick={() => handleServiceClick('Project Management')}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left text-base"
                >
                  Project Management
                </button> */}
              </div>
            )}
          </div>

          <Link href="/contactus" className={`${textColor} hover:text-gray-300`}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;