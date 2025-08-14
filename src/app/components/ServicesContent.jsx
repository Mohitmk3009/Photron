// // components/ServicesContent.js
// 'use client';

// import { useSearchParams } from 'next/navigation';
// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';

// export default function ServicesContent() {
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
//             <p className="text-gray-700">Photron Laboratories helps to identify the properties and elements present in water which play a vital and significant role in treatment of water for better usage.</p>
//             <ul className="list-disc list-inside space-y-2 text-gray-700 mt-4">
//               <li>Bore Well Water</li>
//               <li>Tube Well Water</li>
//               <li>Process Water</li>
//               <li>Drinking Water</li>
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
//       case 'Pollution Control':
//         return (
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-2xl font-bold mb-4 text-gray-800">Pollution Control</h2>
//             <p className="text-gray-700 mb-4">Pollution testing services encompass a wide range of activities aimed at monitoring, measuring, and analyzing various types of environmental pollution. These services help industries, governments, and individuals ensure compliance with environmental regulations and safeguard public health. Here's a breakdown of the main services in pollution testing:</p>
//             <h3 className="text-xl font-semibold mb-2 text-gray-800">1. Air Pollution Testing</h3>
//             <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
//               <li>Ambient Air Quality Monitoring</li>
//               <li>Stack Emission Testing (from factories, power plants, etc.)</li>
//               <li>Indoor Air Quality Testing (offices, homes, hospitals)</li>
//               <li>Vehicle Emission Testing</li>
//               <li>Dust & Particulate Matter Monitoring</li>
//               <li>Gaseous Pollutants Monitoring (e.g., SOx, NOx, CO, VOCs, ozone)</li>
//             </ul>
//             <h3 className="text-xl font-semibold mb-2 text-gray-800">2. Water Pollution Testing</h3>
//             <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
//               <li>Drinking Water Quality Testing</li>
//               <li>Wastewater Testing (industrial effluent, sewage)</li>
//               <li>Surface Water Testing (rivers, lakes)</li>
//               <li>Groundwater Quality Testing</li>
//               <li>Heavy Metal Analysis (lead, mercury, arsenic)</li>
//               <li>Biological Oxygen Demand (BOD) / Chemical Oxygen Demand (COD) testing</li>
//             </ul>
//             <h3 className="text-xl font-semibold mb-2 text-gray-800">3. Soil Pollution Testing</h3>
//             <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
//               <li>Soil Contamination Analysis (due to heavy metals, hydrocarbons, pesticides)</li>
//               <li>Leachate Testing (for landfills)</li>
//               <li>Agricultural Soil Testing (nutrient and contamination assessment)</li>
//             </ul>
//             <h3 className="text-xl font-semibold mb-2 text-gray-800">4. Noise Pollution Testing</h3>
//             <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
//               <li>Ambient Noise Level Monitoring</li>
//               <li>Workplace Noise Monitoring</li>
//               <li>Construction/Traffic Noise Impact Assessment</li>
//             </ul>
//             <h3 className="text-xl font-semibold mb-2 text-gray-800">5. Radiation Pollution Testing</h3>
//             <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
//               <li>Radioactive Contaminant Testing in soil, water, and air</li>
//               <li>Electromagnetic Radiation Testing from telecom towers, electrical equipment</li>
//             </ul>
//           </div>
//         );
//       case 'Instrumentation Facilities':
//         return (
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-2xl font-bold mb-4 text-gray-800">Instrumentation Facilities</h2>
//             <p className="text-gray-700">Photron Laboratories services include installation, performance verification, routine maintenance, calibration, troubleshooting, documentation, and regulatory compliance activities for laboratory instruments such as spectrophotometers, samplers, and analyzers.</p>
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
//               <li>DATA LOGGER WITH NOISE MONITORING</li>
//               <li>AUTOMATIC WEATHER STATION</li>
//               <li>COD & BOD</li>
//               <li>WATER BATH</li>
//             </ul>
//           </div>
//         );
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
//     <div>
//       <nav className="text-gray-600 mb-6 text-sm">
//         <Link href="/" className="hover:underline">Home</Link> / <span className="font-semibold">{selectedService}</span>
//       </nav>
//       {renderServiceContent()}
//     </div>
//   );
// }

import React from 'react';
import Link from 'next/link';
import water from '../assets/water_testing.jpg';
import enviroment from '../assets/enviroment_testing.jpg';
import pollution from '../assets/pollution.jpg';
import instrument from '../assets/instrument.jpg';
import Image from 'next/image';
// This component is responsible for rendering the content of the selected service.
// It receives the selectedService from its parent component (ServicesPage.js).
const ServicesContent = ({ selectedService }) => {
  // A map of services to their corresponding image URLs.
  // Using placeholder images for demonstration.
  const serviceImages = {
    'Water Testing': water,
    'Environment': enviroment,
    'Pollution Control': pollution,
    'Instrumentation Facilities': instrument
  };

  const renderServiceContent = () => {
    const imageUrl = serviceImages[selectedService] || 'https://placehold.co/800x400/CCCCCC/000000?text=Select+a+Service';

    switch (selectedService) {
      case 'Water Testing':
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Image src={imageUrl} width={5000} height={5000} alt="Water Testing" className="w-full h-[350px] object-cover rounded-lg mb-6" />
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Water Testing</h2>
            <p className="text-gray-700">Photron Laboratories helps to identify the properties and elements present in water which play a vital and significant role in treatment of water for better usage.</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mt-4">
              <li>Bore Well Water</li>
              <li>Tube Well Water</li>
              <li>Process Water</li>
              <li>Drinking Water</li>
              <li>Portable and Domestic Water</li>
              <li>Soft Water</li>
              <li>Water for Construction</li>
              <li>Waste Water</li>
              <li>Industrial Effluent & Domestic Effluent</li>
              <li>Swimming Pool Water</li>
            </ul>
          </div>
        );
      case 'Environment':
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Image src={imageUrl} width={5000} height={5000} alt="Environment" className="w-full h-[350px] object-cover rounded-lg mb-6" />
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Environment</h2>
            <p className="text-gray-700">Photron Laboratories helps to identify the composition present in environmental, there are different guidelines of central pollution control board according to which the quality is declared and maintained.</p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li>Stack Emission</li>
              <li>Ambient Air/Indoor Air</li>
              <li>Soil/Sludge Testing</li>
              <li>Noise</li>
              <li>Lux Level</li>
              <li>Atmospheric Pollution</li>
              <li>Source Emission</li>
              <li>Auto Exhaust Monitoring</li>
              <li>Physical Analysis</li>
            </ul>
          </div>
        );
      case 'Pollution Control':
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Image src={imageUrl} width={5000} height={5000} alt="Pollution Control" className="w-full h-[350px] object-cover rounded-lg mb-6" />
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Pollution Control</h2>
            <p className="text-gray-700 mb-4">Pollution testing services encompass a wide range of activities aimed at monitoring, measuring, and analyzing various types of environmental pollution. These services help industries, governments, and individuals ensure compliance with environmental regulations and safeguard public health. Here's a breakdown of the main services in pollution testing:</p>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">1. Air Pollution Testing</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
              <li>Ambient Air Quality Monitoring</li>
              <li>Stack Emission Testing (from factories, power plants, etc.)</li>
              <li>Indoor Air Quality Testing (offices, homes, hospitals)</li>
              <li>Vehicle Emission Testing</li>
              <li>Dust & Particulate Matter Monitoring</li>
              <li>Gaseous Pollutants Monitoring (e.g., SOx, NOx, CO, VOCs, ozone)</li>
            </ul>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">2. Water Pollution Testing</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
              <li>Drinking Water Quality Testing</li>
              <li>Wastewater Testing (industrial effluent, sewage)</li>
              <li>Surface Water Testing (rivers, lakes)</li>
              <li>Groundwater Quality Testing</li>
              <li>Heavy Metal Analysis (lead, mercury, arsenic)</li>
              <li>Biological Oxygen Demand (BOD) / Chemical Oxygen Demand (COD) testing</li>
            </ul>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">3. Soil Pollution Testing</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
              <li>Soil Contamination Analysis (due to heavy metals, hydrocarbons, pesticides)</li>
              <li>Leachate Testing (for landfills)</li>
              <li>Agricultural Soil Testing (nutrient and contamination assessment)</li>
            </ul>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">4. Noise Pollution Testing</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
              <li>Ambient Noise Level Monitoring</li>
              <li>Workplace Noise Monitoring</li>
              <li>Construction/Traffic Noise Impact Assessment</li>
            </ul>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">5. Radiation Pollution Testing</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>Radioactive Contaminant Testing in soil, water, and air</li>
              <li>Electromagnetic Radiation Testing from telecom towers, electrical equipment</li>
            </ul>
          </div>
        );
      case 'Instrumentation Facilities':
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Image src={imageUrl} width={5000} height={5000} alt="Instrumentation Facilities" className="w-full h-[350px] object-cover rounded-lg mb-6" />
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Instrumentation Facilities</h2>
            <p className="text-gray-700">Photron Laboratories services include installation, performance verification, routine maintenance, calibration, troubleshooting, documentation, and regulatory compliance activities for laboratory instruments such as spectrophotometers, samplers, and analyzers.</p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
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
        );
      default:
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Image src={imageUrl} alt="Welcome" width={5000} height={5000} className="w-full h-auto rounded-lg mb-6" />
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Welcome to Our Services</h2>
            <p className="text-gray-700">Please select a service from the navigation to view details.</p>
          </div>
        );
    }
  };

  return (
    <div>
      {/* <nav className="text-gray-600 mb-6 text-sm">
        {/* <Link href="/" className="hover:underline">Home</Link> / <span className="font-semibold">{selectedService}</span>
      </nav> */}
      {renderServiceContent()}
    </div>
  );
};

export default ServicesContent;
