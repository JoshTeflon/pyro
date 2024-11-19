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