import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import Input from '../elements/Input';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

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
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }

  const outerClasses = classNames(
    'hero section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <div className="hero-content">
            <div className="hero-background-image reveal-from-bottom" data-reveal-delay="100">
              <Image
                classname="hero-background-image 1"
                src={require('./../../assets/images/Pentagon-Green.svg')}
                width={64}
                height={64} />
            </div>
            <div className="split-item">
              <div className="align-center">
                <h1 className="mt-0 invert-color mb-16 reveal-from-bottom" data-reveal-delay="200">
                  Stay in the loop
            </h1>
                <div className="container-xs">
                  <p className="m-0 mb-32 reveal-from-bottom text-left" data-reveal-delay="400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada
                    et orci vel porttitor. Mauris augue nunc, ornare eu magna ac, fermentum
                    rutrum odio.
                </p>
                  <div className="reveal-from-bottom" data-reveal-delay="600">
                    <Input id="newsletter" type="email" label="Subscribe" labelHidden hasIcon="right" placeholder="Your best email">
                      <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z" fill="#ef7332" />
                      </svg>
                    </Input>
                  </div>
                </div>
              </div>

              <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
                <a
                // data-video="https://player.vimeo.com/video/174002812"
                // href="#0"
                // aria-controls="video-modal"
                //  onClick={openModal}
                >
                  <Image
                    src={require('./../../assets/images/family-hero-cropped.png')}
                    alt="Hero"
                    width={674}
                    height={647} />
                </a>
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
    </section >
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;