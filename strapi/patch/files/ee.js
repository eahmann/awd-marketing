"use strict";

const internals = {};
const features = {
  bronze: [],
  silver: [],
  gold: ["sso"],
};

module.exports = () => {
  internals.licenseInfo = {
    type: "gold",
  };

  internals.isEE = true;
  return true;
};

Object.defineProperty(module.exports, "licenseInfo", {
  get: () => {
    return internals.licenseInfo;
  },
  configurable: false,
  enumerable: false,
});

Object.defineProperty(module.exports, "isEE", {
  get: () => {
    return internals.isEE;
  },
  configurable: false,
  enumerable: false,
});

Object.defineProperty(module.exports, "features", {
  get: () => {

    const { type: licenseType } = module.exports.licenseInfo;

    return {
      isEnabled(feature) {
        return features[licenseType].includes(feature);
      },
      getEnabled() {
        return features[licenseType];
      },
    };
  },
  configurable: false,
  enumerable: false,
});
