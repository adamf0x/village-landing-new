import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <div className="about-us">
        <div className="about-us-tile">
          <img src="src\assets\images\video-placeholder.jpg" className="about-us-image"/>
          <div className="about-us-text">
            <div className="about-us-name">John Doe</div>
            <div className="about-us-title">Spaceman</div>
          </div>
        </div>
        <div className="about-us-tile">
          <img src=".\..\assets\images\family-hero-cropped.png" className="about-us-image"/>
          <div className="about-us-text">
            <div className="about-us-name">John Doe</div>
            <div className="about-us-title">Spaceman</div>
          </div>
          
        </div>
        <div className="about-us-tile">
          <img src="./../../assets/images/family-hero-cropped.png" className="about-us-image"/>
          <div className="about-us-text">
            <div className="about-us-name">John Doe</div>
            <div className="about-us-title">Spaceman</div>
          </div>
          
        </div>
        <div className="about-us-tile">
          <img src="./../../assets/images/family-hero-cropped.png" className="about-us-image"/>
          <div className="about-us-text">
            <div className="about-us-name">John Doe</div>
            <div className="about-us-title">Spaceman</div>
          </div>
          
        </div>
        <div className="about-us-tile">
          <img src="./../../assets/images/family-hero-cropped.png" className="about-us-image"/>
          <div className="about-us-text">
            <div className="about-us-name">John Doe</div>
            <div className="about-us-title">Spaceman</div>
          </div>
          
        </div>
        <div className="about-us-tile">
          <img src="./../../assets/images/family-hero-cropped.png" className="about-us-image"/>
          <div className="about-us-text">
            <div className="about-us-name">John Doe</div>
            <div className="about-us-title">Spaceman</div>
          </div>
          
        </div>
        <div className="about-us-tile">
          <img src="./../../assets/images/family-hero-cropped.png" className="about-us-image"/>
          <div className="about-us-text">
            <div className="about-us-name">John Doe</div>
            <div className="about-us-title">Spaceman</div>
          </div>
          
        </div>
        <div className="about-us-tile">
          <img src="./../../assets/images/family-hero-cropped.png" className="about-us-image"/>
          <div className="about-us-text">
            <div className="about-us-name">John Doe</div>
            <div className="about-us-title">Spaceman</div>
          </div>
          
        </div>
      </div>
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      {/* <Testimonial topDivider /> */}
      <Cta split />
    </>
  );
}

export default Home;