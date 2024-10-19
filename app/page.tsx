import Navigation from '../components/Navigation'
import FeaturedSection from '../components/FeaturedSection'
import VideoDropSection from '../components/VideoDropSection'
import TrendingReleasesSection from '../components/TrendingReleasesSection'

export default function Home() {
  return (
    <>
      <main className="p-4 sm:p-8 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Every star shines</h2>
        <FeaturedSection />
        <VideoDropSection />
        <TrendingReleasesSection />
      </main>
    </>
  )
}