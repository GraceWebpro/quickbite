import React from 'react'
import { FaMotorcycle, FaStar } from "react-icons/fa";
import Food1 from '../../assets/food1.png'
import Food2 from '../../assets/food2.png'
import Food3 from '../../assets/food3.png'
import bgImg from '../../assets/bgImg.png'


const ImageList = [
    {
        id: 1,
        img: Food1,
    },
    {
        id: 2,
        img: Food2,
    },
    {
        id: 3,
        img: Food3,
    },
];

const bgImage = {
    backgroundImage: `url(${bgImg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
}

const Hero = () => {

    const [imageId, setImageId] = React.useState(Food1);

  return (
    <>
      <div style={bgImage} className="min-h-[620px] sm:min-h-[600px] bg-white dark:bg-dark text-dark dark:text-light duration-200 flex justify-center items-center pt-10 mt-10">
        <div className="container pb-8 sm:pb-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
                {/* text content section */}
                <div
                data-aos="zoom-out"
                data-aos-duration="400"
                data-aos-once="true"
                className="flex flex-col justify-center gap-7 md:gap-8 pt-12 md:pt-0 text-center md:text-left order-2 md:order-1 max-w-xl"
                >
                {/* TRUST BADGE */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-center sm:justify-start">
                    <span className="bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 px-4 py-1 rounded-full text-xs font-semibold">                        
                        ⚡ Fast Delivery • Trusted by 500+ customers
                    </span>

                    
                </div>
                
                {/* HEADLINE */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                    Delicious Meals <br />
                    Delivered <span className="text-primary">Fast & Fresh</span>
                </h1>

                <div className="flex items-center justify-center md:justify-start gap-1 text-yellow-500 text-sm">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    <span className="text-gray-700 dark:text-gray-300 ml-2 text-xs">
                        Rated 4.9 by happy customers
                    </span>
                </div>

                {/* SUBTEXT */}
                <p className="text-base text-gray-600 dark:text-gray-400 max-w-lg mx-auto sm:mx-0">
                    Order your favorite meals from QuickBite and enjoy fast delivery,
                    affordable prices, and fresh taste — right at your doorstep.
                </p>

                {/* CTA BUTTONS */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
                    
                    {/* PRIMARY CTA */}
                    <a
                    href="https://wa.me/234XXXXXXXXXX?text=Hello%20QuickBite,%20I%20want%20to%20order"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" w-fit bg-primary text-white px-7 py-3.5 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 whitespace-nowrap"
                    >
                    Order on WhatsApp
                    </a>

                    {/* SECONDARY CTA */}
                    <a
                    href="#menu"
                    className="bg-white border border-primary text-primary px-6 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition duration-300 whitespace-nowrap"
                    >
                    View Menu
                    </a>
                </div>

                {/* MICRO TRUST TEXT */}
                <p className="bg-white text-xs text-gray-500 dark:text-gray-400">
                    Open daily • 30–45 min delivery • Secure ordering
                </p>
                
                </div>


                {/* Image section */}
                <div className="order-1 md:order-2 min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative">

                    {/* glowing background */}
                    <div className="absolute w-60 h-60 md:w-72 md:h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>

                    {/* main image section */}
                    <div className="flex justify-center items-center h-[300px] sm:h-[450px] overflow-hidden">
                        <img 
                            data-aos="zoom-in"
                            data-aos-duration="300"
                            data-aos-once="true"
                            src={imageId} alt="" className='w-[260px] sm:w-[320px] md:w-[380px] lg:w-[450px] mx-auto md:scale-110 lg:scale-125 spin aos-init aos-animate animate-[float_6s_ease-in-out_infinite]' />
                    </div>

                    {/* DELIVERY TIME BADGE */}
                    <div className="absolute top-6 right-6 bg-white dark:bg-[#1f1835] shadow-lg px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2">
                    <FaMotorcycle className="text-primary" />
                    30–45 min
                    </div>

                    {/* FLOATING BADGE */}
                    <div className="absolute bottom-16 left-6 bg-white dark:bg-[#1f1835] shadow-lg px-4 py-2 rounded-xl text-sm font-semibold">
                    🔥 Hot & Fresh
                    </div>


                    {/* image list section */}
                    <div className="flex md:flex-row lg:flex-col justify-center gap-4 absolute bottom-[-20px] lg:top-1/2 lg:-translate-y-1/2 lg:-right-10 bg-white/30 dark:bg-dark/40 rounded-full p-2">                        {
                            ImageList.map((item) => (
                                <img 
                                    data-aos="zoom-in"
                                    data-aos-duration="400"
                                    data-aos-once="true"
                                    key={item.id} 
                                    src={item.img} 
                                    alt="" 
                                    className="max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200 aos-init aos-animate"
                                    onClick={() => {setImageId(item.id === 1 ? Food1 : item.id === 2 ? Food2 : Food3)}} 
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Hero
