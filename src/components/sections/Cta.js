import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Input from '../elements/Input';
import Mailchimp from 'react-mailchimp-form';

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {

  const outerClasses = classNames(
    'cta section center-content-mobile reveal-from-bottom',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'cta-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div
          className={innerClasses}
        >
          <div className="cta-slogan">
            <h3 className="m-0 invert-color">
              Join The Movement
              </h3>
            <p className="invert-color">Do you believe in community? Join our mailing list to receive exclusive updates, engage with upcoming campaigns, and be among the first to beta test Village’s mobile app! </p>
          </div>
          <div className="cta-action email-input">
            <Mailchimp
              action='https://weebly.us17.list-manage.com/subscribe/post?u=cc2921b149dcf4cba76383047&id=04d8e5472d'
              fields={[
                {
                  name: 'EMAIL',
                  placeholder: 'Lets Stay Connected',
                  type: 'email',
                  required: true
                }
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;