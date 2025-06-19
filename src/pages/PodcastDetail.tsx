
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  Scissors, 
  MessageSquare, 
  FileText,
  Mic,
  Share,
  Brain,
  Lightbulb,
  Network
} from "lucide-react";
import { useParams } from "react-router-dom";

const PodcastDetail = () => {
  const { id } = useParams();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(1890); // 31:30
  const [duration] = useState(8100); // 2h 15m
  const [volume, setVolume] = useState([80]);
  const [showClipDialog, setShowClipDialog] = useState(false);
  const [clipStart, setClipStart] = useState(1890);
  const [clipEnd, setClipEnd] = useState(2040);
  const [clipNote, setClipNote] = useState("");
  const [chatMessage, setChatMessage] = useState("");
  const playerRef = useRef<HTMLDivElement>(null);

  // Mock podcast data
  const podcast = {
    title: "The Tim Ferriss Show",
    episode: "Tools of Titans - Lessons from World-Class Performers",
    description: "Tim Ferriss discusses the habits, routines, and tactics of world-class performers based on his book 'Tools of Titans'.",
    thumbnail: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=400&fit=crop&crop=faces",
    duration: "2h 15m",
    published: "2024-01-15",
    playCount: 15,
    tags: ["productivity", "business", "habits"],
  };

  const segments = [
    { start: 0, end: 300, title: "Introduction", plays: 8 },
    { start: 300, end: 900, title: "Morning Routines of High Performers", plays: 25 },
    { start: 900, end: 1800, title: "Decision Making Frameworks", plays: 18 },
    { start: 1800, end: 2700, title: "The 80/20 Rule in Practice", plays: 32 },
    { start: 2700, end: 3600, title: "Building Mental Resilience", plays: 12 },
    { start: 3600, end: 4500, title: "Investment Strategies", plays: 9 },
    { start: 4500, end: 5400, title: "Health and Fitness Optimization", plays: 15 },
    { start: 5400, end: 6300, title: "Learning Acceleration Techniques", plays: 21 },
    { start: 6300, end: 7200, title: "Networking and Relationships", plays: 7 },
    { start: 7200, end: 8100, title: "Closing Thoughts and Q&A", plays: 4 },
  ];

  const highlights = [
    "The most successful people have simple, consistent morning routines",
    "80% of your results come from 20% of your efforts - apply this ruthlessly",
    "Mental resilience is built through small, daily challenges",
    "Compound learning beats intensive cramming sessions",
  ];

  const takeaways = [
    "Start each day with 1-2 high-impact activities",
    "Eliminate or delegate low-value tasks immediately",
    "Build mental toughness through cold showers or exercise",
    "Focus on learning systems, not just information",
  ];

  const transcript = [
    { 
      timestamp: "31:20", 
      time: 1880,
      speaker: "Tim Ferriss", 
      text: "So when we look at the most successful people I've interviewed, there's one pattern that emerges consistently..." 
    },
    { 
      timestamp: "31:30", 
      time: 1890,
      speaker: "Tim Ferriss", 
      text: "The 80/20 rule, or Pareto Principle, isn't just a business concept. It's a life philosophy. 80% of your results are going to come from 20% of your efforts." 
    },
    { 
      timestamp: "31:45", 
      time: 1905,
      speaker: "Tim Ferriss", 
      text: "The question is: do you know what your 20% is? Most people don't. They're busy being busy instead of being effective." 
    },
  ];

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  const getCurrentSegment = () => {
    return segments.find(segment => currentTime >= segment.start && currentTime < segment.end);
  };

  const createClip = () => {
    console.log("Creating clip:", { start: clipStart, end: clipEnd, note: clipNote });
    setShowClipDialog(false);
    setClipNote("");
  };

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="border-b border-blue-200 bg-white/80 backdrop-blur-sm p-4 flex-shrink-0">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="text-blue-600" />
          <div className="flex items-center gap-4 flex-1">
            <img
              src={podcast.thumbnail}
              alt={podcast.title}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div className="flex-1 min-w-0">
              <h1 className="text-lg font-semibold text-blue-800 truncate">{podcast.title}</h1>
              <p className="text-sm text-blue-600 truncate">{podcast.episode}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Player Controls */}
      <div className="border-b border-blue-200 bg-white/90 backdrop-blur-sm p-4 flex-shrink-0">
        <div className="space-y-4">
          {/* Progress Bar with Replay Counts */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-blue-600">
              <span>{formatTime(currentTime)}</span>
              <span className="flex items-center gap-2">
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">
                  🔥 {getCurrentSegment()?.plays || 0} replays
                </span>
              </span>
              <span>{formatTime(duration)}</span>
            </div>
            <div className="relative">
              <Slider
                value={[currentTime]}
                max={duration}
                step={1}
                className="w-full"
                onValueChange={(value) => setCurrentTime(value[0])}
              />
              {/* Segment heat map */}
              <div className="absolute top-0 w-full h-2 flex">
                {segments.map((segment, index) => {
                  const width = ((segment.end - segment.start) / duration) * 100;
                  const opacity = Math.min(segment.plays / 32, 1); // max opacity based on highest play count
                  return (
                    <div
                      key={index}
                      className="bg-red-400 h-full"
                      style={{ 
                        width: `${width}%`,
                        opacity: opacity * 0.7
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          {/* Control Buttons */}
          <div className="flex items-center justify-center gap-4">
            <Button variant="outline" size="sm" className="border-blue-200">
              <SkipBack className="h-4 w-4" />
            </Button>
            <Button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-blue-600 hover:bg-blue-700 w-12 h-12 rounded-full"
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            </Button>
            <Button variant="outline" size="sm" className="border-blue-200">
              <SkipForward className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2 ml-4">
              <Volume2 className="h-4 w-4 text-blue-600" />
              <Slider
                value={volume}
                max={100}
                step={1}
                className="w-20"
                onValueChange={setVolume}
              />
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className="border-blue-200 ml-4"
              onClick={() => setShowClipDialog(true)}
            >
              <Scissors className="h-4 w-4 mr-2" />
              Create Clip
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        <div className="h-full grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6 overflow-y-auto custom-scrollbar">
            <Tabs defaultValue="transcript" className="space-y-4">
              <TabsList className="grid w-full grid-cols-4 bg-white/80 border border-blue-200">
                <TabsTrigger value="transcript">Transcript</TabsTrigger>
                <TabsTrigger value="highlights">Highlights</TabsTrigger>
                <TabsTrigger value="takeaways">Takeaways</TabsTrigger>
                <TabsTrigger value="mindmap">Mindmap</TabsTrigger>
              </TabsList>

              <TabsContent value="transcript" className="space-y-4">
                <Card className="border-blue-200">
                  <CardHeader>
                    <CardTitle className="text-blue-800">Chapters</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {segments.map((segment, index) => (
                        <div
                          key={index}
                          className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
                            currentTime >= segment.start && currentTime < segment.end
                              ? "border-blue-400 bg-blue-50"
                              : "border-blue-200 hover:border-blue-300 hover:bg-blue-50"
                          }`}
                          onClick={() => setCurrentTime(segment.start)}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-sm text-blue-600 font-mono">
                              {formatTime(segment.start)}
                            </span>
                            <span className="text-sm text-blue-800 font-medium">
                              {segment.title}
                            </span>
                          </div>
                          <Badge 
                            variant="outline" 
                            className="border-red-200 text-red-700 text-xs"
                          >
                            {segment.plays} plays
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-blue-200">
                  <CardHeader>
                    <CardTitle className="text-blue-800">Live Transcript</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {transcript.map((item, index) => (
                        <div
                          key={index}
                          className={`p-3 rounded-lg border transition-all duration-200 ${
                            currentTime >= item.time && currentTime < item.time + 15
                              ? "border-blue-400 bg-blue-50"
                              : "border-blue-100"
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-blue-600 hover:bg-blue-100 p-1 h-auto"
                              onClick={() => setCurrentTime(item.time)}
                            >
                              {item.timestamp}
                            </Button>
                            <div className="flex-1">
                              <div className="text-sm font-medium text-blue-800 mb-1">
                                {item.speaker}
                              </div>
                              <p className="text-sm text-blue-700">{item.text}</p>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-blue-600 hover:bg-blue-100"
                            >
                              <Scissors className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="highlights">
                <Card className="border-blue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-800">
                      <Lightbulb className="h-5 w-5" />
                      AI-Generated Highlights
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {highlights.map((highlight, index) => (
                        <div key={index} className="bg-yellow-50 border border-yellow-200 p-3 rounded-lg">
                          <p className="text-yellow-800 text-sm italic">"{highlight}"</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="takeaways">
                <Card className="border-blue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-800">
                      <FileText className="h-5 w-5" />
                      Key Takeaways
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {takeaways.map((takeaway, index) => (
                        <div key={index} className="bg-green-50 border border-green-200 p-3 rounded-lg">
                          <div className="flex items-start gap-2">
                            <span className="text-green-600 font-bold">{index + 1}.</span>
                            <p className="text-green-800 text-sm">{takeaway}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="mindmap">
                <Card className="border-blue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-800">
                      <Network className="h-5 w-5" />
                      Mindmap
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-6 h-96 flex items-center justify-center">
                      <div className="text-center">
                        <Brain className="h-16 w-16 text-blue-400 mx-auto mb-4" />
                        <p className="text-blue-600">Interactive mindmap visualization would appear here</p>
                        <p className="text-sm text-blue-500 mt-2">Showing connections between concepts, speakers, and topics</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Chat & Comments */}
          <div className="space-y-6 overflow-y-auto custom-scrollbar">
            {/* AI Chat */}
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-800">
                  <MessageSquare className="h-5 w-5" />
                  AI Chat
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                    <p className="text-sm text-blue-800">
                      I can help you understand this podcast better! Ask me about specific concepts, 
                      request summaries, or explore connections to your other notes.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Ask about this podcast..."
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      className="border-blue-200 focus:border-blue-400"
                    />
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Voice Comments */}
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-800">
                  <Mic className="h-5 w-5" />
                  Voice Comments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    <Mic className="h-4 w-4 mr-2" />
                    Record Voice Note
                  </Button>
                  <div className="text-center text-sm text-blue-600">
                    Share your thoughts with voice for deeper engagement
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start border-blue-200 text-blue-700">
                    <Share className="h-4 w-4 mr-2" />
                    Share Current Timestamp
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-blue-200 text-blue-700">
                    <Scissors className="h-4 w-4 mr-2" />
                    Create Clip from Selection
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-blue-200 text-blue-700">
                    <FileText className="h-4 w-4 mr-2" />
                    Add Note to Timestamp
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Clip Creation Dialog */}
      {showClipDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-96 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800">Create Clip</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-blue-800">Start Time</label>
                <Input
                  value={formatTime(clipStart)}
                  readOnly
                  className="border-blue-200"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-blue-800">End Time</label>
                <Input
                  value={formatTime(clipEnd)}
                  readOnly
                  className="border-blue-200"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-blue-800">Note (Optional)</label>
                <Textarea
                  placeholder="Add your thoughts about this clip..."
                  value={clipNote}
                  onChange={(e) => setClipNote(e.target.value)}
                  className="border-blue-200"
                />
              </div>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  className="flex-1 border-blue-200"
                  onClick={() => setShowClipDialog(false)}
                >
                  Cancel
                </Button>
                <Button 
                  className="flex-1 bg-blue-600 hover:bg-blue-700"
                  onClick={createClip}
                >
                  Create Clip
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default PodcastDetail;
