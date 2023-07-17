import styles from "../../style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "../content/LandingPage";

import { motion } from 'framer-motion'

const fadeInVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const flipVariants = {
  initial: { rotateY: 180 },
  animate: { rotateY: 0 },
  exit: { rotateY: 180 },
};

const slideVariants = {
  initial: { x: '-100%' },
  animate: { x: '0%' },
  exit: { x: '100%' },
};

const scaleVariants = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  exit: { scale: 0 },
};

const bounceVariants = {
  initial: { scale: 0, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: 'bounce' } },
  exit: { scale: 0, opacity: 0 },
};

const textVariants = {
  hidden: { width: 0 },
  visible: {
    width: '100%',
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

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