import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => {
  const [isVisible, setIsVisible] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const menuRect = menuRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate visibility based on element position and window height
      const isMenuVisible = menuRect.top < windowHeight * 0.9 && menuRect.bottom > 0;

      // Set visibility state accordingly
      setIsVisible(isMenuVisible);
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

  const menuAnimation = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  const menuTransition = {
    duration: 0.9,
    type: 'spring',
    bounce: 0.2,
  };

  return (
    <div className="app__specialMenu flex__center section__padding" id="menu" ref={menuRef}>
      <div className="app__specialMenu-title">
        <SubHeading title="Menu that fits your palate" />
        <h1 className="headtext__cormorant">Today&apos;s Special</h1>
      </div>

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine  flex__center">
          <p className="app__specialMenu-menu_heading">Foods</p>
          <div className="app__specialMenu_menu_items">
            {data.wines.map((wine, index) => (
              <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
            ))}
          </div>
        </div>

        <motion.div
          className="app__specialMenu-menu_img"
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={menuAnimation}
          transition={menuTransition}
        >
          <img src={images.jus} alt="menu_img" />
        </motion.div>

        <div className="app__specialMenu-menu_cocktails  flex__center">
          <p className="app__specialMenu-menu_heading">Cocktails</p>
          <div className="app__specialMenu_menu_items">
            {data.cocktails.map((cocktail, index) => (
              <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: 15 }}>
        <button type="button" className="custom__button">View More</button>
      </div>
    </div>
  );
};

export default SpecialMenu;
