"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactForm: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const formRef = useRef<HTMLFormElement>(null);

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);

    const handleInputChange = async (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { id, value } = e.target;
        setForm((prevForm) => ({ ...prevForm, [id]: value }));
    };

    const validateForm = () => {
        if (!form.name.trim()) {
            alert("Name is required.");
            return false;
        }

        if (!form.email.trim()) {
            alert("Email is required.");
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(form.email)) {
            alert("Please enter a valid email address.");
            return false;
        }

        const phoneRegex = /^\d{10}$/; // Example: 10-digit phone number validation
        if (form.phone.trim() && !phoneRegex.test(form.phone)) {
            alert("Please enter a valid phone number (10 digits).");
            return false;
        }

        if (!form.message.trim()) {
            alert("Message is required.");
            return false;
        }

        return true;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: form.email,
                    name: form.name,
                    phone: form.phone,
                    message: form.message,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                alert(`Failed to send your message: ${errorData.error}`);
                return;
            }

            const data = await response.json();
            alert("Your message was sent successfully!");
            setForm({ name: "", email: "", phone: "", message: "" });
        } catch (error) {
            console.error("Submission Error:", error);
            alert("An unexpected error occurred.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const section = sectionRef.current;
        const title = titleRef.current;
        const description = descriptionRef.current;

        const form = formRef.current;

        if (section && title && description && form) {


            gsap.fromTo(
                title,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
            );
            gsap.fromTo(
                description,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 1, ease: "power3.out" },

            );
            gsap.fromTo(
                form,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 1, ease: "power3.out" },

            );


        }
    }, []);

    return (
        <div
            ref={sectionRef}
            id="getintouch"
            className="text-white p-6 md:py-24 flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8 max-w-6xl w-full mx-auto h-full section-style"
        >
            <div className="flex-1 pr-4 md:pr-8 h-full">
                <div className="w-full flex flex-col justify-between space-y-6 md:space-y-8 h-full">
                    <h2
                        ref={titleRef}
                        className="text-2xl md:text-4xl font-bold text-left mb-6 font-sans text-black"
                    >
                        Let’s unleash your potential and conquer your barriers.
                    </h2>
                    <p
                        ref={descriptionRef}
                        className="text-left mb-8 text-black leading-loose paragraph-style max-w-lg"
                    >
                        Kudos! You have taken the first step towards business empowerment. I am
                        here to guide you at EVERY STEP. Do not hesitate to just set up your
                        FREE CONSULTATION below or send me a private message for any
                        clarifications.
                    </p>

                </div>
            </div>
            <form
                ref={formRef}
                className="flex-1 space-y-4 w-full text-black"
                onSubmit={handleSubmit}
            >
                <div className="text-black">
                    <label className="block text-sm font-medium mb-1 font-sans" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={form.name}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600 font-mono"
                        placeholder="Please enter your name"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1 font-sans" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={form.email}
                        onChange={handleInputChange}
                        className="w-full p-2 border font-mono border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
                        placeholder="Please enter your email"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1 font-sans" htmlFor="phone">
                        Phone
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        value={form.phone}
                        onChange={handleInputChange}
                        className="w-full p-2 border font-mono border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
                        placeholder="Enter mobile"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1 font-sans" htmlFor="message">
                        Private Message
                    </label>
                    <textarea
                        id="message"
                        value={form.message}
                        onChange={handleInputChange}
                        className="w-full p-2 border font-mono border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
                        placeholder="Enter your message"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 font-sans text-white py-3 px-6 rounded-lg font-semibold shadow-md transition duration-300"
                >
                    {loading ? "Sending..." : "Submit >"}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
