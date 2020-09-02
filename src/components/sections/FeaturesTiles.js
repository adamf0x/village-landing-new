import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Modal from '../elements/Modal';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
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
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  // const sectionHeader = {
  //   title: '',
  //   paragraph: ' '
  // };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <div className={tilesClasses}>
            <div class="section-header">
            {/*<a
                  data-video="https://player.vimeo.com/video/174002812"
                  href="#0"
                  aria-controls="video-modal"
                  onClick={openModal}
                  >
                    <Image
                      src={require('./../../assets/images/youtube-vid-image.png')}
                      alt="Hero"
                      width={674}
                      height={647} />
                      <Image
                      src={require('./../../assets/images/yt_icon_mono_dark.png')}
                      alt="Hero"
                      width={88}
                      height={62}
                      className="hover-modal" />
                  </a>
                  <Modal
              id="video-modal"
              show={videoModalActive}
              handleClose={closeModal}
              video="https://player.vimeo.com/video/174002812"
            videoTag="iframe" /> */}
              <div class="header-text">
                <h2 class="mt-0 text-color-secondary mb-16">
                  We Get By With a Little Help From Our Friends
              </h2>
                <p class="m-0">
                  The core of Village’s mission is to build real world engagement with our local communities so we can all get a little more support when we need it. 
                  {/* //REMOVED - NO VIDEO YET// No one knows the power of this like our Founder Ashley. Listen to her story to understand the inspiration for Village and how one little surprise can change everything. */}
                </p>
              </div>
              
            </div>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/Request-bubble.svg')}
                      alt="Features tile icon 01"
                      width={80}
                      height={80} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Needs Specific Messaging
                    </h4>
                  <p className="m-0 text-sm">
                    Quick and efficient, needs-specific messaging allows you to send a request without the need for justification. One notification sent to multiple people without annoying group messaging. Get the help you need and the break you deserve.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/Home-bubble.svg')}
                      alt="Features tile icon 02"
                      width={80}
                      height={80} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Hyper Local Connections
                    </h4>
                  <p className="m-0 text-sm">
                    Build connection with those who are geographically closest to you. Whether you need help moving a couch, someone to put out your garbage cans while you’re away or you’re looking for a friend who shares similar interests, Village breaks down barriers and allows you to explore your own neighborhood.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/Chat-bubble.svg')}
                      alt="Features tile icon 03"
                      width={80}
                      height={80} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Choose Who Sees requests
                    </h4>
                  <p className="m-0 text-sm">
                    By curating your community, you are in charge of who gets which requests. Sort your contacts into groups depending on which need they fulfill.
                    </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;