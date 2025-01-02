'use client'
import { useRef } from "react";
import { gsap } from "gsap";
import { careers } from "@/utils";
import Image from "next/image";
import { useGSAP } from "@gsap/react";

const Career: React.FC = () => {
    // Define refs with proper typing for DOM elements
    const imageRef = useRef<HTMLDivElement | null>(null);
    const textRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        if (imageRef.current && textRef.current) {
            const tl = gsap.timeline();

            // Fade-in animation for the image (from left)
            tl.fromTo(
                imageRef.current,
                { opacity: 0, x: -100 },
                { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
            );

            // Fade-in animation for the text (from right)
            tl.fromTo(
                textRef.current,
                { opacity: 0, x: 100 },
                { opacity: 1, x: 0, duration: 1, ease: "power3.out" },
                "-=0.5" // Start overlapping the animation
            );
        }
    }, []);

    return (
        <div className="container mx-auto px-4 py-8 max-w-7xl">
            {/* Main Section */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                {/* Left Section - Single Image */}
                <div
                    ref={imageRef}
                    className="w-full md:w-1/2 flex justify-center"
                >
                    <Image
                        src={careers} // Replace with the actual image path from "@/utils"
                        alt="Building"
                        width={400}
                        height={300}
                        className="rounded-lg shadow-md"
                        priority
                    />
                </div>

                {/* Right Section - Text Content */}
                <div ref={textRef} className="w-full md:w-1/2">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                        Our Story
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed text-justify">
                        GenzNext is a premier Information Technology organization
                        dedicated to driving value-driven growth through innovative
                        solutions and unparalleled expertise. Our core values form
                        the foundation of our business framework and are integral
                        to our sustained success. We deliver outstanding
                        performance and exceptional value across our products and
                        IT services, consistently maintaining superior quality
                        standards. With our commitment to excellence, we ensure
                        you receive high-quality, distinctive services that set
                        you apart from the competition.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Career;
