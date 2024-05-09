import { Menu, SocialPlatforms } from "@/components/interfaces";


export default function Home() {
  return (
    <main className='w-full min-h-screen flex flex-col grow'>
      <header className='py-4 w-full border-b border-current'>
        <div>
          <Menu />
        </div>
      </header>
      <footer className='py-2 mt-auto shrink-0'>
        <SocialPlatforms />
      </footer>
    </main>
  );
}
