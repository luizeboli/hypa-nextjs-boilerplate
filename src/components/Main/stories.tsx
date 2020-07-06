import { withKnobs, text } from '@storybook/addon-knobs';
import Main from '.';

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs],
};

export const Basic = () => (
  <Main
    title={text('Title', 'Boilerplate')}
    description={text(
      'Description',
      'A boilerplate with TypeScript, React, NextJS and styled-components.',
    )}
  />
);
