"use client";
import React, { useState, useEffect, useRef } from 'react';

// Main App component that will render the FAQs
export default function FrequentlyAskedQuestions() {
    // Sample FAQ data organized by category
    const faqData = [
        {
            id: 1,
            category: 'Getting Started',
            question: 'How do I sign up for an account?',
            answer: 'Signing up is easy! Just download the app, click on "Sign Up," and follow the prompts. You can use your email address, Google, or Facebook to create an account.'
        },
        {
            id: 2,
            category: 'Getting Started',
            question: 'Can I access the app from multiple devices?',
            answer: 'Yes, you can access your account and content from multiple devices by logging in with your credentials.'
        },
        {
            id: 3,
            category: 'Getting Started',
            question: 'How do I borrow a book?',
            answer: 'To borrow a book, simply browse our collection, select the book you wish to read, and click the "Borrow" button. The book will then be added to your reading list.'
        },
        {
            id: 4,
            category: 'Getting Started',
            question: 'Can I download books to read offline?',
            answer: 'Absolutely! Most of our books are available for offline download. Look for the download icon next to the book title.'
        },
        {
            id: 5,
            category: 'Members and Pricing',
            question: 'What are the different membership plans?',
            answer: 'We offer various membership plans, including free, basic, and premium tiers, each with different benefits and access levels. Visit our pricing page for more details.'
        },
        {
            id: 6,
            category: 'Members and Pricing',
            question: 'How can I upgrade my membership?',
            answer: 'You can upgrade your membership at any time through your account settings. Navigate to the "Membership" section and select your desired plan.'
        },
        {
            id: 7,
            category: 'Members and Pricing',
            question: 'Is there a free trial available?',
            answer: 'Yes, we offer a 7-day free trial for our premium membership, allowing you to explore all features before committing.'
        },
        {
            id: 8,
            category: 'Book Requests and Recommendations',
            question: 'How do I request a new book?',
            answer: 'You can request new books through our "Book Request" form located in the app\'s main menu. We review all requests and try to add popular titles.'
        },
        {
            id: 9,
            category: 'Book Requests and Recommendations',
            question: 'How do recommendations work?',
            answer: 'Our recommendation engine uses your reading history and preferences to suggest books you might enjoy. The more you read, the better our recommendations become!'
        },
        {
            id: 10,
            category: 'Account & Technical Issues',
            question: 'I forgot my password, what should I do?',
            answer: 'If you forgot your password, click on the "Forgot Password" link on the login screen and follow the instructions to reset it.'
        },
        {
            id: 11,
            category: 'Account & Technical Issues',
            question: 'The app is crashing, how can I fix it?',
            answer: 'Please try clearing the app cache, reinstalling the app, or checking for updates. If the issue persists, contact our support team with details about your device and the problem.'
        },
    ];

    // State to manage the currently active category for filtering FAQs
    const [activeCategory, setActiveCategory] = useState('All'); // 'All' initially to show all questions

    // State to manage which FAQ item is currently open (its answer is visible)
    const [openQuestionId, setOpenQuestionId] = useState(null);

    // State to manage visibility for scroll animation (simple fade-in)
    const [visibleQuestions, setVisibleQuestions] = useState({});

    // Ref to hold the Intersection Observer instance
    const observer = useRef(null);

    // Get unique categories from the faqData
    const categories = ['All', ...new Set(faqData.map(faq => faq.category))];

    // Filter FAQs based on the active category
    const filteredFaqs = activeCategory === 'All'
        ? faqData
        : faqData.filter(faq => faq.category === activeCategory);

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
    }, [filteredFaqs]); // Re-run effect when filteredFaqs change to observe new items

    return (
        <div className="min-h-screen bg-gray-100 font-inter flex flex-col items-center justify-center pb-10">
            <div className="flex items-center justify-center lg:mb-6 lg:px-6 px-5 lg:w-fit w-full">
                <div className="flex-grow border-t border-gray-300 h-[1px] w-[150px] "></div>
                <h1 className="text-4xl font-extrabold text-gray-900 my-3 mx-4 text-center">Frequently Asked Questions</h1>
                <div className="flex-grow border-t border-gray-300 h-[1px] w-[150px] "></div>
            </div>

            <div className="max-w-[1400px] w-full bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
                {/* Left Section: FAQs Header and Categories */}
                <div className="lg:w-1/3 p-8 lg:p-12 bg-gradient-to-br from-cyan-50 to-indigo-50 flex flex-col justify-between">
                    <div>
                        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">FAQs</h1>
                        <p className="text-gray-600 text-lg mb-8">
                            Everything you need to know about features, membership, and troubleshooting.
                        </p>

                        {/* Category Buttons */}
                        <div className="flex flex-wrap gap-3">
                            {categories.map(category => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`
                    px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ease-in-out
                    ${activeCategory === category
                                            ? 'bg-[#035096] text-white shadow-lg transform scale-105'
                                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-800'
                                        }
                  `}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Still Have Questions? Section */}
                    <div className="mt-12 p-6 bg-blue-100 rounded-2xl border border-purple-200 text-center">
                        <h3 className="text-xl font-bold text-[#035096] mb-3">Still have questions?</h3>
                        <p className="text-[#035096] text-base mb-5">
                            Contact our support team and we will make sure everything is clear and intuitive for you!
                        </p>
                        <button className="w-full bg-[#035096] text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors duration-300 shadow-md">
                            Contact Support
                        </button>
                    </div>
                </div>

                {/* Right Section: FAQ Questions and Answers */}
                <div className="lg:w-2/3 p-8 lg:p-12">
                    {filteredFaqs.length === 0 ? (
                        <p className="text-gray-600 text-lg">No questions found for this category.</p>
                    ) : (
                        filteredFaqs.map(faq => (
                            <div
                                key={faq.id}
                                data-id={faq.id} // Custom data attribute for Intersection Observer
                                className={`
                  faq-item mb-6 pb-6 border-b border-gray-200 last:border-b-0 last:mb-0 last:pb-0
                  transform transition-all duration-700 ease-out
                  ${visibleQuestions[faq.id] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}
                            >
                                <div
                                    className="flex justify-between items-center cursor-pointer"
                                    onClick={() => toggleAnswer(faq.id)}
                                >
                                    <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
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
                                    <p className="text-gray-600 leading-relaxed pt-2">{faq.answer}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

