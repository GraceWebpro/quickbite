import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../../utils/constants';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useScrollSpy, scrollToSection } from '../hooks/useScrollSpy';
import BrandLogo from './../../assets/brandLogo.png'
import styles from './../../NewHome.module.css';
import { FaCartShopping } from 'react-icons/fa6'
import ThemeToggle from './ThemeToggle';
import CartIcon from '../sections/cart/CartIcon';
import CartDrawer from '../sections/cart/CartDrawer';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const activeSection = useScrollSpy(NAV_LINKS.map(link => link.id));

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (link) => {
    setIsMenuOpen(false);

    if (link.type === "route") {
      navigate(link.path);
      return;
    }

    const scrollAction = () => {
      if (location.pathname !== "/") {
        navigate("/", { state: { scrollTo: link.id } });
      } else {
        scrollToSection(link.id);
      }
    };

    setTimeout(scrollAction, 320);
  };

  return (
    <>
    <nav 
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''} 
      bg-white dark:bg-dark
      text-dark dark:text-light
      sticky top-0 z-50
      transition-all duration-300`}>     
      <div className={styles['navbar-inner']}>
        {/* Logo */}
        <div
          className="flex items-center gap-2 text-2xl sm:text-3xl font-bold"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img src={BrandLogo} alt='brand-logo' className={styles['brand-logo']} />
          <Link to='/'><span>Quick<span className='text-primary'>Bite</span></span></Link>
        </div>

        {/* Desktop Nav */}
        <div className={styles['nav-links']}>
          {NAV_LINKS.map(link => {
            const isActive =
              link.type === "route"
                ? location.pathname === link.path
                : activeSection === link.id;

            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link)}
                className={`
                  px-4 py-2 rounded-lg font-medium transition
                  text-dark dark:text-light
                  hover:text-primary
                  ${isActive ? "text-primary" : ""}
                `}
              >
                {link.label}
              </button>
            );
          })}
        </div>

        {/* Right-side CTA / User */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* right side */}
          <div className='hidden lgx:block'>
            <ThemeToggle variant="neon" />
          </div>
          <Link to='/order' className='hidden lgx:block'>
            <button className="bg-gradient-to-r from-primary font-medium to-secondary text-white hadow-lg px-5 py-3 rounded-xl hover:scale-105 duration-300 flex items-center gap-2 transition">
              Order Now
            </button>
          </Link>

          <CartIcon onClick={() => setIsCartOpen(true)} />

          
          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lgx:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition"            aria-label='menu'
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
     {/* Mobile menu */}
      <div
        className={`lgx:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-[90vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white dark:bg-dark border-t dark:border-white/10 px-5 py-6 space-y-6">

          {/* NAV LINKS */}
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.type === "route"
                  ? location.pathname === link.path
                  : activeSection === link.id;

              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link)}
                  className={`text-left px-4 py-3 rounded-lg font-medium transition ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-gray-100 dark:hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div>
            <ThemeToggle variant="neon" />
          </div>

          {/* ORDER CTA */}
          <Link to="/order">
            <button className="w-full bg-gradient-to-r from-primary to-secondary text-white font-medium px-5 py-3 mt-6 rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] transition">
              Order Now
            </button>
          </Link>

        </div>
      </div>

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </nav>

    </>
  );
};

export default Navbar;
