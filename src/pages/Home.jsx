const Home = () => {
  return (
    <>
      <section
        id='home'
        className='home d-flex justify-content-center align-items-center'
      >
        <div className='home-content '>
          <h1 className='title text-dark-gray'>Welcome to NEAR Balkans!</h1>
          <h2 className='info text-light-gray'>
            NEAR Balkans is the regional hub open for everyone interested in
            learning about, using or building on the NEAR protocol in the Balkan
            countries.
          </h2>
          <div className='d-flex flex-column w-100'>
            <p className='d-flex  align-items-center gap-1'>
              <span className='d-inline-block'> 🌱</span>
              <a href='#' className='text-decoration-none text-accent'>
                Certified Carbon Neutral
              </a>
            </p>
            <button className='btn btn-outline-dark w-50'>
              Join the community
            </button>
          </div>
        </div>
      </section>

      <section className='hub'>
        <video id='background-video' autoPlay loop muted>
          <source
            src='https://nearbalkans.org/wp-content/themes/nearbalkans/assets/images/hub-video.mp4'
            type='video/mp4'
          />
        </video>
        <div className='d-flex flex-column flex-lg-row justify-content-center h-100 w-100'>
          <h3 className='hub__title text-dark-gray'>
            NEAR Balkans Regional Hub
          </h3>
          <p className='text-light-gray'>
            NEAR Balkans Hub is among the first NEAR Ecosystem Regional Hubs set
            up globally. It was established through a collaboration between the
            NEAR Foundation and the Borderless Tech Association. NEAR Balkans
            was created in order to promote and accelerate web3 open source
            eco-system development.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
