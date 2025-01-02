'use client'

import Services from "@/app/_components/service/Services";
import { useParams } from "next/navigation";

const page = () => {
  const params = useParams();
  const slug = params?.slug as string;
  return (
    <Services params={{
      slug: slug
    }} />
  );
}

export default page;