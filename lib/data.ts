import { Instagram, X, Tiktok, Spotify, Youtube } from '@/components/icons';
import { ArtistInterface, MenuItems, TrackDetails } from '@/types';

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
    link: '#music'
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

export const musicList: TrackDetails[] = [
  {
    name: 'surrender',
    cover: '/images/music_covers/surrender_cover.png',
    video: '/surrender-visualizer.mp4'
  },
  {
    name: 'go',
    cover: '/images/music_covers/go_cover.jpeg',
    video: '/surrender-visualizer.mp4'
  },
  {
    name: 'nvm',
    cover: '/images/music_covers/nvm_cover.jpg',
    video: '/nvm-visualizer.mp4'
  },
  {
    name: 'lma',
    cover: '/images/music_covers/lma_cover.jpg',
    video: '/surrender-visualizer.mp4'
  },
  {
    name: 'haze',
    cover: '/images/music_covers/haze_cover.jpg',
    video: '/nvm-visualizer.mp4'
  },
]