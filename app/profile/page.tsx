'use client'

import { useState } from 'react'
import ReleasesTab from '../../components/ReleasesTab'
import VideosTab from '../../components/VideosTab'

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('releases')

  return (
    <>
      <main className="relative z-10">
        <div className="max-w-6xl mx-auto py-8 px-4">
          {/* Profile Header */}
          <div className="relative mb-8">
            <img src="/images/profile/banner.jpeg" alt="Profile banner" width={1200} height={240} className="w-full h-40 sm:h-56 object-cover rounded-lg" />
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
              <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between">
                <div className="flex items-center sm:items-end space-x-4">
                  <img src="/images/profile/profile.jpg" alt="Profile picture" width={100} height={100} className="w-16 h-16 sm:w-24 sm:h-24 rounded-full border-4 border-black -mb-2 sm:-mb-8" />
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold">0xGonzalo</h2>
                    <p className="text-gray-400 text-sm sm:text-base">0xac4...664c</p>
                  </div>
                </div>
                <div className="flex space-x-6 mt-4 sm:mt-0">
                  {/* Social media links and follow button */}
                </div>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="mb-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-2">About</h3>
            <p className="text-gray-400 mb-2">magic and art ~</p>
            <p className="text-gray-400 mb-2">Label Owner: @mundo-perro</p>
            <p className="text-gray-400">Playing synths at @varesemusica</p>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-700 mb-8 overflow-x-auto">
            <nav className="-mb-px flex space-x-8">
              <a
                href="#"
                className={`pb-4 font-medium whitespace-nowrap ${activeTab === 'releases' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-400 hover:text-gray-300'}`}
                onClick={() => setActiveTab('releases')}
              >
                Releases
              </a>
              <a
                href="#"
                className={`pb-4 font-medium whitespace-nowrap ${activeTab === 'videos' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-400 hover:text-gray-300'}`}
                onClick={() => setActiveTab('videos')}
              >
                Videos
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300 pb-4 font-medium whitespace-nowrap">Collection</a>
              <a href="#" className="text-gray-400 hover:text-gray-300 pb-4 font-medium whitespace-nowrap">Posts</a>
            </nav>
          </div>

          <div className="space-y-8">
            {activeTab === 'releases' && <ReleasesTab />}
            {activeTab === 'videos' && <VideosTab />}
          </div>
        </div>
      </main>
    </>
  )
}