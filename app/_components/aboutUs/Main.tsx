'use client'

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Empowering from "./Empowering";

gsap.registerPlugin(ScrollTrigger);


const Main = () => {

    const sectionRef = useRef<HTMLDivElement | null>(null);
    const headingRef = useRef<HTMLDivElement | null>(null);
    const paraRef = useRef<HTMLParagraphElement | null>(null)

    useGSAP(() => {
        if (sectionRef.current && headingRef.current) {

            gsap.fromTo(
                headingRef.current,
                { x: -100, opacity: 0 },
                { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
            );

            gsap.fromTo(
                paraRef.current,
                {
                    x: 100,
                    opacity: 0
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out"
                }
            )

        }
    }, []);
    return (
        <section className="section-style" ref={sectionRef}>
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                {/* Header Section */}
                <div className="text-center flex flex-col gap-2">
                    <h2 className="heading font-bold text-black" ref={headingRef}>About  <span className="text-green-text">Us</span></h2>
                    <p className="text-xl lg:text-3xl mb-8" ref={paraRef}>
                        Transforming enterprises with innovation, speed, and excellence.
                    </p>
                </div>

                <Empowering />
            </div>
        </section>
    );
}

export default Main;