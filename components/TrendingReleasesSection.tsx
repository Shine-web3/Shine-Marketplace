import Image from 'next/image'
import { MediaItem } from '../types/types'

const trendingReleases: MediaItem[] = [
  { title: "Second soul", artist: "Nenx", price: "", imageUrl: "/images/trending/1.png", endTime: "" },
  { title: "Nintai", artist: "Yoshiro Mare", price: "", imageUrl: "/images/trending/2.png", endTime: "" },
  { title: "Fool for You", artist: "Ziberia", price: "", imageUrl: "/images/trending/3.png", endTime: "" },
  { title: "I Can't Let You Go", artist: "Leandro Watt", price: "", imageUrl: "/images/trending/4.png", endTime: "" },
  { title: "Alyssa (Gone)", artist: "Erin Nolan", price: "", imageUrl: "/images/trending/5.png", endTime: "" },
  { title: "Knockem Out", artist: "Davyd Music", price: "", imageUrl: "/images/trending/6.png", endTime: "" },
  { title: "Don't make wait", artist: "Missaka", price: "", imageUrl: "/images/trending/7.png", endTime: "" },
  { title: "y 240724", artist: "Sandro B", price: "", imageUrl: "/images/trending/8.png", endTime: "" },
  { title: "X", artist: "CG Prod", price: "", imageUrl: "/images/trending/9.png", endTime: "" },
  { title: "Wonderful World", artist: "Within the Vacuum", price: "", imageUrl: "/images/trending/10.png", endTime: "" }
]

export default function TrendingReleasesSection() {
  const truncateTitle = (title: string, maxLength: number) => {
    return title.length > maxLength ? title.substring(0, maxLength - 3) + '...' : title;
  }

  return (
    <section>
      <h3 className="text-xl sm:text-2xl font-semibold mb-4">Trending Releases</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {trendingReleases.map((item, index) => (
          <div key={index} className="bg-zinc-800 rounded-lg overflow-hidden">
            <div className="aspect-square relative group">
              <img src={item.imageUrl} alt={item.title} width={150} height={150} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="text-white bg-opacity-50 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-2 flex justify-between items-start">
              <div className="flex-grow">
                <p className="font-semibold truncate">{truncateTitle(item.title, 12)}</p>
                <p className="text-sm text-gray-400 truncate">{item.artist}</p>
              </div>
              <button className="bg-[#E84142] text-white mt-1 px-4 py-1 rounded-full text-xs hover:bg-blue-700 transition duration-300 ml-2 flex-shrink-0">
                Collect
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}