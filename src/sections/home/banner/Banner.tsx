import { Button, Typography } from '@/src/components';

export const Banner = () => (
  <section className='mx-auto flex max-w-[1000px] flex-col items-center px-[36px]'>
    <Typography tag='p' variant='body-3'>
      Just in
    </Typography>
    <Typography tag='h1' variant='title-1'>
      NIKE AIR MAX PULSE
    </Typography>
    <div className='mt-[24px]'>
      <Typography tag='p' variant='body-3'>
        Inspired by the energy of London&apos;s music scene comes the Air Max
        Pulse. A tough silhouette infused with an unreal sensation of Air
      </Typography>
    </div>
    <div className='mt-[24px]'>
      <a href='/'>
        <Button size='small'>shop</Button>
      </a>
    </div>
  </section>
);
