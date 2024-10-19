'use client'

import { Bell, Plus, User, Search, Play, Heart, MessageCircle, Share2, X, Upload, Check } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface MediaItem {
  title: string
  artist: string
  price: string
  imageUrl: string
  endTime: string
}

interface Release {
  title: string
  artist: string
  duration: string
  timeAgo: string
  imageUrl: string
}

interface Video {
  title: string
  thumbnailUrl: string
  duration: string
}

export function ShineUi() {
  const [showProfile, setShowProfile] = useState(false)
  const [showUpload, setShowUpload] = useState(false)
  const [activeTab, setActiveTab] = useState('releases')
  const [dragActive, setDragActive] = useState(false)
  const [isUnlockable, setIsUnlockable] = useState(false)
  const [unlockableType, setUnlockableType] = useState('')
  const [isRemix, setIsRemix] = useState(false)
  const [isFirstMinter, setIsFirstMinter] = useState(false)
  const [mintStart, setMintStart] = useState('now')
  const [splitRoyalties, setSplitRoyalties] = useState('solo')

  const featuredItems: MediaItem[] = [
    { title: "Cool Track 1", artist: "Sol Siete", price: "1 SOL", imageUrl: "/placeholder.svg?height=300&width=300", endTime: "06m 15s" },
    { title: "Cool Track 2", artist: "Sol Siete", price: "1 SOL", imageUrl: "/placeholder.svg?height=300&width=300", endTime: "06m 15s" },
    { title: "Cool Track 3", artist: "Sol Siete", price: "1 SOL", imageUrl: "/placeholder.svg?height=300&width=300", endTime: "06m 15s" },
    { title: "Cool Track 4", artist: "Sol Siete", price: "1 SOL", imageUrl: "/placeholder.svg?height=300&width=300", endTime: "06m 15s" },
    { title: "Cool Track 5", artist: "Sol Siete", price: "1 SOL", imageUrl: "/placeholder.svg?height=300&width=300", endTime: "06m 15s" },
  ]

  const trendingReleases: MediaItem[] = [
    { title: "Second soul", artist: "Nene", price: "", imageUrl: "/placeholder.svg?height=150&width=150", endTime: "" },
    { title: "Nintai", artist: "Yoshio Mase", price: "", imageUrl: "/placeholder.svg?height=150&width=150", endTime: "" },
    { title: "Fool for You", artist: "Zanski", price: "", imageUrl: "/placeholder.svg?height=150&width=150", endTime: "" },
    { title: "I Can't Let You Go", artist: "Leandro Watt", price: "", imageUrl: "/placeholder.svg?height=150&width=150", endTime: "" },
    { title: "Alyssa (Gone)", artist: "Erin Nolan", price: "", imageUrl: "/placeholder.svg?height=150&width=150", endTime: "" },
  ]

  const releases: Release[] = [
    { title: "Echoes of Light", artist: "0xGonzalo", duration: "02:28", timeAgo: "3 months ago", imageUrl: "/placeholder.svg?height=150&width=150" },
    { title: "Dynamic 2024", artist: "0xGonzalo", duration: "06:44", timeAgo: "6 months ago", imageUrl: "/placeholder.svg?height=150&width=150" },
    { title: "Ex Nihilo", artist: "0xGonzalo", duration: "03:32", timeAgo: "9 months ago", imageUrl: "/placeholder.svg?height=150&width=150" },
  ]

  const videos: Video[] = [
    { title: "Shining Hands", thumbnailUrl: "/placeholder.svg?height=200&width=350", duration: "03:45" },
    { title: "A new Begining", thumbnailUrl: "/placeholder.svg?height=200&width=350", duration: "04:20" },
  ]

  const truncateTitle = (title: string, maxLength: number) => {
    return title.length > maxLength ? title.substring(0, maxLength - 3) + '...' : title;
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // Handle file upload here
      console.log(e.dataTransfer.files)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background blob */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-radial from-gray-800 to-transparent rounded-full opacity-30"></div>
      </div>

      {/* Navigation */}
      <nav className="flex items-center justify-between p-4 border-b border-gray-800 relative z-10">
        <div className="flex items-center space-x-4 flex-1 max-w-5xl mx-auto">
          <h1 className="text-2xl font-bold">shine</h1>
          <div className="relative flex-1 max-w-2xl hidden sm:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 bg-gray-800 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="flex items-center space-x-6">
            <Bell className="w-6 h-6" />
            <div className="w-px h-6 bg-gray-700 hidden sm:block"></div>
            <button onClick={() => setShowUpload(true)}>
              <Plus className="w-6 h-6" />
            </button>
            <button onClick={() => setShowProfile(!showProfile)}>
              <User className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Upload Dialog */}
      <Dialog open={showUpload} onOpenChange={setShowUpload}>
        <DialogContent className="sm:max-w-[900px] bg-black p-0 gap-0 border border-gray-800">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="text-2xl font-bold">Create a Collectible</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col lg:flex-row">
            <div
              className={`lg:flex-1 border-b lg:border-b-0 lg:border-r border-gray-800 p-6 flex flex-col items-center justify-center ${
                dragActive ? 'bg-blue-500 bg-opacity-10' : ''
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <Upload className="w-12 h-12 text-gray-400 mb-4" />
              <p className="text-gray-400 text-center mb-4">
                Drag and drop your files here
              </p>
              <p className="text-gray-500 text-sm text-center mb-4">
                Supported file types: MP3, WAV, FLAC, AIFF, AAC, OGG, MP4, MOV, AVI, WEBM
              </p>
              <Button variant="outline" className="mt-4 border-gray-700 text-gray-300 hover:bg-gray-800">
                Select Files
              </Button>
            </div>
            <div className="lg:flex-1 p-6 space-y-4 lg:space-y-6 overflow-y-auto max-h-[60vh] lg:max-h-[80vh]">
              <div>
                <Label htmlFor="title" className="text-gray-400">Title</Label>
                <Input id="title" placeholder="Enter title" className="bg-transparent border-gray-700 text-white focus:ring-blue-500" />
              </div>
              <div>
                <Label htmlFor="description" className="text-gray-400">Description</Label>
                <Textarea id="description" placeholder="Enter description" className="bg-transparent border-gray-700 text-white focus:ring-blue-500" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="genre" className="text-gray-400">Genre</Label>
                  <Input id="genre" placeholder="Enter genre" className="bg-transparent border-gray-700 text-white focus:ring-blue-500" />
                </div>
                <div>
                  <Label htmlFor="mood" className="text-gray-400">Mood</Label>
                  <Input id="mood" placeholder="Enter mood" className="bg-transparent border-gray-700 text-white focus:ring-blue-500" />
                </div>
              </div>
              <div>
                <Label htmlFor="tags" className="text-gray-400">Tags</Label>
                <Input id="tags" placeholder="Enter tags" className="bg-transparent border-gray-700 text-white focus:ring-blue-500" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="unlockable" checked={isUnlockable} onCheckedChange={(checked) => setIsUnlockable(checked as boolean)} />
                  <Label
                    htmlFor="unlockable"
                    className="text-xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Unlockable
                  </Label>
                </div>
                <p className="text-sm text-muted-foreground pl-6">
                  Bring your fans some cool things attached to your token.
                </p>
              </div>
              {isUnlockable && (
                <>
                  <div>
                    <Label htmlFor="unlockable-type" className="text-gray-400">Select your Content</Label>
                    <Select onValueChange={setUnlockableType}>
                      <SelectTrigger className="w-full bg-transparent border-gray-700 text-white">
                        <SelectValue placeholder="Select content type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="collectible">Collectible</SelectItem>
                        <SelectItem value="download-link">Download Link</SelectItem>
                        <SelectItem value="media-content">Media Content</SelectItem>
                        <SelectItem value="phygital">Phygital</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="content-description" className="text-gray-400">Describe your content</Label>
                    <Textarea id="content-description" placeholder="Describe your content" className="bg-transparent border-gray-700 text-white focus:ring-blue-500" />
                  </div>
                </>
              )}
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remix" checked={isRemix} onCheckedChange={(checked) => setIsRemix(checked as boolean)} />
                  <Label
                    htmlFor="remix"
                    className="text-xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Remix
                  </Label>
                </div>
              </div>
              {isRemix && (
                <div>
                  <Label htmlFor="upload-stems" className="text-gray-400">Upload your stems</Label>
                  <div
                    className={`border border-dashed border-gray-700 p-6 rounded-md flex flex-col items-center justify-center ${
                      dragActive ? 'bg-blue-500 bg-opacity-10' : ''
                    }`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                  >
                    <Upload className="w-8 h-8 text-gray-400 mb-2" />
                    <p className="text-gray-400 text-sm text-center">
                      Drag and drop remix files here
                    </p>
                    <Button variant="outline" size="sm" className="mt-2 border-gray-700 text-gray-300 hover:bg-gray-800">
                      Select Files
                    </Button>
                  </div>
                </div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="mint-price" className="text-gray-400">Mint Price</Label>
                  <Input id="mint-price" placeholder="Simple Mint" className="bg-transparent border-gray-700 text-white focus:ring-blue-500" />
                </div>
                <div>
                  <Label htmlFor="mint-duration" className="text-gray-400">Mint Duration</Label>
                  <Input id="mint-duration" placeholder="1 Month" className="bg-transparent border-gray-700 text-white focus:ring-blue-500" />
                </div>
              </div>
              <div>
                <Label className="text-gray-400">Mint Start</Label>
                <RadioGroup onValueChange={setMintStart} value={mintStart} className="flex mt-2">
                  <div className="flex items-center flex-1">
                    <RadioGroupItem value="now" id="now" className="sr-only" />
                    <Label
                      htmlFor="now"
                      className={`flex-1 px-3 py-2 rounded-l-md text-center cursor-pointer ${
                        mintStart === 'now' ? 'bg-white text-black' : 'bg-gray-800 text-white'
                      }`}
                    >
                      Now
                    </Label>
                  </div>
                  <div className="flex items-center flex-1">
                    <RadioGroupItem value="future" id="future" className="sr-only" />
                    <Label
                      htmlFor="future"
                      className={`flex-1 px-3 py-2 rounded-r-md text-center cursor-pointer ${
                        mintStart === 'future' ? 'bg-white text-black' : 'bg-gray-800 text-white'
                      }`}
                    >
                      Future
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <Label className="text-gray-400">Split royalties</Label>
                <RadioGroup onValueChange={setSplitRoyalties} value={splitRoyalties} className="flex flex-wrap mt-2">
                  <div className="flex items-center flex-1 min-w-[33%]">
                    <RadioGroupItem value="solo" id="solo" className="sr-only" />
                    <Label
                      htmlFor="solo"
                      className={`flex-1 px-3 py-2 rounded-l-md text-center cursor-pointer ${
                        splitRoyalties === 'solo' ? 'bg-white text-black' : 'bg-gray-800 text-white'
                      }`}
                    >
                      Solo
                    </Label>
                  </div>
                  <div className="flex items-center flex-1 min-w-[33%]">
                    <RadioGroupItem value="split" id="split" className="sr-only" />
                    <Label
                      htmlFor="split"
                      className={`flex-1 px-3 py-2 text-center cursor-pointer ${
                        splitRoyalties === 'split' ? 'bg-white text-black' : 'bg-gray-800 text-white'
                      }`}
                    >
                      Split with someone
                    </Label>
                  </div>
                  <div className="flex items-center flex-1 min-w-[33%]">
                    <RadioGroupItem value="multi" id="multi" className="sr-only" />
                    <Label
                      htmlFor="multi"
                      className={`flex-1 px-3 py-2 rounded-r-md text-center cursor-pointer ${
                        splitRoyalties === 'multi' ? 'bg-white text-black' : 'bg-gray-800 text-white'
                      }`}
                    >
                      Multi Split
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="first-minter" checked={isFirstMinter} onCheckedChange={(checked) => setIsFirstMinter(checked as boolean)} />
                  <Label
                    htmlFor="first-minter"
                    className="text-xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    First Minter
                  </Label>
                </div>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Create</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {showProfile ? (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 overflow-y-auto">
          <div className="max-w-4xl mx-auto py-8 px-4">
            <button onClick={() => setShowProfile(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white">
              <X className="w-6 h-6" />
            </button>
            
            {/* Profile Header */}
            <div className="relative mb-8">
              <Image src="/placeholder.svg?height=200&width=1000" alt="Profile banner" width={1000} height={200} className="w-full h-32 sm:h-48 object-cover rounded-lg" />
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between">
                  <div className="flex items-center sm:items-end space-x-4">
                    <Image src="/placeholder.svg?height=100&width=100" alt="Profile picture" width={100} height={100} className="w-16 h-16 sm:w-24 sm:h-24 rounded-full border-4 border-black -mb-2 sm:-mb-8" />
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold">0xGonzalo</h2>
                      <p className="text-gray-400 text-sm sm:text-base">0xac4...664c</p>
                    </div>
                  </div>
                  <div className="flex space-x-6 mt-4 sm:mt-0">
                    <a href="#" className="text-gray-400 hover:text-white">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <button className="bg-blue-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-sm hover:bg-blue-700 transition duration-300">
                      Follow
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="mb-8">
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
              {/* Releases */}
              {activeTab === 'releases' && (
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
              )}

              {/* Videos */}
              {activeTab === 'videos' && (
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
              )}
            </div>
          </div>
        </div>
      ) : (
        <main className="p-4 sm:p-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Every star shines</h2>

          {/* Featured Section */}
          <section className="mb-12">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Featured</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {featuredItems.map((item, index) => (
                <div key={index} className="bg-gray-900 rounded-lg overflow-hidden">
                  <Image src={item.imageUrl} alt={item.title} width={300} height={300} className="w-full h-48 object-cover" />
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
                        <span className="text-blue-400 mb-1">{item.price}</span>
                        <button className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm hover:bg-blue-700 transition duration-300">
                          Collect
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Video Drop Section */}
          <section className="mb-12">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Video Drop</h3>
            <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Play className="w-12 h-12 sm:w-16 sm:h-16 text-white opacity-70" />
              </div>
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

          {/* Trending Releases Section */}
          <section>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Trending Releases</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {trendingReleases.map((item, index) => (
                <div key={index} className="bg-gray-900 rounded-lg overflow-hidden">
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
        </main>
      )}
    </div>
  )
}