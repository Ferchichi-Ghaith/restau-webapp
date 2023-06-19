import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Midoun djerba, Djerba Midun 4116 || RaX4Q+6V Djerba Midun</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 08:00 am - 23:00 pm</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 00:00 am</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}> <a href="https://www.google.com/maps/place/Restaurant+chez+Moktar-%D9%85%D8%B7%D8%B9%D9%85+%D8%A7%D9%84%D9%85%D8%AE%D8%AA%D8%A7%D8%B1%E2%80%AD/@33.8055542,10.9871292,17z/data=!3m1!4b1!4m6!3m5!1s0x13aa97a596f90249:0xa73d37e505e7846e!8m2!3d33.8055542!4d10.9897041!16s%2Fg%2F11jdxlm3ck?entry=ttu" target="_blank" rel="noopener noreferrer">Visit Us</a> </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
