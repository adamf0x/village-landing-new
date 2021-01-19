import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import Input from '../elements/Input';
import Mailchimp from 'react-mailchimp-form';

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
                  Helping You Build Your Community
            </h1>
                <div className="container-xs">
                  <p className="m-0 mb-32 reveal-from-bottom text-left invert-color" data-reveal-delay="400">
                    Village is a needs-based messaging app that allows you to reach out in a secure and safe environment to a community of people who care about you.
                </p>
                  <div className="reveal-from-bottom email-input" data-reveal-delay="600">
                    <Mailchimp
                      action='https://weebly.us17.list-manage.com/subscribe/post?u=cc2921b149dcf4cba76383047&id=04d8e5472d'
                      fields={[
                        {
                          name: 'EMAIL',
                          placeholder: "Let's Stay Connected",
                          type: 'email',
                          required: true
                        }
                      ]}
                    />
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