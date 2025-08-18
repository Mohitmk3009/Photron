"use client";
import React, { useState, useEffect, useRef } from 'react';

// Main App component that will render the FAQs
export default function FrequentlyAskedQuestions() {
    // Sample FAQ data organized by category
    const faqData = [
        {
            id: 1,
            category: 'Getting Started',
            question: 'What types of testing services does Photron laboratories offer?',
            answer: 'Photron laboratories offers a wide range of testing services including T. & Electronics Products, Tyre and Rubber Allied Products, H.T. / L.T. Cables, Transformer, Wiring Accessories / Conductors, Toys & Sports Equipments, Portable/ Wheeled Fire Extinguisher, Domestic Electrical Home Appliances, Environment & Pollution Water, Food & Agricultural/Ayush/Drug & Pharmaceutical Products, Building Materials, Wood, Metals and Chemical, Metals & Alloys/ Ores and Minerals, EMC Compliance Test Facilities, and Development Facility.'
        },
        {
            id: 2,
            category: 'Getting Started',
            question: 'How can I request testing services from Photron laboratories?',
            answer: 'You can request testing services from Photron laboratories  by contacting our customer service team either by phone or email. Our representatives will guide you through the process and assist you in selecting the appropriate testing services for your needs.'
        },
        {
            id: 3,
            category: 'Getting Started',
            question: 'What certifications does Photron laboratories hold?',
            answer: 'Photron laboratories is NABL Accredited, BIS Recognized, and ISO 9001, ISO 14001 & ISO 18001 Certified Lab. These certifications ensure that our testing processes meet international standards for quality and reliability.'
        },
        {
            id: 4,
            category: 'Getting Started',
            question: 'What is the turnaround time for testing services at Photron laboratories?',
            answer: 'The turnaround time for testing services at Photron laboratories varies depending on the specific tests requested and the current workload. Our team strives to provide timely and efficient services to meet our clients needs.'
        },
        {
            id: 5,
            category: 'Members and Pricing',
            question: 'Does Photron laboratories provide customized testing solutions?',
            answer: 'Yes, Photron laboratories offers customized testing solutions tailored to meet the specific requirements of our clients. Our experienced team can work closely with you to develop and implement customized testing protocols to address your unique needs and objectives.'
        },
        {
            id: 6,
            category: 'Members and Pricing',
            question: 'How can I access the test reports from Photron laboratories?',
            answer: 'Once the testing is complete, you can access the test reports from Photron laboratories through our secure online portal. Our system allows you to conveniently view, download, and print your test reports at any time, providing you with easy access to important documentation.'
        },
    ];

    // State to manage which FAQ item is currently open (its answer is visible)
    const [openQuestionId, setOpenQuestionId] = useState(null);

    // State to manage visibility for scroll animation (simple fade-in)
    const [visibleQuestions, setVisibleQuestions] = useState({});

    // Ref to hold the Intersection Observer instance
    const observer = useRef(null);

    // Function to toggle the visibility of an FAQ answer
    const toggleAnswer = (id) => {
        setOpenQuestionId(prevId => (prevId === id ? null : id));
    };

    // Effect for scroll animation (Intersection Observer)
    useEffect(() => {
        // Create a new Intersection Observer instance
        observer.current = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    // If the element is intersecting (in view), set its visibility to true
                    if (entry.isIntersecting) {
                        setVisibleQuestions(prev => ({ ...prev, [entry.target.dataset.id]: true }));
                        // Optionally, unobserve the element once it's visible to prevent re-triggering
                        observer.current.unobserve(entry.target);
                    }
                });
            },
            {
                root: null, // Use the viewport as the root
                rootMargin: '0px', // No margin
                threshold: 0.1, // Trigger when 10% of the item is visible
            }
        );

        // Observe each FAQ item
        document.querySelectorAll('.faq-item').forEach(item => {
            observer.current.observe(item);
        });

        // Cleanup function: disconnect the observer when the component unmounts
        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, [faqData]); // Re-run effect when faqData changes (though it's static here)

    return (
        <div className=" bg-gradient-to-br from-cyan-50 to-indigo-50 font-inter flex flex-col items-center justify-center lg:py-10 py-5 pb-10 lg:px-0 px-5">
            <div className="flex items-center justify-center lg:mb-6 lg:px-6 px-5 lg:w-fit w-full">
                <div className="flex-grow border-t border-gray-300 h-[1px] w-[150px] "></div>
                <h1 className="lg:text-4xl text-2xl font-extrabold whitespace-nowrap text-gray-900  mb-3 mx-4 text-center">FAQs</h1>
                <div className="flex-grow border-t border-gray-300 h-[1px] w-[150px] "></div>
            </div>

            <div className="lg:max-w-[1600px] mx-5 w-full bg-white rounded-3xl shadow-xl overflow-hidden lg:py-6 py-4 lg:px-12 px-4">
                {faqData.length === 0 ? (
                    <p className="text-gray-600 lg:text-lg text-base">No questions found.</p>
                ) : (
                    faqData.map(faq => (
                        <div
                            key={faq.id}
                            data-id={faq.id} // Custom data attribute for Intersection Observer
                            className={`
                  faq-item lg:mb-6 mb-3 lg:pb-6 pb-2 border-b  border-gray-200 last:border-b-0 last:mb-0 last:pb-0
                  transform transition-all duration-700 ease-out
                  ${visibleQuestions[faq.id] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}
                        >
                            <div
                                className="flex justify-between items-center  cursor-pointer"
                                onClick={() => toggleAnswer(faq.id)}
                            >
                                <h3 className="lg:text-lg text-base font-semibold  text-gray-800 pr-4">{faq.question}</h3>
                                <span className="text-[#035096] text-2xl font-bold">
                                    {openQuestionId === faq.id ? '−' : '+'}
                                </span>
                            </div>
                            <div
                                className={`
                    overflow-hidden transition-all duration-500 ease-in-out
                    ${openQuestionId === faq.id ? 'max-h-screen opacity-100 mt-3' : 'max-h-0 opacity-0'}
                  `}
                            >
                                <p className="text-gray-600 lg:text-base text-sm text-justify leading-relaxed py-2">{faq.answer}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}