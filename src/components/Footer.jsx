import Logo from "../assets/logo.svg";
import Youtube from "../assets/youtube.svg";
import Instagram from "../assets/instagram.svg";
import X from "../assets/X.svg";
import FaceBook from "../assets/facebook.svg";
const Footer = () => {
  return (
    <footer className=" text-white   ">
      <div className=" flex flex-col justify-center ">
        {/* Footer Grid */}
        <div className="bg-[#0e0c1a] p-4 ">
          <div className="max-w-6xl mx-auto   py-10 px-1 md:flex-row grid grid-cols-1 sm:grid-cols-5 gap-y-10     w-full">
            {/* Column 1: Logo and Description */}
            <div className="flex flex-col gap-4 justify-between items-start  col-span-2">
              <p className="md:block hidden font-bold text-lg">BetGenius</p>
              <img
                src={Logo}
                alt="Logo"
                className="h-[65px] sm:h-[40px] md:hidden object-contain"
              />
              <p className=" text-sm leading-loose">
                Your path to success is just one bet away – with the right
                insights and strategies, you can turn every wager into an
                opportunity for victory.
              </p>
              <div className="flex items-center justify-between space-x-6">
                <a href="#" className="">
                  <img src={FaceBook} alt="" className="w-6 h-6" />
                </a>
                <a href="#" className="">
                  <img src={X} alt="" className="w-6 h-6" />
                </a>
                <a href="#" className="">
                  <img src={Instagram} alt="" className="w-8 h-8" />
                </a>
                <a href="#" className="">
                  <img src={Youtube} alt="" className="w-8 h-8" />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="col-span-3">
              <ul className=" flex flex-col sm:justify-end sm:space-x-10 space-y-4 md:space-y-0 md:flex-row  md:items-center ">
                <li>
                  <a href="#home" className="text-white hover:text-[#2AFD84]">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-white hover:text-[#2AFD84]">
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="text-white hover:text-[#2AFD84]"
                  >
                    Features
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Social Media */}
          </div>
        </div>

        {/* Copyright Section */}
        <div className="bg-[#181823] hidden md:block    border-t border-[#101624] ">
          <div className="max-w-6xl mx-auto py-4 text-center text-gray-500 hidden md:flex justify-between items-center ">
            <img src={Logo} alt="Logo" className="h-[40px]" />
            <span className="text-sm">
              &copy; {new Date().getFullYear()}{" "}
              <span className="text-[#2AFD84] font-bold">BetGenius</span>. All
              Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
