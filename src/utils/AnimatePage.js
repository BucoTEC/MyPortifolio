import React from "react";
import { motion } from "framer-motion";

const animation = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { delay: 0.3, duration: 0.3 } },
  exit: { x: "-100vw", transition: { ease: "easeInOut" } },
};
function AnimatePage(props) {
  return (
    <motion.div
      variants={animation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {props.children}
    </motion.div>
  );
}

export default AnimatePage;
