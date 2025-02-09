
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {

  return [
    {
      url: "https://www.genzxnet.com/",
      lastModified: new Date(),
    },
    {
      url: "https://www.genzxnet.com/about_us",
      lastModified: new Date(),
    },
    {
      url: "https://www.genzxnet.com/service/application-development",
      lastModified: new Date(),
    },
    {
      url: "https://www.genzxnet.com/service/mobile-app-development",
      lastModified: new Date(),
    },
    {
      url: "https://www.genzxnet.com/service/financial-services",
      lastModified: new Date(),
    },
    {
      url: "https://www.genzxnet.com/service/it-consulting",
      lastModified: new Date(),
    },
    {
      url: "https://www.genzxnet.com/service/staffing-services",
      lastModified: new Date(),
    },
    {
      url: "https://www.genzxnet.com/careers",
      lastModified: new Date(),
    },
    {
      url: "https://www.genzxnet.com/contact",
      lastModified: new Date(),
    },
    
  ];
}
