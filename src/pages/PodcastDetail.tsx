
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Play, Pause, SkipBack, SkipForward, Scissors, MessageSquare, Share, Mic } from "lucide-react";

const PodcastDetail = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const totalTime = 45 * 60; // 45 minutes in seconds

  const transcript = [
    { timestamp: "00:15", speaker: "Host", text: "Welcome to today's discussion on productivity techniques..." },
    { timestamp: "01:30", speaker: "Guest", text: "Thanks for having me. I think the key to productivity is..." },
    { timestamp: "03:45", speaker: "Host", text: "That's fascinating. Can you elaborate on the Pomodoro technique?" }
  ];

  const highlights = [
    "The Pomodoro Technique uses 25-minute focused work sessions",
    "Regular breaks actually improve long-term concentration",
    "Time-blocking prevents decision fatigue throughout the day"
  ];

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <div className="border-b border-blue-200 bg-white p-4">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="text-blue-600" />
          <div>
            <h1 className="text-xl font-semibold text-blue-800">The Science of Productivity</h1>
            <p className="text-sm text-blue-600">Episode 142 • 45 min • Listened 3 times</p>
          </div>
        </div>
      </div>

      {/* Player */}
      <div className="border-b border-blue-200 bg-blue-50 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-3">
            <Button 
              size="icon" 
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>
            <Button size="icon" variant="outline" className="border-blue-200">
              <SkipBack className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="outline" className="border-blue-200">
              <SkipForward className="h-4 w-4" />
            </Button>
            <div className="flex-1">
              <div className="w-full bg-blue-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full" 
                  style={{width: `${(currentTime / totalTime) * 100}%`}}
                ></div>
              </div>
            </div>
            <span className="text-sm text-blue-700">
              {Math.floor(currentTime / 60)}:{String(currentTime % 60).padStart(2, '0')} / 45:00
            </span>
          </div>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" className="border-blue-200 text-blue-700">
              <Scissors className="h-3 w-3 mr-1" />
              Create Clip
            </Button>
            <Button size="sm" variant="outline" className="border-blue-200 text-blue-700">
              <MessageSquare className="h-3 w-3 mr-1" />
              Chat with AI
            </Button>
            <Button size="sm" variant="outline" className="border-blue-200 text-blue-700">
              <Share className="h-3 w-3 mr-1" />
              Share
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto bg-white">
        <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Transcript */}
          <div className="space-y-6">
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800">Transcript</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 max-h-96 overflow-y-auto">
                {transcript.map((item, index) => (
                  <div key={index} className="p-3 rounded-lg hover:bg-blue-50 cursor-pointer">
                    <div className="flex items-start gap-3">
                      <span className="text-xs text-blue-600 font-mono">{item.timestamp}</span>
                      <div>
                        <span className="text-sm font-medium text-blue-800">{item.speaker}: </span>
                        <span className="text-sm text-gray-700">{item.text}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800">Voice Comments</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Mic className="h-4 w-4 mr-2" />
                  Record Voice Comment
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Analysis */}
          <div className="space-y-6">
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800">Key Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800">{highlight}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800">AI Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 mb-4">
                  This episode explores evidence-based productivity techniques, focusing on time management 
                  strategies that align with human cognitive patterns. Key topics include the Pomodoro 
                  Technique, attention restoration theory, and the importance of structured breaks.
                </p>
                <Button variant="outline" className="border-blue-200 text-blue-700">
                  Generate Mind Map
                </Button>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800">My Clips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="p-2 border border-blue-100 rounded text-sm">
                    <span className="text-blue-600">15:20-17:50</span> - Pomodoro deep dive
                  </div>
                  <div className="p-2 border border-blue-100 rounded text-sm">
                    <span className="text-blue-600">28:10-30:45</span> - Break optimization
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastDetail;
