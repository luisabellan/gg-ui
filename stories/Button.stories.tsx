import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Props } from '../src/components/Button/Button';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
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

//const Template: Story<Props> = args => <Button {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
//export const Default = Template.bind({});
//Default.args = {
//  children: 'Button',
//};

export const Primary = () => <Button variant="primary">Button</Button>;
export const Secondary = () => <Button variant="secondary">Button</Button>;

