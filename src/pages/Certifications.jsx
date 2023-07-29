import communityIcon from '../assets/community-icon.svg';
import educationIcon from '../assets/education-icon.svg';
import goalsImg from '../assets/goals.png';
import groupIcon from '../assets/group-icon.svg';
import hackatonsIcon from '../assets/hackatons-icon.svg';

const Certifications = () => {
  return (
    <section className='certifications'>
      <div className='goals'>
        <div className='goals-content'>
          <h3 className='text-dark-gray'>NEAR Balkans Goals:</h3>
          <p className='text-light-gray'>
            Educate the community and demonstrate the potential of web 3 for
            development across the Balkan region through a series of meetups,
            hackathons, university partnerships, and much more.
          </p>
          <p className='text-light-gray'>
            Facilitate innovation and help project development within the NEAR
            Ecosystem through partnerships with teams, companies and
            organizations across Balkan.
          </p>
          <p className='text-light-gray'>
            Facilitate innovation and help project development within the NEAR
            Ecosystem through partnerships with teams, companies and
            organizations across Balkan.
          </p>
          <p className='text-light-gray'>
            Certified Education programs and internships.
          </p>
        </div>
        <div className='goals-img-container'>
          <img src={goalsImg} alt='goals' />
        </div>
      </div>
      <div className='education'>
        <div className='education-card'>
          <div className='img-container'>
            <img src={educationIcon} alt='education-icon' />
          </div>
          <h4 className='text-dark-gray'>Education & Certification</h4>
          <p className='text-light-gray'>
            Whether you’re a developer, a tech enthusiast, an entrepreneur
            looking to make the jump from web2 to web3, or simply curious about
            NEAR technology, the NEAR Balkans Education Program has got you
            covered.
          </p>
          <button className='btn-outline-dark btn'>Start now</button>
        </div>
        <div className='education-card'>
          <div className='img-container'>
            <img src={groupIcon} alt='group-icon' />
          </div>
          <h4 className='text-dark-gray'>Meet-Ups</h4>
          <p className='text-light-gray'>
            NEAR Balkans hub organises #NEARby meet-ups in different cities in
            the Balkans region. This is a great opportunity to meet other
            community members, and get more involved in the regional hub!
          </p>
          <button className='btn btn-outline-dark'>Attend</button>
        </div>
        <div className='education-card'>
          <div className='img-container'>
            <img src={hackatonsIcon} alt='hackatons-icon' />
          </div>
          <h4 className='text-dark-gray'>Hackatons</h4>
          <p className='text-light-gray'>
            There will be a series of online and offline hackathons organized by
            the NEAR Balkans hub in the coming months. Follow the updates & get
            ready to build and get rewarded, Balkans developer community!
          </p>
          <button className='btn btn-outline-dark'>Stay-up-to-date</button>
        </div>
        <div className='education-card'>
          <div className='img-container'>
            <img src={communityIcon} alt='community' />
          </div>
          <h4 className='text-dark-gray'>Community Empowerment</h4>
          <p className='text-light-gray'>
            NEAR empowers millions to invent and explore new experiences. Get
            in, connect, learn & build!
          </p>
          <button className='btn btn-outline-dark'>Read More</button>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
