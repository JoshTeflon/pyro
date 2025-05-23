import { Instagram, X, Tiktok, Spotify, Youtube, AppleMusic, Audiomack } from '@/components/icons';
import { ArtistInterface, MenuItems, TrackDetails } from '@/types';

export const artist: ArtistInterface = {
  name: 'ii6 pyro',
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