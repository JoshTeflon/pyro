import { Instagram, X, Tiktok, Spotify, Youtube } from '@/components/icons';
import { ArtistInterface, MenuItems } from '@/types';

export const artist: ArtistInterface = {
  name: 'ii6 pyro',
  main_image: '/images/ii6-pyro-main.png',
  socials: [
    {
      name: 'instagram',
      icon: Instagram,
      url: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    },
    {
      name: 'x',
      icon: X,
      url: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    },
    {
      name: 'tiktok',
      icon: Tiktok,
      url: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    },
    {
      name: 'spotify',
      icon: Spotify,
      url: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    },
    {
      name: 'youtube',
      icon: Youtube,
      url: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    },
    // {
    //   name: 'email',
    //   icon: Email,
    //   url: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    // },
  ],
}

export const menuItems: MenuItems[] = [
  {
    item: 'music',
    link: ''
  },
  {
    item: 'videos',
    link: ''
  },
  {
    item: 'store',
    link: ''
  },
  {
    item: 'gallery',
    link: ''
  },
  {
    item: 'about us',
    link: ''
  },
  // {
  //   item: 'newsletter',
  //   link: ''
  // },
]