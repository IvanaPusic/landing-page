import { Header } from '../components';
import { Certifications, Contacts, Events, Grants, Home, News } from '../pages';

const RootLayout = () => {
  return (
    <div>
      <Header />
      <Home />
      <Certifications />
      <Grants />
      <Events />
      <News />
      <Contacts />
      {/* <Error /> */}
    </div>
  );
};

export default RootLayout;
