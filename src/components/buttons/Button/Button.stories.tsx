import { Meta, StoryFn } from '@storybook/react';

import type { ButtonProps } from './Button';
import { Button } from './Button';

const buttonProps: ButtonProps = {
  children: 'button',
  loading: false,
  size: 'medium',
  variant: 'contained'
};

const ButtonTemplate: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Playground: StoryFn<typeof Button> = ButtonTemplate.bind({});
Playground.args = buttonProps;

export const Cointained: StoryFn<typeof Button> = ButtonTemplate.bind({});
Cointained.args = { ...buttonProps, variant: 'contained' };

export const Outlined: StoryFn<typeof Button> = ButtonTemplate.bind({});
Outlined.args = { ...buttonProps, variant: 'outlined' };

export default {
  component: Button,
  title: 'ui/buttons/button'
} as Meta<typeof Button>;
