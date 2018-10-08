import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { isInternal } from "../helper";

if (typeof window !== "undefined") window.__navigatingToLink = false;

export const Link = ({
  to,
  getProps,
  onClick = () => {},
  children,
  ...props
}) =>
  to && isInternal(to) ? (
    <GatsbyLink
      to={to}
      onClick={() => {
        onClick();
        window.__navigatingToLink = true;
      }}
      getProps={getProps}
      {...props}
    >
      {children}
    </GatsbyLink>
  ) : (
    <a href={to} {...props}>
      {children}
    </a>
  );
