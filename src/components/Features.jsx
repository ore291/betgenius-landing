import FreeGame1 from "../assets/free-games-2.png";
import FreeGame2 from "../assets/free-games-1.png";
import BookingCode from "../assets/booking-code.png";
import InstantUpdates from "../assets/instant-updates.png";
import SportNews from "../assets/sport-news.png";
import SportUp from "../assets/sportup2.png";
import WinTogether from "../assets/win-together.png";
import AppleStore from "../assets/applestore.png";
import GoogleStore from "../assets/googlestore.png";
import WinTog2 from "../assets/wintog2.png";
import { Fade } from "react-awesome-reveal";
import HeroImage from "../assets/hero-image.png";
import GooglePlayStore from "../assets/googlestore.png";

function Features() {
  return (
    <div className="flex flex-col space-y-24 sm:space-y-32">
      <section
        id="home"
        className="sm:min-h-screen px-2 sm:px-0 pt-5 max-w-6xl mx-auto flex flex-col  md:flex-row items-start w-full justify-between   text-white"
      >
        {/* Text Section */}
        <div className=" flex-1 mb-8 md:mb-0 md:mr-8 flex flex-col gap-2 md:w-2/3 ">
          <Fade triggerOnce direction="up" duration={2000} >
            <h1 className="md:text-5xl text-3xl leading-relaxed md:text-wrap font-bold md:mb-4 mb-2 ">
              Making money has never been <br className="hidden sm:block" />{" "}
              this simple.{" "}
              <>
                <span className="text-[#2AFD84] md:inline-block hidden ">
                  BetGenius
                </span>
                <span className="text-[#2AFD84] w-full mt-1 md:hidden">
                  BetGenius
                </span>
              </>
            </h1>

            <p className="text-sm md:text-[17px]    text-wrap  md:mb-6 mb-4 text-[#E6E7EB] leading-8 ">
              With BetGenius, your path to success is just a bet away.
              Revolutionize your football <br className="hidden sm:block" />{" "}
              betting experience with our accurate predictions and tips for{" "}
              <span className="text-[#2AFD84]">FREE</span>.
            </p>

            <div className="flex flex-col space-y-5">
              <a href="">
                <button className="bg-[#2AFD84] text-[#101624] h-[46px] sm:h-[53px] flex items-center justify-center rounded w-[228px] sm:w-[262px] text-center text-sm  font-semibold transition duration-300 hover:bg-[#24d06f]">
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

              <p className="text-[#E6E7EB]">Or Use</p>
              <div className="flex gap-2">
                <button>
                  <img
                    src={AppleStore}
                    alt=""
                    className="h-[55px] w-[143px]  sm:w-[169px] sm:h-[65px] "
                  />
                </button>
                <button>
                  <img
                    src={GooglePlayStore}
                    alt=""
                    className="h-[55px] w-[143px]  sm:w-[169px] sm:h-[65px] "
                  />
                </button>
              </div>
              <div className="flex gap-8 mt-4 w-11/12 md:w-full">
                <div className="flex flex-col gap-4">
                  <p className="text-[#E6E7EB]">320K +</p>
                  <h1 className="md:text-2xl text-xl font-semibold">
                    Active Users
                  </h1>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-[#E6E7EB]">85%</p>
                  <h1 className="md:text-2xl text-xl font-semibold">
                    Winning Rate
                  </h1>
                </div>
              </div>
            </div>
          </Fade>
        </div>
        {/* Image Section */}
        <div
          className="md:w-1/3 w-full flex md:justify-center md:items-center "
        >
          <Fade triggerOnce direction="up" duration={2000} fraction={0.01}>
            <img
              src={HeroImage}
              alt="Hero Image"
              className="w-full   md:max-h-[750px]  md:object-contain"
            />
          </Fade>
        </div>
      </section>
      <section id="about" className="sm:min-h-screen  w-full px-2 sm:px-0  max-w-6xl mx-auto   text-white ">
        <div className="flex-1 mb-8 md:mb-0 md:mr-8 flex flex-col gap-2  ">
          <Fade triggerOnce direction="up" duration={1500} fraction={0.01}>
            <h1 className="md:text-5xl text-3xl md:leading-relaxed text-wrap font-bold mb-4 md:w-3/5">
              Free Games Only. No VIP. No <br className="hidden sm:block" /> Pay
              After Win.
            </h1>
            <p className="text-sm leading-loose  text-wrap  md:mb-6  text-[#E6E7EB]">
              No VIP tiers. No hidden fees. No payments after wins—just pure
              betting excitement with <br className="hidden sm:block" />
              BetGenius!
            </p>
          </Fade>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6  w-full my-5">
            <img
              src={FreeGame1}
              alt=""
              className="object-contain h-full md:h-auto md:object-contain"
            />
            <img
              src={FreeGame2}
              alt=""
              className="object-contain h-full md:h-auto  md:object-contain"
            />
          </div>
        </div>
      </section>

      <section
        id="features"
        className="sm:min-h-screen  max-w-6xl mx-auto  px-2 sm:px-0 grid grid-cols-1 gap-y-2 sm:gap-y-4  sm:grid-cols-2 text-white "
      >
        {/* Text Section */}
        <div className=" flex flex-col  justify-center space-y-3 sm:space-y-4">
          <Fade triggerOnce direction="up" duration={1500} fraction={0.01}>
            <h1 className="md:text-5xl text-3xl md:leading-relaxed text-wrap font-bold ">
              Get Free Booking Codes
            </h1>
            <p className="text-sm leading-loose  text-wrap  text-[#E6E7EB]">
              Easily access the best booking codes from the top bookies you
              trust with <br className="hidden sm:block" />
              BetGenius.
            </p>
            <a href="#download">
              <button className="bg-[#2AFD84] text-[#101624] h-[47px] w-[193px] sm:h-[53px] sm:w-[222px] flex items-center justify-center rounded  space-x-1 text-center text-sm  font-semibold transition duration-300 md:hover:bg-[#24d06f]">
                <span>Download App Now</span>
                {/* arrow right svg */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  className=" h-5 m-0 p-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                  <line x1="2" y1="12" x2="16" y2="12" strokeWidth="2" />
                </svg>
              </button>
            </a>
          </Fade>
        </div>

        {/* Image Section */}
        <div className="">
          <Fade triggerOnce direction="up" duration={1500} fraction={0.01}>
            <img
              src={BookingCode}
              alt="Hero Image"
              className="   !object-cover  lg:h-auto"
            />
          </Fade>
        </div>
      </section>

      <section className="sm:min-h-screen  max-w-6xl mx-auto   px-2 md:px-0  flex flex-col  w-full justify-between text-white ">
        {/* Text Section */}
        <div className="flex-1 mb-8 md:mb-0 md:mr-8 flex flex-col gap-2 md:w-2/3 ">
          <Fade triggerOnce direction="up" duration={1500} fraction={0.01}>
            <h1 className="md:text-5xl text-3xl md:leading-relaxed text-wrap font-bold mb-4">
              Instant Sports Updates at Your Fingertips
            </h1>
            <p className="text-sm md:text-sm leading-loose w-11/12 text-wrap md:w-2/3 md:mb-6 mb-4 text-[#E6E7EB]">
              Stay updated with live scores, real-time results, and detailed
              match statistics from all your favorite sports, all in one place.
            </p>
          </Fade>
        </div>

        {/* Image Section */}
        <div className="items-center justify-center w-full  hidden sm:flex ">
          <img
            src={InstantUpdates}
            alt="Hero Image"
            loading="lazy"
            className="!object-cover  "
          />
        </div>
        <div className="items-center justify-center w-full flex   sm:hidden">
          <img
            src={SportUp}
            alt="Hero Image"
            loading="lazy"
            className="!object-cover  "
          />
        </div>
      </section>

      <section className="sm:min-h-screen  hidden sm:grid grid-cols-1 sm:grid-cols-2 justify-between px-2 md:px-0 md:pl-8  text-white  ">
        {/* Text Section */}
        <div className="flex flex-col space-y-5">
          <Fade triggerOnce direction="up" duration={1500} fraction={0.01}>
            <h1 className="md:text-5xl text-3xl leading-normal text-wrap font-bold mb-4">
              Your Source for Accurate Sports News
            </h1>
            <span className=" text-sm leading-loose  text-[#E6E7EB]">
              Get up-to-date and precise news, live updates, and in-depth
              analysis with the
              <br className="hidden sm:block" /> BetGenius App – your ultimate
              companion for staying informed.
            </span>
            <a href="#download">
              <button className="bg-[#2AFD84] text-[#101624] h-[53px] w-[222px] flex items-center justify-center rounded  text-sm  font-semibold transition duration-300 md:hover:bg-[#24d06f]">
                <span>Download App Now</span>
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
          </Fade>
        </div>

        {/* Image Section */}
        <div className=" flex justify-en">
          <img src={SportNews} alt="Hero Image" className="object-cover" />
        </div>
      </section>

      {/* download section */}
      <section
        id="download"
        className="sm:min-h-screen  px-2 sm:px-0 flex flex-col justify-center items-center space-y-5  w-full pb-20"
      >
        <Fade triggerOnce direction="up" duration={1000} fraction={0.01}>
          <h1 className="md:text-5xl text-3xl leading-relaxed text-wrap font-bold  text-white">
            Let&apos;s Win Together
          </h1>
        </Fade>
        {/* Image Section */}
        <div className="   ">
          <img
            src={WinTogether}
            alt="Hero Image"
            loading="lazy"
            className="hidden sm:block md:object-cover "
          />
          <img
            src={WinTog2}
            alt="Hero Image"
            className="  sm:hidden md:object-cover "
          />
        </div>
        <Fade triggerOnce direction="up" duration={500} fraction={0.01}>
          <div className="flex space-x-4 sm:space-x-8 px-1 pt-16">
            <a
              href="#download"
              className="h-[55px] w-[143px]  sm:w-[169px] sm:h-[65px] "
            >
              <img
                src={AppleStore}
                alt=""
                className="  h-[55px] w-[143px]  sm:w-[169px] sm:h-[65px]"
              />
            </a>
            <a
              href="#download"
              className="h-[55px] w-[143px]  sm:w-[169px] sm:h-[65px] "
            >
              <img
                src={GoogleStore}
                alt=""
                className=" h-[55px] w-[143px]  sm:w-[169px] sm:h-[65px]"
              />
            </a>
          </div>
        </Fade>
      </section>
    </div>
  );
}

export default Features;
