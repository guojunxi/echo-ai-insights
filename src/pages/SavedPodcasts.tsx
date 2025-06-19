
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Bookmark, Search, Filter, Play, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SavedPodcasts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("all");
  const navigate = useNavigate();

  const tags = ["all", "productivity", "technology", "business", "health", "science"];

  const savedPodcasts = [
    {
      id: 1,
      title: "The Tim Ferriss Show",
      episode: "Tools of Titans - Lessons from World-Class Performers",
      duration: "2h 15m",
      progress: 85,
      notes: 12,
      clips: 5,
      tags: ["productivity", "business"],
      thumbnail: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=200&h=200&fit=crop&crop=faces",
      dateAdded: "2024-01-15",
    },
    {
      id: 2,
      title: "How I Built This",
      episode: "Airbnb: Joe Gebbia",
      duration: "1h 30m",
      progress: 100,
      notes: 8,
      clips: 3,
      tags: ["business", "technology"],
      thumbnail: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=200&h=200&fit=crop&crop=faces",
      dateAdded: "2024-01-12",
    },
    {
      id: 3,
      title: "The Science of Productivity",
      episode: "Deep Work Principles",
      duration: "45m",
      progress: 75,
      notes: 15,
      clips: 7,
      tags: ["productivity", "science"],
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces",
      dateAdded: "2024-01-10",
    },
    {
      id: 4,
      title: "AI Conversations",
      episode: "Future of Machine Learning",
      duration: "1h 20m",
      progress: 30,
      notes: 5,
      clips: 2,
      tags: ["technology", "science"],
      thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=200&h=200&fit=crop&crop=faces",
      dateAdded: "2024-01-08",
    },
  ];

  const filteredPodcasts = savedPodcasts.filter((podcast) => {
    const matchesSearch = podcast.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         podcast.episode.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag === "all" || podcast.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

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
            <Bookmark className="h-6 w-6 text-blue-600" />
            <h1 className="text-xl font-semibold text-blue-800">Saved Podcasts</h1>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Search and Filter */}
        <Card className="border-blue-200">
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-blue-500" />
                <Input
                  placeholder="Search saved podcasts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 border-blue-200 focus:border-blue-400"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {tags.map((tag) => (
                  <Button
                    key={tag}
                    variant={selectedTag === tag ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedTag(tag)}
                    className={`capitalize ${
                      selectedTag === tag
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "border-blue-200 hover:border-blue-300 text-blue-700"
                    }`}
                  >
                    {tag}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="border-blue-200 bg-gradient-to-br from-blue-100 to-blue-200">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-800">{savedPodcasts.length}</div>
              <div className="text-sm text-blue-600">Total Podcasts</div>
            </CardContent>
          </Card>
          <Card className="border-blue-200 bg-gradient-to-br from-indigo-100 to-indigo-200">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-indigo-800">
                {savedPodcasts.reduce((sum, p) => sum + p.notes, 0)}
              </div>
              <div className="text-sm text-indigo-600">Total Notes</div>
            </CardContent>
          </Card>
          <Card className="border-blue-200 bg-gradient-to-br from-sky-100 to-sky-200">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-sky-800">
                {savedPodcasts.reduce((sum, p) => sum + p.clips, 0)}
              </div>
              <div className="text-sm text-sky-600">Total Clips</div>
            </CardContent>
          </Card>
          <Card className="border-blue-200 bg-gradient-to-br from-cyan-100 to-cyan-200">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-cyan-800">
                {Math.round(savedPodcasts.reduce((sum, p) => sum + p.progress, 0) / savedPodcasts.length)}%
              </div>
              <div className="text-sm text-cyan-600">Avg Progress</div>
            </CardContent>
          </Card>
        </div>

        {/* Podcast Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPodcasts.map((podcast) => (
            <Card
              key={podcast.id}
              className="border-blue-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200 cursor-pointer"
              onClick={() => handlePodcastClick(podcast.id)}
            >
              <CardHeader className="pb-3">
                <div className="flex gap-3">
                  <img
                    src={podcast.thumbnail}
                    alt={podcast.title}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-blue-800 truncate">{podcast.title}</h3>
                    <p className="text-sm text-blue-600 line-clamp-2">{podcast.episode}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {/* Progress Bar */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs text-blue-600">
                      <span>Progress</span>
                      <span>{podcast.progress}%</span>
                    </div>
                    <div className="w-full bg-blue-100 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${podcast.progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex justify-between text-sm text-blue-600">
                    <div className="flex items-center gap-1">
                      <FileText className="h-4 w-4" />
                      <span>{podcast.notes} notes</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Play className="h-4 w-4" />
                      <span>{podcast.clips} clips</span>
                    </div>
                    <span>{podcast.duration}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex gap-1 flex-wrap">
                    {podcast.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-xs border-blue-200 text-blue-700"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="text-xs text-blue-500">
                    Added {new Date(podcast.dateAdded).toLocaleDateString()}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPodcasts.length === 0 && (
          <Card className="border-blue-200">
            <CardContent className="p-8 text-center">
              <Bookmark className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-blue-800 mb-2">No podcasts found</h3>
              <p className="text-blue-600">Try adjusting your search or filter criteria.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default SavedPodcasts;
