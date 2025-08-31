/** @jsxImportSource react */
import { ReactNode } from "react";
import emailjs from "@emailjs/react-native";
import { Metadata } from "next";

export class Globals {
  public static City = "Harare";
  public static LinkedIn = "";
  public static BaseUrl = "https://openchains.shop";
  public static ActualPrice = 90;
  public static NumberOfProjects = 60;
  public static PromotionPrice = 35;
  public static Phone = "+263787604187";
  public static Email = "support@openchains.shop";
  public static Address = "128 smuts Road Prospect";
  public static Facebook =
    "https://www.facebook.com/profile.php?id=61573611345236";
  public static Instagram =
    "https://www.facebook.com/profile.php?id=61573611345236";
  public static PortifolioPrice = 80;
  static getWhatappFormat(message: string) {
    return `https://wa.me/${this.Phone}?text=${encodeURI(message)}`;
  }
  static decodeToBooking(
    product: string,
    what: string,
    dueDate: string,
    category: string
  ) {
    const message = `*Booking Request*\n\nIm writing to request for ${product}  requesting as a for ${what}. I want it due ${dueDate}, its under the category of  ${category} Could you please provide me with more information`;
    return `https://wa.me/${this.Phone}?text=${encodeURI(message)}`;
  }
  static getPrices(): Array<{
    name: string;
    price: number;
    description: string;
    link?: string;
    icon?: string;
    days: number;
  }> {
    return [
      {
        name: "Portifolio Website",
        price: this.PortifolioPrice,
        description:
          "customade portifolio website with your own domain and hosting",
        icon: "/assets/img/tour/01.jpg",
        link: "*Portifolio Website Request*\n\nIm writing to request for [Portifolio Website] .Could you please provide me with more information",
        days: 1,
      },
      {
        name: "Business Website",
        price: 130,
        icon: "/assets/img/tour/02.jpg",
        description:
          "SEO optimized business website , emails and hosting , customade for your business",
        link: "*Business Website Request*\n\nIm writing to request for [Business Website] .Could you please provide me with more information",
        days: 2,
      },
      {
        name: "Ecommerce Website",
        price: 400,
        icon: "/assets/img/tour/03.jpg",
        description: "ecommerce website with payment integration ",
        link: "*Ecommerce Website Request*\n\nIm writing to request for [Ecommerce Website] .Could you please provide me with more information",
        days: 15,
      },
      {
        name: "Live Streaming Website",
        price: 349,
        icon: "/assets/img/tour/04.jpg",
        description: "radio , talks shows , live chats etc",
        link: "*Live Streaming Website Request*\n\nIm writing to request for [Live Streaming Website] .Could you please provide me with more information",
        days: 5,
      },
      {
        name: "Educational Apps",
        price: 250,
        description:
          "Custom-made educational apps tailored for schools or businesses",
        icon: "/assets/img/tour/05.jpg",
        link: "*Educational Apps Request*\n\nIm writing to request for [Educational Apps] .Could you please provide me with more information",
        days: 6,
      },
      {
        name: "WhatsApp Bots",
        price: 80,
        icon: "/assets/img/tour/06.jpg",
        description:
          "Custom-made WhatsApp bots designed for business automation",
        link: "*WhatsApp Bots Request*\n\nIm writing to request for [WhatsApp Bots] .Could you please provide me with more information",
        days: 2,
      },
      {
        name: "Artificial Intellignece Bots",
        price: 250,
        description:
          "Custom-made educational apps tailored for schools or businesses",
        icon: "/assets/img/tour/07.jpg",
        link: "*Educational Apps Request*\n\nIm writing to request for [Educational Apps] .Could you please provide me with more information",
        days: 3,
      },
      {
        name: "Gaming Apps",
        price: 400,
        icon: "/assets/img/tour/08.jpg",
        description: "Custom-made gaming apps tailored for your business needs",
        link: "*Gaming Apps Request*\n\nIm writing to request for [Gaming Apps] .Could you please provide me with more information",
        days: 0,
      },
    ];
  }
  static getOpenGraph(title: string, description: string) {
    return {
      type: "website",
      locale: "en_US",
      url: baseUrl,
      title,
      description,
      // mages: [
      //   {
      //     url: `${baseUrl}/opengraph-image.png`,
      //     width: 1200,
      //     height: 630,
      //     alt: "Openchains Technologies Logo",
      //   },
      // ],
      siteName: "Openchains Technologies",
    };
  }
  static getMetaData({
    title,
    description,
    image,
    path,
  }: {
    path: string;
    image?: string;
    title: string;
    description: string;
  }): Metadata {
    return {
      title: `${title} - Openchains`,
      description,
      alternates: {
        canonical: baseUrl + path, // Self-referencing canonical
      },
      metadataBase: new URL("https://openchains.shop"),
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
      openGraph: {
        type: "website",
        locale: "en_US",
        url: baseUrl + path,
        title,
        description,
        images: [
          {
            url: `${baseUrl}/opengraph-image.png`,
            width: 1200,
            height: 630,
            alt: "Openchains Technologies Logo",
          },
        ],
        siteName: `Openchains`,
      },
    };
  }
  static getAppssPrices(): Array<{
    name: string;
    price: number;
    description: string;
    link?: string;
    icon?: ReactNode;
  }> {
    return [
      {
        name: "Gaming Apps",
        price: 400,
        description: "Custom-made gaming apps tailored for your business needs",
        link: "*Gaming Apps Request*\n\nIm writing to request for [Gaming Apps] .Could you please provide me with more information",
      },
      {
        name: "Ecommerce Apps",
        price: 349,
        description: "Custom-made ecommerce apps with payment integration",
        link: "*Ecommerce Apps*\n\nIm writing to request for [Ecommerce Apps] .Could you please provide me with more information",
      },
    ];
  }
  static Projects: Array<{
    img: string;
    desc: string;
    title: string;
    tag: string;
    days: number;
    name: string;
    path: string;
  }> = [
    {
      img: "/assets/img/blog-1.jpg",
      desc: "Taptay Building & Civil Contractors is a leading construction company in Harare, Zimbabwe, specializing in a wide range of services including civil works, building renovations, painting, plumbing, electrical installations, special foundations, tiling, and carpentry. With years of experience and a commitment to quality and customer satisfaction, we have established a strong reputation for delivering exceptional results on every project, big or small.",
      title: "Our WebProject With TapTay Company",
      tag: "websites",
      days: 2,
      name: "taptap.co.zw",
      path: "https://taptay.co.zw",
    },
    {
      img: "/assets/img/blog-2.jpg",
      desc: "Bluedrum is a trusted leader in aluminium and glass products and services, catering to the construction, industrial, and residential sectors. With decades of experience and expertise, we take pride in delivering tailored solutions that align with the unique needs of our clients. Our dedication to excellence, innovation, and client satisfaction makes us a partner you can rely on for your aluminium and glass requirements.",
      title: "BlueDrum Company | Aluminium Suppliers",
      tag: "websites",
      days: 3,
      name: "bluedrum.co",
      path: "https://bluedrum.co",
    },
    {
      img: "/assets/img/blog-3.jpg",
      desc: "Hardware Hyper is a multifaceted company in the business of procurement, supplying and fixing premium range of products with an ultimate objective of achieving practicable quality service for sustainable customer satisfaction.",
      title: "Hardwarehyper | Hardware Suppliers",
      tag: "websites",
      days: 1,
      name: "hardwarehyper.co.zw",
      path: "https://hardwarehyper.co.zw",
    },
  ];
}
export const ServicesList: Array<{
  img: string;
  desc: string;
  title: string;
  category: string;
  projects: number;
  list: string[];
  whatsapp: string;
}> = [
  {
    list: [
      "school portals",
      "database management",
      "website hosting",
      "email hosting",
      "streaming platform",
      "microservices",
      "microbanking",
      "ecommerce",
    ],
    img: "/img/s1.jpg",
    title: "Web Design And Development",
    category: "websites",
    projects: 20,
    whatsapp: `*Openchains Webservices* \nIm looking for a webservice like `,
    desc: "We specialize in web design and development, creating visually appealing and user-friendly websites tailored to your needs. Our services include building database-driven systems, complex web applications, and custom solutions to ensure your online presence is both functional and impactful.",
  },
  {
    list: [
      "photo editing",
      "video editing",
      "fliers",
      "CVs",
      "Banners",
      "Business Cards",
      "Posters",
      "Logos",
      "Animations",
    ],
    img: "/img/s2.png",
    title: "Graphic Design",
    category: "graphics",
    projects: 45,
    whatsapp: `*Openchains Graphic D* \nIm looking for a webservice like `,
    desc: "Flier design , Logo design you name it .Find a way to advertise your product ! gain your trust with us . ",
  },
  {
    list: ["solid works", "proteus", "Blender"],
    img: "/img/s3.jpg",
    title: "Simulation and Modelling",
    category: "simulations",
    projects: 8,
    whatsapp: `*Simulations* \nIm looking for a webservice like `,
    desc: "Want to create 3d objects , we help in creating simulation models in the given softwares and animations. Feel free to get in touch witth us",
  },
  {
    list: [
      "Mobie Apps",
      "Chatbots | whatsapp",
      "Mobile Games",
      "Desktop Apps",
      "Tutorial Apps",
      "Editing Apps",
      "Chating Apps",
      "Ecommerce Apps",
      "Bots",
    ],
    img: "/img/s4.jpg",
    title: "Apps Development",
    category: "mobile apps",
    projects: 16,
    whatsapp: `*Mobile Apps* \nIm looking for a webservice like `,
    desc: "We create apps for android and windows or linux desktops .Feel free to get a free qoute",
  },
  {
    list: [
      "PCB Design",
      "Circuit Simulation",
      "Hardware Prototyping",
      "Electronics Process Simulations",
      "Electronics Design Automation",
    ],
    img: "/img/s1.jpg",
    title: "Electronics Services",
    category: "electronics",
    projects: 20,
    whatsapp: `*Openchains Webservices* \nIm looking for a webservice like `,
    desc: "We offer a wide range of electronics services including PCB design, circuit simulation, and hardware prototyping. Our team of experts is dedicated to delivering high-quality solutions tailored to your specific needs. Whether you require custom PCB designs or complex circuit simulations, we have the expertise to bring your ideas to life.",
  },
  {
    list: ["Ai apps", "Ai Bots", "Ai Games", "Ai Simulations", "Ai Chatbots"],
    img: "/img/s1.jpg",
    title: "Artificial Intelligence",
    category: "ai",
    projects: 20,
    whatsapp: `*Openchains AI Services* \nIm looking for an AI service like `,
    desc: "We provide cutting-edge AI services, including the development of AI-powered apps, bots, games, simulations, and chatbots. Our solutions are designed to help businesses leverage the power of artificial intelligence to enhance efficiency, automate processes, and deliver innovative user experiences.",
  },
];
export const AboutOpenChains = `
Openchains was founded under the company Bezziare International Company of Science And Technology (BICOSAT) as a sub branched that provided technical services and new inventions .
It was initially named Adchains and then initially went to Openchains as branch of modern technologies.So now openchains is the branch thats now dealing with websites development and design , system integrations , robotics , automation , electronics
and anything that is of customer compliance .`;

export const Categories = [
  {
    title: "Openchains Kids",
    price: 200,
  },
  {
    title: "Programming Courses",
    price: 0,
  },
  {
    title: "Solid works",
    price: 10,
  },
  {
    title: "Proteus",
    price: 10,
  },
  {
    title: "Websites",
    price: 90,
  },
  {
    title: "Photoshop/Fliers",
    price: 5,
  },
  {
    title: "Aws",
    price: 200,
  },
  {
    title: "Ai",
    price: 100,
  },
];
export const TestimonialsList = [
  {
    place: "Harare",
    name: "Alan Tirimazu",
    message:
      "From logos to marketing materials, Openchains consistently delivers high-quality and impactful graphic designs.",
  },
  {
    place: "Mutare",
    name: "Prosper Mutinhiri",
    message:
      "Openchains transformed our online presence with a stunning and user-friendly website. Their design expertise truly captured our brand",
  },
  {
    place: "Harare",
    name: "Wayne Adanai",
    message:
      "We needed a complex web application, and Openchains delivered flawlessly. Their development expertise is top-notch",
  },
  {
    place: "Bulawayo",
    name: "Francis Ncube",
    message:
      "Openchains provided us with a system design that streamlined our operations and improved efficiency significantly. Their strategic thinking is invaluable.",
  },
];

export const BlogNews = [
  {
    by: "Openchains",
    volunteers: 1,
    title: "OpenVx Database | Nosql database",
    summary:
      "As openchains , we are working on developing a nosql database system that can query billion entries in less than millisecond by using a concept of file based hashing as unique keys",
  },
  {
    by: "Openchains",
    volunteers: 1,
    title: "Programmer Plus | Programming language",
    summary:
      "As openchains , we are working on developing a programming language that can be used to develop any type of software and hardware system with a simple syntax and easy to use",
  },
  {
    by: "Openchains",
    volunteers: 1,
    title: "Operating System | OpenOS",
    summary:
      "As openchains , we are working on developing an operating system that can be used to develop any type of software and hardware system with a simple syntax and easy to use",
  },
];
export const PhotoGallery = [
  {
    img: "/assets/img/instagram/01.jpg",
    link: "",
  },
  {
    img: "/assets/img/instagram/02.jpg",
    link: "",
  },
  {
    img: "/assets/img/instagram/03.jpg",
    link: "",
  },
  {
    img: "/assets/img/instagram/04.jpg",
    link: "",
  },
  {
    img: "/assets/img/instagram/05.jpg",
    link: "",
  },
  {
    img: "/assets/img/instagram/06.jpg",
    link: "",
  },
];

export const sendEmailOnline = async (obj: Record<string, unknown>) => {
  try {
    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_SERVICE_ID ?? "",
      process.env.NEXT_PUBLIC_TEMPLATE_ID ?? "",
      obj,
      {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
      }
    );
    return {
      success: response.status === 200,
      message: response.text,
    };
  } catch {
    return {
      success: false,
      message: "Failed to send email. Please try again later.",
    };
  }
};
export const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://openchains.shop";
