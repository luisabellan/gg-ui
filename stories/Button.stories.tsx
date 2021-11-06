import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Props } from '../src/components/Button/Button';
import { action } from '@storybook/addon-actions';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    children: {
      defaultValue: 'Primary Button',
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

const Template: Story<Props> = (args) => <Button {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
//export const Default = Template.bind({});
//Default.args = {
//  children: 'Button',
//};

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Secondary.args = {
  variant: 'secondary',
  children: 'Secondary Button',
  onClick: action('secondary click'),
};

