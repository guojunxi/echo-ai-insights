
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Bookmark, Play, Clock, Tag } from "lucide-react";

const SavedPodcasts = () => {
  const savedPodcasts = [
    {
      title: "The Science of Productivity",
      duration: "45 min",
      notes: 12,
      tags: ["Productivity", "Science"],
      progress: 85
    },
    {
      title: "Tech Innovations Today",
      duration: "32 min", 
      notes: 8,
      tags: ["Technology", "Innovation"],
      progress: 60
    },
    {
      title: "Health & Wellness Insights",
      duration: "28 min",
      notes: 15,
      tags: ["Health", "Wellness"],
      progress: 100
    }
  ];

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <div className="border-b border-blue-200 bg-white p-4">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="text-blue-600" />
          <div className="flex items-center gap-2">
            <Bookmark className="h-6 w-6 text-blue-600" />
            <h1 className="text-xl font-semibold text-blue-800">Saved Podcasts</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 bg-white overflow-y-auto">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Filter Tags */}
          <div className="flex gap-2 flex-wrap">
            {["All", "Productivity", "Technology", "Health", "Business"].map((tag) => (
              <Button
                key={tag}
                variant={tag === "All" ? "default" : "outline"}
                size="sm"
                className={tag === "All" ? "bg-blue-600 hover:bg-blue-700" : "border-blue-200 hover:border-blue-300 text-blue-700"}
              >
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </Button>
            ))}
          </div>

          {/* Podcast List */}
          <div className="space-y-4">
            {savedPodcasts.map((podcast, index) => (
              <Card key={index} className="border-blue-200 hover:border-blue-300 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-blue-800 mb-2">{podcast.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-blue-600">
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {podcast.duration}
                        </span>
                        <span>{podcast.notes} notes</span>
                        <span>{podcast.progress}% complete</span>
                      </div>
                      <div className="flex gap-1 mt-2">
                        {podcast.tags.map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <Play className="h-4 w-4 mr-2" />
                      Continue
                    </Button>
                  </div>
                  <div className="mt-3 w-full bg-blue-100 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{width: `${podcast.progress}%`}}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedPodcasts;
