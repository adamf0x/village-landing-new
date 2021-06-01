import React, { useState } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Image from "../elements/Image";
import Modal from "../elements/Modal";
import Input from "../elements/Input";
import Mailchimp from "react-mailchimp-form";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  };

  const outerClasses = classNames(
    "hero section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="imageContainer-circular-shadow-large hero-figure"></div>
      <Image
        className="hero-image"
        src={require("../../assets/images/mother-in-kitchen.png")}
      />
      <div className="container">
        <div className={innerClasses}>
          <div className="hero-content">
            <div
              className="hero-background-image reveal-from-bottom"
              data-reveal-delay="100"
            ></div>
            <div className="split-item">
              <div className="align-center">
                <h1
                  className="mt-0 invert-color mb-15 reveal-from-bottom"
                  data-reveal-delay="200"
                >
                  The App For Building Better Communities
                </h1>
                <div className="container-xs">
                  <p
                    className="m-0 mb-32 reveal-from-bottom text-left invert-color"
                    data-reveal-delay="400"
                  >
                    Wecome to Village. The App to get you off your phone and
                    into the real life.
                  </p>
                </div>
              </div>

              <div
                className="hero-figure reveal-from-bottom illustration-element-01"
                data-reveal-value="20px"
                data-reveal-delay="800"
              >
                {/* <a
                data-video="https://player.vimeo.com/video/174002812"
                href="#0"
                aria-controls="video-modal"
                 onClick={openModal}
                >
                  <Image
                    src={require('./../../assets/images/family-hero-cropped.png')}
                    alt="Hero"
                    width={674}
                    height={647} />
                </a> */}
              </div>
              {/* <Modal
              id="video-modal"
              show={videoModalActive}
              handleClose={closeModal}
              video="https://player.vimeo.com/video/174002812"
              videoTag="iframe" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
