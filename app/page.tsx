import { Header, MobileNav } from '@/components/interfaces';
import { Home } from '@/components/views';
import NavContextProvider from '@/contexts/NavContext';

export default function Landing() {
  return (
    <NavContextProvider>
      <main className='relative w-full h-full flex flex-col grow font-geist-mono'>
        <Header  />
        <MobileNav />
        <Home />
      </main>
    </NavContextProvider>
  );
}
