module.exports = {
  lintOnSave: "warning",
  css: {
    loaderOptions: {
      // scss: {
      //   additionalData: `
      //     @import "@/scss/variables.scss";
      //   `,
      // },
    },
  },
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "KRY Comms and Calls Team Memory Game"
      args[0].meta = {
        description:
          "A memory game for the teams Comms and Calls at KRY by Pedro Ferrari",
      }
      return args
    })
  },
}
