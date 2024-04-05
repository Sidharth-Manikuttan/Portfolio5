import React from "react";

const Footer = () => {
  const logoUrl = "https://i.ibb.co/48MsTvG/sid-high-resolution-logo-transparent3.png";
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span><img src={logoUrl} alt="Logo" /></span>
        <p className="text-slate-600">CREATED BY SIDHARTH</p>
      </div>
    </footer>
  );
};

export default Footer;
