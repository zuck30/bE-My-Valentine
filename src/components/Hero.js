import React from 'react';

const Hero = () => {
  const scrollToMessage = () => {
    const element = document.getElementById('message');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="hero">
      <div className="container hero-content">
        <span className="big-heart">❤️</span>
        <h1>Happy Valentine's Day, <span className="highlight">Baby</span></h1>
        <p className="subtitle">Every day with you feels like Valentine's Day, my love</p>
        <button className="button" onClick={scrollToMessage}>
          Begin Our Love Journey
        </button>
      </div>
    </header>
  );
};

export default Hero;