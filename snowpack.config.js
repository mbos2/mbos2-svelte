/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    frontend: '/_dist_'
  },
  plugins: [
    '@snowpack/plugin-svelte',
    '@snowpack/plugin-dotenv' 
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    port: 3000
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    "@frontend": "./frontend/",
    "@components": "./frontend/components/",
    "@routing": "./frontend/routing/",
    "@global": "./frontend/components/global/",
    "@main": "./frontend/components/main/",
    "@services": "./frontend/services/"
  },
};
