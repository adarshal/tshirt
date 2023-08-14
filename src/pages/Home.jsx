import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";

import {
  headContainerAnimation,
  headTextAnimation,
  headContentAnimation,
  slideAnimation,
} from "../config/motion";
import state from "../store";
import { CustomButton } from "../components";

const Home = () => {
  const snap = useSnapshot(state);
  const [animationLoaded, setAnimationLoaded] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimationLoaded(true);
      
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(timeout);
  }, []);
  if(animationLoaded){
    state.text="white";
  }

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section key="unique-key-1" className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              src="./threejs_oldl.png"
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
            <h1 className={`head-text ${animationLoaded ? 'text-white' : 'text-black'}`}>
                Lest's <br className="xl-block hidden" /> Buy 
                <h1 className="head-text1">Now</h1> 
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-white text-base">
               Buy good quality TShirt
              </p>
              <p className="max-w-md font-normal text-gray-600">
                "Designed for 
                 <strong> IITB</strong>"
              </p>
            </motion.div>
            <CustomButton 
                type="filled"
                title="Order Now =>"
                handleClick={() => state.intro = false}
                customStyle="w-fit px-4 py-2.5 font-bold text-sm"
              />
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
