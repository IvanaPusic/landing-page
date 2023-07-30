import communityIcon from '../assets/community-icon.svg';
import educationIcon from '../assets/education-icon.svg';
import goalsImg from '../assets/goals.png';
import groupIcon from '../assets/group-icon.svg';
import hackatonsIcon from '../assets/hackatons-icon.svg';
import nearBalkans from '../assets/near-balkans.svg';
const Certifications = () => {
  return (
    <section id='certifications' className='certifications container-fluid '>
      <div className='row goals'>
        <div className='row justify-content-lg-center align-items-lg-center'>
          <h3 className='col-md-12 goals-title text-dark-gray'>
            NEAR Balkan Goals
          </h3>
        </div>
        <div className='row goals-content justify-content-lg-center align-items-lg-center'>
          <div className='col-md-6 goals-info'>
            <p className='info text-light-gray'>
              Educate the community and demonstrate the potential of web 3 for
              development across the Balkan region through a series of meetups,
              hackathons, university partnerships, and much more.
            </p>
            <p className=' info text-light-gray'>
              Facilitate innovation and help project development within the NEAR
              Ecosystem through partnerships with teams, companies and
              organizations across Balkan.
            </p>
            <p className='info text-light-gray'>
              Facilitate innovation and help project development within the NEAR
              Ecosystem through partnerships with teams, companies and
              organizations across Balkan.
            </p>
            <p className='info text-light-gray'>
              Certified Education programs and internships.
            </p>
          </div>
          <div className='col-md-6'>
            <div className='goals-img-container'>
              <img src={goalsImg} alt='goals' className='inline-block ' />
              <img
                src={nearBalkans}
                alt='near-balkans-icon'
                className='d-none'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='education'>
        <div className='education-card '>
          <div className='img-container'>
            <img src={educationIcon} alt='education-icon' />
          </div>
          <h4 className='text-dark-gray title'>Education & Certification</h4>
          <p className='text-light-gray info'>
            Whether you’re a developer, a tech enthusiast, an entrepreneur
            looking to make the jump from web2 to web3, or simply curious about
            NEAR technology, the NEAR Balkans Education Program has got you
            covered.
          </p>
          <button className='btn-outline-dark btn card-btn'>Start now</button>
        </div>
        <div className='education-card'>
          <div className='img-container'>
            <img src={groupIcon} alt='group-icon' />
          </div>
          <h4 className='text-dark-gray title'>Meet-Ups</h4>
          <p className='text-light-gray info'>
            NEAR Balkans hub organises #NEARby meet-ups in different cities in
            the Balkans region. This is a great opportunity to meet other
            community members, and get more involved in the regional hub!
          </p>
          <button className='btn btn-outline-dark card-btn'>Attend</button>
        </div>
        <div className='education-card '>
          <div className='img-container'>
            <img src={hackatonsIcon} alt='hackatons-icon' />
          </div>
          <h4 className='text-dark-gray title'>Hackatons</h4>
          <p className='text-light-gray info'>
            There will be a series of online and offline hackathons organized by
            the NEAR Balkans hub in the coming months. Follow the updates & get
            ready to build and get rewarded, Balkans developer community!
          </p>
          <button className='btn btn-outline-dark card-btn'>
            Stay-up-to-date
          </button>
        </div>
        <div className='education-card'>
          <div className='img-container'>
            <img src={communityIcon} alt='community' />
          </div>
          <h4 className='text-dark-gray title'>Community Empowerment</h4>
          <p className='text-light-gray info'>
            NEAR empowers millions to invent and explore new experiences. Get
            in, connect, learn & build!
          </p>
          <button className='btn btn-outline-dark card-btn'>Read More</button>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
