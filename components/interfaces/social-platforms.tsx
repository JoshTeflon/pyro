import { SVGProps } from "react"
import { Email, Instagram, Spotify, Tiktok, X, Youtube } from "../icons"


interface PlatformInterface {
  name: string
  icon: React.ComponentType<SVGProps<SVGSVGElement>>
}

const platforms: PlatformInterface[] = [
  {
    name: 'spotify',
    icon: Spotify
  },
  {
    name: 'instagram',
    icon: Instagram
  },
  {
    name: 'x',
    icon: X
  },
  {
    name: 'youtube',
    icon: Youtube
  },
  {
    name: 'tiktok',
    icon: Tiktok
  },
  {
    name: 'email',
    icon: Email
  }
]

const SocialPlatforms: React.FC = () => {
  return (
    <ul className='flex items-center space-x-2 lg:space-x-2.5'>
      {
        platforms?.map((icon: PlatformInterface) => (
          <li
            key={icon.name}
            className='group cursor-pointer w-7 h-7 flex items-center justify-center hover:bg-primary rounded-full transition-colors duration-500 ease-in-out'
          >
            <icon.icon className="w-4 text-primary group-hover:text-main" />
          </li>
        ))
      }
    </ul>
  )
}

export default SocialPlatforms;