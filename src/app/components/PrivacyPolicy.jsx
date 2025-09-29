'use client'
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from 'next/navigation';
import backgroundImage from "../assets/contactus.png"; // Reusing the same background image
import Link from "next/link";

const PrivacyPolicy = () => {
    const [hasAnimated, setHasAnimated] = useState(false);
    const sectionRef = useRef(null);
    const pathname = usePathname();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    setHasAnimated(true);
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
                // eslint-disable-next-line react-hooks/exhaustive-deps
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
                        <h1 className="lg:text-6xl text-3xl font-bold lg:mb-2">We are dedicated to safeguarding your personal information.</h1>
                        <nav className="text-white lg:text-xl text-base">
                            <Link href="/" className="hover:underline">Home</Link> / <span className="font-semibold">Privacy Policy</span>
                        </nav>
                    </div>
                </div>
            )}

            {/* Main Content Box */}
            <div className="container mx-auto px-4 lg:py-10 pt-5 py-6 flex justify-center flex-col items-center">

                <div className="flex items-center justify-center lg:mb-10 mb-6 lg:px-6 px-5 lg:w-fit w-full">
                    <div className="flex-grow border-t border-gray-300 h-[1px] w-[50px] md:w-[150px]"></div>
                    <h1 className="lg:text-4xl text-2xl font-extrabold whitespace-nowrap text-gray-900 mx-4 text-center">
                        Privacy Policy
                    </h1>
                    <div className="flex-grow border-t border-gray-300 h-[1px] w-[50px] md:w-[150px]"></div>
                </div>
                <div
                    className={`bg-white h-fit rounded-lg lg:p-10 p-6 shadow-md transition-all duration-700 ease-in-out ${hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <p className="text-sm text-gray-500 mb-6">Last Updated: September 30, 2025</p>

                    <p className="text-gray-600 lg:text-base text-sm text-justify leading-relaxed mb-6">
                        Photron Laboratories established in 2022, is committed to protecting the privacy and security of the information you provide to us. This Privacy Policy describes how we collect, use, and handle your information solely through our website's inquiry forms.
                    </p>

                    <div className="space-y-6">
                        {/* Section 1 */}
                        <div>
                            <h2 className="text-[#035096] lg:text-2xl text-xl font-bold mb-3">1. Scope of this Policy</h2>
                            <p className="text-gray-600 lg:text-base text-sm text-justify leading-relaxed">
                                This policy applies only to the information collected through the Photron Laboratories website at https://www.photronlaboratories.in/. Our website's sole function is to facilitate service inquiries from potential customers.
                            </p>
                        </div>

                        {/* Section 2 */}
                        <div>
                            <h2 className="text-[#035096] lg:text-2xl text-xl font-bold mb-3">2. Information We Collect</h2>
                            <p className="text-gray-600 lg:text-base text-sm text-justify leading-relaxed mb-3">
                                We only collect information that is necessary to respond to your service inquiries. This information is provided directly by you when you fill out and submit an inquiry form on our website. The types of information we may collect include:
                            </p>
                            <ul className="list-disc list-outside space-y-2 pl-5 text-gray-600 lg:text-base text-sm text-justify">
                                <li><strong>Contact Information:</strong> Your full name, email address, phone number, and company name (if applicable).</li>
                                <li><strong>Inquiry Details:</strong> Information you provide regarding the services you are interested in (e.g., project details, required tests, scope of work).</li>
                            </ul>
                        </div>

                        {/* Section 3 */}
                        <div>
                            <h2 className="text-[#035096] lg:text-2xl text-xl font-bold mb-3">3. How We Use Your Information</h2>
                            <p className="text-gray-600 lg:text-base text-sm text-justify leading-relaxed mb-3">
                                The information you provide is used solely for the following purposes:
                            </p>
                            <ul className="list-disc list-outside space-y-2 pl-5 text-gray-600 lg:text-base text-sm text-justify">
                                <li>To respond to your specific inquiries about our laboratory services.</li>
                                <li>To communicate with you regarding your request, including providing quotes, scheduling consultations, or clarifying details.</li>
                                <li>To maintain a record of inquiries for internal business tracking and follow-up purposes.</li>
                            </ul>
                            <p className="text-gray-600 lg:text-base text-sm text-justify leading-relaxed mt-4">
                                We do not use your information for marketing purposes, sell it to third parties, or engage in automated decision-making.
                            </p>
                        </div>

                        {/* Section 4 */}
                        <div>
                            <h2 className="text-[#035096] lg:text-2xl text-xl font-bold mb-3">4. Data Storage and Security</h2>
                            <ul className="list-disc list-outside space-y-2 pl-5 text-gray-600 lg:text-base text-sm text-justify">
                                <li><strong>Storage:</strong> Your inquiry data is stored on secure servers maintained by our hosting provider or through a secure Customer Relationship Management (CRM) system.</li>
                                <li><strong>Security:</strong> We implement reasonable physical, technical, and administrative safeguards designed to protect the information we collect against unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or method of electronic storage is 100% secure.</li>
                            </ul>
                        </div>

                        {/* Section 5 */}
                        <div>
                            <h2 className="text-[#035096] lg:text-2xl text-xl font-bold mb-3">5. Data Retention</h2>
                            <p className="text-gray-600 lg:text-base text-sm text-justify leading-relaxed">
                                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, including for the purpose of satisfying any legal, accounting, or reporting requirements. Generally, we will retain inquiry data for a period of [Specify Timeframe, e.g., 2 years] to ensure proper follow-up and historical record-keeping, after which it will be securely deleted or anonymized.
                            </p>
                        </div>
                        
                        {/* Section 6 */}
                        <div>
                            <h2 className="text-[#035096] lg:text-2xl text-xl font-bold mb-3">6. Disclosure of Information</h2>
                             <p className="text-gray-600 lg:text-base text-sm text-justify leading-relaxed mb-3">
                                We do not sell, trade, or rent your personal identification information to others. We may only disclose your information in the following limited circumstances:
                            </p>
                            <ul className="list-disc list-outside space-y-2 pl-5 text-gray-600 lg:text-base text-sm text-justify">
                                <li>With your consent.</li>
                                <li><strong>To service providers:</strong> We may share information with trusted third-party service providers (e.g., website host, secure email provider) who assist us in operating our website or conducting our business, provided they agree to keep this information confidential and secure.</li>
                                <li><strong>For legal requirements:</strong> When we believe release is appropriate to comply with the law, enforce our site policies, or protect our or others' rights, property, or safety.</li>
                            </ul>
                        </div>
                        
                        {/* Section 7 */}
                        <div>
                            <h2 className="text-[#035096] lg:text-2xl text-xl font-bold mb-3">7. Your Rights (Depending on Jurisdiction)</h2>
                             <p className="text-gray-600 lg:text-base text-sm text-justify leading-relaxed mb-3">
                                Depending on your geographic location, you may have the right to:
                            </p>
                             <ul className="list-disc list-outside space-y-2 pl-5 text-gray-600 lg:text-base text-sm text-justify">
                                <li>Access the personal data we hold about you.</li>
                                <li>Request correction of inaccurate or incomplete data.</li>
                                <li>Request deletion of your personal data (subject to legal obligations).</li>
                                <li>Object to the processing of your data.</li>
                            </ul>
                            <p className="text-gray-600 lg:text-base text-sm text-justify leading-relaxed mt-4">
                                To exercise any of these rights, please contact us using the information provided below.
                            </p>
                        </div>
                        
                        {/* Section 8 */}
                        <div>
                            <h2 className="text-[#035096] lg:text-2xl text-xl font-bold mb-3">8. Changes to this Privacy Policy</h2>
                            <p className="text-gray-600 lg:text-base text-sm text-justify leading-relaxed">
                                Photron Laboratories reserves the right to update this Privacy Policy at any time. When we do, we will revise the "Last Updated" date at the top of this page. We encourage users to frequently check this page for any changes. Your continued use of the website after the posting of changes will constitute your acceptance of those changes.
                            </p>
                        </div>

                        {/* Section 9 */}
                        <div>
                            <h2 className="text-[#035096] lg:text-2xl text-xl font-bold mb-3">9. Contacting Us</h2>
                            <p className="text-gray-600 lg:text-base text-sm text-justify leading-relaxed">
                                If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this website, please contact us at: <a href="mailto:photron.labs@gmail.com" className="text-blue-600 hover:underline">photron.labs@gmail.com</a> or call our technical support at <a href="tel:+919312566193" className="text-blue-600 hover:underline">+91-9312566193</a> or <a href="tel:+919818282411" className="text-blue-600 hover:underline">+91-9818282411</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrivacyPolicy;