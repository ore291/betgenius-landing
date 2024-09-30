import HeroImage from "../assets/hero-image.png";
import GooglePlayStore from "../assets/google-store.svg";
import AppleStore from "../assets/apple-store.svg";
function Hero() {
  return (
    <section className=" max-w-6xl mx-auto  mb-4 sm:mb-0">
      <div
        id="home"
        className=" pt-[90px] flex flex-col  md:flex-row items-start w-full justify-between p-4  text-white"
      >
        {/* Text Section */}
        <div className=" flex-1 mb-8 md:mb-0 md:mr-8 flex flex-col gap-2 md:w-2/3 ">
          <h1 className="md:text-5xl text-3xl md:leading-relaxed md:text-wrap font-bold md:mb-4 mb-2 ">
            Making money has never been <br /> this simple.{" "}
            <>
              <span className="text-[#2AFD84] md:inline-block hidden ">
                BetGenius
              </span>
              <p className="text-[#2AFD84] w-full mt-1 md:hidden">BetGenius</p>
            </>
          </h1>

          <p className="text-sm md:text-lg leading-loose w-11/12 text-wrap md:w-2/3 md:mb-6 mb-4 text-[#E6E7EB]">
            With BetGenius, your path to success is just a bet away.
            Revolutionize your football betting experience with our accurate
            predictions and tips for FREE.
          </p>

          <div className="flex flex-col space-y-4">
            <a href="">
              <button className="bg-[#2AFD84] text-[#101624] py-3 px-4 flex items-center gap-2 rounded md:w-2/5 text-center text-sm  font-semibold transition duration-300 hover:bg-[#24d06f]">
                <span>Join Our Telegram Channel</span>
                {/* arrow right svg */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                  <line
                    x1="2"
                    y1="12"
                    x2="16"
                    y2="12"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </a>

            <p className="text-[#E6E7EB]">Or use</p>
            <div className="flex gap-2">
              <button>
                <img src={AppleStore} alt="" />
              </button>
              <button>
                <img src={GooglePlayStore} alt="" />
              </button>
            </div>
            <div className="flex gap-8 mt-4 w-11/12 md:w-full">
              <div className="flex flex-col gap-4">
                <p className="text-[#E6E7EB]">320K +</p>
                <h1 className="md:text-2xl text-xl font-bold">Active Users</h1>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-[#E6E7EB]">85%</p>
                <h1 className="md:text-2xl text-xl font-bold">Winning Rate</h1>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/3 w-full flex md:justify-center md:items-center ">
          <img
            src={HeroImage}
            alt="Hero Image"
            className="w-full   md:max-h-[750px]  md:object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
