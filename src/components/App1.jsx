import React from 'react'
import { 
  Billing, 
  Business, 
  CardDeal, 
  Clients, 
  CTA, 
  Footer, 
  Hero, 
  Navbar, 
  Stats, 
  Testimonials 
} from './components'
import styles from './style'
import Hero1 from './components/Hero1'
import Hero2 from './components/Hero2'
import Portfolio from './components/Portfolio'
import Features from './components/Features'
import About from './components/About'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      {/* <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
        </div>
      </div> 
       <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>      
        </div>
      </div>*/}
          <Navbar/>
          <Hero1/>
          <Features/>
          <About/>
          <Portfolio/>
     
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          {/* <Stats/> */}
          <Business/>
          {/* <Billing/> */}
          {/* <CardDeal/> */}
          <Testimonials/>
          {/* <Clients/> */}
          <CTA/>
          <Footer/>     
        </div>
      </div>
    </div>
  )
}

export default App