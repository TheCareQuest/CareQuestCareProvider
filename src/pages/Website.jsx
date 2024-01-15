import React from 'react';
import Hero from "../components/Hero/Hero.jsx";
import Campaigns from '../components/Campaigns/Campaigns.jsx';
import Supporters from '../components/Supporters/Supporters.jsx';
import Mission from '../components/Mission/Mission.jsx';

const Website = () => {
  return (
    <>
      <div className="App">
        <div>
          <div className="white-gradient" />

          <Hero />
        </div>
        {/* <LoginPage /> */}
        <Campaigns />
        <Mission />
        <Supporters />
      </div>
    </>
  );
}

export default Website;
