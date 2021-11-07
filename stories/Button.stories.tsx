import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from '../src/Button';
import { action } from '@storybook/addon-actions';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    children: {
      defaultValue: 'Default Text',
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
//export const Default = Template.bind({});
//Default.args = {
//  children: 'Button',
//};
export const Default = Template.bind({});
export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Default.args = {
  default: true,
  children: 'Default Button',
  onClick: action('default click'),
  variant: undefined,
};

Primary.args = {
  ...Default.args,
  primary: true,
  children: 'Primary Button',
  onClick: action('primary click'),
  variant: 'primary',
};

Secondary.args = {
  ...Default.args,
  secondary: true,
  children: 'Secondary Button',
  onClick: action('secondary click'),
  variant: 'secondary ',
};

