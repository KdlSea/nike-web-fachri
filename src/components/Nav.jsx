import React, { useEffect, useState } from 'react'
import {headerLogo} from '../assets/images';
import {hamburger } from '../assets/icons';
import { navLinks } from '../constants';
const Nav = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`padding-x py-8 w-full 
    ${isVisible ? 'fixed shadow-xl' : 'absolute'} bg-white z-20  top-0'`}>
        <nav className='flex justify-between items-center
        max-container'>
            <a href='/'>
                <img src={headerLogo} alt='logo'
                width={130}
                height={29}/>
            </a>
            <ul className='flex flex-1 justify-center items-center
            gap-16 max-lg:hidden'> 
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className='
                    fonts-monserrat leading-normal text-lg
                    text-slate-gray'>
                      {item.label}
                    </a>
                  </li>
                ))

                }
            </ul>
            <div className='flex justify-end hidden max-lg:block cursor-pointer z-10'>
              <img src={hamburger}
              alt="Hamburger"
              width={25}
              height={25} onClick={() => setisMenuOpen(!isMenuOpen)}>
              </img>
              {console.log(isMenuOpen)}
            </div>
            <div className={`absolute lg:hidden top-20 left-0 w-full
              bg-white flex flex-col items-center gap-6 fonts-monserrat 
              leading-normal text-[32px] text-slate-gray transform
              transition-transform ${isMenuOpen ? 'animate-swing-in-top-fwd' : 'animate-swing-out-top-fwd'}`
              }>
                {navLinks.map((item) => (
                  <li key={item.label} className='list-none'>
                    <a href={item.href} className={`
                    fonts-monserrat leading-normal text-lg
                    text-slate-gray`}>
                      {item.label}
                    </a>
                  </li>
                ))

                }
            </div>
        </nav>
    </header>
  )
}

export default Nav