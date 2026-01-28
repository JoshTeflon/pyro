import { AppleMusic, Connect, Gallery, Home, Instagram, Music, Snapchat, Spotify, Tiktok, Youtube } from '@/components/icons';

import GalleryCardImage0 from '@/public/images/gallery/gallery-card-0.jpg';
import GalleryCardImage1 from '@/public/images/gallery/gallery-card-1.jpeg';
import GalleryCardImage2 from '@/public/images/gallery/gallery-card-2.jpg';
import GalleryCardImage3 from '@/public/images/gallery/tempt-pegs.jpeg';

import { IIArtist, IGalleryCard, IMenuItems, ITrackInfo, TrackType } from '@/types';

export const navigationMenuItems: IMenuItems[] = [
  {
    label: 'home',
    link: '',
    icon: Home,
  },
  {
    label: 'music',
    link: '#music',
    icon: Music,
  },
  {
    label: 'gallery',
    link: '#gallery',
    icon: Gallery,
  },
  {
    label: 'connect',
    link: '#connect',
    icon: Connect,
  },
];

export const languageMenuItems: IMenuItems[] = [
  {
    label: 'English',
    link: 'en'
  },
  {
    label: 'Français',
    link: 'fr'
  },
  {
    label: 'Español',
    link: 'es'
  },
  {
    label: 'Deutsch',
    link: 'de'
  },
  {
    label: 'Italiano',
    link: 'it'
  },
  {
    label: 'Nederlands',
    link: 'nl'
  },
  {
    label: 'Português',
    link: 'pt'
  },
  {
    label: 'Japanese',
    link: 'ja'
  },
];

export const artist: IIArtist = {
  name: 'ii6 pyro',
  short_name: 'ii6',
  main_image: '/images/ii6-pyro-main.png',
  latest_release_link: 'https://distrokid.com/hyperfollow/ii6pyro/tempt',
  siteUrl: 'https://ii6pyro.xyz',
  socials: [
    {
      name: 'spotify',
      icon: Spotify,
      url: 'https://open.spotify.com/artist/6laAkWba8MQXFXnwVZ84Ig?si=Ii67c6D2T1eA4rh41xS1rg',
    },
    {
      name: 'apple-music',
      icon: AppleMusic,
      url: 'https://music.apple.com/ng/artist/pyro/1588251176',
    },
    {
      name: 'instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/pyrobaby__/',
    },
    {
      name: 'youtube',
      icon: Youtube,
      url: 'https://www.youtube.com/@pyro247_',
    },
    {
      name: 'snapchat',
      icon: Snapchat,
      url: 'https://snapchat.com/t/oDldruSv',
    },
    {
      name: 'tiktok',
      icon: Tiktok,
      url: 'https://www.tiktok.com/@ii6pyro',
    },
  ],
};

export const musicList: ITrackInfo[] = [
  {
    name: 'tempt',
    cover: '/images/music_covers/tempt.png',
    video: '/tempt-visualizer.mp4',
    youtubeId: 'dbdcWhkyvEI',
    type: TrackType.SINGLE,
    year: '2025',
  },
  {
    name: 'deny',
    cover: '/images/music_covers/deny.jpeg',
    video: '/nvm-visualizer.mp4',
    youtubeId: 'Y-nU_3fG2uc',
    type: TrackType.SINGLE,
    year: '2025',
  },
  {
    name: 'surrender',
    cover: '/images/music_covers/surrender_cover.png',
    video: '/surrender-visualizer.mp4',
    youtubeId: 'SAQXk6rP4ww',
    type: TrackType.SINGLE,
    year: '2025',
  },
  {
    name: 'go',
    cover: '/images/music_covers/go_cover.jpeg',
    video: '/tempt-visualizer.mp4',
    youtubeId: 'dr0zGaZKja4',
    type: TrackType.SINGLE,
    year: '2025',
  },
  {
    name: 'nvm',
    cover: '/images/music_covers/nvm_cover.jpg',
    video: '/nvm-visualizer.mp4',
    youtubeId: 'bGffXgRrckU',
    type: TrackType.SINGLE,
    year: '2025',
  },
  {
    name: 'lma',
    cover: '/images/music_covers/lma_cover.jpg',
    video: '/surrender-visualizer.mp4',
    youtubeId: 'qn7haRe2QE4',
    type: TrackType.SINGLE,
    year: '2025',
  },
  {
    name: 'haze',
    cover: '/images/music_covers/haze_cover.jpg',
    video: '/tempt-visualizer.mp4',
    youtubeId: 'h53pPUN0PZE',
    type: TrackType.SINGLE,
    year: '2025',
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