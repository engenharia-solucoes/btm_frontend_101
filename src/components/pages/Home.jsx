import styles from "../content/style";
import { 
  Business, 
  CardDeal, 
  Clients, 
  CTA, 
  Footer, 
  Navbar, 
  Stats, 
  Testimonials, 
  Hero 
} from "../content/landing";

// Animations

import { motion } from 'framer-motion'
import { fadeInVariants } from '../content/animationVariants';

const Home = () => (

    <motion.div
      variants={fadeInVariants}
      initial="initial"
      animate="animate"
      exit="exit"
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