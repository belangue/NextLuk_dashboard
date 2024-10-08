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
import User, { getAllUsers } from './components/Dashboard/User';
import Salonadmin, { getAllSalon } from './components/Dashboard/salonadmin';
import Publication, { getAllPulicationBySalon } from './components/Dashboard/Publication';
import Salon from './components/Dashboard/salon';
import Chat from './components/Dashboard/chat';
import Finance from './components/Dashboard/finance'
import displayWeb from './components/Dashboard/displayWeb'
import Schedule, { getAllAppoitment } from './components/Dashboard/schedule'
import WebcamCapture from './components/WebcamCapture';
import Map from './components/Map';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import HomePage from './components/HomePage';
import Web from './components/Web';
const Login = React.lazy(() => import('./components/login'));
const Signup = React.lazy(() => import('./components/signup'));
const Home = React.lazy(() => import('./components/Home'));
const LandingPage = React.lazy(() => import('./components/landingPage'));
const InfoPage = React.lazy(() => import('./components/InfoPage'));
const InfoPageSalon = React.lazy(() => import('./components/InfoPageSalon'));
const Institute = React.lazy(() => import('./components/Institute'));
const FirstPage = React.lazy(() => import('./components/FirstPage'));
const Test1 = React.lazy(() => import('./components/test1'));
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
          loader={getAllSalon}
          // errorElement={<ErrorPage />}
          />
          <Route path='schedule'
            element={<Schedule />}
          loader={getAllAppoitment}
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
          loader={getAllPulicationBySalon}
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
          <Route path='finance'
            element={<Finance />}
          // loader={getElectionResult}
          // errorElement={<ErrorPage />}
          />
          <Route path='displayweb'
            element={<displayWeb />}
            // loader={getAllUsers}
          // errorElement={<ErrorPage />}
          />
          <Route path='user'
            element={<User />}
            loader={getAllUsers}
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
        <Route path='InfoPageSalon'
          element={
            <Suspense fallback={<Loader />}>
              <InfoPageSalon />
            </Suspense>}
        // loader={signupLoader}
        // errorElement={<ErrorPage />}
        />
        <Route path='Institute'
          element={
            <Suspense fallback={<Loader />}>
              <Institute />
            </Suspense>}
        // loader={signupLoader}
        // errorElement={<ErrorPage />}
        />
        
        <Route path='WebcamCapture'
          element={
            <Suspense fallback={<Loader />}>
              <WebcamCapture />
            </Suspense>}
        // loader={signupLoader}
        // errorElement={<ErrorPage />}
        />
        <Route path='Home'
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>}
        // loader={signupLoader}
        // errorElement={<ErrorPage />}
        />
        <Route path='HomePage'
          element={
            <Suspense fallback={<Loader />}>
              <HomePage />
            </Suspense>}
        // loader={signupLoader}
        // errorElement={<ErrorPage />}
        />
        <Route path='Web'
          element={
            <Suspense fallback={<Loader />}>
              <Web />
            </Suspense>}
        // loader={signupLoader}
        // errorElement={<ErrorPage />}
        />
        <Route path='infoPage'
          element={
            <Suspense fallback={<Loader />}>
              <InfoPage />
            </Suspense>}
        // loader={signupLoader}
        // errorElement={<ErrorPage />}
        />
        <Route path='FirstPage'
          element={
            <Suspense fallback={<Loader />}>
              <FirstPage />
            </Suspense>}
        // loader={signupLoader}
        // errorElement={<ErrorPage />}
        />
        <Route path='landingPage'
          element={
            <Suspense fallback={<Loader />}>
              <LandingPage />
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
        
        <Route path='Map'
          element={
            <Suspense fallback={<Loader />}>
              <Map />
            </Suspense>
          }
        />
         <Route path='FAQ'
          element={
            <Suspense fallback={<Loader />}>
              <FAQ />
            </Suspense>
          }
        />
         <Route path='AboutUs'
          element={
            <Suspense fallback={<Loader />}>
              <AboutUs />
            </Suspense>
          }
        />
         <Route path='Footer'
          element={
            <Suspense fallback={<Loader />}>
              <Footer />
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