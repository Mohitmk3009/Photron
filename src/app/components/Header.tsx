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
import { usePathname, useRouter } from 'next/navigation'; // Re-import usePathname and useRouter
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import logo from '../assets/logo.png'; // Assuming logo is correctly located and imported

function Header() {
  // Use Next.js hooks for pathname and router, which are safe for client components
  const pathname = usePathname();
  const router = useRouter();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // This effect runs only on the client-side after component mounts.
    // Therefore, it's safe to access `window` here.
    if (typeof window !== 'undefined') { // Defensive check for SSR safety
      if (pathname === '/') {
        const onScroll = () => {
          setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', onScroll);
        // Clean up the event listener when the component unmounts or pathname changes
        return () => window.removeEventListener('scroll', onScroll);
      } else {
        // For other pages, ensure the header is always solid black (scrolled state)
        setIsScrolled(true);
      }
    }
  }, [pathname]); // Re-run effect if pathname changes

  // Determine header classes based on page path and scroll state
  const baseClass = 'w-full top-0 transition-all duration-300';
  let headerClasses;
  let textColor = 'text-white'; // Default text color for black header

  if (pathname === '/') {
    // Home page logic: header changes based on scroll
    if (isScrolled) {
      headerClasses = 'fixed z-50 bg-black backdrop-blur-md shadow-md';
      textColor = 'text-white';
    } else {
      // Initially white header on home page when not scrolled
      headerClasses = ' bg-white shadow-none';
      textColor = 'text-gray-800'; // Darker text for white background
    }
  } else {
    // Other pages logic: header is always solid black
    headerClasses = 'bg-black shadow-md';
    textColor = 'text-white';
  }

  // Handle mouse entering the services dropdown area
  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current); // Clear any pending close timeout
      dropdownTimeoutRef.current = null;
    }
    setIsServicesDropdownOpen(true);
  };

  // Handle mouse leaving the services dropdown area
  const handleMouseLeave = () => {
    // Set a timeout to close the dropdown after a short delay
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsServicesDropdownOpen(false);
    }, 200); // 200ms delay, adjust as needed
  };

  // Handle click on a service item in the dropdown
  const handleServiceClick = (service: string) => {
    // Use Next.js router for navigation
    router.push(`/services?service=${encodeURIComponent(service)}`);
    setIsServicesDropdownOpen(false); // Close dropdown after clicking
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current); // Clear timeout if an option is clicked
      dropdownTimeoutRef.current = null;
    }
  };

  return (
    <header className={`${baseClass} ${headerClasses}`}>
      <div className="w-full mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {/* Next.js Image component for optimized images */}
          <Image
            src={logo}
            alt="Logo"
            width={100} // Specify width for Image component
            height={50} // Specify height for Image component
            className="h-[50px] w-[100px]" // Tailwind classes for visual size
          />
          {/* <div className=''>
          <h1 className="text-xl font-extrabold text-[#E23B3D]">PHOTRON</h1>
          <h1 className="text-xl font-extrabold text-[#E23B3D]">LABORATARIES</h1>
             </div> */}
        </div>
        <nav className="space-x-10 text-xl font-semibold flex items-center">
          {/* Next.js Link component for client-side navigation */}
          <Link href="/" className={`${textColor} hover:text-[#035096]`}>Home</Link>
          <Link href="/aboutus" className={`${textColor} hover:text-[#035096]`}>About</Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className={`${textColor} hover:text-[#035096] focus:outline-none flex items-center`}>
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
                  onClick={() => handleServiceClick('Pollution Control')}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left text-sm"
                >
                  Pollution Control
                </button>
                <button
                  onClick={() => handleServiceClick('Instrumentation Facilities')}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left text-sm"
                >
                  Instrumentation Facilities
                </button>
              </div>
            )}
          </div>

          <Link href="/contactus" className={`${textColor} hover:text-[#035096]`}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;

