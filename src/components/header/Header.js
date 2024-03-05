import React from "react";
import Logo from "../../assets/images/shopping-cart.png";
import Navbar from "../navbar/Navbar";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-col items-center gap-5">
      <Link to="/">
        <img src={Logo} alt="logo" className="w-[100px] h-[100px] " />
      </Link>
      <TypeAnimation
        sequence={[
          "Sepet.com Güvenilir",
          3000,
          "Sepet.com Hesaplı",
          3000,
          "Sepet.com Kaliteli",
          3000,
        ]}
        wrapper="span"
        speed={200}
        style={{ fontSize: "2em", display: "inline-block" }}
        repeat={Infinity}
      />
      <Navbar />
    </div>
  );
};

export default Header;
