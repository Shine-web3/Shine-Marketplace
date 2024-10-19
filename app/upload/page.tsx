'use client'

import { useState } from 'react'
import { Upload } from 'lucide-react'
import Navigation from '../../components/Navigation'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function UploadPage() {
  const [dragActive, setDragActive] = useState(false)
  const [isUnlockable, setIsUnlockable] = useState(false)
  const [unlockableType, setUnlockableType] = useState('')
  const [isRemix, setIsRemix] = useState(false)
  const [isFirstMinter, setIsFirstMinter] = useState(false)
  const [mintStart, setMintStart] = useState('now')
  const [splitRoyalties, setSplitRoyalties] = useState('solo')

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
    <>
      <main className="p-4 sm:p-8 relative z-10">
        <h2 className="text-2xl font-bold mb-6">Create a Collectible</h2>
        <div className="mx-auto">
          <div className="flex flex-col lg:flex-row rounded-lg overflow-hidden">
            <div
              className={`lg:flex-1 p-6 flex flex-col items-center justify-center ${
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
            <div className="lg:flex-1 p-6 space-y-4 lg:space-y-6 overflow-y-auto ">
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
        </div>
      </main>
    </>
  )
}