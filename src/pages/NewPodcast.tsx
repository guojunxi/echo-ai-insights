
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Plus, Search, Upload, Link, Mic } from "lucide-react";

const NewPodcast = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <div className="border-b border-blue-200 bg-white p-4">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="text-blue-600" />
          <div className="flex items-center gap-2">
            <Plus className="h-6 w-6 text-blue-600" />
            <h1 className="text-xl font-semibold text-blue-800">New Podcast</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Search Section */}
          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800">Search & Import Podcast</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Search podcasts or paste URL..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 border-blue-200"
                />
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button variant="outline" className="border-blue-200 hover:border-blue-300 text-blue-700">
                  <Link className="h-4 w-4 mr-2" />
                  Import URL
                </Button>
                <Button variant="outline" className="border-blue-200 hover:border-blue-300 text-blue-700">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload File
                </Button>
                <Button variant="outline" className="border-blue-200 hover:border-blue-300 text-blue-700">
                  <Mic className="h-4 w-4 mr-2" />
                  Record Audio
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Podcasts */}
          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800">Popular Podcasts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "The Science of Productivity",
                  "Tech Innovations Today",
                  "Health & Wellness Insights",
                  "Business Strategy Talks"
                ].map((podcast) => (
                  <Card key={podcast} className="border-blue-100 hover:border-blue-300 cursor-pointer transition-colors">
                    <CardContent className="p-4">
                      <h3 className="font-medium text-blue-800">{podcast}</h3>
                      <p className="text-sm text-blue-600 mt-1">Click to import</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NewPodcast;
