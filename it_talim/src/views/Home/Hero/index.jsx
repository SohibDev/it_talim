import React from 'react';
import HeroImg from '../../../assets/icon/successful.png';
import './style.css'; // Import the SCSS file for styling

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">biz bilan xalqaro darajagacha</h1>
        <p className="hero-description">
          O‘zbekistonda qizlarni akt sohasiga yana-da kengroq jalb etish va
          ularning it-ko‘nikmalarini rivojlantirish
        </p>
      </div>
        <img src={HeroImg} alt="" />
      <hr className='starterHrHome' />
    </div>
  );
};

export default Hero;

