import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import './Laurels.css';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="awards" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      <p className="p__opensans2">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);
  const historyRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2, // Adjust this threshold as needed
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    };

    const aboutObserver = new IntersectionObserver(observerCallback, observerOptions);
    const historyObserver = new IntersectionObserver(observerCallback, observerOptions);

    if (aboutRef.current) {
      aboutObserver.observe(aboutRef.current);
    }

    if (historyRef.current) {
      historyObserver.observe(historyRef.current);
    }

    return () => {
      if (aboutRef.current) {
        aboutObserver.unobserve(aboutRef.current);
      }

      if (historyRef.current) {
        historyObserver.unobserve(historyRef.current);
      }
    };
  }, []);

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="app__bg app__wrapper section__padding" id="values">
      <div className="app__wrapper_info">
        <SubHeading title="Values & Best" />
        <h1 className="headtext__cormorant">Our Values</h1>

        <div ref={aboutRef}>
          <motion.div
            className="app__laurels_awards"
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            variants={animationVariants}
          >
            {data.awards.map((award) => (
              <AwardCard award={award} key={award.title} />
            ))}
          </motion.div>
        </div>
      </div>

      <div className="app__wrapper_img">
        <img src={images.laurels} alt="laurels_img" />
      </div>
    </div>
  );
};

export default Laurels;
