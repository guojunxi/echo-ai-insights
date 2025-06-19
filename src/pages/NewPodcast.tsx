
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Search, Upload, Mic, Plus, ExternalLink, FileAudio } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NewPodcast = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const navigate = useNavigate();

  const searchResults = [
    {
      id: 1,
      title: "The Tim Ferriss Show",
      episode: "Tools of Titans - Lessons from World-Class Performers",
      duration: "2h 15m",
      thumbnail: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=200&h=200&fit=crop&crop=faces",
    },
    {
      id: 2,
      title: "How I Built This",
      episode: "Airbnb: Joe Gebbia",
      duration: "1h 30m",
      thumbnail: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=200&h=200&fit=crop&crop=faces",
    },
  ];

  const recentPodcasts = [
    {
      id: 3,
      title: "The Science of Productivity",
      episode: "Deep Work Principles",
      progress: 75,
      duration: "45m",
    },
    {
      id: 4,
      title: "AI Conversations",
      episode: "Future of Machine Learning",
      progress: 30,
      duration: "1h 20m",
    },
  ];

  const handlePodcastClick = (id: number) => {
    navigate(`/podcast/${id}`);
  };

  return (
    <div className="h-screen overflow-y-auto bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="border-b border-blue-200 bg-white/80 backdrop-blur-sm p-4">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="text-blue-600" />
          <div className="flex items-center gap-2">
            <Plus className="h-6 w-6 text-blue-600" />
            <h1 className="text-xl font-semibold text-blue-800">Add New Podcast</h1>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Input Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search */}
          <Card className="border-blue-200 hover:border-blue-300 transition-all duration-200">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-blue-800">
                <Search className="h-5 w-5" />
                Search Podcasts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Input
                  placeholder="Search for podcasts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border-blue-200 focus:border-blue-400"
                />
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Import Link */}
          <Card className="border-blue-200 hover:border-blue-300 transition-all duration-200">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-blue-800">
                <ExternalLink className="h-5 w-5" />
                Import from URL
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Input
                  placeholder="Paste podcast URL..."
                  className="border-blue-200 focus:border-blue-400"
                />
                <Button variant="outline" className="w-full border-blue-200 hover:border-blue-300 text-blue-700">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Import
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Upload/Record */}
          <Card className="border-blue-200 hover:border-blue-300 transition-all duration-200">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-blue-800">
                <FileAudio className="h-5 w-5" />
                Upload/Record
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button variant="outline" className="w-full border-blue-200 hover:border-blue-300 text-blue-700">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload File
                </Button>
                <Button
                  variant={isRecording ? "destructive" : "outline"}
                  className={`w-full ${
                    isRecording 
                      ? "" 
                      : "border-blue-200 hover:border-blue-300 text-blue-700"
                  }`}
                  onClick={() => setIsRecording(!isRecording)}
                >
                  <Mic className="h-4 w-4 mr-2" />
                  {isRecording ? "Stop Recording" : "Start Recording"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search Results */}
        {searchQuery && (
          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800">Search Results</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {searchResults.map((podcast) => (
                  <div
                    key={podcast.id}
                    className="flex items-center gap-4 p-3 rounded-lg border border-blue-100 hover:border-blue-200 hover:bg-blue-50 cursor-pointer transition-all duration-200"
                    onClick={() => handlePodcastClick(podcast.id)}
                  >
                    <img
                      src={podcast.thumbnail}
                      alt={podcast.title}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-blue-800">{podcast.title}</h3>
                      <p className="text-sm text-blue-600">{podcast.episode}</p>
                      <p className="text-xs text-blue-500">{podcast.duration}</p>
                    </div>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Add
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Recently Added */}
        <Card className="border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-800">Continue Listening</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentPodcasts.map((podcast) => (
                <div
                  key={podcast.id}
                  className="flex items-center gap-4 p-3 rounded-lg border border-blue-100 hover:border-blue-200 hover:bg-blue-50 cursor-pointer transition-all duration-200"
                  onClick={() => handlePodcastClick(podcast.id)}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                    <FileAudio className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-blue-800">{podcast.title}</h3>
                    <p className="text-sm text-blue-600">{podcast.episode}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex-1 bg-blue-100 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${podcast.progress}%` }}
                        />
                      </div>
                      <span className="text-xs text-blue-500">{podcast.progress}%</span>
                    </div>
                  </div>
                  <span className="text-sm text-blue-500">{podcast.duration}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NewPodcast;
