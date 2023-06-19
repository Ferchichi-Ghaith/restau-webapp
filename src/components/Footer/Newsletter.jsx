import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Don't Miss Out on Visiting Us!" />
      <h1 className="headtext__cormorant">Welcome to Love Factory</h1>
      <p className="p__opensans">Where We Don&apos;t Just Prepare Food We Create Happiness!</p>
    </div>
  </div>
);

export default Newsletter;
