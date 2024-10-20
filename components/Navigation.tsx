import Link from 'next/link'
import { Bell, Plus, User, Search } from 'lucide-react'
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Navigation() {
  return (
    <nav className="flex items-center justify-between p-4 border-b border-gray-800 relative z-10 w-full">
      <div className="flex items-center space-x-4 flex-grow">
        <Link href="/"><img src="/images/logos/shine.png" alt="Shine Logo" className="h-8" /></Link>
        <div className="relative flex-1 hidden sm:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 bg-gray-800 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div className="flex items-center space-x-6">
          <Bell className="w-6 h-6" />
          <div className="w-px h-6 bg-gray-700 hidden sm:block"></div>
          <Link href="/upload">
            <Plus className="w-6 h-6" />
          </Link>
          <Link href="/profile">
            <User className="w-6 h-6 mr-4" />
          </Link>
        </div>
      </div>
      {/* <button className="bg-[#E84142] mx-4 text-white px-4 py-1 rounded-full text-sm hover:bg-blue-700 transition duration-300"> */}
      <ConnectButton />
        {/* Connect
      </button> */}
    </nav>
  )
}