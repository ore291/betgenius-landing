import FreeGame1 from "../assets/free-games-2.png";
import FreeGame2 from "../assets/free-games-1.png";
import BookingCode from "../assets/booking-code.png";
import InstantUpdates from "../assets/instant-updates.png";
import SportNews from "../assets/sport-news.png";
import SportUp from "../assets/sportup2.png";
import WinTogether from "../assets/win-together.png";
import AppleStore from "../assets/applestore.png";
import GoogleStore from "../assets/googlestore.png"
import WinTog2 from "../assets/wintog2.png"



function Features() {
  return (
    <div className="flex space-y-10 flex-col mt-12 md:mt-28">
      <section
        id="about"
        className="flex flex-col md:flex-row items-start w-full  px-3 sm:px-10   text-white md:h-screen "
      >
        <div className="flex-1 mb-8 md:mb-0 md:mr-8 flex flex-col gap-2  ">
          <h1 className="md:text-5xl text-3xl md:leading-relaxed text-wrap font-bold mb-4 md:w-3/5">
            Free Games Only. No VIP. No <br className="hidden sm:block" /> Pay
            After Win.
          </h1>
          <p className="text-sm leading-loose  text-wrap  md:mb-6 mb-4 text-[#E6E7EB]">
            No VIP tiers. No hidden fees. No payments after wins—just pure
            betting excitement with <br className="hidden sm:block" />
            BetGenius!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  w-full mb-5">
            <img src={FreeGame1} alt="" className="object-cover h-[600px] md:h-auto md:object-contain" />
            <img src={FreeGame2} alt="" className="object-cover h-[600px] md:h-auto  md:object-contain" />
          </div>
        </div>
      </section>
      <section
        id="features"
        className="mt-10 sm:mt-20 md:h-screen content-center items-center px-4 sm:px-10 grid grid-cols-1 gap-y-4 sm:grid-cols-2 text-white "
      >
        {/* Text Section */}
        <div className="  flex flex-col  justify-center space-y-3 sm:space-y-4">
          <h1 className="md:text-5xl text-3xl md:leading-relaxed text-wrap font-bold ">
            Get Free Booking Codes
          </h1>
          <p className="text-sm leading-loose  text-wrap  text-[#E6E7EB]">
            Easily access the best booking codes from the top bookies you trust
            with <br className="hidden sm:block" />
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
        </div>

        {/* Image Section */}
        <div className=" ">
          <img
            src={BookingCode}
            alt="Hero Image"
            className="   !object-cover md:h-[700px]"
          />
        </div>
      </section>
      <section className="px-3 md:px-10  flex flex-col  w-full justify-between text-white ">
        {/* Text Section */}
        <div className="flex-1 mb-8 md:mb-0 md:mr-8 flex flex-col gap-2 md:w-2/3 ">
          <h1 className="md:text-5xl text-3xl md:leading-relaxed text-wrap font-bold mb-4">
            Instant Sports Updates at Your Fingertips
          </h1>
          <p className="text-sm md:text-sm leading-loose w-11/12 text-wrap md:w-2/3 md:mb-6 mb-4 text-[#E6E7EB]">
            Stay updated with live scores, real-time results, and detailed match
            statistics from all your favorite sports, all in one place.
          </p>
        </div>

        {/* Image Section */}
        <div className="items-center justify-center w-full  hidden sm:flex ">
          <img
            src={InstantUpdates}
            alt="Hero Image"
            className="!object-cover  "
          />
        </div>
        <div className="items-center justify-center w-full flex   sm:hidden">
          <img
            src={SportUp}
            alt="Hero Image"
            className="!object-cover  "
          />
        </div>
      </section>

      <section className="hidden sm:grid grid-cols-1 sm:grid-cols-2 justify-between p-4 md:p-0 md:pl-8 md:py-10 text-white  ">
        {/* Text Section */}
        <div className="flex flex-col space-y-5 sm:pt-28">
          <h1 className="md:text-5xl text-3xl leading-relaxed text-wrap font-bold mb-4">
            Your Source for Accurate Sports News
          </h1>
          <span className=" text-sm leading-loose  text-[#E6E7EB]">
            Get up-to-date and precise news, live updates, and in-depth analysis
            with the<br className="hidden sm:block" /> <br className="hidden sm:block" />BetGenius App – your ultimate companion for staying
            informed.
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
        </div>

        {/* Image Section */}
        <div className=" flex justify-en">
          <img
            src={SportNews}
            alt="Hero Image"
            className="object-cover"
          />
        </div>
      </section>

      {/* download section */}
      <section
        id="download"
        className="px-2 sm:px-10 flex flex-col justify-center items-center space-y-3  w-full pb-20"
      >
        <h1 className="md:text-5xl text-3xl leading-relaxed text-wrap font-bold  text-white">
          Let&apos;s Win Together
        </h1>
        {/* Image Section */}
        <div className=" flex  ">
          <img
            src={WinTogether}
            alt="Hero Image"
            className="hidden sm:block md:object-cover "
          />
          <img
            src={WinTog2}
            alt="Hero Image"
            className="  sm:hidden md:object-cover "
          />
        </div>
        <div className="flex space-x-4 sm:space-x-8 px-1">
          <a href="#download" className="h-[55px] w-[143px]  sm:w-[169px] sm:h-[65px] ">
            <img
              src={AppleStore}
              alt=""
              className="  h-[55px] w-[143px]  sm:w-[169px] sm:h-[65px]"
            />
          </a>
          <a href="#download" className="h-[55px] w-[143px]  sm:w-[169px] sm:h-[65px] ">
          <img
              src={GoogleStore}
              alt=""
              className=" h-[55px] w-[143px]  sm:w-[169px] sm:h-[65px]"
            />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Features;
