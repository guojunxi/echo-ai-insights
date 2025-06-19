
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Scissors, Search, Play, Share, MessageSquare, Mic, FileText } from "lucide-react";

const Clips = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("all");

  const tags = ["all", "insights", "quotes", "actionable", "questions", "examples"];

  const clips = [
    {
      id: 1,
      title: "The 80/20 Rule in Practice",
      podcast: "The Tim Ferriss Show",
      duration: "2:30",
      timestamp: "1:15:30",
      transcript: "The key insight here is that 80% of your results come from 20% of your efforts. This principle applies to almost every area of life...",
      notes: "This is a game-changer for productivity. Need to apply this to my daily tasks.",
      voiceNote: true,
      tags: ["insights", "actionable"],
      plays: 15,
      dateCreated: "2024-01-15",
    },
    {
      id: 2,
      title: "Building Trust in Remote Teams",
      podcast: "How I Built This",
      duration: "1:45",
      timestamp: "45:20",
      transcript: "Trust is the foundation of any successful remote team. You can't micromanage your way to success...",
      notes: "",
      voiceNote: false,
      tags: ["insights", "examples"],
      plays: 8,
      dateCreated: "2024-01-12",
    },
    {
      id: 3,
      title: "Deep Work Environment Setup",
      podcast: "The Science of Productivity",
      duration: "3:15",
      timestamp: "25:40",
      transcript: "Create a dedicated space that signals to your brain that it's time for focused work. Remove all distractions...",
      notes: "Need to redesign my home office based on these principles. Consider noise-canceling headphones.",
      voiceNote: true,
      tags: ["actionable", "examples"],
      plays: 22,
      dateCreated: "2024-01-10",
    },
    {
      id: 4,
      title: "AI Ethics Question",
      podcast: "AI Conversations",
      duration: "1:20",
      timestamp: "1:05:15",
      transcript: "The question isn't whether AI will replace humans, but how we can ensure AI amplifies human capabilities...",
      notes: "",
      voiceNote: false,
      tags: ["quotes", "questions"],
      plays: 5,
      dateCreated: "2024-01-08",
    },
  ];

  const filteredClips = clips.filter((clip) => {
    const matchesSearch = clip.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         clip.transcript.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         clip.podcast.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag === "all" || clip.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="h-screen overflow-y-auto bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="border-b border-blue-200 bg-white/80 backdrop-blur-sm p-4">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="text-blue-600" />
          <div className="flex items-center gap-2">
            <Scissors className="h-6 w-6 text-blue-600" />
            <h1 className="text-xl font-semibold text-blue-800">Saved Clips</h1>
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
                  placeholder="Search clips by title, content, or podcast..."
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
              <div className="text-2xl font-bold text-blue-800">{clips.length}</div>
              <div className="text-sm text-blue-600">Total Clips</div>
            </CardContent>
          </Card>
          <Card className="border-blue-200 bg-gradient-to-br from-indigo-100 to-indigo-200">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-indigo-800">
                {clips.filter(c => c.voiceNote).length}
              </div>
              <div className="text-sm text-indigo-600">Voice Notes</div>
            </CardContent>
          </Card>
          <Card className="border-blue-200 bg-gradient-to-br from-sky-100 to-sky-200">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-sky-800">
                {clips.reduce((sum, c) => sum + c.plays, 0)}
              </div>
              <div className="text-sm text-sky-600">Total Plays</div>
            </CardContent>
          </Card>
          <Card className="border-blue-200 bg-gradient-to-br from-cyan-100 to-cyan-200">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-cyan-800">
                {clips.filter(c => c.notes).length}
              </div>
              <div className="text-sm text-cyan-600">With Notes</div>
            </CardContent>
          </Card>
        </div>

        {/* Clips List */}
        <div className="space-y-4">
          {filteredClips.map((clip) => (
            <Card
              key={clip.id}
              className="border-blue-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200"
            >
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <CardTitle className="text-lg text-blue-800 mb-1">{clip.title}</CardTitle>
                    <div className="flex items-center gap-4 text-sm text-blue-600">
                      <span>{clip.podcast}</span>
                      <span>•</span>
                      <span>at {clip.timestamp}</span>
                      <span>•</span>
                      <span>{clip.duration}</span>
                      <span>•</span>
                      <span>{clip.plays} plays</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="border-blue-200 text-blue-700">
                      <Play className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="border-blue-200 text-blue-700">
                      <Share className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Transcript */}
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                    <p className="text-sm text-blue-800 italic">"{clip.transcript}"</p>
                  </div>

                  {/* Notes */}
                  {clip.notes && (
                    <div className="border-l-4 border-blue-300 pl-4">
                      <div className="flex items-start gap-2">
                        {clip.voiceNote ? (
                          <Mic className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                        ) : (
                          <FileText className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                        )}
                        <p className="text-sm text-blue-700">{clip.notes}</p>
                      </div>
                    </div>
                  )}

                  {/* Tags and Actions */}
                  <div className="flex justify-between items-center">
                    <div className="flex gap-1 flex-wrap">
                      {clip.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="text-xs border-blue-200 text-blue-700"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 text-xs text-blue-500">
                      <span>Created {new Date(clip.dateCreated).toLocaleDateString()}</span>
                      <Button size="sm" variant="ghost" className="text-blue-600 hover:bg-blue-100">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        Chat about this
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredClips.length === 0 && (
          <Card className="border-blue-200">
            <CardContent className="p-8 text-center">
              <Scissors className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-blue-800 mb-2">No clips found</h3>
              <p className="text-blue-600">Try adjusting your search or filter criteria.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Clips;
