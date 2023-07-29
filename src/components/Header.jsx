import { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { TbAlignRight } from 'react-icons/tb';
import { HashLink } from 'react-router-hash-link';
import logo from '../assets/logo-1-icon.svg';
import links from '../data';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      {isNavOpen && <MobileMenu />}
      <header id='header'>
        <nav className='navbar navbar-expand-lg fixed-top bg-white bg-opacity-75'>
          <div className='navigation container-fluid'>
            <div className='navbar-brand'>
              <img src={logo} alt='logo' />
            </div>

            <button
              type='button'
              className='btn btn-outline-dark d-lg-none'
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              {isNavOpen ? <MdClose /> : <TbAlignRight />}
            </button>
            <ul className=' nav-list navbar-nav d-none d-lg-flex justify-content-lg-around align-items-lg-center'>
              {links.map((link) => {
                return (
                  <li className='link-container' key={link.id}>
                    <HashLink
                      className='text-decoration-none text-light-gray'
                      smooth
                      to={link.link}
                    >
                      {link.linkName}
                    </HashLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
