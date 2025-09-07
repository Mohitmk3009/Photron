// App.js
"use client"
import Image from 'next/image';
import React from 'react';
import img1 from '@/app/assets/1.jpg'
import img2 from '@/app/assets/ab4.jpg'
import img3 from '@/app/assets/bg2.jpg'
import backgroundImage from "../assets/contactus.png"; // Ensure the file path is correct
import { Fade } from "react-awesome-reveal";
import Link from 'next/link';
// You would typically import icons from 'lucide-react' if you were using them.
// For this example, we'll use simple text or inline SVGs if needed.

const AboutUsPage = () => {
    return (
        <div className=" bg-gray-100 font-inter antialiased">

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
                    <Fade direction="up" triggerOnce> {/* Animation for the hero text */}
                        <h1 className="lg:text-6xl text-3xl font-bold lg:mb-2">Our Story, Our Impact</h1>
                        {/* <p className="lg:text-lg">Home &gt; Contact Us</p> */}
                        <nav className="text-white  lg:text-xl text-base">
                            <Link href="/" className="hover:underline">Home</Link> / <span className="font-semibold">About Us</span>
                        </nav>
                    </Fade>
                </div>
            </div>

            {/* Main Content Area */}
            <main className="container mx-auto px-5 py-8 md:py-12 lg:py-16">
                {/* Hero Section: Crafting Excellence Together */}
                <section className="bg-white rounded-lg shadow-md p-4 md:p-10 lg:p-10 mb-8 flex flex-col lg:flex-row items-center lg:items-start lg:gap-8 gap-2">
                    <div className="lg:w-1/2 flex flex-col justify-center">


                        <h1 className="text-2xl lg:text-5xl font-extrabold text-gray-900 leading-tight lg:mb-4 mb-2">
                            Photron Laboratories
                        </h1>
                        <p className="text-sm  text-justify lg:text-lg text-gray-700 leading-relaxed lg:mb-6 mb-2">
                            Established in 2022, Photron Laboratories Pvt. Ltd. is an NABL-certified (ISO/IEC 17025) environmental and pollution testing laboratory based in India. Photron Laboratories program ensure customer data meets national as well as international quality standard. We monitor quality through participation in various ILC (Inter Laboratory Comparison) and proficiency testing. Our labs use concept of Total Quality Management System ( TQM ), Which continuously refines laboratory processes based on continuous quality feedback and single window for customer’s query. PLPL has dedicated quality assurance department which independently handle customer needs and also provides reliable analysis in the field of testing customer demands.
                        </p>
                        {/* Placeholder for "Discover More" button */}
                        {/* <button className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 self-start">
                            Discover More
                        </button> */}
                    </div>
                    <div className="lg:w-1/2 flex justify-center items-center relative">
                        {/* Image placeholder */}
                        <Image
                            src={img1}
                            alt="Construction Team"
                            height={5000}
                            width={5000}
                            className="rounded-lg shadow-xl w-full h-[350px] object-cover"
                        //   onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/CCCCCC/333333?text=Image+Not+Found"; }}
                        />
                    </div>
                </section>

                {/* Statistics Section */}
                <section className="bg-white rounded-lg shadow-md p-4 md:p-10 lg:p-10 mb-8">
                    <p className="text-sm lg:text-lg  text-gray-700 leading-relaxed lg:mb-8 mb-2 lg:text-left text-justify">
                        Photron Laboratories Pvt. Ltd. (PLPL) is a Product / Material Testing Laboratories to identify Chemical, Mechanical and Physical Properties of Product Such as road and soil, water ( waste water, ETP/STP Water, Drinking Water, Construction Water), Environment ( Air, Noise, Lux, Stack ) and Building Construction Material.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
                        {[
                            { value: '50+', label: 'Large Scale Projects' },
                            { value: '30+', label: 'Team Members' },
                            { value: '2000+', label: 'Client Reviews' },
                            // { value: '30', label: 'Winning Award' },
                        ].map((stat, index) => (
                            <div key={index} className="p-4 bg-blue-50 rounded-lg shadow-sm">
                                <p className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">
                                    {stat.value}
                                </p>
                                <p className="text-base text-gray-600">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Our Mission Section */}

                {/* <section className="bg-white rounded-lg shadow-md p-6 md:p-10 lg:p-16 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>Fostering Sustainable Growth and Green Development</span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>Innovating for a Sustainable Future</span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>Customer-Centric Approach</span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>Building Stronger Communities</span>
            </li>
          </ul>
        </section> */}
                <section className="bg-white rounded-lg shadow-md p-4 md:p-10 lg:p-10 mb-8 flex flex-col lg:flex-row items-center lg:items-start lg:gap-8">

                    <div className="lg:w-1/2 flex flex-col justify-center">
                        <h2 className="text-2xl md:text-5xl font-bold text-gray-900 leading-tight lg:mb-4 mb-2">
                            Our Vision
                        </h2>
                        <p className="text-sm md:text-lg text-gray-700 leading-relaxed lg:mb-6 mb-4 text-justify">
                            To be the trusted global leader in data quality assurance, recognized for our unwavering commitment to excellence, innovation in quality management, and a seamless, single-window customer experience that sets the industry benchmark for reliability and satisfaction.
                        </p>
                        {/* <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start">
                                <svg
                                    className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                                <span>Humble Beginnings</span>
                            </li>
                            <li className="flex items-start">
                                <svg
                                    className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                                <span>Milestones and Achievements</span>
                            </li>
                            <li className="flex items-start">
                                <svg
                                    className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                                <span>Building a Legacy of Trust</span>
                            </li>
                            <li className="flex items-start">
                                <svg
                                    className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                                <span>Shaping the Future, Rooted in the Past</span>
                            </li>
                        </ul> */}
                    </div>
                    <div className="lg:w-1/2 flex justify-center items-center relative">
                        <Image
                            src={img2}
                            alt="Our History"
                            height={5000}
                            width={5000}
                            className="rounded-lg lg:shadow-xl w-full lg:h-[300px] object-cover"
                        //   onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/CCCCCC/333333?text=Image+Not+Found"; }}
                        />
                    </div>
                </section>

                {/* Our History Section */}
                <section className="bg-white rounded-lg shadow-md p-4 md:p-10 lg:p-10 lg:mb-8  flex flex-col lg:flex-row items-center lg:items-start lg:gap-8 gap-4">
                    <div className="lg:w-1/2 flex justify-center items-center relative">
                        <Image
                            src={img3}
                            alt="Our History"
                            height={5000}
                            width={5000}
                            className="rounded-lg lg:shadow-xl w-full h-[300px] object-cover"
                        //   onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/CCCCCC/333333?text=Image+Not+Found"; }}
                        />
                    </div>
                    <div className="lg:w-1/2 flex flex-col justify-center">
                        <h2 className="text-2xl md:text-5xl font-bold text-gray-900 leading-tight lg:mb-4 mb-2">
                            Our Mission
                        </h2>
                        <p className="text-sm md:text-lg text-gray-700 leading-relaxed lg:mb-6  text-justify">
                            To ensure the highest quality and reliability of customer data by adhering to stringent national and international quality standards, achieved through continuous monitoring via Inter-Laboratory Comparisons (ILC) and proficiency testing, and upheld by a comprehensive Total Quality Management (TQM) system that prioritizes continuous improvement and responsive customer service.
                        </p>
                        {/* <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start">
                                <svg
                                    className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                                <span>Humble Beginnings</span>
                            </li>
                            <li className="flex items-start">
                                <svg
                                    className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                                <span>Milestones and Achievements</span>
                            </li>
                            <li className="flex items-start">
                                <svg
                                    className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                                <span>Building a Legacy of Trust</span>
                            </li>
                            <li className="flex items-start">
                                <svg
                                    className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                                <span>Shaping the Future, Rooted in the Past</span>
                            </li>
                        </ul> */}
                    </div>
                </section>

                {/* Crafting Excellence as a Team Section */}
                {/* <section className="bg-white rounded-lg shadow-md p-6 md:p-10 lg:p-16 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Crafting Excellence as a Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Jane Cooper', role: 'Marketing Coordinator', image: 'https://placehold.co/150x150/E0F2F7/2C3E50?text=Jane' },
              { name: 'Darlene Robertson', role: 'Marketing Coordinator', image: 'https://placehold.co/150x150/E0F2F7/2C3E50?text=Darlene' },
              { name: 'Darrell Steward', role: 'Marketing Coordinator', image: 'https://placehold.co/150x150/E0F2F7/2C3E50?text=Darrell' },
              { name: 'Jenny Wilson', role: 'Marketing Coordinator', image: 'https://placehold.co/150x150/E0F2F7/2C3E50?text=Jenny' },
            ].map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg shadow-sm">
                <Image
                  src={member.image}
                  alt={member.name}
                  height={500}
                  width={500}
                  className="w-24 h-24 rounded-full object-cover mb-4 shadow-md"
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/150x150/CCCCCC/333333?text=User"; }}
                />
                <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </section> */}

                {/* Placeholder for "Why Say Our Customers" section - you can expand this later */}
                {/* <section className="bg-white rounded-lg shadow-md p-6 md:p-10 lg:p-16 mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                        Why Say Our Customers
                    </h2>
                    <p className="text-base text-gray-700 text-center">
                        (Content for customer testimonials will go here)
                    </p>
                </section> */}

            </main>
        </div>
    );
};

export default AboutUsPage;
