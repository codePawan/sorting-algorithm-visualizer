import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-dark py-3 mt-auto">
      <div className="container text-center">
        <span className="text-white ">
          Made with Love by &copy; <b>V Pawan Sudhir{" "}</b>
          <a href="www.linkedin.com/in/vinjamuri-pawan-sudhir-3409a4190">
            <FaLinkedin />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
