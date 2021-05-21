module.exports = {
  siteMetadata: {
    description: "Personal page of Shubham Kulkarni",
    locale: "en",
    title: "Shubham Kulkarni | Software Developer",
    icon: "content/images/profile.jpg",
    formspreeEndpoint: "https://formspree.io/f/{your-id}",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        theme: "dark-pink",
        showThemeLogo: false,
      },
    },
  ],
};
