import { Header, PreHeader } from '@/src/components';
import { Banner, DescountBanner } from '@/src/sections';
import { CarouselShoes } from '@/src/sections/home/carouselShoes/CarouselShoes';

export const Home = () => (
  <>
    <PreHeader />
    <Header />
    <DescountBanner />
    <Banner />
    <CarouselShoes />
  </>
);

export default Home;
