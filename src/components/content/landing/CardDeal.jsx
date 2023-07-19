import { card } from "../../../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        O futuro da segurança <br className="sm:block hidden" /> passa por aqui.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Invista em uma solução inovadora e com alto comprometimento
        na segurança e gerenciamento dos dados de sua empresa.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
