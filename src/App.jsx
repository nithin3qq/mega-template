import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { 
  Billing, 
  Business, 
  CardDeal, 
  Clients, 
  CTA, 
  Footer, 
  Stats, 
  Testimonials 
} from './components';
import styles from './style';
import Hero1 from './components/Hero1';
import Portfolio from './components/Portfolio';
import GetAQuote from './components/GetAQuote';
import Navbar from './components/Navbar';
import About from './components/About';

const App = () => {
  return (
    <Router>
      <div className='bg-primary w-full overflow-hidden'>
        <Navbar />
        <div className='mt-20'>
        <Routes >
          <Route path="/" element={<Hero1 />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/getaquote" element={<GetAQuote />} />
          <Route path="/contact" element={<GetAQuote />} />
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
