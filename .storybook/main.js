module.exports = {
    stories: ['../src/components/**/**/*.stories.(tsx|ts|jsx|js)'],
    addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/preset-typescript', '@storybook/addon-knobs'],
    webpackFinal: async config => {
        // do mutation to the config

        return config;
    },
};