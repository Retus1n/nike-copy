import React from 'react';

import type { CardItemProps } from '../cards';
import { CardItem } from '../cards/cardItem/CardItem';

interface CarouselProps {
  /**
   * title
   */
  title: string;
  /**
   * items
   */
  items: CardItemProps[];
}

export const CAROUSEL_TEST_IDS = {
  CONTAINER: 'carousel-container',
  ITEM: 'carousel-item',
  LIST: 'carousel-list'
};

/**
 * Carousel component
 */
export const Carousel: React.FC<CarouselProps> = ({ title, items }) => {
  const [index, setIndex] = React.useState<number>(0);
  return (
    <div data-testid={CAROUSEL_TEST_IDS.CONTAINER}>
      <ul data-testid={CAROUSEL_TEST_IDS.LIST}>
        {items.map((item) => (
          <li
            key={item.id}
            data-testid={`${CAROUSEL_TEST_IDS.ITEM}-${item.id}`}
          >
            <CardItem {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};
