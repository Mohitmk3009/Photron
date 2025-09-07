"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import ServicesContent from "../components/ServicesContent";
import backgroundImage from "../assets/contactus.png";

export default function ServicesClient() {
  const searchParams = useSearchParams();
  const [selectedService, setSelectedService] = useState("Water Testing");

  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam) {
      setSelectedService(decodeURIComponent(serviceParam));
    }
  }, [searchParams]);

  return (
    <>
      {/* Banner */}
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
            <h1 className="lg:text-6xl text-3xl font-bold lg:mb-2">
              Our Services
            </h1>
            <nav className="text-white lg:text-xl text-base">
              <Link href="/" className="hover:underline">
                Home
              </Link>{" "}
              / <span className="font-semibold">{selectedService}</span>
            </nav>
          </Fade>
        </div>
      </div>

      {/* Content + Form */}
      <div className="min-h-screen bg-gray-100 lg:pt-10 pt-8 pb-8 lg:px-6 px-5">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Services Content */}
          <div className="md:col-span-2">
            <Suspense fallback={<div>Loading service...</div>}>
              <ServicesContent selectedService={selectedService} />
            </Suspense>
          </div>

          {/* Enquiry Form */}
          <div className="md:col-span-1">
            <div className="bg-white lg:p-6 p-4 rounded-lg shadow-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-center lg:mb-6 mb-4 text-[#035096]">
                ENQUIRY FORM
              </h3>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Name *
                  </label>
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
                  <label
                    htmlFor="email"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Email *
                  </label>
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
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="e.g., +91 9821144193"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Message
                  </label>
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
    </>
  );
}
