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
            {/* <Image src={item.imageUrl} alt={item.title} width={300} height={300} className="w-full aspect-square object-cover" /> */}
            <div className="aspect-square">
              <img key={index} src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
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