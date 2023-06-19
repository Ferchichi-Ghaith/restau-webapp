import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);
  const historyRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const aboutRect = aboutRef.current.getBoundingClientRect();
      const historyRect = historyRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate visibility based on element position and window height
      const isAboutVisible = aboutRect.top < windowHeight * 0.8;
      const isHistoryVisible = historyRect.top < windowHeight * 0.8;

      // Set visibility state accordingly
      setIsVisible(isAboutVisible || isHistoryVisible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const imageAnimation = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="app__aboutus app__bg flex__center section__padding" id="about">
      <div className="app__aboutus-overlay flex__center" />
      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about" ref={aboutRef}>
          <h1 className="headtext__cormorant">About Us</h1>
          <motion.img
            src={images.spoon}
            alt="about_spoon"
            className="spoon__img"
            initial={isVisible ? 'visible' : 'hidden'}
            animate={isVisible ? 'visible' : 'hidden'}
            variants={imageAnimation}
            transition={{ duration: 0.7 }}
          />
          <p className="p__opensans">About</p>
          <button type="button" className="custom__button">Know More</button>
        </div>

        <div className="app__aboutus-content_knife flex__center">
          <motion.img
            src={images.knife}
            alt="about_knife"
            className="knife"
            initial={isVisible ? 'visible' : 'hidden'}
            animate={isVisible ? 'visible' : 'hidden'}
            variants={imageAnimation}
            transition={{ duration: 0.5 }}
          />
        </div>

        <div className="app__aboutus-content_history" ref={historyRef}>
          <h1 className="headtext__cormorant">Our History</h1>
          <motion.img
            src={images.spoon}
            alt="about_spoon"
            className="spoon__img"
            initial={isVisible ? 'visible' : 'hidden'}
            animate={isVisible ? 'visible' : 'hidden'}
            variants={imageAnimation}
            transition={{ duration: 0.5 }}
          />
          <p className="p__opensans">history</p>
          <button type="button" className="custom__button">Know More</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
