import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { RootLayout } from './layouts';
import {
  Certifications,
  Contacts,
  Error,
  Events,
  Grants,
  Home,
  News,
} from './pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='certifications' element={<Certifications />} />
        <Route path='grants' element={<Grants />} />
        <Route path='events' element={<Events />} />
        <Route path='news' element={<News />} />
        <Route path='contact' element={<Contacts />} />
      </Route>
      <Route path='/*' element={<Error />} />
    </>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
