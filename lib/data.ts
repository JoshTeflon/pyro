import { Instagram, X, Spotify, Youtube, AppleMusic, Audiomack } from '@/components/icons';

import GalleryCardImage0 from '@/public/images/gallery/gallery-card-0.jpg';
import GalleryCardImage1 from '@/public/images/gallery/gallery-card-1.jpeg';
import GalleryCardImage2 from '@/public/images/gallery/gallery-card-2.jpg';
import GalleryCardImage3 from '@/public/images/gallery/tempt-pegs.jpeg';

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
    bottom: '-20%',
    left: '30%',
    from: { z: -4000, opacity: 0 },
    keyframes: [
      { z: -2900, opacity: 1 },
      { z: -1050, opacity: 1 },
      { z: 0, opacity: 0 },
    ],
    position: `>-0.5`,
  },
  {
    name: 'awake',
    image: GalleryCardImage1,
    top: '-30rem',
    left: '80%',
    from: { z: -4000, y: 300, opacity: 0 },
    keyframes: [
      { z: -2900, y: 200, opacity: 1 },
      { z: -700, y: 100, opacity: 1 },
      { z: 0, y: 0, opacity: 0 },
    ],
    position: `>-1.2`,
  },
  {
    name: 'depth',
    image: GalleryCardImage2,
    bottom: '70%',
    left: '20%',
    from: { opacity: 0, z: -4000 },
    keyframes: [
      { z: -2900, opacity: 1 },
      { z: -1050, opacity: 1 },
      { z: 0, opacity: 0 },
    ],
    position: `>-1.25`,
  },
  {
    name: 'awake2',
    image: GalleryCardImage3,
    top: '50%',
    left: '90%',
    from: { opacity: 0, z: -4200 },
    keyframes: [
      { z: -3050, opacity: 1 },
      { z: -700, opacity: 1 },
      { z: 0, opacity: 0 },
    ],
    position: `>-1.3`,
  },
  {
    name: 'depth2',
    image: GalleryCardImage1,
    bottom: '-20%',
    left: '0',
    from: { z: -4200, opacity: 0 },
    keyframes: [
      { z: -3050, opacity: 1 },
      { z: -700, opacity: 1 },
      { z: 0, opacity: 0 },
    ],
    position: `>-1.35`,
  },
  {
    name: 'resurrection2',
    image: GalleryCardImage2,
    top: '-20%',
    left: '70%',
    from: { z: -4500, opacity: 0 },
    keyframes: [
      { z: -3500, opacity: 1 },
      { z: -1500, opacity: 1 },
      { z: 0, opacity: 0 },
    ],
    position: `>-1.3`,
  },
  {
    name: 'depth3',
    image: GalleryCardImage1,
    top: '30%',
    left: '10%',
    from: { z: -5200, opacity: 0 },
    keyframes: [
      { z: -4500, opacity: 1 },
      { z: -2000, opacity: 1 },
      { z: -800, opacity: 0 },
    ],
    position: `>-1.25`,
  },
  {
    name: 'awake3',
    image: GalleryCardImage0,
    bottom: '-40%',
    left: '65%',
    from: { z: -4800, opacity: 0},
    keyframes: [
      { y: -32, z: -4000, opacity: 1 },
      { y: -128, z: -1500, opacity: 1 },
      { y: -160, z: -800, opacity: 0 },
    ],
    position: `>-1.2`,
  },
];