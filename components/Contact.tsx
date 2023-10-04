"use client";
import { FaPaperPlane } from "react-icons/fa";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";

const Contact = () => {
   const { ref } = useSectionInView("Contact");

   return (
      <motion.section
         id="contact"
         className="mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center"
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 1 }}
         viewport={{ once: true }}
         ref={ref}
      >
         <SectionHeading title="Contact Me" />
         <p className="text-gray-700 -mt-5">
            Please contact me at{" "}
            <a
               type="email"
               href="mailto:karenchakhalyan23@gmail.com"
               target="_blank"
               className="underline"
            >
               karenchakhalyan23@gmail.com
            </a>{" "}
            or through this form.
         </p>

         <form className="mt-10 flex flex-col" action={sendEmail}>
            <input
               type="email"
               name="email"
               required
               maxLength={500}
               id=""
               className="h-14 rounded-lg border border-black/10 outline-none p-2"
               placeholder="Your email"
            />
            <textarea
               name="message"
               placeholder="Your message"
               required
               maxLength={500}
               id=""
               className="h-52 my-3 rounded-lg border border-black/10 p-3 outline-none"
            />
            <button type="submit" className="group send-email-btn">
               Send{" "}
               <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
         </form>
      </motion.section>
   );
};
export default Contact;
