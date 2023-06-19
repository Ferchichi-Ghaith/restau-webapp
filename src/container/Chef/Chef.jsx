import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => {
  const [isVisible, setIsVisible] = useState(false);
  const chefRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const chefRect = chefRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate visibility based on element position and window height
      const isChefVisible = chefRect.top < windowHeight * 0.8 && chefRect.bottom > 0;

      // Set visibility state accordingly
      setIsVisible(isChefVisible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const imageAnimation = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const imageTransition = {
    duration: 0.7,
    type: 'spring',
    bounce: 0.2,
  };

  return (
    <div className="app__bg app__wrapper section__padding" ref={chefRef}>
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <motion.img
          src={images.chef}
          alt="chef_image"
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={imageAnimation}
          transition={imageTransition}
        />
      </div>
      <div className="app__wrapper_info">
        <SubHeading title="Chef's word" />
        <h1 className="headtext__cormorant">What we believe in</h1>

        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="quote_image" />
            <p className="p__opensans">
              Chez Moktar goes beyond serving great food it&apos;s dedicated to creating unforgettable experiences.
            </p>
          </div>
          <p className="p__opensans">chef word</p>
        </div>

        <div className="app__chef-sign">
          <p>Moktar Nasri</p>
          <p className="p__opensans">Chef & Founder</p>
          <img src={images.sign} alt="sign_image" />
        </div>
      </div>
    </div>
  );
};

export default Chef;
