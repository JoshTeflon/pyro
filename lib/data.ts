import { Instagram, X, Spotify, Youtube, AppleMusic, Audiomack } from '@/components/icons';

import GalleryCardImage0 from '@/public/images/gallery/gallery-card-0.jpg';
import GalleryCardImage1 from '@/public/images/gallery/gallery-card-1.jpeg';
import GalleryCardImage2 from '@/public/images/gallery/gallery-card-2.jpg';

import { IIArtist, IGalleryCard, IMenuItems, ITrackInfo } from '@/types';

export const artist: IIArtist = {
  name: 'ii6 pyro',
  short_name: 'ii6',
  main_image: '/images/ii6-pyro-main.png',
  socials: {
    music: [
      {
        name: 'spotify',
        icon: Spotify,
        url: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
      },
      {
        name: 'audiomack',
        icon: Audiomack,
        url: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
      },
      {
        name: 'apple-music',
        icon: AppleMusic,
        url: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
      },
    ],
    video: [
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
        name: 'youtube',
        icon: Youtube,
        url: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
      },
      // {
      //   name: 'tiktok',
      //   icon: Tiktok,
      //   url: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
      // },
    ]
  },
};

export const menuItems: IMenuItems[] = [
  {
    item: 'music',
    link: '#music'
  },
  {
    item: 'gallery',
    link: '#gallery'
  },
  {
    item: 'merch',
    link: ''
  },
  {
    item: 'contact',
    link: '#footer'
  },
];

export const musicList: ITrackInfo[] = [
  {
    name: 'deny',
    cover: '/images/music_covers/deny.jpeg',
    video: '/surrender-visualizer.mp4'
  },
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
];

export const galleryDeck: IGalleryCard[] = [
  {
    name: 'resurrection',
    image: GalleryCardImage0,
    width: 1080,
    height: 1080 ,
    bottom: '-20%',
    left: '30%',
  },
  {
    name: 'awake',
    image: GalleryCardImage1,
    width: 1170,
    height: 1714,
    top: '-30rem',
    left: '80%',
  },
  {
    name: 'depth',
    image: GalleryCardImage2,
    width: 798,
    height: 1080,
    bottom: '70%',
    left: '20%',
  },
  {
    name: 'awake2',
    image: GalleryCardImage0,
    width: 1170,
    height: 1714,
    top: '50%',
    left: '90%',
  },
  {
    name: 'depth2',
    image: GalleryCardImage1,
    width: 798,
    height: 1080,
    bottom: '-20%',
    left: '0',
  },
  {
    name: 'resurrection2',
    image: GalleryCardImage2,
    width: 1080,
    height: 1080 ,
    top: '-20%',
    left: '70%',
  },
  {
    name: 'depth3',
    image: GalleryCardImage1,
    width: 1170,
    height: 1714 ,
    top: '30%',
    left: '10%',
  },
  {
    name: 'awake3',
    image: GalleryCardImage0,
    width: 798,
    height: 1080,
    bottom: '-40%',
    left: '65%',
  },
];