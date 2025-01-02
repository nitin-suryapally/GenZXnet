import ClientCarousel from "./_components/clients/ClientCarousel";
import Hero from "./_components/hero/Hero";
import OurCapabilities from "./_components/reasons/OurCapabilities";
import ServiceCarousel from "./_components/service/ServiceCarousel";
import WhatWeDo from "./_components/whatwedo/WhatWeDo";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <WhatWeDo />
      <OurCapabilities />
      <ServiceCarousel />
      {/* <ClientCarousel /> */}
    </main>
  );
}
 