import fishgram from "../assets/fishgram.jpg";
import fishoFashion from "../assets/fisho-fashion.jpg";
import fishoAdmin from "../assets/fisho-fasion admin.jpg";
import userManagement from "../assets/user-managnment-system.jpg";

export const projects = [
  {
    title: "Fisho-Fashion Ecommerce Website",
    description:
      "A fully functional, modern e-commerce website with user-friendly interface, product listing, cart functionality, and payment integration.",
    tech: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
    image: fishoFashion,
    deployed: "https://e-shop-zedt.vercel.app",
    github: "https://github.com/fish19-12/E-shop",
  },
  {
    title: "Fisho-Fashion Admin Dashboard",
    description:
      "Admin panel for managing Fisho-Fashion store with product CRUD, order management, and analytics dashboard.",
    tech: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
    image: fishoAdmin,
    deployed: "http://fisho-fashion-admin-dashboard.vercel.app",
    github: "https://github.com/fish19-12/fisho-fashion-admin-dashboard",
  },
  {
    title: "FishGram Social Media",
    description:
      "A social media platform with user authentication, post creation, likes, comments, and follow functionality.",
    tech: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
    image: fishgram,
    deployed: "http://fishgram.vercel.app",
    github: "https://github.com/fish19-12/fishgram",
  },
  {
    title: "User Management System",
    description:
      "Full-stack user management system with authentication, role-based access, and CRUD operations for users.",
    tech: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
    image: userManagement,
    deployed: "http://user-managnment-system-7sqo.vercel.app",
    github: "https://github.com/fish19-12/user-managnment-system",
  },
];
