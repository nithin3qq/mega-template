import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer} from './components';
import styles from './style';
import Hero1 from './components/Hero1';
import Portfolio from './components/Portfolio';
import GetAQuote from './components/GetAQuote';
import Navbar from './components/Navbar';
import About from './components/About';
import ScrollToTop from './components/ScrollToTop';  // Import the ScrollToTop component
import ContactUs from './components/ContactUs';
import Product from './components/Product';

const App = () => {
  return (
    <Router>
      <ScrollToTop />  {/* Use ScrollToTop here */}
      <div className='bg-primary w-full overflow-hidden'>
        <Navbar />
        <div className='mt-20'>
        <Routes >
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
    </Router>
  );
};

export default App;