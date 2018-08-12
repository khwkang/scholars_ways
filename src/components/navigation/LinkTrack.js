import React from "react";
import Link from "gatsby-link";

export default props => {
  const { to, analytics, ...other } = props;
  const track = () => {
    analytics
      ? analytics.page({ path: to, referrer: document.referrer, ...analytics })
      : null;
  };
  return <Link to={to} {...other} onClick={track} />;
};
