import styles from "../../style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "../content/LandingPage";

import {motion} from 'framer-motion'

const Home = () => (
  <motion.div 
    initial={{width:0}}
    animate={{width:'100%'}}
    exit={{x:window.innerWidth,transition:{duration:0.5}}}
  >
    <div className="bg-primary">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Billing />
          <Business />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  </motion.div>
);

export default Home;