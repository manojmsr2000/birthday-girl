import { motion } from "motion/react";
import "./Chaos.css";

const Chaos = () => {
  return (
    <div className="cats-galore">
      <motion.div className="cat1">
        <img
          height={200}
          src={new URL("../../assets/amazing-dancer.gif", import.meta.url).href}
        />
      </motion.div>
      <motion.div className="cat2">
        <img
          height={200}
          src={
            new URL("../../assets/cat-cat-jumping.gif", import.meta.url).href
          }
        />
      </motion.div>
      <motion.div className="cat3">
        <img
          height={200}
          src={new URL("../../assets/cat-caramelladancen.gif", import.meta.url).href}
        />
      </motion.div>
      <motion.div className="cat4">
        <img
          height={200}
          src={new URL("../../assets/dancing-cat-dance.gif", import.meta.url).href}
        />
      </motion.div>
      <motion.div className="cat5">
        <img
          height={200}
          src={new URL("../../assets/keith.gif", import.meta.url).href}
        />
      </motion.div>
      <motion.div className="cat6">
        <img
          height={200}
          src={new URL("../../assets/boo-cat.gif", import.meta.url).href}
        />
      </motion.div>
    </div>
  );
};

export default Chaos;
