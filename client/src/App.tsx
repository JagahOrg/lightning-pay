//@ts-ignore
// import lazy and suspense from react
import { lazy, Suspense } from 'react';

import LandingPage from './pages/Landing';
// import  routes from router-dom;
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


// dispatch
import Spinner from './components/spinner/spinner';


// import pages that makes up the app;
const ServicesPage = lazy(() => import('./pages/services'));
const PaymentPage = lazy(() => import('./pages/payment'));



// App component
function App() {
      
// JSX Component
  return  (
            <Router>
            <Routes>
              <Route path='/' element={<LandingPage />} />
              <Route path='/app' element={
                 <Suspense fallback={<Spinner />}>
                     <ServicesPage/>
                 </Suspense>
                 } />
              <Route path='/payment' element={
                              (
                               <Suspense fallback={<Spinner/>}>
                                  <PaymentPage />
                               </Suspense>
                              )} 
                              />
            </Routes>
           </Router>
      );
}

export default App;
