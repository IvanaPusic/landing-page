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
        <Route index element={<Home />} errorElement={<Error />} />
        <Route
          path='certifications'
          element={<Certifications />}
          errorElement={<Error />}
        />
        <Route
          path='certifications'
          element={<Grants />}
          errorElement={<Error />}
        />
        <Route path='events' element={<Events />} errorElement={<Error />} />
        <Route path='news' element={<News />} errorElement={<Error />} />
        <Route path='contact' element={<Contacts />} errorElement={<Error />} />
      </Route>
    </>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
