/** @type { import('@storybook/nextjs-vite').StorybookConfig } */
const config = {
  stories: [
    "../app/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [],
  framework: "@storybook/nextjs-vite",
  staticDirs: [
    "../public"
  ]
};
export default config;