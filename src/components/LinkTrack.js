import React from 'react';
import Link from 'gatsby-link';

export default props => {
  const { to, ...other } = props;
  const track = () => {
    analytics ? analytics.page({ path: to }) : null;
  };
  return <Link to={to} {...props} onClick={track} />;
};
