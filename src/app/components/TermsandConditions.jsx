'use client'
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from 'next/navigation';
import backgroundImage from "../assets/contactus.png";
import Link from "next/link";
const TermsAndConditions = () => {
    const [hasAnimated, setHasAnimated] = useState(false);
    const sectionRef = useRef(null);
    const pathname = usePathname();
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    setHasAnimated(true);
                    // Disconnect the observer once the animation has triggered
                    observer.disconnect();
                }
            },
            { threshold: 0.2 } // Trigger when 20% of the element is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="bg-gray-100 font-inter antialiased"
        >
            {pathname !== '/' && (
                <div
                    className="relative text-white text-center lg:py-20 py-8"
                    style={{
                        backgroundImage: `url(${backgroundImage.src})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50"></div>
                    <div className="relative z-10">
                        <h1 className="lg:text-6xl text-3xl font-bold lg:mb-2">The rules and guidelines for using our website.</h1>
                        {/* <p className="lg:text-lg">Home &gt; Contact Us</p> */}
                        <nav className="text-white  lg:text-xl text-base">
                            <Link href="/" className="hover:underline">Home</Link> / <span className="font-semibold">Terms & Conditions</span>
                        </nav>
                    </div>
                </div>
            )}

            {/* Main Content Box */}
            <div className="container mx-auto px-4 lg:py-10 pt-5 py-6 flex justify-center flex-col items-center">

                <div className="flex items-center justify-center lg:mb-10 mb-6 lg:px-6 px-5 lg:w-fit w-full">
                    <div className="flex-grow border-t border-gray-300 h-[1px] w-[50px] md:w-[150px]"></div>
                    <h1 className="lg:text-4xl text-2xl font-extrabold whitespace-nowrap text-gray-900 mx-4 text-center">
                        Terms & Conditions
                    </h1>
                    <div className="flex-grow border-t border-gray-300 h-[1px] w-[50px] md:w-[150px]"></div>
                </div>
                <div
                    className={`bg-white h-fit rounded-lg lg:p-10 p-6 shadow-md transition-all duration-700 ease-in-out ${hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >


                    <p className="text-sm text-gray-500 mb-6">Last Updated: September 30, 2025</p>

                    <p className="text-gray-600 lg:text-base text-sm text-justify leading-relaxed mb-6">
                        Welcome to the Photron Laboratories website. By accessing or using this website, you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree with any part of these Terms, please do not use our website.
                    </p>

                    <div className="space-y-6">
                        {/* Section 1 */}
                        <div>
                            <h2 className="text-[#035096] lg:text-2xl text-xl font-bold mb-3">1. Scope and Purpose</h2>
                            <p className="text-gray-600 lg:text-base text-sm text-justify leading-relaxed">
                                The sole purpose of the Photron Laboratories website is to provide information about our laboratory services and to collect inquiry forms from prospective customers. This website is an informational and contact portal only. It is not a platform for transacting business, placing final orders, making payments, or receiving laboratory results.
                            </p>
                        </div>

                        {/* Section 2 */}
                        <div>
                            <h2 className="text-[#035096] lg:text-2xl text-xl font-bold mb-3">2. Use of the Inquiry Form</h2>
                            <ul className="list-disc list-outside space-y-2 pl-5 text-gray-600 lg:text-base text-sm text-justify">
                                <li>
                                    <strong>Accuracy of Information:</strong> By submitting an inquiry form, you warrant that all information you provide is accurate, truthful, and complete.
                                </li>
                                <li>
                                    <strong>Purpose of Inquiry:</strong> You agree to use the inquiry form solely for genuine interest in our services. Abuse of the form is strictly prohibited.
                                </li>
                                <li>
                                    <strong>No Contractual Obligation:</strong> Submitting an inquiry does not create a contractual obligation for either party. Any services provided will be subject to a separate, formal agreement.
                                </li>
                            </ul>
                        </div>

                        {/* Section 3 */}
                        <div>
                            <h2 className="text-[#035096] lg:text-2xl text-xl font-bold mb-3">3. Intellectual Property</h2>
                            <p className="text-gray-600 lg:text-base text-sm text-justify leading-relaxed">
                                All content on this website, including text, graphics, logos, and images, is the exclusive property of Photron Laboratories. You are granted a limited license to access and use the website only for submitting an inquiry and may not reproduce any content without our express written permission.
                            </p>
                        </div>

                        {/* Section 4 */}
                        <div>
                            <h2 className="text-[#035096] lg:text-2xl text-xl font-bold mb-3">4. Disclaimers and Liability</h2>
                            <p className="text-gray-600 lg:text-base text-sm text-justify leading-relaxed">
                                The website is provided "as is" without any warranties. Photron Laboratories will not be liable for any damages arising from the use or inability to use the website.
                            </p>
                        </div>

                        {/* Section 5 */}
                        <div>
                            <h2 className="text-[#035096] lg:text-2xl text-xl font-bold mb-3">5. Changes to the Terms</h2>
                            <p className="text-gray-600 lg:text-base text-sm text-justify leading-relaxed">
                                We reserve the right to revise and update these Terms at any time without prior notice. Your continued use of the website constitutes your acceptance of the new Terms.
                            </p>
                        </div>

                        {/* Section 6 */}
                        <div>
                            <h2 className="text-[#035096] lg:text-2xl text-xl font-bold mb-3">6. Contact Information</h2>
                            <p className="text-gray-600 lg:text-base text-sm text-justify leading-relaxed">
                                If you have any questions about these Terms, please contact us at: <a href="mailto:photron.labs@gmail.com" className="text-blue-600 hover:underline">photron.labs@gmail.com</a> or call our technical support at <a href="tel:+919312566193" className="text-blue-600 hover:underline">+91-9312566193</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TermsAndConditions;
