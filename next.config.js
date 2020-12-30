const mdx = require("@next/mdx")({
  extension: /\.mdx?$/,
});
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins(
  [
    mdx,
    {
      pageExtensions: ["js", "jsx", "mdx"],
    },
  ],
  {
    sassOptions: {
      camelCase: true,
    },
  }
);
