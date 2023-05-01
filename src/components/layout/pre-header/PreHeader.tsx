import React from 'react';

import { Typography } from '@/ui';
import { JordanIcon } from '@/ui/icons';

const ROUTES = [
  {
    link: '/',
    name: 'Find a store'
  },
  {
    link: '/',
    name: 'Help'
  },
  {
    link: '/',
    name: 'Join Us'
  },
  {
    link: '/',
    name: 'Sign In'
  }
];

export const PreHeader = () => (
  <div className='flex max-h-[60px] items-center justify-between bg-gray-200 px-[36px]'>
    <ul className='flex gap-3'>
      <li className=''>
        <a href='/'>
          <JordanIcon />
        </a>
      </li>
    </ul>
    <div className='flex'>
      {ROUTES.map((route, index) => (
        <div key={index} className='flex items-center'>
          <a className='py-[4px] px-[8px]' href={route.link}>
            <Typography variant='body-2'>{route.name}</Typography>
          </a>
          <Typography variant='body-2'>
            {ROUTES.length - 1 !== index && <span>|</span>}
          </Typography>
        </div>
      ))}
    </div>
  </div>
);
