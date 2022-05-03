const { mergeConfig } = require("vite");
const eslintPlugin = require("vite-plugin-eslint").default;

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/vue3",
  core: { builder: "@storybook/builder-vite" },

  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [eslintPlugin()],
    });
  },
};
