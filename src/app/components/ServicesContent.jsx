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
          <div className="bg-white p-4 rounded-lg shadow-md">
            <Image src={imageUrl} width={5000} height={5000} alt="Water Testing" className="w-full h-[350px] object-cover rounded-lg mb-6" />
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Water Testing</h2>
            <p className="text-gray-700 text-justify">Water testing is a critical process that involves analyzing water samples to
              evaluate their quality and ensure they are safe for drinking, domestic, and
              industrial use. It helps detect the presence of harmful contaminants such as
              bacteria, heavy metals, chemicals, and other impurities that may pose health or
              environmental risks.
            </p>
            <p className="text-gray-700 text-justify">At <span className='font-bold'>Photron Laboratories</span>, we provide certified water testing services to ensure
              compliance with national and international quality standards. Our advanced
              analytical capabilities help identify the physical, chemical, and biological
              properties of water—playing a vital role in determining the most effective
              treatment methods for improved usability. Regular testing through our
              accredited laboratory not only protects health but also supports environmental
              sustainability and resource optimization.

            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mt-4">
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
        );
      case 'Environment':
        return (
          <div className="bg-white p-4 rounded-lg shadow-md">
            <Image src={imageUrl} width={5000} height={5000} alt="Environment" className="w-full h-[350px] object-cover rounded-lg mb-6" />
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Environment</h2>
            <p className="text-gray-700">At <span className='font-bold'>Photron Laboratories</span> we analyze air, water, soil, and
              hazardous materials to ensure they meet safety and regulatory standards. Our
              comprehensive testing services help identify contaminants, pollutants, and
              other environmental hazards, providing you with accurate and reliable data for
              informed decision-making.Photron Laboratories offers:-</p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li>Air Quality Check</li>
              <li>Treated Water Testing</li>
              <li>Waste Water Testing</li>
              <li>Sludge Testing</li>
              <li>Soil Testing</li>
              <li>Water Analysis</li>
            </ul>
            <p className='font-bold mt-4 text-lg'>Testing Offered:-</p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li><span className='font-bold'>Physical Test:-</span> Conductivity, Colour, pH, Fixed & Volatile Solids, Total Solids,
                Total Dissolved Solids, Total Suspended Solids, Turbidity, Temperature, Velocity
                & Discharge Measurement of Industrial Effluent Stream, Odour, Salinity,
                Settleable Solids and Sludge Volume Index.
              </li>
              <li><span className='font-bold'>Inorganic (General and Non-metallic):-</span> Acidity, Alkalinity, Ammonical
                Nitrogen, Chloride, Chlorine Residual, Dissolved Oxygen, Fluoride, Total
                Hardness, Total Kjeldahl Nitrogen (TKN), Nitrite Nitrogen, Nitrate Nitrogen,
                Phosphate, Sulphate, Silica, Cyanide and Sulphide</li>
              <li><span className='font-bold'>Inorganic (Trace Metals):-</span> Boron, Cadmium, Calcium, Total Chromium,
                Chromium Hexavalent, Copper, Iron, Lead, Magnesium, Mercury, Nickel,
                Potassium, Sodium, Sodium Absorption Ratio, Zinc, Arsenic, Aluminium,
                Barium, Manganese, Selenium, Silver, Tin, Antimony and Cobalt.
              </li>
              <li><span className='font-bold'>Organics (General) and Trace Organics:-</span> Biochemical Oxygen Demand
                (BOD), Chemical Oxygen Demand (COD), Oil and Grease, Phenolic
                Compounds, Pesticides (each) (Organo-Chlorine and Organo NitrogenPhosphorus), Surfactants, Poly-Chlorinated Biphenyl (PCB’s) each and
                Polynuclear Aromatic Hydrocarbon (PAH).</li>
              <li><span className='font-bold'>Microbiological Test:-</span> Total Coliform, Faecal Coliform, E. coli, Faecal
                Streptococci and Enterococcus</li>
              <li><span className='font-bold'>Toxicological Tests:-</span> Bioassay Method for Evaluation of Toxicity Using Fish
                (90% survival of fish after 96 hrs in 100% effluent) and Measurement of Toxicity
                Factor Using Zebra Fish (Dimensionless Toxicity Test).
              </li>
              <li><span className='font-bold'>Characterization of Hazardous Waste:-</span> Preparation of Leachate (TCLP
                Extract/Water Extract), Corrosivity, Ignibility (Flash Point), Toxicity and
                Measurement of Heavy Metals/Pesticides in the Waste/Leachate
              </li>
              <li><span className='font-bold'>Soil/Sludge/Sediment and Solid Waste:-</span> Boron, Cation Exchange Capacity
                (CEC), Electrical Conductivity, Nitrogen (Available), Organic Carbon/Matter
                (Chemical Method pH, Phosphorous (Available), Phosphate (Ortho), Phosphate
                (Total), Potassium, SAR in Soil Extract, Sodium, Soil moisture, TKN, Calorific
                Value, Ammonia, Bicarbonate, Calcium, Calcium Carbonate, Chloride, Colour,
                Heavy Metal, Magnesium, PAH, Sulphate, Total Water Soluble Salt and Water
                Holding Capacity</li>
              <li><span className='font-bold'>Ambient Air/ Fugitive Emissions:-</span> Nitrogen Dioxide (NO2), Sulphur Dioxide
                (SO2), Total Suspended Particulate Matter, Respirable Suspended Particulate
                Matter PM10, Ammonia, Carbon Monoxide, Lead, Ozone, and PM2.5.
              </li>
              <li><span className='font-bold'>Stack Gases/ Source Emission:-</span> Particulate Matter, Sulphur Dioxide,
                Velocity & Flow, Carbon Dioxide, Carbon Monoxide, Temperature, Oxygen,
                Oxides of Nitrogen, Acid Mist, Ammonia, Fluoride (Gaseous), Hydrogen
                Sulphide and Carbon Disulphide.
              </li>
              <li><span className='font-bold'>Noise Level:-</span> Noise Level Measurement (20-140 dBa) and Ambient Noise
                and Source Specific Noise.
              </li>
            </ul>
          </div>
        );
      case 'Pollution Control':
        return (
          <div className="bg-white p-4 rounded-lg shadow-md">
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
          <div className="bg-white p-4 rounded-lg shadow-md">
            <Image src={imageUrl} width={5000} height={5000} alt="Instrumentation Facilities" className="w-full h-[350px] object-cover rounded-lg mb-6" />
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Instrumentation Facilities</h2>
            <p className="text-gray-700">Photron Laboratories services include installation, performance verification, routine maintenance, calibration, troubleshooting, documentation, and regulatory compliance activities for laboratory instruments such as spectrophotometers, samplers, and analyzers.</p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li>Atomic Absorption Spectrophotometer</li>
              <li>UV Visible Spectrophotometer</li>
              <li>Flame Photometer</li>
              <li>pH Meter</li>
              <li>Conductivity Meter</li>
              <li>Respirable Dust Sampler</li>
              <li>Fine Dust Sampler</li>
              <li>Stack Emission Kit</li>
              <li>Gas Chromatography</li>
              <li>Handy Sampler</li>
              <li>Data Logger With Noise Monitoring</li>
              <li>Automatic Weather Station</li>
              <li>COD & BOD</li>
              <li>Water Bath</li>
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
