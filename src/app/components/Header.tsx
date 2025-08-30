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

// 'use client';
// import { useEffect, useState, useRef } from 'react'; // Import useRef
// import React from 'react';
// import logo from '../assets/logo.png'; // Placeholder for logo image
// import Image from 'next/image';
// import Link from 'next/link';
// // Replaced Next.js specific imports with standard browser APIs and img tags
// // Removed:
// // import { usePathname, useRouter } from 'next/navigation';
// // import Link from 'next/link';
// // import Image from 'next/image';
// // import logo from '../assets/logo.png';

// function Header() {
//   // Simulate usePathname and useRouter for a generic React environment
//   const getPathname = () => window.location.pathname;
//   const navigateTo = (path) => {
//     window.location.href = path; // Direct navigation for simplicity
//   };

//   const pathname = getPathname();
//   const router = { push: navigateTo }; // Mock router for compatibility

//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
//   const dropdownTimeoutRef = useRef(null); // Use useRef to store the timeout ID

//   useEffect(() => {
//     // Check if the current path is the root
//     if (pathname === '/') {
//       const onScroll = () => {
//         setIsScrolled(window.scrollY > 10);
//       };
//       window.addEventListener('scroll', onScroll);
//       return () => window.removeEventListener('scroll', onScroll);
//     } else {
//       setIsScrolled(true); // Header should be solid black on other pages
//     }
//   }, [pathname]);

//   // Determine header classes based on page path and scroll state
//   const baseClass = 'w-full top-0 transition-all duration-300';
//   let headerClasses;
//   let textColor = 'text-white'; // Default text color for black header
//   // Use placeholder images for logos since local imports are not supported
//   // let currentLogoSrc ;

//   if (pathname === '/') {
//     // Home page logic
//     if (isScrolled) {
//       headerClasses = 'fixed z-50 bg-black backdrop-blur-md shadow-md';
//       textColor = 'text-white';

//     } else {
//       headerClasses = ' bg-white shadow-none'; // White header, no shadow initially
//       textColor = 'text-gray-800'; // Darker text for white background

//     }
//   } else {
//     // Other pages logic
//     headerClasses = 'bg-black shadow-md';
//     textColor = 'text-white';

//   }

//   // Handle mouse entering the services dropdown area
//   const handleMouseEnter = () => {
//     if (dropdownTimeoutRef.current) {
//       clearTimeout(dropdownTimeoutRef.current); // Clear any pending close timeout
//       dropdownTimeoutRef.current = null;
//     }
//     setIsServicesDropdownOpen(true);
//   };

//   // Handle mouse leaving the services dropdown area
//   const handleMouseLeave = () => {
//     // Set a timeout to close the dropdown after a short delay
//     dropdownTimeoutRef.current = setTimeout(() => {
//       setIsServicesDropdownOpen(false);
//     }, 200); // 200ms delay, adjust as needed
//   };

//   const handleServiceClick = (service) => {
//     router.push(`/services?service=${encodeURIComponent(service)}`);
//     setIsServicesDropdownOpen(false); // Close dropdown after clicking
//     if (dropdownTimeoutRef.current) {
//       clearTimeout(dropdownTimeoutRef.current); // Clear timeout if an option is clicked
//       dropdownTimeoutRef.current = null;
//     }
//   };

//   return (
//     <header className={`${baseClass} ${headerClasses}`}>
//       <div className="w-full mx-auto px-6 py-4 flex justify-between items-center">
//         <div>
//           {/* Replaced Next.js Image component with standard img tag */}
//           <Image
//             src={logo} // Use dynamic logo source based on header state
//             alt="Logo"
//             className="h-[50px] w-[100px]"
//           />
//         </div>
//         <nav className="space-x-10 text-xl font-semibold flex items-center">
//           {/* Replaced Next.js Link component with standard a tag */}
//           <Link href="/" className={`${textColor} hover:text-gray-300`}>Home</Link>
//           <Link href="/aboutus" className={`${textColor} hover:text-gray-300`}>About</Link>

//           {/* Services Dropdown */}
//           <div
//             className="relative"
//             onMouseEnter={handleMouseEnter} // Use the new handler
//             onMouseLeave={handleMouseLeave} // Use the new handler
//           >
//             <button className={`${textColor} hover:text-gray-300 focus:outline-none flex items-center`}>
//               Services
//               <svg
//                 className={`ml-1 w-4 h-4 transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180' : ''} ${textColor}`}
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//               </svg>
//             </button>
//             {isServicesDropdownOpen && (
//               <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 animate-fade-in-down">
//                 {/* Dropdown items always use black text on white background */}
//                 <button
//                   onClick={() => handleServiceClick('Water Testing')}
//                   className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left text-sm"
//                 >
//                   Water Testing
//                 </button>
//                 <button
//                   onClick={() => handleServiceClick('Environment')}
//                   className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left text-sm"
//                 >
//                   Environment
//                 </button>
//                 <button
//                   onClick={() => handleServiceClick('Pollution Control')}
//                   className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left text-sm"
//                 >
//                   Pollution Control
//                 </button>
//                 <button
//                   onClick={() => handleServiceClick('Instrumentation Facilities')}
//                   className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left text-sm"
//                 >
//                   Instrumentation Facilities
//                 </button>
//               </div>
//             )}
//           </div>

//           <Link href="/contactus" className={`${textColor} hover:text-gray-300`}>Contact</Link>
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Header;

'use client';
import { useEffect, useState, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import logo from '../assets/logo.png';

function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // mobile menu state
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (pathname === '/') {
        const onScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
      } else {
        setIsScrolled(true);
      }
    }
  }, [pathname]);

  const baseClass = 'w-full top-0 transition-all duration-300';
  let headerClasses;
  let textColor = 'text-white';

  if (pathname === '/') {
    if (isScrolled) {
      headerClasses = 'fixed z-50 bg-black backdrop-blur-md shadow-md';
      textColor = 'text-white';
    } else {
      headerClasses = 'bg-white shadow-none';
      textColor = 'text-gray-800';
    }
  } else {
    headerClasses = 'bg-black shadow-md';
    textColor = 'text-white';
  }

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setIsServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsServicesDropdownOpen(false);
    }, 200);
  };

  const handleServiceClick = (service: string) => {
    router.push(`/services?service=${encodeURIComponent(service)}`);
    setIsServicesDropdownOpen(false);
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`${baseClass} ${headerClasses} sticky top-0 z-50`}>
      <div className="w-full mx-auto lg:px-6 lg:py-4 px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-4">
          <Image
            src={logo}
            alt="Logo"
            width={100}
            height={50}
            className="lg:h-[50px] lg:w-[100px] h-[40px] w-[80px]"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-10 text-lg font-semibold items-center">
          <Link href="/" className={`${textColor} hover:text-[#035096]`}>Home</Link>
          <Link href="/aboutus" className={`${textColor} hover:text-[#035096]`}>About</Link>

          {/* Services Dropdown (desktop) */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className={`${textColor} hover:text-[#035096] flex items-center`}>
              Services
              <svg
                className={`ml-1 w-4 h-4 transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180' : ''} ${textColor}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {/* {isServicesDropdownOpen && (
              <div className="absolute ml-[-100px] left-0 mt-2 w-80 bg-white rounded-md shadow-lg p-1 z-10 animate-fade-in-down columns-2 ">
                <div>
                  <button onClick={() => handleServiceClick('Water Testing')} className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left text-sm">Water Testing</button>
                  <ul className="list-disc list-inside space-y-1 text-xs text-gray-700 mt-1">
                    <li>RO Water</li>
                    <li>Swimming Pool Water</li>
                    <li>Packaged Water</li>
                    <li>Drinking Water</li>
                    <li>Ground Water</li>
                    <li>Surface Water</li>
                    <li>Mineral Water</li>
                    <li>Waste Water</li>
                    <li>Industrial Water</li>
                    <li>Rain Water</li>
                    <li>Bore Well Water</li>
                    <li>Aquarium Water</li>
                  </ul>
                </div>
                <div>
                  <button onClick={() => handleServiceClick('Environment')} className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left text-sm">Environment</button>
                  <ul className="list-disc list-inside mt-1 text-xs space-y-1 text-gray-700">
                    <li>Air Quality Check</li>
                    <li>Treated Water Testing</li>
                    <li>Waste Water Testing</li>
                    <li>Sludge Testing</li>
                    <li>Soil Testing</li>
                    <li>Water Analysis</li>
                  </ul>
                </div>
                <div>
                  <button onClick={() => handleServiceClick('Pollution Control')} className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left text-sm">Pollution Control</button>
                  <ul className="list-disc list-inside mt-1 text-xs space-y-1 text-gray-700">
                    <li>Air Pollution Testing</li>
                    <li>Water Pollution Testing</li>
                    <li>Soil Pollution Testing</li>
                    <li>Noise Pollution Testing</li>
                    <li>Radiation Pollution Testing</li>
                  </ul>
                </div>
                <div>
                  <button onClick={() => handleServiceClick('Instrumentation Facilities')} className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left text-sm">Instrumentation Facilities</button>
                  <ul className="list-disc list-inside mt-1 text-xs space-y-1 text-gray-700">
                    <li>ATOMIC ABSORPTION SPECTROPHOTOMETER</li>
                    <li>UV VISIBLE SPECTROPHOTOMETER</li>
                    <li>FLAME PHOTOMETER</li>
                    <li>pH METER</li>
                    <li>CONDUCTIVITY METER</li>
                    <li>RESPIRABLE DUST SAMPLER</li>
                    <li>FINE DUST SAMPLER</li>
                    <li>STACK EMISSION KIT</li>
                    <li>GAS CHROMATOGRAPHY</li>
                    <li>HANDY SAMPLER</li>
                    <li>DATA LOGGER WITH NOISE MONITORING</li>
                    <li>AUTOMATIC WEATHER STATION</li>
                    <li>COD & BOD</li>
                    <li>WATER BATH</li>
                  </ul>
                </div>
              </div>
            )} */}
            {isServicesDropdownOpen && (
              <div className="absolute left-0 -translate-x-1/2 mt-8 ml-[-310px] w-[1040px] bg-white rounded-md shadow-lg z-10 animate-fade-in-down">
                <div className="max-w-fit  p-5">
                  <div className="grid grid-cols-4 gap-x-10 gap-y-6">
                    {/* Column 1: Water Testing */}
                    <div className="space-y-2">
                      <button onClick={() => handleServiceClick('Water Testing')} className="font-semibold text-gray-800 bg-gray-100 px-4 py-2 rounded-md w-full text-left text-sm hover:bg-gray-200">Water Testing</button>
                      <ul className="space-y-2 text-xs ml-2 text-gray-600">
                        <li className="hover:text-blue-600">RO Water</li>
                        <li className="hover:text-blue-600">Swimming Pool Water</li>
                        <li className="hover:text-blue-600">Packaged Water</li>
                        <li className="hover:text-blue-600">Drinking Water</li>
                        <li className="hover:text-blue-600">Ground Water</li>
                        <li className="hover:text-blue-600">Surface Water</li>
                        <li className="hover:text-blue-600">Mineral Water</li>
                        <li className="hover:text-blue-600">Waste Water</li>
                        <li className="hover:text-blue-600">Industrial Water</li>
                        <li className="hover:text-blue-600">Rain Water</li>
                        <li className="hover:text-blue-600">Bore Well Water</li>
                        <li className="hover:text-blue-600">Aquarium Water</li>
                      </ul>
                    </div>

                    {/* Column 2: Environment & Pollution */}
                    <div className="space-y-2">
                      <button onClick={() => handleServiceClick('Environment')} className="font-semibold text-gray-800 bg-gray-100 px-4 py-2 rounded-md w-full text-left text-sm hover:bg-gray-200">Environment</button>
                      <ul className="space-y-2 text-xs ml-2 text-gray-600">
                        <li className="hover:text-blue-600">Air Quality Check</li>
                        <li className="hover:text-blue-600">Treated Water Testing</li>
                        <li className="hover:text-blue-600">Waste Water Testing</li>
                        <li className="hover:text-blue-600">Sludge Testing</li>
                        <li className="hover:text-blue-600">Soil Testing</li>
                        <li className="hover:text-blue-600">Water Analysis</li>
                      </ul>
                      <button onClick={() => handleServiceClick('Pollution Control')} className="font-semibold text-gray-800 bg-gray-100 px-4 py-2 rounded-md w-full text-left text-sm hover:bg-gray-200 mt-4">Pollution Control</button>
                      <ul className="space-y-2 text-xs ml-2 text-gray-600">
                        <li className="hover:text-blue-600">Air Pollution Testing</li>
                        <li className="hover:text-blue-600">Water Pollution Testing</li>
                        <li className="hover:text-blue-600">Soil Pollution Testing</li>
                        <li className="hover:text-blue-600">Noise Pollution Testing</li>
                        <li className="hover:text-blue-600">Radiation Pollution Testing</li>
                      </ul>
                    </div>

                    {/* Column 3: Instrumentation */}
                    <div className="space-y-2">
                      <button onClick={() => handleServiceClick('Instrumentation Facilities')} className="font-semibold text-gray-800 bg-gray-100 px-4 py-2 rounded-md w-full text-left text-sm hover:bg-gray-200">Instrumentation Facilities</button>
                      <ul className="space-y-2 text-xs ml-2 text-gray-600">
                        <li className="hover:text-blue-600 whitespace-nowrap">Atomic Absorption Spectrophotometer</li>
                        <li className="hover:text-blue-600">UV Visible Spectrophotometer</li>
                        <li className="hover:text-blue-600">Flame Photometer</li>
                        <li className="hover:text-blue-600">pH Meter</li>
                        <li className="hover:text-blue-600">Conductivity Meter</li>
                        <li className="hover:text-blue-600">Respirable Dust Sampler</li>
                        <li className="hover:text-blue-600">Fine Dust Sampler</li>
                        <li className="hover:text-blue-600">Stack Emission Kit</li>
                        <li className="hover:text-blue-600">Gas Chromatography</li>
                        <li className="hover:text-blue-600">Handy Sampler</li>
                        <li className="hover:text-blue-600">Data Logger With Noise Monitoring</li>
                        <li className="hover:text-blue-600">Automatic Weather Station</li>
                        <li className="hover:text-blue-600">COD & BOD</li>
                        <li className="hover:text-blue-600">Water Bath</li>
                      </ul>
                    </div>

                    {/* Column 4: Other Categories */}
                    <div className="space-y-2">
                      <button onClick={() => handleServiceClick('Instrumentation Facilities')} className="font-semibold text-gray-800 bg-gray-100 px-4 py-2 rounded-md w-full text-left text-sm hover:bg-gray-200">Solid waste management</button>
                      <ul className="space-y-2 text-xs ml-2 text-gray-600">
                        <li className="hover:text-blue-600 whitespace-nowrap">Municipal Solid Waste</li>
                        <li className="hover:text-blue-600">Bio Mask</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/contactus" className={`${textColor} hover:text-[#035096]`}>Contact</Link>
        </nav>

        {/* Hamburger Icon */}
        <button
          className="md:hidden flex flex-col space-y-1.5 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span
            className={`block h-0.5 w-6 bg-current transform transition duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''} ${textColor}`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition duration-300 ${isMenuOpen ? 'opacity-0' : ''} ${textColor}`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transform transition duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''} ${textColor}`}
          />
        </button>
      </div>

      {/* Mobile Menu with Slide Animation */}
      <div
        className={`md:hidden bg-black text-white overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="px-6 py-4 space-y-4">
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="block hover:text-[#035096]">Home</Link>
          <Link href="/aboutus" onClick={() => setIsMenuOpen(false)} className="block hover:text-[#035096]">About</Link>

          {/* Services Dropdown for Mobile */}
          <div className="">
            <button
              onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
              className="flex justify-between items-center w-full hover:text-[#035096]"
            >
              <span >Services</span>
              <svg
                className={`ml-1 w-4 h-4  transform transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180' : ''
                  }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div
              className={`pl-4 mt-2  space-y-2 text-sm overflow-hidden transition-all duration-500 ${isServicesDropdownOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
              <button onClick={() => handleServiceClick('Water Testing')} className="block w-full text-left hover:text-[#035096]">Water Testing</button>

              <button onClick={() => handleServiceClick('Environment')} className="block w-full text-left hover:text-[#035096]">Environment</button>
              <button onClick={() => handleServiceClick('Pollution Control')} className="block w-full text-left hover:text-[#035096]">Pollution Control</button>
              <button onClick={() => handleServiceClick('Instrumentation Facilities')} className="block w-full text-left hover:text-[#035096]">Instrumentation Facilities</button>
            </div>
          </div>

          <Link href="/contactus" onClick={() => setIsMenuOpen(false)} className="block hover:text-[#035096] mt-[-5px]">Contact</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;



// 'use client';
// import { useEffect, useState, useRef } from 'react';
// import { usePathname, useRouter } from 'next/navigation';
// import Link from 'next/link';
// import Image from 'next/image';
// import React from 'react';
// import logo from '../assets/logo.png';

// function Header() {
//   const pathname = usePathname();
//   const router = useRouter();

//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // mobile menu state
//   const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       if (pathname === '/') {
//         const onScroll = () => setIsScrolled(window.scrollY > 10);
//         window.addEventListener('scroll', onScroll);
//         return () => window.removeEventListener('scroll', onScroll);
//       } else {
//         setIsScrolled(true);
//       }
//     }
//   }, [pathname]);

//   const baseClass = 'w-full top-0 transition-all duration-300';
//   let headerClasses;
//   let textColor = 'text-white';

//   if (pathname === '/') {
//     if (isScrolled) {
//       headerClasses = 'fixed z-50 bg-black backdrop-blur-md shadow-md';
//       textColor = 'text-white';
//     } else {
//       headerClasses = 'bg-white shadow-none';
//       textColor = 'text-gray-800';
//     }
//   } else {
//     headerClasses = 'bg-black shadow-md';
//     textColor = 'text-white';
//   }

//   const handleMouseEnter = () => {
//     if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
//     setIsServicesDropdownOpen(true);
//   };

//   const handleMouseLeave = () => {
//     dropdownTimeoutRef.current = setTimeout(() => {
//       setIsServicesDropdownOpen(false);
//     }, 200);
//   };

//   const handleServiceClick = (service: string) => {
//     router.push(`/services?service=${encodeURIComponent(service)}`);
//     setIsServicesDropdownOpen(false);
//     if (dropdownTimeoutRef.current) {
//       clearTimeout(dropdownTimeoutRef.current);
//       dropdownTimeoutRef.current = null;
//     }
//     setIsMenuOpen(false);
//   };

//   return (
//     <header className={`${baseClass} ${headerClasses} sticky top-0 z-50`}>
//       <div className="w-full mx-auto lg:px-6 lg:py-4 px-4 py-2 flex justify-between items-center">
//         {/* Logo */}
//         <div className="flex items-center space-x-4">
//           <Image
//             src={logo}
//             alt="Logo"
//             width={100}
//             height={50}
//             className="lg:h-[50px] lg:w-[100px] h-[40px] w-[80px]"
//           />
//         </div>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex space-x-10 text-lg font-semibold items-center">
//           <Link href="/" className={`${textColor} hover:text-[#035096]`}>Home</Link>
//           <Link href="/aboutus" className={`${textColor} hover:text-[#035096]`}>About</Link>

//           {/* Services Dropdown (desktop) */}
//           <div
//             className="relative"
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           >
//             <button className={`${textColor} hover:text-[#035096] flex items-center`}>
//               Services
//               <svg
//                 className={`ml-1 w-4 h-4 transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180' : ''} ${textColor}`}
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//               </svg>
//             </button>
//             {isServicesDropdownOpen && (
//               <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-screen bg-white rounded-md shadow-lg z-10 animate-fade-in-down">
//                 <div className="max-w-7xl mx-auto p-6">
//                     <div className="grid grid-cols-4 gap-x-12 gap-y-6">
//                       {/* Column 1: Water Testing */}
//                       <div className="space-y-2">
//                         <button onClick={() => handleServiceClick('Water Testing')} className="font-semibold text-gray-800 bg-gray-100 px-4 py-2 rounded-md w-full text-left text-sm hover:bg-gray-200">Water Testing</button>
//                         <ul className="space-y-1 text-xs text-gray-600">
//                           <li><a href="#" onClick={(e) => { e.preventDefault(); handleServiceClick('RO Water'); }} className="hover:text-blue-600">RO Water</a></li>
//                           <li><a href="#" onClick={(e) => { e.preventDefault(); handleServiceClick('Swimming Pool Water'); }} className="hover:text-blue-600">Swimming Pool Water</a></li>
//                           <li><a href="#" onClick={(e) => { e.preventDefault(); handleServiceClick('Packaged Water'); }} className="hover:text-blue-600">Packaged Water</a></li>
//                           <li><a href="#" onClick={(e) => { e.preventDefault(); handleServiceClick('Drinking Water'); }} className="hover:text-blue-600">Drinking Water</a></li>
//                           <li><a href="#" onClick={(e) => { e.preventDefault(); handleServiceClick('Ground Water'); }} className="hover:text-blue-600">Ground Water</a></li>
//                           <li><a href="#" onClick={(e) => { e.preventDefault(); handleServiceClick('Surface Water'); }} className="hover:text-blue-600">Surface Water</a></li>
//                           <li><a href="#" onClick={(e) => { e.preventDefault(); handleServiceClick('Mineral Water'); }} className="hover:text-blue-600">Mineral Water</a></li>
//                           <li><a href="#" onClick={(e) => { e.preventDefault(); handleServiceClick('Waste Water'); }} className="hover:text-blue-600">Waste Water</a></li>
//                           <li><a href="#" onClick={(e) => { e.preventDefault(); handleServiceClick('Industrial Water'); }} className="hover:text-blue-600">Industrial Water</a></li>
//                           <li><a href="#" onClick={(e) => { e.preventDefault(); handleServiceClick('Rain Water'); }} className="hover:text-blue-600">Rain Water</a></li>
//                           <li><a href="#" onClick={(e) => { e.preventDefault(); handleServiceClick('Bore Well Water'); }} className="hover:text-blue-600">Bore Well Water</a></li>
//                           <li><a href="#" onClick={(e) => { e.preventDefault(); handleServiceClick('Aquarium Water'); }} className="hover:text-blue-600">Aquarium Water</a></li>
//                         </ul>
//                       </div>

//                       {/* Column 2: Environment & Pollution */}
//                       <div className="space-y-2">
//                         <button onClick={() => handleServiceClick('Environment')} className="font-semibold text-gray-800 bg-gray-100 px-4 py-2 rounded-md w-full text-left text-sm hover:bg-gray-200">Environment</button>
//                         <ul className="space-y-1 text-xs text-gray-600">
//                           <li><a href="#" onClick={(e) => { e.preventDefault(); handleServiceClick('Air Quality Check'); }} className="hover:text-blue-600">Air Quality Check</a></li>
//                           <li><a href="#" onClick={(e) => { e.preventDefault(); handleServiceClick('Treated Water Testing'); }} className="hover:text-blue-600">Treated Water Testing</a></li>
//                           <li><a href="#" onClick={(e) => { e.preventDefault(); handleServiceClick('Waste Water Testing'); }} className="hover:text-blue-600">Waste Water Testing</a></li>
//                           <li><a href="#" onClick={(e) => { e.preventDefault(); handleServiceClick('Sludge Testing'); }} className="hover:text-blue-600">Sludge Testing</a></li>
//                           <li><a href="#" onClick={(e) => { e.preventDefault(); handleServiceClick('Soil Testing'); }} className="hover:text-blue-600">Soil Testing</a></li>
//                           <li><a href="#" onClick={(e) => { e.preventDefault(); handleServiceClick('Water Analysis'); }} className="hover:text-blue-600">Water Analysis</a></li>
//                         </ul>
//                         <button onClick={() => handleServiceClick('Pollution Control')} className="font-semibold text-gray-800 bg-gray-100 px-4 py-2 rounded-md w-full text-left text-sm hover:bg-gray-200 mt-4">Pollution Control</button>
//                          <ul className="space-y-1 text-xs text-gray-600">
//                           <li><a href="#" onClick={(e) => { e.preventDefault(); handleServiceClick('Air Pollution Testing'); }} className="hover:text-blue-600">Air Pollution Testing</a></li>
//                           <li><a href="#" onClick={(e) => { e.preventDefault(); handleServiceClick('Water Pollution Testing'); }} className="hover:text-blue-600">Water Pollution Testing</a></li>
//                           <li><a href="#" onClick={(e) => { e.preventDefault(); handleServiceClick('Soil Pollution Testing'); }} className="hover:text-blue-600">Soil Pollution Testing</a></li>
//                           <li><a href="#" onClick={(e) => { e.preventDefault(); handleServiceClick('Noise Pollution Testing'); }} className="hover:text-blue-600">Noise Pollution Testing</a></li>
//                           <li><a href="#" onClick={(e) => { e.preventDefault(); handleServiceClick('Radiation Pollution Testing'); }} className="hover:text-blue-600">Radiation Pollution Testing</a></li>
//                         </ul>
//                       </div>

//                       {/* Column 3: Instrumentation */}
//                       <div className="space-y-2">
//                         <button onClick={() => handleServiceClick('Instrumentation Facilities')} className="font-semibold text-gray-800 bg-gray-100 px-4 py-2 rounded-md w-full text-left text-sm hover:bg-gray-200">Instrumentation Facilities</button>
//                         <ul className="space-y-1 text-xs text-gray-600">
//                           <li><a href="#" className="hover:text-blue-600">ATOMIC ABSORPTION SPECTROPHOTOMETER</a></li>
//                           <li><a href="#" className="hover:text-blue-600">UV VISIBLE SPECTROPHOTOMETER</a></li>
//                           <li><a href="#" className="hover:text-blue-600">FLAME PHOTOMETER</a></li>
//                           <li><a href="#" className="hover:text-blue-600">pH METER</a></li>
//                           <li><a href="#" className="hover:text-blue-600">CONDUCTIVITY METER</a></li>
//                           <li><a href="#" className="hover:text-blue-600">RESPIRABLE DUST SAMPLER</a></li>
//                           <li><a href="#" className="hover:text-blue-600">FINE DUST SAMPLER</a></li>
//                           <li><a href="#" className="hover:text-blue-600">STACK EMISSION KIT</a></li>
//                           <li><a href="#" className="hover:text-blue-600">GAS CHROMATOGRAPHY</a></li>
//                           <li><a href="#" className="hover:text-blue-600">HANDY SAMPLER</a></li>
//                           <li><a href="#" className="hover:text-blue-600">DATA LOGGER WITH NOISE MONITORING</a></li>
//                           <li><a href="#" className="hover:text-blue-600">AUTOMATIC WEATHER STATION</a></li>
//                           <li><a href="#" className="hover:text-blue-600">COD & BOD</a></li>
//                           <li><a href="#" className="hover:text-blue-600">WATER BATH</a></li>
//                         </ul>
//                       </div>

//                       {/* Column 4: Other Categories */}
//                       <div className="space-y-2">
//                          <button onClick={() => handleServiceClick('Food & Agri')} className="font-semibold text-gray-800 bg-gray-100 px-4 py-2 rounded-md w-full text-left text-sm hover:bg-gray-200">Food & Agricultural</button>
//                          <button onClick={() => handleServiceClick('EMC Compliance')} className="font-semibold text-gray-800 bg-gray-100 px-4 py-2 rounded-md w-full text-left text-sm hover:bg-gray-200 mt-4">EMC Compliances</button>
//                          <button onClick={() => handleServiceClick('Toys & Sports')} className="font-semibold text-gray-800 bg-gray-100 px-4 py-2 rounded-md w-full text-left text-sm hover:bg-gray-200 mt-4">Toys & Sports</button>
//                       </div>
//                     </div>
//                 </div>
//               </div>
//             )}
//           </div>

//           <Link href="/contactus" className={`${textColor} hover:text-[#035096]`}>Contact</Link>
//         </nav>

//         {/* Hamburger Icon */}
//         <button
//           className="md:hidden flex flex-col space-y-1.5 focus:outline-none"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           <span
//             className={`block h-0.5 w-6 bg-current transform transition duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''} ${textColor}`}
//           />
//           <span
//             className={`block h-0.5 w-6 bg-current transition duration-300 ${isMenuOpen ? 'opacity-0' : ''} ${textColor}`}
//           />
//           <span
//             className={`block h-0.5 w-6 bg-current transform transition duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''} ${textColor}`}
//           />
//         </button>
//       </div>

//       {/* Mobile Menu with Slide Animation */}
//       <div
//         className={`md:hidden bg-black text-white overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
//           }`}
//       >
//         <div className="px-6 py-4 space-y-4">
//           <Link href="/" onClick={() => setIsMenuOpen(false)} className="block hover:text-[#035096]">Home</Link>
//           <Link href="/aboutus" onClick={() => setIsMenuOpen(false)} className="block hover:text-[#035096]">About</Link>

//           {/* Services Dropdown for Mobile */}
//           <div className="">
//             <button
//               onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
//               className="flex justify-between items-center w-full hover:text-[#035096]"
//             >
//               <span >Services</span>
//               <svg
//                 className={`ml-1 w-4 h-4  transform transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180' : ''
//                   }`}
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//             	>
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//               </svg>
//             </button>
//             <div
//               className={`pl-4 mt-2  space-y-2 text-sm overflow-hidden transition-all duration-500 ${isServicesDropdownOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
//                 }`}
//             >
//               <button onClick={() => handleServiceClick('Water Testing')} className="block w-full text-left hover:text-[#035096]">Water Testing</button>

//               <button onClick={() => handleServiceClick('Environment')} className="block w-full text-left hover:text-[#035096]">Environment</button>
//               <button onClick={() => handleServiceClick('Pollution Control')} className="block w-full text-left hover:text-[#035096]">Pollution Control</button>
//               <button onClick={() => handleServiceClick('Instrumentation Facilities')} className="block w-full text-left hover:text-[#035096]">Instrumentation Facilities</button>
//             </div>
//           </div>

//           <Link href="/contactus" onClick={() => setIsMenuOpen(false)} className="block hover:text-[#035096] mt-[-5px]">Contact</Link>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;
