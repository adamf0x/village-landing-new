import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  // const sectionHeader = {
  //   title: 'Workflow that just works',
  //   paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.'
  // };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
      <div className="pentagon-1 reveal-from-right"></div>
            <div className="pentagon-2 reveal-from-left"></div>
        <div className={innerClasses}>
          {/* <SectionHeader data={sectionHeader} className="center-content" /> */}
          <div className={splitClasses}>
            

            <div className="split-item">
            
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Coming Soon!
                  </div>
                <h3 className="mt-0 mb-12">
                The Village App
                  </h3>
                <p className="m-0">
                The upcoming Village Mobile app is designed to activate your hyperlocal community when you need it. Inverting the “social-network” model on its head, Village keeps you engaged with tightly knit real world communities, and builds new ones when you need to. We are presently in the Alpha Stage of Development but will be coming to the app store soon.
                  </p>
              </div>

              <div data-reveal-delay="300" className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/Village-iPhoneMock.png')}
                  alt="Village iPhone Mock"
                  width={300}
                  height={396}
                   />
              </div>
              
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;