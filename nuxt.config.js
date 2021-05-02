const globImporter = require('node-sass-glob-importer');

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  // plugins: [
  //   { src: '@/plugins/swiper' },
  //   { src: '@/plugins/fullpage', mode: 'client' },
  //   { src: '@/plugins/routerSetting' },
  //   { src: '@/plugins/mixins' },
  //   { src: '@/plugins/vee-validate' }
  // ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    'nuxt-gsap-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/style-resources'],
  // styleResources: {
  //   scss: [
  //     '@/assets/css/variable/**/*.scss',
  //     '@/assets/css/mixin/**/*.scss',
  //     '@/assets/css/function/**/*.scss'
  //   ]
  // },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(_, { loaders: { scss } }) {
      const sassOptions = scss.sassOptions || {};
      sassOptions.importer = globImporter();
      scss.sassOptions = sassOptions;
    },
    transpile: ['gsap']
  },
  vue: {
    config: {
      productionTip: true,
      devtools: true
    }
  }
};
