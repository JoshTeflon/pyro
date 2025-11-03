import { SVGProps } from 'react';

export enum MenuType {
  NAVIGATION = 'navigation',
  LANGUAGE = 'language',
}

export interface IIArtist {
  name: string;
  short_name: string;
  main_image: string;
  socials: IPlatform[];
}

export interface IMenuItems {
  label: string;
  link: string;
  icon?: React.ComponentType<SVGProps<SVGSVGElement>>;
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
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  from: gsap.TweenVars;
  keyframes: gsap.TweenVars[];
  position?: string;
}