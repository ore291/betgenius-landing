import FreeGame1 from '../assets/free-games-2.png'
import FreeGame2 from '../assets/free-games-1.png'
import BookingCode from '../assets/booking-code.png'
import InstantUpdates from '../assets/instant-updates.png'
import SportNews from '../assets/sport-news.png';
import WinTogether from '../assets/win-together.png';
import AppleStore from '../assets/apple-store.svg';
import GooglePlayStore from '../assets/google-store.svg';
function Features() {
    return (
        <div className='flex md:gap-28 flex-col md:mt-28'>
            <section id='about' className="flex flex-col md:flex-row items-start w-full  max-w-6xl mx-auto  p-4 md:p-8  text-white md:h-screen ">
                <div className="flex-1 mb-8 md:mb-0 md:mr-8 flex flex-col gap-2  ">
                    <h1 className="md:text-4xl text-2xl md:leading-relaxed text-wrap font-bold mb-4 md:w-3/5">
                        Free Games Only. No VIP. No Pay After Win.
                    </h1>
                    <p className="text-sm leading-loose w-11/12 text-wrap md:w-2/3 md:mb-6 mb-4 text-[#E6E7EB]">
                        No VIP tiers. No hidden fees. No payments after wins—just pure betting excitement with BetGenius!
                    </p>

                    <div className='flex flex-col md:flex-row gap-4 md:gap-2 w-full mb-5'>
                        <img src={FreeGame1} alt="" className='md:w-1/2  md:object-contain' />
                        <img src={FreeGame2} alt="" className='md:w-1/2  md:object-contain' />
                    </div>



                </div>

            </section>
            <section id='features' className="max-w-6xl mx-auto flex flex-col md:flex-row items-center w-full justify-between p-4 md:p-8 md:mt-36 text-white md:h-screen  ">
                {/* Text Section */}
                <div className="flex-1 mb-8 md:mb-0 md:mr-8 flex flex-col gap-2 md:w-2/3 ">
                    <h1 className="md:text-4xl text-2xl md:leading-relaxed text-wrap font-bold md:mb-4 mb-2">
                        Get Free Booking Codes
                    </h1>
                    <p className="text-sm leading-loose w-11/12 text-wrap md:w-2/3 md:mb-6 mb-4 text-[#E6E7EB]">
                        Easily access the best booking codes from the top bookies you trust with BetGenius.
                    </p>
                    <a href="#download">
                        <button className="bg-[#2AFD84] text-[#101624] py-3 px-4 flex items-center gap-2 rounded md:w-2/5 text-center text-sm  font-semibold transition duration-300 md:hover:bg-[#24d06f]">
                            <span>Download App Now</span>
                            {/* arrow right svg */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className=" h-5 m-0 p-0">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                <line x1="2" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="2" />
                            </svg>
                        </button>
                    </a>



                </div>

                {/* Image Section */}
                <div className="md:w-1/3 flex md:justify-end mx-auto justify-center md:items-end w-full  ">
                    <img
                        src={BookingCode}
                        alt="Hero Image"
                        className=" md:mt-32 max-w-md !object-cover md:max-w-3xl mx-auto md:max-h-[750px]  md:object-contain"
                    />
                </div>


            </section>
            <section className="max-w-6xl mx-auto  flex flex-col  w-full justify-between p-4 md:p-8  text-white md:h-screen ">
                {/* Text Section */}
                <div className="flex-1 mb-8 md:mb-0 md:mr-8 flex flex-col gap-2 md:w-2/3 ">
                    <h1 className="md:text-5xl text-2xl md:leading-relaxed text-wrap font-bold mb-4">
                        Instant Sports Updates at Your Fingertips
                    </h1>
                    <p className="text-sm md:text-sm leading-loose w-11/12 text-wrap md:w-2/3 md:mb-6 mb-4 text-[#E6E7EB]">
                        Stay updated with live scores, real-time results, and detailed match statistics from all your favorite sports, all in one place.
                    </p>




                </div>

                {/* Image Section */}
                <div className="items-center justify-center w-full flex  max-h-full">
                    <img
                        src={InstantUpdates}
                        alt="Hero Image"
                        className="max-w-md !object-cover md:max-w-3xl max-h-[400px] md:max-h-[750px]   md:object-contain"
                    />
                </div>


            </section>
            <section className="flex flex-col md:flex-row items-center w-full justify-between p-4 md:p-0 md:pl-8 md:mt-28 text-white md:h-screen ">
                {/* Text Section */}
                <div className="flex-1 mb-8 md:mb-0 md:mr-8 flex flex-col gap-2 md:w-2/3 ">
                    <h1 className="md:text-4xl text-2xl leading-relaxed text-wrap font-bold mb-4">
                        Your Source for Accurate Sports News
                    </h1>
                    <p className=" text-sm leading-loose w-11/12 text-wrap md:w-2/3 md:mb-6 mb-4 text-[#E6E7EB]">
                        Get up-to-date and precise news, live updates, and in-depth analysis with the BetGenius App – your ultimate companion for staying informed.
                    </p>
                    <a href="#download">
                        <button className="bg-[#2AFD84] text-[#101624] py-3 px-4 flex items-center gap-2 rounded md:w-2/5  text-sm  font-semibold transition duration-300 md:hover:bg-[#24d06f]">
                            <span>Download App Now</span>
                            {/* arrow right svg */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                <line x1="2" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="2" />
                            </svg>
                        </button>
                    </a>



                </div>

                {/* Image Section */}
                <div className=" flex justify-en max-h-full">
                    <img
                        src={SportNews}
                        alt="Hero Image"
                        className="max-w-md !object-cover md:h-screen md:object-contain"
                    />
                </div>


            </section>
            {/* download section */}
            <section id='download' className='mx-auto max-w-6xl flex flex-col justify-center items-center space-y-8  w-full overflow-y-hidden md:pt-5' >
                <h1 className="md:text-5xl text-2xl leading-relaxed text-wrap font-bold  text-white">
                    Let&apos;s Win Together
                </h1>
                {/* Image Section */}
                <div className=" flex  md:h-[500px]">
                    <img
                        src={WinTogether}
                        alt="Hero Image"
                        className=" md:object-contain "
                    />
                </div>
                <div className='flex gap-2'>
                    <a href="#download" >
                        <img src={AppleStore} alt="" className='h-24 md:h-32 w-48 object-contain' />
                    </a>
                    <a href="#download" >
                        <img src={GooglePlayStore} alt="" className='h-24 md:h-32 w-48 object-contain' />
                    </a>
                </div>
            </section>
        </div>


    )
}

export default Features;