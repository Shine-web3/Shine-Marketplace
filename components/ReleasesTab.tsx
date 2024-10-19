import Image from 'next/image'
import { Heart, MessageCircle, Share2 } from 'lucide-react'
import { Release } from '../types/types'

const releases: Release[] = [
  { title: "Echoes of Light", artist: "0xGonzalo", duration: "02:28", timeAgo: "3 months ago", imageUrl: "/placeholder.svg?height=150&width=150" },
  { title: "Dynamic 2024", artist: "0xGonzalo", duration: "06:44", timeAgo: "6 months ago", imageUrl: "/placeholder.svg?height=150&width=150" },
  { title: "Ex Nihilo", artist: "0xGonzalo", duration: "03:32", timeAgo: "9 months ago", imageUrl: "/placeholder.svg?height=150&width=150" },
]

export default function ReleasesTab() {
  return (
    <div className="space-y-6">
      {releases.map((release, index) => (
        <div key={index} className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
          <Image src={release.imageUrl} alt={release.title} width={80} height={80} className="rounded-lg w-full sm:w-20 h-20 object-cover" />
          <div className="flex-1 w-full">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-semibold">{release.title}</h4>
                <p className="text-gray-400">{release.artist}</p>
              </div>
              <div className="text-right text-sm">
                <span className="text-gray-400 block">{release.duration}</span>
                <span className="text-gray-400 block">{release.timeAgo}</span>
              </div>
            </div>
            <div className="w-full bg-gray-700 h-1 rounded-full overflow-hidden mb-2">
              <div className="bg-blue-500 h-full w-1/3"></div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex space-x-4">
                <button className="text-gray-400 hover:text-white">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="text-gray-400 hover:text-white">
                  <MessageCircle className="w-5 h-5" />
                </button>
                <button className="text-gray-400 hover:text-white">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
              <button className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm hover:bg-blue-700 transition duration-300">
                Collect
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}