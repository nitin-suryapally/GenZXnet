
import { Metadata } from "next";
import Career from "../_components/career/Career";
import LinkedInCTA from "../_components/career/LinkedInCTA";

export const metadata: Metadata = {
    title: "Career",
    description: "Find exciting oppertunities and join us",
};

const CareersPage = () => {
    return (
        <section className="flex flex-col space-y-4">
            <Career />
            <LinkedInCTA />
        </section>
    );
};

export default CareersPage;
