import Image from 'next/image';

import { Header } from '@/components/interfaces';
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
      <div className='z-10 absolute inset-0 w-full h-full bg-main/50'></div>
      <div className='side-pad z-20 relative'>
        <Header  />
        {/* <div className='text-body'>
          <h1>Website of ii6 pyro</h1>
        </div> */}
      </div>
    </section>
  )
}

export default Home;