'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./fields-cloudinary-image.cjs.prod.js");
} else {
  module.exports = require("./fields-cloudinary-image.cjs.dev.js");
}
