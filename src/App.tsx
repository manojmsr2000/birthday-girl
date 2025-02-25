import { useEffect, useState } from "react";
import "./App.css";
import { AnimatePresence, motion } from "motion/react";
import Button from "@mui/material/Button";
import BirthdayGift from "./components/ui/Card";
import { Typography } from "@mui/material";
import Chaos from "./components/ui/Chaos";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useAudioPlayer } from "react-use-audio-player";
import { useReward } from "react-rewards";
import ThoughtfulText from "./components/ui/ThoughtfulText";

function App() {
  const [enableAnimation, setEnableAnimation] = useState(false);
  const [partyDone, setPartyDone] = useState(false);
  const { reward: confettiReward } = useReward("confettiReward", "confetti", {
    lifetime: 3000,
    startVelocity: 65,
    fps: 25,
  });
  const { reward: balloonsReward } = useReward("balloonsReward", "balloons", {
    lifetime: 3000,
  });
  const { load, cleanup } = useAudioPlayer();
  const [isPresentOpen, setIsPresentOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [buttonIsClick, setButtonIsClick] = useState(false);

  const variants = {
    default: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
    },
  };

  const handleFinishParty = () => {
    setPartyDone(true);
  };

  const handleButtonClick = () => {
    setEnableAnimation(true);
    setButtonIsClick(true);
    setTimeout(() => {
      setEnableAnimation(false);
    }, 6000);
  };

  useEffect(() => {
    const mouseMove = (e: any) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  useEffect(() => {
    if (isPresentOpen) {
      load(new URL("./assets/cat-meme-music.mp3", import.meta.url).href, {
        autoplay: true,
      });
      setTimeout(() => {
        confettiReward();
        balloonsReward();
      }, 2000);
    }
    if (partyDone) {
      cleanup();
      load(new URL("./assets/kiki piano.mp3", import.meta.url).href, {
        autoplay: true,
      });
    }
    if (enableAnimation) {
      cleanup();
      load(new URL("./assets/kiki flyin.wav", import.meta.url).href, {
        autoplay: true,
      });
    }
  }, [isPresentOpen, load, partyDone, enableAnimation]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/oneko.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={"App"}>
      <AnimatePresence initial={false}>
        {!partyDone ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: buttonIsClick ? 1 : 0 }}
              transition={{ duration: 3 }}
              className={
                isPresentOpen
                  ? "App_with_party_background"
                  : "App_with_background"
              }
            />
            <AnimatePresence initial={false}>
              {buttonIsClick && !enableAnimation && !isPresentOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 2 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  style={{
                    position: "absolute",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "8rem",
                  }}
                >
                  <motion.div
                    transition={{ duration: 2 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                  >
                    <Typography
                      color="#0D4715"
                      variant="h1"
                      fontFamily={"Indie Flower"}
                    >
                      Open the present{" "}
                      <img
                        height={100}
                        src={
                          new URL("./assets/scary_cat.png", import.meta.url)
                            .href
                        }
                      />
                    </Typography>
                  </motion.div>
                  <BirthdayGift setIsPresentOpen={setIsPresentOpen} />
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence initial={false}>
              {isPresentOpen && (
                <>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 2 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                  >
                    <Chaos />
                  </motion.div>
                  <motion.div
                    style={{ position: "absolute", width: "32rem", top: "18%" }}
                    initial={{ opacity: 0, scale: 0 }}
                    transition={{ delay: 2, duration: 2 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                  >
                    <Typography
                      variant="h3"
                      fontFamily={"Indie Flower"}
                      textAlign={"center"}
                    >
                      <span className="happy-birthday-text">
                        Happy Birthday Dianaaa
                      </span>
                      💐🎉🥳
                    </Typography>
                  </motion.div>
                  <DotLottieReact
                    src={
                      new URL(
                        "./assets/birthday-animation.lottie",
                        import.meta.url
                      ).href
                    }
                    style={{
                      height: "25rem",
                      position: "absolute",
                      top: "40%",
                    }}
                    loop
                    autoplay
                  />
                </>
              )}
            </AnimatePresence>
            <AnimatePresence initial={false}>
              {!buttonIsClick && (
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  transition={{ delay: 2, duration: 2 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                >
                  <Button
                    focusRipple
                    sx={{ fontFamily: "Indie Flower" }}
                    variant="contained"
                    onClick={handleButtonClick}
                  >
                    Click me pwease 🥺👉👈!
                  </Button>
                </motion.span>
              )}
            </AnimatePresence>
            {enableAnimation && (
              <div className="kiki" style={{ width: "5rem", height: "5rem" }} />
            )}
            <AnimatePresence initial={false}>
              {isPresentOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  transition={{ delay: 30, duration: 2 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  style={{ position: "absolute", bottom: "10%" }}
                >
                  <Button variant="contained" style={{ fontFamily: "Indie Flower" }} onClick={handleFinishParty}>
                    OH you're still here, click me!
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
            <span id="confettiReward" />
            <span id="balloonsReward" />
          </>
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3 }}
              className={"end_of_party"}
            />
            <ThoughtfulText />
          </>
        )}
      </AnimatePresence>
      <motion.div className="cursor" variants={variants} animate={"default"} />
    </div>
  );
}

export default App;
