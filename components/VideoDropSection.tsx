import { Play } from 'lucide-react'

export default function VideoDropSection() {
  return (
    <section className="mb-12">
      <h3 className="text-xl sm:text-2xl font-semibold mb-4">Video Drop</h3>
      <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden">
        <video
          src="/videos/haiku.mp4"
          className="w-full h-full object-cover"
          controls
        />
        {/* <div className="absolute inset-0 flex items-center justify-center">
          <Play className="w-12 h-12 sm:w-16 sm:h-16 text-white opacity-70" />
        </div> */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
          <h4 className="text-lg sm:text-xl font-semibold">Haiku - Sol Siete</h4>
          <div className="flex justify-between items-center mt-2">
            <button className="bg-blue-600 text-white py-1 px-3 sm:px-4 rounded-md text-sm hover:bg-blue-700 transition duration-300">
              Collect
            </button>
            <span className="text-gray-300 text-sm">Ending in 06m 15s</span>
          </div>
        </div>
      </div>
    </section>
  )
}