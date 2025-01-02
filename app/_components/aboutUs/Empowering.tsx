'use client'

import { IoEye } from "react-icons/io5";
import { FaBullseye } from "react-icons/fa";
import { useRef, FC, useEffect } from "react";
import { gsap } from "gsap";

type CardProps = {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
    iconColor: string;
};

const Card: FC<CardProps> = ({ icon: Icon, title, description, iconColor }) => {
    return (
        <div className="text-black rounded-lg shadow-md p-6 flex flex-col items-start text-left">
            <div className={`w-16 h-16 flex items-center justify-center bg-white ${iconColor} rounded-full mb-4`}>
                <Icon className="w-16 h-16 text-green-text" />
            </div>
            <h4 className="text-xl font-semibold mb-2">{title}</h4>
            <p>{description}</p>
        </div>
    );
};

const Empowering: FC = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const headingRef = useRef<HTMLHeadingElement | null>(null);
    const paragraphRef = useRef<HTMLParagraphElement | null>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    const cardData: CardProps[] = [
        {
            icon: IoEye,
            title: "Our Vision",
            description: "To lead the global IT industry with innovative solutions that empower businesses to succeed through technology.",
            iconColor: "text-blue-600",
        },
        {
            icon: FaBullseye,
            title: "Our Mission",
            description: "Deliver exceptional IT services and custom solutions that drive innovation, tailored to meet client goals.",
            iconColor: "text-red-600",
        },
    ];

    useEffect(() => {
        if (sectionRef.current && headingRef.current && paragraphRef.current) {
            const timeline = gsap.timeline({
                defaults: { duration: 1, ease: "power2.out" }
            });

            // Animate heading and paragraph
            timeline.fromTo(headingRef.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1 });
            timeline.fromTo(paragraphRef.current, { x: 100, opacity: 0 }, { x: 0, opacity: 1 }, "<0.2");

            // Stagger cards animation
            timeline.fromTo(
                cardRefs.current,
                { opacity: 0, y: 50, stagger: 0.2 },
                { opacity: 1, y: 0 },
                "<0.5"
            );
        }
    }, []);

    return (
        <section ref={sectionRef} className="bg-white text-black rounded-lg shadow-lg p-6 lg:p-12">
            <h3
                ref={headingRef}
                className="text-2xl lg:text-3xl font-semibold mb-4 text-left"
            >
                Empowering Enterprise Transformation
            </h3>
            <p ref={paragraphRef} className="text-lg mb-6 text-justify">
                At GenZNext, we drive value growth through cutting-edge solutions and expert services. Our commitment to innovation and superior quality ensures that our products and IT services enable businesses to excel and outpace their competitors. We take pride in delivering unique, high-quality solutions tailored to your needs.
            </p>

            {/* Vision and Mission Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {cardData.map((card, index) => (
                    <div
                        key={index}
                        ref={(el) => {
                            if (el) {
                                cardRefs.current[index] = el;
                            }
                        }}
                    >
                        <Card
                            key={index}
                            icon={card.icon}
                            title={card.title}
                            description={card.description}
                            iconColor={card.iconColor}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Empowering;
