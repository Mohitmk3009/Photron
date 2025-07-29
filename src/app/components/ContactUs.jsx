'use client'
import React, { useState } from "react";
import { usePathname } from 'next/navigation';
import Image from "next/image";
import phone from "../assets/phone-call.png";
import email from "../assets/email.png";
import address from "../assets/location.png";
import timing from "../assets/clock.png";
import backgroundImage from "../assets/contactus.png"; // Ensure the file path is correct
import { toast } from "react-toastify"; // Assuming you're using react-toastify for notifications
import "react-toastify/dist/ReactToastify.css";
// import client from '@/app/axiosClient';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        notice: ''
    });
    const [isChecked, setIsChecked] = useState(false);
    const [selectedValue, setSelectedValue] = useState(`Chairbord's Executive will contact you soon !!`);
    const [loading, setLoading] = useState(false);
    const pathname = usePathname();

    const handleSubmit = async (e) => {
        console.log("submitting form...", formData);
        e.preventDefault();

        if (!isChecked) {
            toast.error("Please accept the terms and conditions!");
            return;
        }
        const submitLoader = toast.loading("Submitting form...");
        setLoading(true);

        try {
            const response = await client.post('/user/contact-us', {
                name: formData.name,
                email: formData.email,
                contactNumber: formData.number,
                subject: selectedValue,
                notice: formData.notice,
            });
            console.log(response, 'response')
            toast.success("Application sent successfully!");

            // Reset the form after successful submission
            setFormData({
                name: '',
                email: '',
                number: '',
                notice: ''
            });
            setIsChecked(false);
            setSelectedValue('');
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("Error submitting form. Please try again.");
        } finally {
            toast.dismiss(submitLoader);
            setLoading(false);
        }
    };

    return (
        <div className="bg-white">
            {/* Hero Section */}
            {/* <div
                className="relative text-white text-center lg:py-20 py-8"
                style={{
                    backgroundImage: `url(${backgroundImage.src})`, // Use .src to get the resolved path
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                 Overlay 
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10">
                    <h1 className="lg:text-6xl text-3xl font-bold lg:mb-2">We&apos;re here to help.</h1>
                    <p className="lg:text-lg">Home &gt; Contact Us</p>
                </div>
            </div> */}
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
                        <h1 className="lg:text-6xl text-3xl font-bold lg:mb-2">We&apos;re here to help.</h1>
                        <p className="lg:text-lg">Home &gt; Contact Us</p>
                    </div>
                </div>
            )}


            {/* Contact Section */}
            <div className="container mx-auto px-4 lg:py-10 pt-5 py-6 flex justify-center flex-col items-center">
                <div className="flex items-center justify-center lg:mb-6 lg:px-6 px-5 lg:w-fit w-full">
                    <div className="flex-grow border-t border-gray-300 h-[1px] w-[150px] "></div>
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-3 mx-4 text-center">Get in touch with us</h1>
                    <div className="flex-grow border-t border-gray-300 h-[1px] w-[150px] "></div>
                </div>
                <p className="text-center text-gray-600 lg:mb-8">
                    Want to get in touch? We&apos;d love to hear from you. Here&apos;s how you can
                    reach us...
                </p>

                <div className="lg:grid md:grid-cols-2 flex flex-col-reverse gap-8">
                    {/* Contact Info */}
                    <div className="gap-2 lg:grid lg:grid-cols-2">
                        <div className="flex items-center gap-4">
                            <Image
                                src={phone}
                                alt="Phone Icon"
                                className="w-[20px]"
                            />
                            <div className="lg:mt-7">
                                <p className="font-semibold lg:text-xl text-lg text-black">Call the helpline</p>
                                <p className="text-gray-600 lg:text-lg text-sm">+91-9821711675</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Image
                                src={email}
                                alt="Email Icon"
                                className="w-[20px]"
                            />
                            <div className="lg:mt-7 mt-2">
                                <p className="font-semibold lg:text-xl text-lg text-black">Email us:</p>
                                <p className="text-gray-600 lg:text-lg text-sm">photron.labs@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 lg:mt-[-110px] ">
                            <Image
                                src={address}
                                alt="Location Icon"
                                className="w-[20px] lg:mb-[58px] mb-[40px]"
                            />
                            <div className=" mt-[-5px]">
                                <p className="font-semibold lg:text-xl text-lg text-black">Location:</p>
                                <p className="text-gray-600 lg:w-5/6 text-justify lg:text-lg text-sm">
                                    G-32, Kh. No. 76/14 & Laxmi Park Nangloi, West Delhi-110041, India
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 lg:mt-[-170px] ">
                            <Image
                                src={timing}
                                alt="Clock Icon"
                                className="w-[20px]"
                            />
                            <div className="lg:mt-7 mt-2">
                                <p className="font-semibold lg:text-xl text-lg text-black">Work Hours:</p>
                                <p className="text-gray-600 lg:text-lg text-sm">Mon - Sat: 10am - 7pm</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white lg:p-8 p-4 shadow-lg rounded-lg mt-6 lg:mt-0">
                        <form onSubmit={handleSubmit}>
                            <div className="lg:grid grid-cols-2 flex flex-col gap-4 mb-4">
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData((prev) => ({ ...prev, name: e.target.value }))
                                    }
                                    required={true}
                                    className="col-span-1 border-[.5px] border-gray-500 focus:border-black rounded-lg px-4 py-2 w-full text-gray-700"
                                />
                                <input
                                    type="text"
                                    placeholder="Enter Email"
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData((prev) => ({ ...prev, email: e.target.value }))
                                    }
                                    required={true}
                                    className="col-span-1 border-[.5px] border-gray-500 focus:border-black rounded-lg px-4 py-2 w-full text-gray-700"
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="Enter Mobile Number"
                                value={formData.number}
                                onChange={(e) =>
                                    setFormData((prev) => ({ ...prev, number: e.target.value }))
                                }
                                required={true}
                                className="col-span-1 border-[.5px] mb-4 border-gray-500 focus:border-black rounded-lg px-4 py-2 w-full text-gray-700"
                            />
                            <textarea
                                placeholder="Your message..."
                                value={formData.notice}
                                onChange={(e) => setFormData({ ...formData, notice: e.target.value })}
                                className="border-[.5px] border-gray-500 focus:border-black rounded-lg px-4 py-2 w-full mb-4 text-gray-700"
                                rows="4"
                                required={true}
                            ></textarea>
                            <div className="flex">
                                <input
                                    type="checkbox"
                                    id="agreement"
                                    className="mr-3 h-5 w-5 text-black bg-white border-gray-700 rounded "
                                    checked={isChecked}
                                    onChange={(e) => setIsChecked(e.target.checked)}
                                />
                                <p className="text-xs text-justify text-gray-500 mb-4">
                                    By submitting this form, you agree to receive occasional
                                    messages about our products and services via mobile. You can
                                    opt-out at any time, and we will never share your mobile number
                                    with third parties.
                                </p>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#035096] text-white py-2 rounded-lg font-semibold"
                            >
                                {loading ? 'Submitting...' : 'Submit'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
