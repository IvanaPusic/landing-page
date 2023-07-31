import goalsImg from '../assets/goals.png';
import nearBalkans from '../assets/near-balkans.svg';
import { cardInfo, goalsInfo } from '../data';
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
            {goalsInfo.map((goal) => {
              const { id, text } = goal;
              return (
                <p className='info text-light-gray' key={id}>
                  {text}
                </p>
              );
            })}
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
        {cardInfo.map((card) => {
          const { id, image, title, info, buttonText } = card;

          return (
            <article className='education-card' key={id}>
              <div className='img-container'>
                <img src={image} alt={title} />
              </div>
              <h4 className='title text-dark-gray'>{title}</h4>
              <p className='info text-light-gray'>{info}</p>
              <button className='card-btn btn btn-outline-dark'>
                {buttonText}
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Certifications;
