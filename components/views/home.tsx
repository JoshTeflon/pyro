import Image from 'next/image';

import { Button } from '@/components/interfaces';
import { artist } from '@/lib/data';

const Home = () => {
  return (
    <section className='relative w-full h-dvh'>
      <Image
        className='z-10 absolute inset-0 w-full h-full object-cover object-center'
        src={artist.main_image}
        alt='ii6 pyro artiste-themed background'
        quality={100}
        // placeholder='blur'
        fill
        priority
      />
      <div className='z-10 absolute inset-0 w-full h-full bg-overlay'></div>
      <div className='side-pad z-30 relative w-full h-full'>
        <div className='absolute bottom-16 left-1/2 -translate-x-1/2'>
          <div className='flex flex-col items-center text-center'>
            <p className='text-3xl lg:text-4xl font-extralight uppercase'>New Release</p>
            <div className='mt-3 mb-4 flex items-baseline space-x-2 font-bold hover:animate-glow'>
              <span className='text-xl lg:text-2xl'>GO</span>
              <span className='text-sm lg:text-base tracking-tighter'>ft. wyld chlld</span>
            </div>
            <Button
              variant='primary'
              size='lg'
            >
              Stream Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home;