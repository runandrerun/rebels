import React from 'react';
import './Hero.styles.scss';

const Hero = () => {
  return (
    <header className="hero">
      <div className="hero__logo-container">
        <img
          className="logo"
          src={require('../../_assets/img/misfits-market-w-header-logo.svg')}
          alt="Misfits Market logo"
        />
      </div>
    </header>
  );
};

export default Hero;
