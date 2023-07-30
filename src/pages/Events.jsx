import eventsImg from '../assets/events.png';

const Events = () => {
  return (
    <section className='events min-vh-100 ' id='events'>
      <div className='events-content'>
        <h3 className='title text-dark-gray'>Upcoming events</h3>
        <p className='info text-light-gray'>
          Stay up-to-date on all upcoming events and news around the NEAR
          Ecosystem in the region and globally.
        </p>
      </div>
      <div className='events-calendar'>
        <img src={eventsImg} alt='events' />
      </div>
    </section>
  );
};

export default Events;
