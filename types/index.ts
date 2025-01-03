import { SVGProps } from 'react';

export interface ArtistInterface {
  name: string
  main_image: string
  socials: PlatformInterface[]
}

export interface MenuItems {
  item: string
  link: string
}

export interface PlatformInterface {
  name: string
  icon: React.ComponentType<SVGProps<SVGSVGElement>>
  url: string
}

export interface NavContextInterface {
  navOpen: boolean
  toggleNavOpen: () => void
  closeNav: () => void
}

export interface TrackDetails {
  name: string
  cover: string
}