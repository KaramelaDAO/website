import React from "react";
import logo from "../assets/images/logo.svg";

const Footer = () => {
  return (
    <footer className="my-10">
      <img src={logo} alt="Karamela DAO Logo" className="mx-auto mb-5" />
      <p className="text-lg font-normal text-center">
        So Sweet it hurts your teeth
      </p>
    </footer>
  );
};

export default Footer;
