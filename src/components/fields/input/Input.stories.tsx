import { Meta, StoryFn } from '@storybook/react';


import { ICON_OPTIONS } from '../../icons/storybook';

import { Input } from './Input';

const InputTemplate: StoryFn<typeof Input> = (args) => <Input {...args} />;

export const Playground: StoryFn<typeof Input> = InputTemplate.bind({});

export default {
  component: Input,
  title: 'ui/Inputs/Input',
  argTypes: {
    icon: {
      control: {
        type: 'select'
      },
      options: ICON_OPTIONS
    }
  }
} as Meta<typeof Input>;
