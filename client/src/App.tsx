//@ts-ignore
// import lazy and suspense from react
import { lazy, Suspense } from 'react';

import { useMemo } from 'react';
import LandingPage from './pages/Landing';
// import  routes from router-dom;
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";


// dispatch
import {useSelector} from 'react-redux';
import { RootState } from './store/store';
import Spinner from './components/spinner/spinner';


// import pages that makes up the app;
const ServicesPage = lazy(() => import('./pages/services'));
const PaymentPage = lazy(() => import('./pages/payment'));
const TransactionsPage = lazy(() => import('./pages/transactions'));


// App component
function App() {

    const address = useSelector((state : RootState) => (
       state?.currentUser?.currentUser
    ))
      
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
                            !address 
                             ? <Navigate to="/app"/> :
                              (
                               <Suspense fallback={<Spinner/>}>
                                  <PaymentPage />
                               </Suspense>
                              )} 
                              />
              <Route path='/transactions' element={
                                !address
                                 ? <Navigate to="/app"/>
                                 :(
                                  <Suspense fallback={<Spinner/>}>
                                    <TransactionsPage/>
                                  </Suspense>
                                 )}
                                  />
            </Routes>
           </Router>
      );
}

export default App;
