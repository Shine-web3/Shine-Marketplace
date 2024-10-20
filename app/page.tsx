import Navigation from '../components/Navigation'
import FeaturedSection from '../components/FeaturedSection'
import VideoDropSection from '../components/VideoDropSection'
import TrendingReleasesSection from '../components/TrendingReleasesSection'


export default function Home() {

  return (
    <>
      <Navigation />
        <main className="p-4 sm:p-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center flex items-center justify-center">
            Every star shines
            <img src='/images/featured/diamond.png' alt="Diamond" width={96} height={96} className=""/>
          </h2>
          <FeaturedSection />
          <VideoDropSection />
          <TrendingReleasesSection />
          </main>
    </>
  )
}
