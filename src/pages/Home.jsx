const Home = () => {
  return (
    <>
      <main
        id='home'
        className='home d-flex justify-content-lg-start align-items-lg-start'
      >
        <div className='home-content'>
          <h1 className='title text-dark-gray'>Welcome to NEAR Balkans!</h1>
          <h2 className='info text-light-gray'>
            NEAR Balkans is the regional hub open for everyone interested in
            learning about, using or building on the NEAR protocol in the Balkan
            countries.
          </h2>
          <div className=' d-flex flex-column w-100 carbon'>
            <p className='d-flex  align-items-center gap-1 '>
              <span className='d-inline-block carbon-icon'> 🌱</span>
              <a
                href='#'
                className='text-decoration-none text-accent carbon-link'
              >
                Certified Carbon Neutral
              </a>
            </p>
            <button className='carbon-btn btn btn-outline-dark w-50'>
              Join the community
            </button>
          </div>
        </div>
      </main>

      <section className='hub'>
        <video id='background-video' autoPlay loop muted>
          <source
            src='https://nearbalkans.org/wp-content/themes/nearbalkans/assets/images/hub-video.mp4'
            type='video/mp4'
          />
        </video>
        <div className='hub-content'>
          <h3 className='title text-dark-gray '>NEAR Balkans Regional Hub</h3>
          <p className='info text-light-gray'>
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
