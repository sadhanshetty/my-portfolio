import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1 }}
            className="my-10 text-center text-4xl">Get in Touch
      </motion.h1>

      <div className="text-center tracking-tighter">
        <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="my-4">{CONTACT.address}
        </motion.p>
        
        {/* Make phone clickable */}
        <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="my-4">
            <a href={`tel:${CONTACT.phoneNo}`} className="border-b hover:text-neutral-500">
              {CONTACT.phoneNo}
            </a>
        </motion.p>

        {/* Make email clickable */}
        <motion.p
  whileInView={{ opacity: 1, y: 0 }}
  initial={{ opacity: 0, y: 100 }}
  transition={{ duration: 1 }}
  className="my-4"
>
  <a href={`mailto:${CONTACT.email}`} className="border-b hover:text-neutral-500">
    {CONTACT.email}
  </a>
</motion.p>

      </div>
    </div>
  );
};

export default Contact;
