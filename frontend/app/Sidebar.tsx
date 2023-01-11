import Link from "next/link";
import {
  HomeIcon,
  FireIcon,
  FilmIcon,
  VideoCameraIcon,
  CogIcon,
  StarIcon,
  BellIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const links = [
  {
    name: "Home",
    icon: <HomeIcon />,
    tag: "/",
  },

  {
    name: "Movie",
    icon: <FilmIcon />,
    tag: "/movies",
  },
  {
    name: "Tv Show",
    icon: <VideoCameraIcon />,
    tag: "/tv-shows",
  },
  {
    name: "Favourites",
    icon: <StarIcon />,
    tag: "/favourites",
  },
  {
    name: "Discover",
    icon: <FireIcon />,
    tag: "/discover",
  },
  {
    name: "Notifications",
    icon: <BellIcon />,
    tag: "/notifications",
  },
  {
    name: "Settings",
    icon: <CogIcon />,
    tag: "/settings",
  },
];

function Sidebar() {
  return (
    <div className="bg-white max-w-[230px] px-6 pt-8 h-full">
      <h1 className="logo text-3xl font-bold text-orange-600 mb-10 border-b-[0.5px] pb-6">
        Stremio
      </h1>
      <nav className="flex flex-col space-y-8 mb-12">
        {links.map((link) => (
          <Link
            href={link.tag}
            key={link.name}
            className="flex items-center space-x-3"
          >
            <p className="text-xs w-[20px] font-light">{link.icon}</p>
            <p className="font-bold text-xs">{link.name}</p>
          </Link>
        ))}
      </nav>
      <hr />
      <div className="pt-8 pb-8">
        <p className="text-xs font-medium mb-6">Coming Soon</p>
        <div className="relative w-44 h-[250px] rounded-xl">
          <Image className="rounded-xl" alt="coming-soon" src="/bp.jpg" fill />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
