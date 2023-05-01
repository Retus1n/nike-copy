import { StoryFn, Meta } from '@storybook/react';

import shoes from '../../../../.storybook/public/assets/shoes.webp';

import { CardItem, CardItemProps } from './CardItem';

const cardItemProps: CardItemProps = {
  image: {
    alt: 'image',
    src: shoes
  },
  price: '$1.0',
  title: 'title',
  type: 'type'
};

const CardItemTemplate: StoryFn<typeof CardItem> = (args) => (
  <CardItem {...args} />
);

export const Playground: StoryFn<typeof CardItem> = CardItemTemplate.bind({});
Playground.args = cardItemProps;

export default {
  component: CardItem,
  title: 'ui/cards/card item'
} as Meta<typeof CardItem>;
