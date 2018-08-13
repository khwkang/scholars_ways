import React from 'react';
import Link from 'gatsby-link';

export default props => {
  const { to, onClick: parentOnClick, ...other } = props;
  const track = () => {
    analytics ? analytics.page({ path: to }) : null;
  };
  const handleClick = () => {
    track();
    parentOnClick();
  };
  return <Link to={to} {...props} onClick={handleClick} />;
};
