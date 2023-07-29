import { HashLink } from 'react-router-hash-link';
import links from '../data';
const MobileMenu = () => {
  return (
    <div className=' vw-100 vh-100 z-2 bg-white position-fixed d-flex justify-content-center align-items-center'>
      <nav className='navbar'>
        <ul className='navbar-nav flex-column justify-content-center align-items-center gap-4'>
          {links.map((link) => {
            return (
              <li key={link.id}>
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
      </nav>
    </div>
  );
};

export default MobileMenu;
