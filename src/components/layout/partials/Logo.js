import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-0 header-logo">
        <Link to="/">
          <Image
            src={require('./../../../assets/images/4.png')}
            alt="Logo"
            width={256}
            height={128} />
        </Link>
      </h1>
    </div>
  );
}

export default Logo;