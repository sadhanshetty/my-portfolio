import logo from "../assets/SSLOGO.png";
import { FaLinkedin, FaGithub, FaInstagram,FaWhatsapp } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/sadhan-v-shetty" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/sadhanshetty" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://api.whatsapp.com/send?phone=919945981633" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
        <a href="https://www.instagram.com/mr_sadhan_shetty" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
