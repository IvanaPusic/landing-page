import { Container } from 'react-bootstrap';

// const sectionStyle = {
//   height: '53.0625rem',
//   width: '100%',
//   backgroundImage: `url(${background})`,
//   backgroundRepeat: 'no-repeat',
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
// };

const Home = () => {
  return (
    <section
      // style={sectionStyle}
      className='d-flex justify-content-around align-items-center bg-image '
    >
      <Container>
        <h1 className='text-dark text-large'>Welcome to NEAR Balkans</h1>
        <p className='lead'>
          NEAR Balkans is the regional hub open for everyone interested in
          learning about, using or building on the NEAR protocol in the Balkan
          countries.
        </p>
        <a href='#'>
          <span>🌱</span>
          Certified Carbon Neutral
        </a>
        {/* <button className='btn '>New btn</button> */}
      </Container>
    </section>
  );
};

export default Home;
