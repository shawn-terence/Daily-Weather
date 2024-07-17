export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Daily Weather",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
  ],
  api1:
    {
      url:"http://api.weatherapi.com/v1/current.json?key=",
      key:"3a74ab3236084201b3b115352240406"
    },
    api2:
      {
        url:"http://api.weatherapi.com/v1/forecast.json?key=",
        key:"3a74ab3236084201b3b115352240406"
      },
    api3:
      {
        url:"https://api.openweathermap.org/geo/1.0/direct",
        key:"dcbfc041780739f54647455e1945b633"
      },
    api4:
      {
        url:"https://api.openweathermap.org/data/2.5/air_pollution"
      },
      api5:
        {
          url:"http://api.openweathermap.org/geo/1.0/reverse"
        },
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui-docs-v2.vercel.app",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
