import { Rock_Salt } from 'next/font/google';
import { News_Cycle } from 'next/font/google';

export const rockSalt = Rock_Salt({ 
  subsets: ['latin'], 
  weight: ['400'],
  variable: '--font-rock-salt'
});

export const newsCycle = News_Cycle({ 
  subsets: ['latin'], 
  weight: ['400', '700'],
  variable: '--font-news-cycle'
});