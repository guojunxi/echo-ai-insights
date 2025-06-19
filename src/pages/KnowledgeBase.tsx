
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { BookOpen, Network, Tag, Brain } from "lucide-react";

const KnowledgeBase = () => {
  const topics = [
    { name: "Productivity", count: 15, color: "bg-blue-100 text-blue-800" },
    { name: "Technology", count: 12, color: "bg-green-100 text-green-800" },
    { name: "Health", count: 8, color: "bg-purple-100 text-purple-800" },
    { name: "Business", count: 10, color: "bg-orange-100 text-orange-800" }
  ];

  const permanentNotes = [
    "The Pomodoro Technique enhances focus through structured time blocks",
    "AI automation will reshape knowledge work in the next decade", 
    "Regular exercise significantly improves cognitive function",
    "Customer feedback loops are essential for product development"
  ];

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <div className="border-b border-blue-200 bg-white p-4">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="text-blue-600" />
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-blue-600" />
            <h1 className="text-xl font-semibold text-blue-800">Knowledge Base</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 bg-white overflow-y-auto">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Navigation Tabs */}
          <div className="flex gap-2">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Tag className="h-4 w-4 mr-2" />
              Topics
            </Button>
            <Button variant="outline" className="border-blue-200 hover:border-blue-300 text-blue-700">
              <Brain className="h-4 w-4 mr-2" />
              Permanent Notes
            </Button>
            <Button variant="outline" className="border-blue-200 hover:border-blue-300 text-blue-700">
              <Network className="h-4 w-4 mr-2" />
              Knowledge Map
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Topics Database */}
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800">Knowledge Topics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {topics.map((topic, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-blue-100 hover:border-blue-200 transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <span className={`px-2 py-1 rounded text-sm font-medium ${topic.color}`}>
                          {topic.name}
                        </span>
                      </div>
                      <span className="text-sm text-blue-600">{topic.count} notes</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Permanent Notes */}
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800">Core Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {permanentNotes.map((note, index) => (
                    <div key={index} className="p-3 rounded-lg border border-blue-100 hover:border-blue-200 transition-colors cursor-pointer">
                      <p className="text-sm text-blue-800">{note}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Knowledge Map Visualization */}
          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800">Knowledge Connections</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-blue-50 rounded-lg flex items-center justify-center">
                <div className="text-center text-blue-600">
                  <Network className="h-12 w-12 mx-auto mb-2" />
                  <p>Interactive knowledge map visualization</p>
                  <p className="text-sm">Connections between related concepts</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBase;
