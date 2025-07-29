'use client'
import React, { useEffect, useRef, useState } from 'react';
import { Droplet, Leaf, CloudOff, FlaskConical, ArrowRight } from 'lucide-react';
// Removed 'next/link' import as it's not supported in this environment

// ServiceCard component to display individual service details
const ServiceCard = ({ icon: Icon, title, description, iconColor, bgColor }) => {
    const cardRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // If the card is intersecting (in view), set isVisible to true
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Stop observing once visible to prevent re-triggering
                    observer.unobserve(entry.target);
                }
            },
            {
                root: null, // Use the viewport as the root
                rootMargin: '0px', // No margin around the root
                threshold: 0.1, // Trigger when 10% of the item is visible
            }
        );

        // Start observing the card element
        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        // Clean up the observer when the component unmounts
        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []); // Empty dependency array means this effect runs once on mount

    // URL-encode the title for the query parameter
    const serviceSlug = encodeURIComponent(title);

    return (
        <div
            ref={cardRef}
            // Apply fade-in and slide-up animation when visible
            className={`
        bg-white p-6 max-w-xl mx-auto rounded-2xl shadow-lg flex flex-col items-start
        transform transition-all duration-700 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        hover:shadow-xl hover:scale-105 transition-transform
      `}
        >
            {/* Icon container with background color */}
            <div className="p-3 rounded-full mb-4" style={{ backgroundColor: bgColor }}>
                <Icon size={30} className={iconColor} /> {/* Icon component */}
            </div>
            {/* Service title */}
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
            {/* Service description - now truncated to 2 lines with ellipsis */}
            <p className="text-gray-600 mb-4 text-left line-clamp-3 overflow-hidden">
                {description}
            </p>
            {/* Read more link - now uses standard <a> tag */}
            <a href={`/services?service=${serviceSlug}`} className={`flex items-center ${iconColor} font-medium group`}>
                Read more
                <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
        </div>
    );
};

// Main App component containing the Our Services section
const OurServices = () => {
    return (
        <div className=" bg-gradient-to-br from-cyan-50 to-indigo-50 flex flex-col items-center justify-center py-10 pt-5 px-4 sm:px-6 lg:px-8 font-sans">
            {/* Section header */}
            <div className="flex items-center justify-center lg:mb-6 lg:px-6 px-5 lg:w-fit w-full">
                <div className="flex-grow border-t border-gray-300 h-[1px] w-[150px] "></div>
                <h1 className="text-4xl font-extrabold text-gray-900 mb-3 mx-4 text-center">Our Services</h1>
                <div className="flex-grow border-t border-gray-300 h-[1px] w-[150px] "></div>
            </div>

            {/* Services grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-24 ">
                {/* Individual ServiceCard components with different icons */}
                <ServiceCard
                    icon={Droplet}
                    title="Water Testing"
                    description="Photron Laboratories helps to identify the properties and elements presents in water which play a virtual and signification role in treatment of water for better usage."
                    iconColor="text-blue-500" // Blue color for water
                    bgColor="rgba(59, 130, 246, 0.1)" // Light blue background
                />
                <ServiceCard
                    icon={Leaf}
                    title="Environment"
                    description="Photron Laboratories helps to identify the composition present in environmental, there are different guidelines of central pollution control board according to which the quality is declared and maintained."
                    iconColor="text-green-500" // Green color for environment
                    bgColor="rgba(34, 197, 94, 0.1)" // Light green background
                />
                <ServiceCard
                    icon={CloudOff}
                    title="Pollution Control"
                    description=" Photron Laboratories helps to pollution testing services encompass a wide range of activities aimed at monitoring, measuring, and analyzing various types of environmental pollution. These services help industries, governments, and individuals ensure compliance with environmental regulations and safeguard public health. Here's a breakdown of the main services in pollution testing."
                    iconColor="text-red-500" // Red color for pollution
                    bgColor="rgba(239, 68, 68, 0.1)" // Light red background
                />
                <ServiceCard
                    icon={FlaskConical}
                    title="Instrumentation Facilities"
                    description="Photron Laboratories helps to services include installation, performance verification, routine maintenance, calibration, troubleshooting, documentation, and regulatory compliance activities for laboratory instruments such as spectrophotometers, samplers, and analyzers"
                    iconColor="text-purple-500" // Purple color for lab services
                    bgColor="rgba(168, 85, 247, 0.1)" // Light purple background
                />
            </div>
        </div>
    );
};

export default OurServices;
