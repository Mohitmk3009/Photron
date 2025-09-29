"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import ServicesContent from "../components/ServicesContent";
import backgroundImage from "../assets/contactus.png";

export default function ServicesClient() {
  const searchParams = useSearchParams();
  const [selectedService, setSelectedService] = useState("Water Testing");
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam) {
      setSelectedService(decodeURIComponent(serviceParam));
    }
  }, [searchParams]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const submitLoader = toast.loading("Submitting enquiry...");

    const templateParams = {
      ...formData,
      service_name: selectedService, // This already has the specific service name
    };

    try {
      await Promise.all([
        emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_UNIFIED_ADMIN_TEMPLATE_ID, // Use unified ID
          templateParams,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        ),
        emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_UNIFIED_USER_TEMPLATE_ID,  // Use unified ID
          templateParams,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        ),
      ]);
      
      toast.success("Enquiry sent successfully!");
      setFormData({ name: '', email: '', phone: '', message: '' });

    } catch (error) {
      console.error("Failed to send email:", error);
      toast.error("Failed to send enquiry. Please try again.");
    } finally {
      toast.dismiss(submitLoader);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="relative text-white text-center lg:py-20 py-4" style={{backgroundImage: `url(${backgroundImage.src})`, backgroundSize: "cover", backgroundPosition: "center"}}>
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
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Suspense fallback={<div>Loading service...</div>}>
              <ServicesContent selectedService={selectedService} />
            </Suspense>
          </div>
          <div className="md:col-span-1">
            <div className="bg-white lg:p-6 p-4 rounded-lg shadow-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-center lg:mb-6 mb-4 text-[#035096]">ENQUIRY FORM</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name *</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3" placeholder="Your Name" required/>
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3" placeholder="your.email@example.com" required/>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone *</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3" placeholder="e.g., +91 9821144193" required/>
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} rows="5" className="shadow appearance-none border rounded w-full py-2 px-3 resize-y" placeholder="Tell us about your requirements..."></textarea>
                </div>
                <button type="submit" disabled={loading} className="w-full bg-[#035096] text-white font-bold py-3 px-4 rounded-lg transition hover:scale-105 disabled:bg-gray-400 disabled:scale-100">
                  {loading ? 'Submitting...' : 'Submit Enquiry'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}