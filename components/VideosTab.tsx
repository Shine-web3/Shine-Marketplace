import Image from 'next/image'
import { Play, Heart, MessageCircle, Share2 } from 'lucide-react'
import { Video } from '../types/types'

const videos: Video[] = [
  { title: "Shining Hands", thumbnailUrl: "/placeholder.svg?height=200&width=350", duration: "03:45" },
  { title: "A new Begining", thumbnailUrl: "/placeholder.svg?height=200&width=350", duration: "04:20" },
]

export default function VideosTab() {
  return (
    <div className="space-y-6">
      {videos.map((video, index) => (
        <div key={index} className="space-y-4">
          <div className="relative aspect-video">
            <Image src={video.thumbnailUrl} alt={video.title} layout="fill" objectFit="cover" className="rounded-lg" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Play className="w-12 h-12 text-white opacity-70" />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <h4 className="font-semibold text-lg">{video.title}</h4>
              <div className="flex items-center space-x-4 mt-2">
                <button className="text-gray-400 hover:text-white">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="text-gray-400 hover:text-white">
                  <MessageCircle className="w-5 h-5" />
                </button>
                <button className="text-gray-400 hover:text-white">
                  <Share2 className="w-5 h-5" />
                </button>
                <span className="text-gray-400 text-sm">{video.duration}</span>
              </div>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition duration-300">
              Collect
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}