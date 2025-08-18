// 'use client';
// import { useSearchParams } from 'next/navigation';
// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
// import Header from '../components/Header';
// // This is a placeholder for your layout if you have one
// // import Layout from '../components/Layout';

// function ServicesPage() {
//   const searchParams = useSearchParams();
//   const [selectedService, setSelectedService] = useState('Water Testing'); // Default service

//   useEffect(() => {
//     const serviceParam = searchParams.get('service');
//     if (serviceParam) {
//       setSelectedService(decodeURIComponent(serviceParam));
//     }
//   }, [searchParams]);

//   const renderServiceContent = () => {
//     switch (selectedService) {
//       case 'Water Testing':
//         return (
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-2xl font-bold mb-4 text-gray-800">Water Testing</h2>
//             <p className="text-gray-700">Photron Laboratories helps to identify the properties and elements presents in water which play a virtual and signification role in treatment of water for better usage.</p>
//             <ul className="list-disc list-inside space-y-2 text-gray-700">
//               <li>Bore Well Water</li>
//               <li>Tube Well Water</li>
//               <li>Process Water</li>
//               <li>Drinking Water </li>
//               <li>Portable and Domestic Water</li>
//               <li>Soft Water</li>
//               <li>Water for Construction</li>
//               <li>Waste Water</li>
//               <li>Industrial Effluent & Domestic Effluent</li>
//               <li>Swimming Pool Water</li>
//             </ul>
//           </div>
//         );
//       case 'Environment':
//         return (
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-2xl font-bold mb-4 text-gray-800">Environment</h2>
//             <p className="text-gray-700">Photron Laboratories helps to identify the composition present in environmental, there are different guidelines of central pollution control board according to which the quality is declared and maintained.</p>
//             <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
//               <li>Stack Emission</li>
//               <li>Ambient Air/Indoor Air</li>
//               <li>Soil/Sludge Testing</li>
//               <li>Noise</li>
//               <li>Lux Level</li>
//               <li>Atmospheric Pollution</li>
//               <li>Source Emission</li>
//               <li>Auto Exhaust Monitoring</li>
//               <li>Physical Analysis</li>
//             </ul>
//           </div>
//         );
//         case 'Pollution Control':
//                 return (
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h2 className="text-2xl font-bold mb-4 text-gray-800">Pollution Control</h2>
//                         <p className="text-gray-700 mb-4">Pollution testing services encompass a wide range of activities aimed at monitoring, measuring, and analyzing various types of environmental pollution. These services help industries, governments, and individuals ensure compliance with environmental regulations and safeguard public health. Here's a breakdown of the main services in pollution testing:</p>
//                         <h3 className="text-xl font-semibold mb-2 text-gray-800">1. Air Pollution Testing</h3>
//                         <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
//                             <li>Ambient Air Quality Monitoring</li>
//                             <li>Stack Emission Testing (from factories, power plants, etc.)</li>
//                             <li>Indoor Air Quality Testing (offices, homes, hospitals)</li>
//                             <li>Vehicle Emission Testing</li>
//                             <li>Dust & Particulate Matter Monitoring</li>
//                             <li>Gaseous Pollutants Monitoring (e.g., SOx, NOx, CO, VOCs, ozone)</li>
//                         </ul>
//                         <h3 className="text-xl font-semibold mb-2 text-gray-800">2. Water Pollution Testing</h3>
//                         <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
//                             <li>Drinking Water Quality Testing</li>
//                             <li>Wastewater Testing (industrial effluent, sewage)</li>
//                             <li>Surface Water Testing (rivers, lakes)</li>
//                             <li>Groundwater Quality Testing</li>
//                             <li>Heavy Metal Analysis (lead, mercury, arsenic)</li>
//                             <li>Biological Oxygen Demand (BOD) / Chemical Oxygen Demand (COD) testing</li>
//                         </ul>
//                         <h3 className="text-xl font-semibold mb-2 text-gray-800">3. Soil Pollution Testing</h3>
//                         <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
//                             <li>Soil Contamination Analysis (due to heavy metals, hydrocarbons, pesticides)</li>
//                             <li>Leachate Testing (for landfills)</li>
//                             <li>Agricultural Soil Testing (nutrient and contamination assessment)</li>
//                         </ul>
//                         <h3 className="text-xl font-semibold mb-2 text-gray-800">4. Noise Pollution Testing</h3>
//                         <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
//                             <li>Ambient Noise Level Monitoring</li>
//                             <li>Workplace Noise Monitoring</li>
//                             <li>Construction/Traffic Noise Impact Assessment</li>
//                         </ul>
//                         <h3 className="text-xl font-semibold mb-2 text-gray-800">5. Radiation Pollution Testing</h3>
//                         <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
//                             <li>Radioactive Contaminant Testing in soil, water, and air</li>
//                             <li>Electromagnetic Radiation Testing from telecom towers, electrical equipment</li>
//                         </ul>
//                     </div>
//                 );
//       case 'Instrumentation Facilities':
//         return (
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-2xl font-bold mb-4 text-gray-800">Instrumentation Facilities</h2>
//             <p className="text-gray-700">Photron Laboratories helps to services include installation, performance verification, routine maintenance, calibration, troubleshooting, documentation, and regulatory compliance activities for laboratory instruments such as spectrophotometers, samplers, and analyzers.</p>
//             <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
//               <li>ATOMIC ABSORPTION SPECTROPHOTOMETER</li>
//               <li>UV VISIBLE SPECTROPHOTOMETER</li>
//               <li>FLAME PHOTOMETER</li>
//               <li>pH METER</li>
//               <li>CONDUCTIVITY METER</li>
//               <li>RESPIRABLE DUST SAMPLER</li>
//               <li>FINE DUST SAMPLER</li>
//               <li>STACK EMISSION KIT</li>
//               <li>GAS CHROMATOGRAPHY</li>
//               <li>HANDY SAMPLER</li>
//               <li>DATA LOGGER WITH NOISE  MONITORING</li>
//               <li>AUTOMATIC  WEATHER STATION</li>
//               <li>COD & BOD</li>
//               <li>WATER BATH</li>

//             </ul>
//           </div>
//         );
//       // case 'Project Management':
//       //   return (
//       //     <div className="bg-white p-6 rounded-lg shadow-md">
//       //       <h2 className="text-2xl font-bold mb-4 text-gray-800">Project Management</h2>
//       //       <p className="text-gray-700">We provide comprehensive project management services to ensure your construction projects are completed on time, within budget, and to the highest quality standards.</p>
//       //       <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
//       //         <li>Planning and Scheduling</li>
//       //         <li>Budget Control</li>
//       //         <li>Risk Management</li>
//       //         <li>Quality Assurance</li>
//       //       </ul>
//       //     </div>
//       //   );
//       default:
//         return (
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-2xl font-bold mb-4 text-gray-800">Welcome to Our Services</h2>
//             <p className="text-gray-700">Please select a service from the navigation to view details.</p>
//           </div>
//         );
//     }
//   };

//   return (
//     // If you have a global layout, wrap this content with it
//     // <Layout>
//     <>  
//     <Header/>
//     <div className="min-h-screen bg-gray-100 pt-10 pb-12 px-6"> {/* Adjusted padding-top to account for fixed header */}
//       <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* Main Content Area */}
//         <div className="md:col-span-2">
//           <nav className="text-gray-600 mb-6 text-sm">
//             <Link href="/" className="hover:underline">Home</Link> / <span className="font-semibold">{selectedService}</span>
//           </nav>
//           {renderServiceContent()}
//         </div>

//         {/* Enquiry Form */}
//         <div className="md:col-span-1 mt-11">
//           <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-200">
//             <h3 className="text-2xl font-bold text-center mb-6 text-[#035096]">ENQUIRY FOR {selectedService.toUpperCase()}</h3>
//             <form className="space-y-4">
//               <div>
//                 <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name *</label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//                   placeholder="Your Name"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email *</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//                   placeholder="your.email@example.com"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone *</label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//                   placeholder="e.g., +91 9876543210"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows="5"
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-y"
//                   placeholder="Tell us about your requirements..."
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-[#035096]  text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200 ease-in-out transform hover:scale-105"
//               >
//                 Submit Enquiry
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//     </>
//     // </Layout>
//   );
// }

// export default ServicesPage;

// 'use client';

// import React, { Suspense } from 'react';
// import Header from '../components/Header'; // Adjust path if needed
// import ServicesContent from '../components/ServicesContent';
// import backgroundImage from "../assets/contactus.png"; // Ensure the file path is correct
// import { Fade } from "react-awesome-reveal";
// import Link from 'next/link';

// export default function ServicesPage() {
//   // You may also put a Layout wrapper around this
  
//   return (
//     <>
//       <Header />
//       <div
//           className="relative text-white text-center lg:py-20 py-8"
//           style={{
//             backgroundImage: `url(${backgroundImage.src})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           {/* Overlay */}
//           <div className="absolute inset-0 bg-black/50"></div>
//           <div className="relative z-10">
//             <Fade direction="up" triggerOnce> {/* Animation for the hero text */}
//               <h1 className="lg:text-6xl text-3xl font-bold lg:mb-2">We&apos;re here to help.</h1>
//               {/* <p className="lg:text-lg">Home &gt; Contact Us</p> */}
//               <nav className="text-white mb-6 text-xl">
//                 <Link href="/" className="hover:underline">Home</Link> / <span className="font-semibold">About Us</span>
//               </nav>
//             </Fade>
//           </div>
//         </div>
//       <div className="min-h-screen bg-gray-100 pt-10 pb-12 px-6">
        
//         <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Left 2/3: Services Content */}
//           <div className="md:col-span-2">
//             <Suspense fallback={<div>Loading service...</div>}>
//               <ServicesContent />
//             </Suspense>
//           </div>
//           {/* Right 1/3: Enquiry Form */}
//           <div className="md:col-span-1 mt-11">
//             <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-200">
//               <h3 className="text-2xl font-bold text-center mb-6 text-[#035096]">ENQUIRY FORM</h3>
//               <form className="space-y-4">
//                 <div>
//                   <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name *</label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//                     placeholder="Your Name"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email *</label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//                     placeholder="your.email@example.com"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone *</label>
//                   <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//                     placeholder="e.g., +91 9876543210"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     rows="5"
//                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-y"
//                     placeholder="Tell us about your requirements..."
//                   ></textarea>
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full bg-[#035096] text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200 ease-in-out transform hover:scale-105"
//                 >
//                   Submit Enquiry
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Fade } from "react-awesome-reveal";
import ServicesContent from '../components/ServicesContent'; // Import the new ServicesContent component
import Header from '../components/Header';
import backgroundImage from "../assets/contactus.png";
import Footer from '../components/Footer';
// This is a placeholder for your Header component.
// const Header = () => {
//   return (
//     <header className="bg-gray-800 text-white p-4">
//       <nav className="container mx-auto flex justify-between items-center">
//         <Link href="/" className="text-xl font-bold">
//           My App
//         </Link>
//         <div className="flex space-x-4">
//           <Link href="/services?service=Water%20Testing" className="hover:text-gray-400">
//             Water Testing
//           </Link>
//           <Link href="/services?service=Environment" className="hover:text-gray-400">
//             Environment
//           </Link>
//           <Link href="/services?service=Pollution%20Control" className="hover:text-gray-400">
//             Pollution Control
//           </Link>
//           <Link href="/services?service=Instrumentation%20Facilities" className="hover:text-gray-400">
//             Instrumentation Facilities
//           </Link>
//         </div>
//       </nav>
//     </header>
//   );
// };

// Main page component. Now manages the `selectedService` state and passes it to `ServicesContent`.
const ServicesPage = () => {
  const searchParams = useSearchParams();
  const [selectedService, setSelectedService] = useState('Water Testing'); // Default service

  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam) {
      setSelectedService(decodeURIComponent(serviceParam));
    }
  }, [searchParams]);

  // const backgroundImage = {
  //   src: '../assets/contactus.png', // Ensure the file path is correct  
  // };

  return (
    <>
      <Header />
      <div
        className="relative text-white text-center lg:py-20 py-4"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10">
          <Fade direction="up" triggerOnce>
            <h1 className="lg:text-6xl text-3xl font-bold lg:mb-2">Our Services</h1>
            <nav className="text-white lg:text-xl text-base">
              <Link href="/" className="hover:underline">Home</Link> / <span className="font-semibold">{selectedService}</span>
            </nav>
          </Fade>
        </div>
      </div>
      <div className="min-h-screen bg-gray-100 lg:pt-10 pt-8 pb-8 lg:px-6 px-5">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 ">
          <div className="md:col-span-2">
            <Suspense fallback={<div>Loading service...</div>}>
              <ServicesContent selectedService={selectedService} />
            </Suspense>
          </div>
          <div className="md:col-span-1 ">
            <div className="bg-white lg:p-6 p-4 rounded-lg shadow-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-center lg:mb-6 mb-4 text-[#035096]">ENQUIRY FORM</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="e.g., +91 9876543210"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-y"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#035096] text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-200 ease-in-out transform hover:scale-105"
                >
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ServicesPage;
