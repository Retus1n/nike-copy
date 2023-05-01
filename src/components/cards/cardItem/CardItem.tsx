import Image, { ImageProps } from 'next/image';
import { FC } from 'react';

export interface CardItemProps {
  /**
   * id
   */
  id?: string;
  /**
   * image
   */
  image: ImageProps;
  /**
   * title
   */
  title: string;
  /**
   * type
   */
  type: string;
  /**
   * price
   */
  price: string;
}

export const CAROUSELITEM_TEST_ID = {
  CONTAINER: 'carouselItem-conteiner',
  IMAGE: 'carouselItem-image',
  PRICE: 'carouselItem-price',
  TITLE: 'carouselItem-title',
  TYPE: 'carouselItem-type'
} as const;

export const CardItem: FC<CardItemProps> = ({ image, title, type, price }) => (
  <div data-testid={CAROUSELITEM_TEST_ID.CONTAINER}>
    <div className='relative h-[30rem] w-[30rem]'>
      <Image fill data-testid={CAROUSELITEM_TEST_ID.IMAGE} {...image} />
    </div>

    <div className='mt-[0.75rem] flex justify-between align-top'>
      <div>
        <h4 className='title-2' data-testid={CAROUSELITEM_TEST_ID.TITLE}>
          {title}
        </h4>
        <p className='body-2 text-grey' data-testid={CAROUSELITEM_TEST_ID.TYPE}>
          {type}
        </p>
      </div>

      <p className='body-3 text-grey' data-testid={CAROUSELITEM_TEST_ID.PRICE}>
        {price}
      </p>
    </div>
  </div>
);
