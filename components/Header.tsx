"use client";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
const Header = () => {
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
                     className="menu-item"
                     key={link.hash}
                     initial={{ y: -100, opacity: 0 }}
                     animate={{ y: 0, opacity: 1 }}
                     // transition={{ delay: 0.4 }}
                  >
                     <Link className="menu-link" href={link.hash}>
                        {link.name}
                     </Link>
                  </motion.li>
               ))}
            </ul>
         </nav>
      </header>
   );
};
export default Header;
