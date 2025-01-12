"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  HomeIcon, 
  DriversIcon, 
  RidersIcon,
  RidesIcon,
  LocationsIcon,
  CalendarIcon,
  ChatBotIcon,
  ProfileIcon
} from '@/app/icons';

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Home', icon: HomeIcon, path: '/' },
    { name: 'Drivers', icon: DriversIcon, path: '/drivers' },
    { name: 'Riders', icon: RidersIcon, path: '/riders' },
    { name: 'Rides', icon: RidesIcon, path: '/rides' },
    { name: 'Locations', icon: LocationsIcon, path: '/locations' },
    { name: 'Calendar', icon: CalendarIcon, path: '/calendar' },
    { name: 'Chat Bot', icon: ChatBotIcon, path: '/chat' },
    { name: 'Profile', icon: ProfileIcon, path: '/profile' },
  ];

  return (
    <aside className="w-64 min-h-screen bg-[#F1F9F1] border-r border-emerald-100 rounded-tr-large rounded-br-large ">
      {/* Logo/Brand */}
      <div className="px-6 py-4 ">
        <h1 className="text-title font-bold text-gray-900">Independent Kids</h1>
      </div>

      {/* Navigation Menu */}
      <nav className="mt-6 flex flex-col">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.name}
              href={item.path}
              className={`flex items-center px-6 py-3 h-20 text-base transition-colors text-title-normal ${
                isActive
                  ? 'bg-selected-bg text-emerald-600 font-medium border-l-4 border-emerald-600'
                  : 'text-gray-700 hover:bg-white hover:text-emerald-600'
              }`}
            >
              <Icon
                className={`w-9 h-8 mr-3 ${
                isActive ? 'text-emerald-600' : 'text-gray-500'
                }`}
              />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;