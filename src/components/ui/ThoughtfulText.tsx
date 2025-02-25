import { Typography } from "@mui/material";
import { motion } from "motion/react";
import { TypeAnimation } from "react-type-animation";

const ThoughtfulText = () => {
  return (
    <motion.div
      initial={{ transform: "translateX(-100px)" }}
      animate={{ transform: "translateX(0px)" }}
      transition={{ type: "spring" }}
      style={{ position: "absolute", left: "10%", top: "40%" }}
    >
      <Typography
        fontFamily={"Indie Flower"}
        color="white"
        fontWeight={"bolder"}
        fontSize={"1.3rem"}
      >
        <TypeAnimation
          sequence={[
            "Here we are, Diana (such a cool name btw d:)",
            1000,
            "Another year, another trip around the sun",
            1000,
            "You were the highlight of my year",
            1000,
            "you're a sweetheart",
            1000,
            "you light up any conversation you're in with your humour",
            1000,
            "you're special (kind of)",
            1000,
            "The world is a better place just because you exist",
            1000,
            "May your day be as amazing as you are",
            1000,
            "Happy Birthday!",
            1000,
            "Enjoy the view and the soundtrack if you want :) !!",
            1000,
          ]}
          wrapper="span"
          speed={30}
          style={{
            fontSize: "2em",
            display: "inline-block",
            fontWeight: "bolder",
          }}
        />
      </Typography>
    </motion.div>
  );
};

export default ThoughtfulText;
