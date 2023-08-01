import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className='error vh-100 '>
      <button className='error-btn btn btn-dark text-white'>
        <Link to='/#home'>Home</Link>
      </button>
      <div className='not-found w-100 h-100 d-flex justify-content-center align-items-center'>
        <h4>Oops something went wrong!</h4>
      </div>
    </section>
  );
};

export default Error;
