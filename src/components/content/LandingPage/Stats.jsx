import { useEffect, useState } from 'react';
import styles from "../../../style";
import { stats } from "../../../Data";
import { motion } from 'framer-motion';

const Stats = () => {
  
  const [currentStatIndex, setCurrentStatIndex] = useState(0);
  const [visibleText, setVisibleText] = useState('');

  useEffect(() => {

    let timeout;

    const typeText = () => {

      const currentStat = stats[currentStatIndex];
      const { value } = currentStat;

      if (visibleText.length < value.length) {
        setVisibleText(value.slice(0, visibleText.length + 1));
        timeout = setTimeout(typeText, 100);
      } else if (visibleText === value && visibleText.length === value.length) {
        timeout = setTimeout(() => {
          setCurrentStatIndex((currentStatIndex + 1) % stats.length);
          setVisibleText('');
        }, 500);
      }
    };

    timeout = setTimeout(typeText, 200);

    return () => {
      clearTimeout(timeout);
    };
  }, [currentStatIndex, visibleText]);

  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat, index) => (
        <div
          key={stat.id}
          className={`flex-1 flex justify-start items-center flex-row m-3`}
        >
          <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
            <span>{index === currentStatIndex ? (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {visibleText}
              </motion.span>
            ) : (
              stat.value
            )}</span>
          </h4>
          <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;