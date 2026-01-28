import { StaticImageData } from 'next/image';
import { SVGProps } from 'react';

export enum MenuType {
  NAVIGATION = 'navigation',
  LANGUAGE = 'language',
}

export enum TrackType {
  SINGLE = 'single',
  EP = 'ep',
  ALBUM = 'album',
}

export interface IIArtist {
  name: string;
  short_name: string;
  main_image: string;
  latest_release_link: string;
  siteUrl: string;
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

export interface IAppContext {
  navOpen: boolean;
  toggleNavOpen: () => void;
  closeNav: () => void;
  isMobileSize: boolean;
  ready: boolean;
}

export interface ITrackInfo {
  name: string;
  cover: string;
  video: string;
  youtubeId: string;
  type: TrackType;
  year: string;
}

export interface IGalleryCard {
  name: string;
  image: StaticImageData;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  from: gsap.TweenVars;
  keyframes: gsap.TweenVars[];
  position?: string;
}