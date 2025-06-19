
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Scissors, Play, Share, FileText, Mic } from "lucide-react";

const Clips = () => {
  const clips = [
    {
      title: "Productivity Techniques",
      podcast: "The Science of Productivity",
      duration: "2:30",
      timestamp: "15:20 - 17:50",
      notes: "Key insights on time management",
      replays: 5
    },
    {
      title: "AI and Future Tech",
      podcast: "Tech Innovations Today", 
      duration: "3:15",
      timestamp: "08:45 - 12:00",
      notes: "Discussion on AI impact",
      replays: 3
    },
    {
      title: "Mindfulness Practice",
      podcast: "Health & Wellness Insights",
      duration: "1:45", 
      timestamp: "22:10 - 23:55",
      notes: "Daily meditation tips",
      replays: 8
    }
  ];

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <div className="border-b border-blue-200 bg-white p-4">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="text-blue-600" />
          <div className="flex items-center gap-2">
            <Scissors className="h-6 w-6 text-blue-600" />
            <h1 className="text-xl font-semibold text-blue-800">Clips</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 bg-white overflow-y-auto">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="border-blue-200">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">24</div>
                <div className="text-sm text-blue-700">Total Clips</div>
              </CardContent>
            </Card>
            <Card className="border-blue-200">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">1.2h</div>
                <div className="text-sm text-blue-700">Total Duration</div>
              </CardContent>
            </Card>
            <Card className="border-blue-200">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">45</div>
                <div className="text-sm text-blue-700">Total Replays</div>
              </CardContent>
            </Card>
          </div>

          {/* Clips List */}
          <div className="space-y-4">
            {clips.map((clip, index) => (
              <Card key={index} className="border-blue-200 hover:border-blue-300 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-blue-800 mb-1">{clip.title}</h3>
                      <p className="text-sm text-blue-600 mb-2">From: {clip.podcast}</p>
                      <div className="flex items-center gap-4 text-sm text-blue-600 mb-3">
                        <span>Duration: {clip.duration}</span>
                        <span>Timestamp: {clip.timestamp}</span>
                        <span>Replayed: {clip.replays} times</span>
                      </div>
                      <p className="text-sm text-gray-700 mb-3">{clip.notes}</p>
                      <div className="flex gap-2">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          <Play className="h-3 w-3 mr-1" />
                          Play
                        </Button>
                        <Button size="sm" variant="outline" className="border-blue-200 hover:border-blue-300 text-blue-700">
                          <FileText className="h-3 w-3 mr-1" />
                          Edit Notes
                        </Button>
                        <Button size="sm" variant="outline" className="border-blue-200 hover:border-blue-300 text-blue-700">
                          <Mic className="h-3 w-3 mr-1" />
                          Voice Note
                        </Button>
                        <Button size="sm" variant="outline" className="border-blue-200 hover:border-blue-300 text-blue-700">
                          <Share className="h-3 w-3 mr-1" />
                          Share
                        </Button>
                      </div>
                    </div>
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

export default Clips;
