import React from 'react';
import Link from 'gatsby-link';

export default props => {
  const { to: path, onClick: parentOnClick, ...other } = props;
  const track = () => {
    analytics ? analytics.page({ path }) : null;
  };
  const handleClick = () => {
    track();
    parentOnClick ? parentOnClick() : null;
  };
  return <Link to={path} {...other} onClick={handleClick} />;
};
