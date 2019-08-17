const withSass = require("@zeit/next-sass");
const withReactSvg = require("next-react-svg");
const path = require("path");
module.exports = withSass(
  withReactSvg({
    include: path.join(__dirname, "svg"),
    experimental: {
      // modern: true,
      // granularChunks: true
    }
  })
);
