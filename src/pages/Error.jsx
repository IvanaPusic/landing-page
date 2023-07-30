import { Link } from 'react-router-dom';
import face from '../assets/face.png';
const Error = () => {
  return (
    <section className='error min-vh-100 d-flex justify-content-center align-items-center flex-column'>
      <div className='error-content'>
        <button className='btn btn-dark error-btn'>
          <Link to='/#home' className='text-decoration-none text-white'>
            Go back home
          </Link>
        </button>

        <div className='not-found d-flex flex-column justify-content-around align-items-center gap-5'>
          <h3 className='title text-dark-gray'>Oops! Something went wrong.</h3>
          <div className='not-found-images'>
            <img src={face} alt='' className='d-inline-block w-sm-25 h-sm-15' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error;
