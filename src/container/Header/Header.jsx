import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const headerRect = headerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate visibility based on element position and window height
      const isHeaderVisible = headerRect.top < windowHeight * 0.8 && headerRect.bottom > 0;

      // Set visibility state accordingly
      setIsVisible(isHeaderVisible);
    };

    const handleLoad = () => {
      // Start the animation on page load
      setIsVisible(true);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  const imageAnimation = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  const imageTransition = {
    duration: 0.9,
    type: 'spring',
    bounce: 0.2,
  };

  return (
    <div className="app__header app__wrapper section__padding" id="home" ref={headerRef}>
      <div className="app__wrapper_info">
        <SubHeading title="Chase the new flavour" />
        <h1 className="app__header-h1">The Key To Fine Dining</h1>
        <p className="p__opensans" style={{ margin: '2rem 0' }}>
          Welcome to Chez Moktar, a culinary haven where your taste buds are treated to a symphony of flavors.
          Situated in a vibrant corner of town, our restaurant beckons you with its warm and inviting ambiance.
          As you step through the doors, you&apos;ll be greeted by the aromas of exquisite dishes being prepared with love and expertise.
        </p>
        <button type="button" className="custom__button">Explore Menu</button>
      </div>

      <motion.div
        className="app__wrapper_img"
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        variants={imageAnimation}
        transition={imageTransition}
      >
        <img src={images.welcome} alt="header_img" />
      </motion.div>
    </div>
  );
};

export default Header;
