import Image from 'next/image';

import { Button, Header } from '@/components/interfaces';
import { artist } from '@/lib/data';

const Home = () => {
  return (
    <section className='relative w-full h-screen'>
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
        <Header  />
        <div className='absolute bottom-16 left-1/2 -translate-x-1/2'>
          <div className='flex flex-col items-center text-center space-y-4'>
            <p className='text-4xl lg:text-5xl font-extralight uppercase'>New Release</p>
            <span className='text-lg lg:text-xl font-black uppercase'>out now</span>
            <Button
              variant='primary'
              size='lg'
            >
              Listen
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home;