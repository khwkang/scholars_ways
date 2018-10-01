import { _ } from "lodash/fp";

export const toBoolean = value => {
  if (!value) {
    return false;
  }
  if (typeof value == "number" || typeof value == "boolean") {
    return !!value;
  }
  return _.replace(_.trim(value.toLowerCase()), /[""'']/gi, "") === "true"
    ? true
    : false;
};

// Returns path without leading and/or trailing '/'.
const _sanitizePath = path => path.replace(/(^\/|\/$)/g, "");

// Returns true if rawPath is a child of rawCurrentPath, false otherwise.
export const isPathActive = (rawCurrentPath, rawPath) => {
  const currentPath = _sanitizePath(rawCurrentPath);
  const path = _sanitizePath(rawPath);
  return path.length > 0 && currentPath.startsWith(path);
};
