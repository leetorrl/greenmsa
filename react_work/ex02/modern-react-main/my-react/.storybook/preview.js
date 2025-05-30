import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      values: [
      { name: 'ghostwhite', value: '#f8f8ff' },
      { name: 'aquamarine', value: '#7fffd4' },
      { name: 'coral', value: '#ff7f50' },
      ],
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS
    }
  },
};

export default preview;
