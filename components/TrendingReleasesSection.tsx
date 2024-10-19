import Image from 'next/image'
import { MediaItem } from '../types/types'

const trendingReleases: MediaItem[] = [
  { title: "Second soul", artist: "Nene", price: "", imageUrl: "/placeholder.svg?height=150&width=150", endTime: "" },
  { title: "Nintai", artist: "Yoshio Mase", price: "", imageUrl: "/placeholder.svg?height=150&width=150", endTime: "" },
  { title: "Fool for You", artist: "Zanski", price: "", imageUrl: "/placeholder.svg?height=150&width=150", endTime: "" },
  { title: "I Can't Let You Go", artist: "Leandro Watt", price: "", imageUrl: "/placeholder.svg?height=150&width=150", endTime: "" },
  { title: "Alyssa (Gone)", artist: "Erin Nolan", price: "", imageUrl: "/placeholder.svg?height=150&width=150", endTime: "" },
  { title: "Second soul", artist: "Nene", price: "", imageUrl: "/placeholder.svg?height=150&width=150", endTime: "" },
  { title: "Nintai", artist: "Yoshio Mase", price: "", imageUrl: "/placeholder.svg?height=150&width=150", endTime: "" },
  { title: "Fool for You", artist: "Zanski", price: "", imageUrl: "/placeholder.svg?height=150&width=150", endTime: "" },
  { title: "I Can't Let You Go", artist: "Leandro Watt", price: "", imageUrl: "/placeholder.svg?height=150&width=150", endTime: "" },
  { title: "Alyssa (Gone)", artist: "Erin Nolan", price: "", imageUrl: "/placeholder.svg?height=150&width=150", endTime: "" }
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
            <Image src={item.imageUrl} alt={item.title} width={150} height={150} className="w-full h-32 sm:h-36 object-cover" />
            <div className="p-2 flex flex-col justify-between items-start">
              <div className="w-full">
                <p className="font-semibold truncate">{truncateTitle(item.title, 12)}</p>
                <p className="text-sm text-gray-400 truncate">{item.artist}</p>
              </div>
              <button className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs hover:bg-blue-700 transition duration-300 mt-2">
                Collect
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}