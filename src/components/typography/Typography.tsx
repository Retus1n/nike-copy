import React from 'react';

export type TypographyVariant =
  | 'title-1'
  | 'body-1'
  | 'body-3'
  | 'link'
  | 'title-2'
  | 'title-3';
export type TypographyTag = 'h1' | 'h2' | 'span' | 'div' | 'p';
export interface TypographyProps {
  variant: TypographyVariant;
  tag?: TypographyTag;
  children: React.ReactNode;
}

export const TYPOGRAPHY_TEST_IDS = {
  CONTAINER: 'typography-container'
};

export const Typography: React.FC<TypographyProps> = ({
  children,
  variant,
  tag: Tag = 'div'
}) => (
  <Tag className={variant} data-testid={TYPOGRAPHY_TEST_IDS.CONTAINER}>
    {children}
  </Tag>
);
