import { Typography, IconButton } from '@/ui';
import { CartIcon, LikeIcon, NikeIcon } from '@/ui/icons';

const ROUTES = [
  {
    link: '/',
    name: 'New & Featured'
  },
  {
    link: '/',
    name: 'Men'
  },
  {
    link: '/',
    name: 'Women'
  },
  {
    link: '/',
    name: 'Kids'
  },
  {
    link: '/',
    name: 'Sale'
  }
];

export const Header = () => (
  <header className='flex h-[64px] items-center justify-between gap-[20px] px-6'>
    <div>
      <NikeIcon className='h-[59px] w-[59px] scale-125' />
    </div>
    <div>
      <ul className='flex gap-[18px]'>
        {ROUTES.map((route, idx) => (
          <li key={idx}>
            <a href={route.link}>
              <Typography variant='body-2'>{route.name}</Typography>
            </a>
          </li>
        ))}
      </ul>
    </div>
    <div>
      <a href='/'>
        <IconButton icon={<LikeIcon />} />
      </a>
      <a href='/'>
        <IconButton icon={<CartIcon />} />
      </a>
    </div>
  </header>
);
