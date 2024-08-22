import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Root from './components/root';
import Dashboard from './components/dashboard';
import Activites_List from './components/Dashboard/Activites_List';
import Loader from './components/loader';
import React, { Suspense } from 'react';
import User from './components/Dashboard/User';
import Salonadmin from './components/Dashboard/salonadmin';
import Publication from './components/Dashboard/Publication';
import Salon from './components/Dashboard/salon';
import Chat from './components/Dashboard/chat';
const Login = React.lazy(() => import('./components/login'));
const Signup = React.lazy(() => import('./components/signup'));
const Landing = React.lazy(() => import('./components/landing'));
const FileManager = React.lazy(() => import('./components/Dashboard/appointment'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/"
        element={<Root />}
      >
        <Route path='dashboard'
          element={<Dashboard />}
        // errorElement={<ErrorPage />}
        >
          <Route path='salonAdmin'
            element={<Salonadmin />}
          // loader={getElectionResult}
          // errorElement={<ErrorPage />}
          />
          <Route path='appointment'
            element={<Suspense fallback={<Loader />}>
              <FileManager />
            </Suspense>}
          // loader={getElectionResult}
          // errorElement={<ErrorPage />}
          />
          <Route path='publication'
            element={<Publication />}
          // loader={getElectionResult}
          // errorElement={<ErrorPage />}
          />
          <Route path='salon'
            element={<Salon />}
          // loader={getElectionResult}
          // errorElement={<ErrorPage />}
          />
          <Route path='chat'
            element={<Chat />}
          // loader={getElectionResult}
          // errorElement={<ErrorPage />}
          />
          <Route path='user'
            element={<User />}
          // loader={getElectionResult}
          // errorElement={<ErrorPage />}
          />
        </Route>
        <Route path='signup'
          element={
            <Suspense fallback={<Loader />}>
              <Signup />
            </Suspense>}
        // loader={signupLoader}
        // errorElement={<ErrorPage />}
        />
        <Route path='landing'
          element={
            <Suspense fallback={<Loader />}>
              <Landing />
            </Suspense>}
        // loader={signupLoader}
        // errorElement={<ErrorPage />}
        />
        <Route path='login'
          element={
            <Suspense fallback={<Loader />}>
              <Login />
            </Suspense>
          }
        />
      </Route>
    </>
  )
)

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;