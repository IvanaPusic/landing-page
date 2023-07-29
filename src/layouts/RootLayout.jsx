import { Header } from '../components';
import { Certifications, Contacts, Events, Home, News } from '../pages';

const RootLayout = () => {
  return (
    <div>
      <Header />
      <Home />
      <Certifications />

      <Events />
      <News />
      <Contacts />
      {/* <Error /> */}
    </div>
  );
};

export default RootLayout;
