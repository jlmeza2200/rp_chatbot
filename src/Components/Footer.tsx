import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  { id: 1, name: "Twitter", href: "https://twitter.com", icon: <FaTwitter /> },
  { id: 2, name: "Linkedin", href: "https://linkedin.com", icon: <FaLinkedin /> },
  { id: 3, name: "Instagram", href: "https://instagram.com", icon: <FaInstagram /> },
  { id: 4, name: "Facebook", href: "https://facebook.com", icon: <FaFacebook /> },
  { id: 5, name: "Email", href: "mailto:someone@example.com", icon: <FaEnvelope /> },
];

const Footer = () => {
  return (
    <footer className="bg-darkblue py-8 px-4 md:px-16 lg:px-20">
      <div className="flex flex-col items-center">
        <div className="flex gap-4 sm:gap-6 mb-6 sm:mb-8">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.id}
              href={link.href}
              className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 flex justify-center items-center rounded-lg bg-gray-800 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.05, opacity: 0.9 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
        <p className="text-gray-500 text-xs sm:text-sm lg:text-base text-center">
          © 2024 Francisco Romero Porres. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

