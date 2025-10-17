import { SVGProps } from 'react';

export interface IIArtist {
  name: string;
  short_name: string;
  main_image: string;
  socials: {
    music: IPlatform[],
    video: IPlatform[]
  };
}

export interface IMenuItems {
  item: string;
  link: string;
}

export interface IPlatform {
  name: string;
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
  url: string;
}

export interface INavContext {
  navOpen: boolean;
  toggleNavOpen: () => void;
  closeNav: () => void;
}

export interface ITrackInfo {
  name: string;
  cover: string;
  video: string;
}

export interface IGalleryCard {
  name: string;
  image: any;
  width: number;
  height: number;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}