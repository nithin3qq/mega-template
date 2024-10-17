import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer } from './components';
import styles from './style';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop'; // Import the ScrollToTop component
import Preloader from './components/Preloader'; // Preloader for suspense

// Lazy load other components
const Hero1 = lazy(() => import('./components/Hero1'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const GetAQuote = lazy(() => import('./components/GetAQuote'));
const About = lazy(() => import('./components/About'));
const ContactUs = lazy(() => import('./components/ContactUs'));
const Product = lazy(() => import('./components/Product'));

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay for the initial load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the delay as needed
    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <Router>
      <ScrollToTop /> {/* Use ScrollToTop here */}
      {loading ? (
        <Preloader /> // Show preloader if loading
      ) : (
        <Suspense fallback={<Preloader />}>
          <div className='bg-primary w-full overflow-hidden'>
            <Navbar />
            <div className='mt-20'>
              <Routes>
                <Route path="/" element={<Hero1 />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/products/:id" element={<Product />} />
                <Route path="/about" element={<About />} />
                <Route path="/getaquote" element={<GetAQuote />} />
                <Route path="/contact" element={<ContactUs />} />
              </Routes>
            </div>
            <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
                <Footer />
              </div>
            </div>
          </div>
        </Suspense>
      )}
    </Router>
  );
};

export default App;
