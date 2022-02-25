module.exports = {
  extends: ["eslint-config-kouts/vue3"],
  rules: {
    "vue/multi-word-component-names": [
      "error",
      {
        ignores: ["Card", "Leaderboard", "Timer"],
      },
    ],
  },
}
