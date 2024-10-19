import Image from 'next/image'
import { MediaItem } from '../types/types'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

const featuredItems: MediaItem[] = [
    { title: "Cool Track 1", artist: "Sol Siete", price: "2 USDC", imageUrl: '/images/featured/1.png', endTime: "06m 15s" },
    { title: "Cool Track 2", artist: "Sol Siete", price: "3 USDC", imageUrl: '/images/featured/2.png', endTime: "06m 15s" },
    { title: "Cool Track 3", artist: "Sol Siete", price: "1 USDC", imageUrl: '/images/featured/3.png', endTime: "06m 15s" },
    { title: "Cool Track 4", artist: "Sol Siete", price: "4 USDC", imageUrl: '/images/featured/4.png', endTime: "06m 15s" }
]

export default function FeaturedSection() {
  return (
    <section className="mb-12">
      <h3 className="text-xl sm:text-2xl font-semibold mb-4">Featured</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {featuredItems.map((item, index) => (
          <div key={index} className="bg-zinc-800 rounded-lg overflow-hidden">
            <div className="aspect-square relative group">
              <img key={index} src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="text-white bg-opacity-50 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="font-semibold block">{item.title}</span>
                  <span className="text-gray-400 text-sm">{item.artist}</span>
                  <div className="flex justify-between items-center text-sm text-gray-400 mt-1">
                    <span>Ending in</span>
                    <span>{item.endTime}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[#E84142] mb-4">{item.price}</span>
                  <button className="bg-[#E84142] text-white px-4 py-1 rounded-full text-sm hover:bg-blue-700 transition duration-300">
                    Collect
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}