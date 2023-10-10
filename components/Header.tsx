"use client";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
   const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
   return (
      <header className="z-[999] relative">
         <motion.div
            className="header-container"
            initial={{ y: -100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
            // transition={{ delay: 0.1 }}
         ></motion.div>
         <nav className="navigation">
            <ul className="menu-list">
               {links.map((link) => (
                  <motion.li
                     className="menu-item relative"
                     key={link.hash}
                     initial={{ y: -100, opacity: 0 }}
                     animate={{ y: 0, opacity: 1 }}
                     // transition={{ delay: 0.4 }}
                  >
                     <Link
                        className={clsx("menu-link", {
                           "text-gray-950": activeSection === link.name,
                        })}
                        href={link.hash}
                        onClick={() => {
                           setActiveSection(link.name);
                           setTimeOfLastClick(Date.now());
                        }}
                     >
                        {link.name}
                        {link.name === activeSection && (
                           <motion.span
                              className="bg-gray-100 rounded-full absolute inset-0 -z-10"
                              layoutId="activeSection"
                              transition={{ type: "spring", stiffness: 380, damping: 30 }}
                           ></motion.span>
                        )}
                     </Link>
                  </motion.li>
               ))}
               <motion.li
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1 }}
               >
                  <ThemeSwitch />
               </motion.li>
            </ul>
         </nav>
      </header>
   );
};
export default Header;
