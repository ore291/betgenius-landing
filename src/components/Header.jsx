import { useState } from "react";
import Logo from "../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const headerStyle = {
    display: "flex",
    justifyContent: "space-between", // Items will be spaced out
    alignItems: "center", // Center items vertically
    borderBottom: "1px gray",
    backgroundColor: "#101624", // Transparent background
    boxSizing: "border-box",
  };

  const logoStyle = {
    height: "40px", // Adjust logo size
  };

  const linkStyle = {
    textDecoration: "none", // Remove underline
    color: "#FFF", // Orange color
    padding: "15px 15px",
    borderRadius: "5px",
    fontWeight: "600",
    fontSize: "16px",

    transition: "background-color 0.3s ease, color 0.3s ease",
  };
  {
    /* <div className=" w-full fixed top-0 bg-[#101624] z-50"> */
  }
  return (
    <header
      style={headerStyle}
      className=" max-w-6xl mx-auto  py-[10px] px-4 sm:px-0 w-full bg-[#101624] z-50"
    >
      {/* header menu backdrop */}
      <div
        onClick={toggleMenu}
        className={
          isOpen
            ? `h-screen inset-0 z-10 bg-opacity-70 backdrop-sm w-full fixed bg-gray-900 md:hidden`
            : "hidden "
        }
      ></div>
      <div className="z-50">
        <a href="/">
          <img src={Logo} alt="Logo" style={logoStyle} />
        </a>
      </div>
      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden z-20">
        <button
          onClick={toggleMenu}
          className="text-gray-400 hover:text-white focus:outline-none"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
      <nav
        className={`md:flex flex flex-col  md:flex-row md:items-center space-y-24 md:space-y-0 md:space-x-6 absolute z-20 md:relative top-16 left-0 w-full md:w-auto bg-[#101624] pb-4 md:bg-transparent md:top-auto md:left-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col  md:flex-row md:items-center whitespace-nowrap">
          <a style={linkStyle} onClick={toggleMenu} href="#home">
            Home
          </a>
          <a style={linkStyle} onClick={toggleMenu} href="#about">
            About Us
          </a>
          <a style={linkStyle} onClick={toggleMenu} href="#features">
            Features
          </a>
        </div>
        <div className="w-full flex justify-center flex-col md:flex-row items-center gap-2 ">
          <a
            onClick={toggleMenu}
            href="#download"
            className="w-11/12 md:w-full mx-auto"
          >
            <button className="md:bg-[#2AFD84]  bg-white text-[#101624] text-sm font-semibold whitespace-nowrap transition-colors duration-300 ease-linear px-5 py-2.5 rounded w-full">
              Download App
            </button>
          </a>
          <a
            onClick={toggleMenu}
            href="#"
            className="w-11/12 mx-auto md:hidden"
          >
            <button className="bg-[#2AFD84] h text-[#101624] px-6 py-2 rounded w-full">
              Join Our Telegram
            </button>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
