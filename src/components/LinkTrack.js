import React from "react";
import Link from "gatsby-link";

export default props => {
  const track = () => {
    analytics ? analytics.page() : null;
  };
  return <Link {...props} onClick={track} />;
};
