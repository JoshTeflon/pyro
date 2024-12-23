import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Music = () => {
  // useGSAP(() => {
  //   gsap.to('.music', {
  //     translateY: '-100%',
  //     duration: 3,
  //     ease: 'power3.inOut',
  //   });
  // });

  return (
    <section className='music z-40 relative w-full min-h-dvh bg-main'>
    </section>
  )
}

export default Music;