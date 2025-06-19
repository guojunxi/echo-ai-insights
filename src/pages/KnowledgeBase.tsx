
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { BookOpen, Network, Database, Brain, Tag, Lightbulb } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const KnowledgeBase = () => {
  const [selectedTopic, setSelectedTopic] = useState("all");

  const topics = [
    { name: "all", count: 25, color: "bg-blue-500" },
    { name: "productivity", count: 8, color: "bg-green-500" },
    { name: "technology", count: 6, color: "bg-purple-500" },
    { name: "business", count: 5, color: "bg-orange-500" },
    { name: "health", count: 3, color: "bg-red-500" },
    { name: "science", count: 3, color: "bg-indigo-500" },
  ];

  const knowledgeItems = [
    {
      id: 1,
      title: "The Pareto Principle",
      description: "80% of results come from 20% of efforts",
      topic: "productivity",
      connections: 12,
      clips: 5,
      notes: 8,
      insights: ["Focus on high-impact activities", "Eliminate low-value tasks", "Apply to time management"],
      relatedConcepts: ["Time management", "Efficiency", "Focus"],
    },
    {
      id: 2,
      title: "Network Effects",
      description: "Value increases with each additional user",
      topic: "business",
      connections: 8,
      clips: 3,
      notes: 6,
      insights: ["Platform businesses benefit most", "Early adoption advantage", "Viral growth potential"],
      relatedConcepts: ["Platform strategy", "Growth hacking", "Viral marketing"],
    },
    {
      id: 3,
      title: "Deep Work Principles",
      description: "Focused work without distractions produces better results",
      topic: "productivity",
      connections: 15,
      clips: 7,
      notes: 12,
      insights: ["Environment design matters", "Time blocking is essential", "Digital minimalism helps"],
      relatedConcepts: ["Focus", "Attention management", "Productivity systems"],
    },
  ];

  const networkNodes = [
    { id: 1, title: "Productivity Systems", x: 150, y: 100, connections: 8 },
    { id: 2, title: "Time Management", x: 300, y: 150, connections: 12 },
    { id: 3, title: "Focus Techniques", x: 200, y: 250, connections: 6 },
    { id: 4, title: "Business Strategy", x: 400, y: 200, connections: 9 },
    { id: 5, title: "Technology Trends", x: 350, y: 300, connections: 7 },
    { id: 6, title: "Learning Methods", x: 100, y: 200, connections: 5 },
  ];

  return (
    <div className="h-screen overflow-y-auto bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="border-b border-blue-200 bg-white/80 backdrop-blur-sm p-4">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="text-blue-600" />
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-blue-600" />
            <h1 className="text-xl font-semibold text-blue-800">Knowledge Base</h1>
          </div>
        </div>
      </div>

      <div className="p-6">
        <Tabs defaultValue="database" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white/80 border border-blue-200">
            <TabsTrigger value="database" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              <Database className="h-4 w-4 mr-2" />
              Database
            </TabsTrigger>
            <TabsTrigger value="permanent" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              <Brain className="h-4 w-4 mr-2" />
              Permanent Notes
            </TabsTrigger>
            <TabsTrigger value="insights" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              <Lightbulb className="h-4 w-4 mr-2" />
              Insights
            </TabsTrigger>
            <TabsTrigger value="network" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              <Network className="h-4 w-4 mr-2" />
              Network View
            </TabsTrigger>
          </TabsList>

          <TabsContent value="database" className="space-y-6">
            {/* Topic Filter */}
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-800">
                  <Tag className="h-5 w-5" />
                  Topics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 flex-wrap">
                  {topics.map((topic) => (
                    <Button
                      key={topic.name}
                      variant={selectedTopic === topic.name ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedTopic(topic.name)}
                      className={`capitalize ${
                        selectedTopic === topic.name
                          ? "bg-blue-600 hover:bg-blue-700"
                          : "border-blue-200 hover:border-blue-300 text-blue-700"
                      }`}
                    >
                      <div className={`w-2 h-2 rounded-full ${topic.color} mr-2`} />
                      {topic.name} ({topic.count})
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Knowledge Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {knowledgeItems.map((item) => (
                <Card
                  key={item.id}
                  className="border-blue-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200"
                >
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg text-blue-800 mb-1">{item.title}</CardTitle>
                        <p className="text-sm text-blue-600">{item.description}</p>
                      </div>
                      <Badge
                        variant="outline"
                        className="border-blue-200 text-blue-700 capitalize"
                      >
                        {item.topic}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="bg-blue-50 p-2 rounded">
                          <div className="text-lg font-bold text-blue-800">{item.connections}</div>
                          <div className="text-xs text-blue-600">Connections</div>
                        </div>
                        <div className="bg-indigo-50 p-2 rounded">
                          <div className="text-lg font-bold text-indigo-800">{item.clips}</div>
                          <div className="text-xs text-indigo-600">Clips</div>
                        </div>
                        <div className="bg-sky-50 p-2 rounded">
                          <div className="text-lg font-bold text-sky-800">{item.notes}</div>
                          <div className="text-xs text-sky-600">Notes</div>
                        </div>
                      </div>

                      {/* Key Insights */}
                      <div>
                        <h4 className="font-semibold text-blue-800 text-sm mb-2">Key Insights:</h4>
                        <ul className="space-y-1">
                          {item.insights.map((insight, index) => (
                            <li key={index} className="text-xs text-blue-700 flex items-start">
                              <span className="text-blue-400 mr-1">•</span>
                              {insight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Related Concepts */}
                      <div>
                        <h4 className="font-semibold text-blue-800 text-sm mb-2">Related:</h4>
                        <div className="flex gap-1 flex-wrap">
                          {item.relatedConcepts.map((concept, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="text-xs border-blue-200 text-blue-600"
                            >
                              {concept}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="permanent" className="space-y-6">
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800">Permanent Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
                    <h3 className="font-semibold text-blue-800 mb-2">The Foundation of Productivity</h3>
                    <p className="text-blue-700 text-sm mb-3">
                      Productivity isn't about doing more things; it's about doing the right things efficiently. 
                      The combination of the Pareto Principle and Deep Work creates a powerful framework for achievement.
                    </p>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="border-blue-200 text-blue-700">Core Concept</Badge>
                      <Badge variant="outline" className="border-green-200 text-green-700">Actionable</Badge>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-lg border border-indigo-200">
                    <h3 className="font-semibold text-indigo-800 mb-2">Network Effects in Digital Age</h3>
                    <p className="text-indigo-700 text-sm mb-3">
                      Understanding network effects is crucial for building scalable businesses. 
                      The value proposition changes fundamentally when each user adds value for every other user.
                    </p>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="border-indigo-200 text-indigo-700">Business Model</Badge>
                      <Badge variant="outline" className="border-purple-200 text-purple-700">Strategic</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="insights" className="space-y-6">
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800">AI-Generated Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-4 rounded-lg border border-yellow-200">
                    <div className="flex items-start gap-2 mb-3">
                      <Lightbulb className="h-5 w-5 text-yellow-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-yellow-800">Cross-Domain Pattern</h4>
                        <p className="text-sm text-yellow-700">
                          The concept of "constraints enable creativity" appears in productivity, 
                          business strategy, and learning methodologies across multiple podcasts.
                        </p>
                      </div>
                    </div>
                    <Badge variant="outline" className="border-yellow-200 text-yellow-700">Pattern Recognition</Badge>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
                    <div className="flex items-start gap-2 mb-3">
                      <Brain className="h-5 w-5 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-green-800">Learning Acceleration</h4>
                        <p className="text-sm text-green-700">
                          Your note-taking frequency increases 3x when you actively create clips 
                          during podcast listening, suggesting better engagement.
                        </p>
                      </div>
                    </div>
                    <Badge variant="outline" className="border-green-200 text-green-700">Behavioral Insight</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="network" className="space-y-6">
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800">Knowledge Network</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-6 h-96 overflow-hidden">
                  <svg className="w-full h-full">
                    {/* Connections */}
                    <g>
                      <line x1="150" y1="100" x2="300" y2="150" stroke="#3b82f6" strokeWidth="2" opacity="0.6" />
                      <line x1="150" y1="100" x2="200" y2="250" stroke="#3b82f6" strokeWidth="2" opacity="0.6" />
                      <line x1="300" y1="150" x2="400" y2="200" stroke="#3b82f6" strokeWidth="2" opacity="0.6" />
                      <line x1="200" y1="250" x2="350" y2="300" stroke="#3b82f6" strokeWidth="2" opacity="0.6" />
                      <line x1="100" y1="200" x2="150" y2="100" stroke="#3b82f6" strokeWidth="2" opacity="0.6" />
                      <line x1="100" y1="200" x2="200" y2="250" stroke="#3b82f6" strokeWidth="2" opacity="0.6" />
                    </g>
                    
                    {/* Nodes */}
                    {networkNodes.map((node) => (
                      <g key={node.id}>
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r={Math.max(20, node.connections * 2)}
                          fill="#3b82f6"
                          fillOpacity="0.8"
                          className="hover:fill-opacity-100 cursor-pointer transition-all duration-200"
                        />
                        <text
                          x={node.x}
                          y={node.y + 4}
                          textAnchor="middle"
                          className="text-xs fill-white font-medium pointer-events-none"
                        >
                          {node.title.length > 10 ? node.title.substring(0, 10) + '...' : node.title}
                        </text>
                      </g>
                    ))}
                  </svg>
                  
                  <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm p-3 rounded-lg border border-blue-200">
                    <div className="text-sm text-blue-800">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                        <span>Node size = connection strength</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-0.5 bg-blue-600"></div>
                        <span>Lines = knowledge links</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default KnowledgeBase;
