import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa'
import BrandLogo from './../../assets/brandLogo.png'
import styles from './../../NewHome.module.css';
import { Link, useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  return (
    <div className='bg-gray-100 dark:bg-gray-950'>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-3 py-5">
            <div className="py-8 px-4">
            <div
                className="flex items-center gap-2 text-2xl sm:text-3xl font-bold"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                <img src={BrandLogo} alt='brand-logo' className={styles['brand-logo']} />
                <Link to='/'><span>Quick<span className='text-primary'>Bite</span></span></Link>
            </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde facere ab hic accusamus omnis dolor voluptatibus illo, tempore eum tenetur.
                </p>
                <br />
                <div className="flex items-center gap-3">
                    <FaLocationArrow />
                    <p>Lagos, Nigeria.</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                    <FaMobileAlt />
                    <p>+234 907 789 9060</p>
                </div>

                {/* Social handles */}
                <div className="flex items-center gap-3 mt-6">
                    <a href="#">
                        <FaInstagram className="text-3xl" />
                    </a>
                    <a href="#">
                        <FaFacebook className="text-3xl" />
                    </a>
                    <a href="#">
                        <FaLinkedin className="text-3xl" />
                    </a>
                </div>
            </div>

            
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
                <div>
                    <div className="py-8 px-4">
                        <h1 className="text-xl font-bold text-justify sm:text-left mb-3">Important Links</h1>
                        <ul className="flex flex-col gap-3">
                            <li>Home</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Login</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="py-8 px-4">
                        <h1 className="text-xl font-bold text-justify sm:text-left mb-3">Important Links</h1>
                        <ul className="flex flex-col gap-3">
                            <li>Home</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Login</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="py-8 px-4">
                        <h1 className="text-xl font-bold text-justify sm:text-left mb-3">Important Links</h1>
                        <ul className="flex flex-col gap-3">
                            <li>Home</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Login</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>

        <div>
            <div className="text-center py-10 border-t-2 border-gray-300/50">
                @copyright 2026 All rights reserved || Made with ❤️ by GraceTech'
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
