import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import logo from '../assets/logo-1-icon.svg';
const Header = () => {
  return (
    <header id='header' className='bg-white'>
      <Navbar fixed='top' expand='lg' className='bg-white bg-opacity-75'>
        <Container className='d-flex  align-items-lg-center gap-lg-5'>
          <Container className='d-flex justify-content-between align-items-center'>
            <Navbar.Brand className='d-inline-block '>
              <img src={logo} alt='logo-icon' className='inline-block' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='navbarScroll' />
            {/* <Button>
              <Bars2Icon className='h-6 w-6' />
            </Button> */}
          </Container>

          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='me-auto my-2 my-lg-0 d-flex justify-content-around align-items-center gap-4'
              style={{ maxHeight: '8rem' }}
              navbarScroll
            >
              <HashLink smooth to='/#home' className='text-decoration-none'>
                Home
              </HashLink>

              <HashLink
                smooth
                to='/#certifications'
                className='text-decoration-none'
              >
                Certifications
              </HashLink>

              <HashLink smooth to='/#grants' className='text-decoration-none'>
                Grants
              </HashLink>

              <HashLink smooth to='/#events' className='text-decoration-none'>
                Events
              </HashLink>

              <HashLink smooth to='/#news' className='text-decoration-none'>
                News
              </HashLink>

              <HashLink smooth to='/#contacts' className='text-decoration-none'>
                Contact
              </HashLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
