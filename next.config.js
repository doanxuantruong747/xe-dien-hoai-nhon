module.exports = {
  // target: "serverless",

  // async rewrites() {
  //   return [
  //     // Rewrite everything to `pages/index`
  //     {
  //       source: "/:any*",
  //       destination: "/",
  //     },
  //   ];
  // },

  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  // i18n: {
  // 	locales: ["en", "vi"],
  // 	defaultLocale: "en",
  // 	localeDetection: false,
  // },
};
