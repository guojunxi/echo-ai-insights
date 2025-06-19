
import { MessageSquare, Plus, Bookmark, Scissors, BookOpen, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const menuItems = [
  {
    title: "AI Chat",
    url: "/",
    icon: MessageSquare,
  },
  {
    title: "New Podcast",
    url: "/new-podcast",
    icon: Plus,
  },
  {
    title: "Saved Podcasts",
    url: "/saved-podcasts",
    icon: Bookmark,
  },
  {
    title: "Clips",
    url: "/clips",
    icon: Scissors,
  },
  {
    title: "Knowledge Base",
    url: "/knowledge-base",
    icon: BookOpen,
  },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar className="border-r border-blue-200 bg-gradient-to-b from-blue-50 to-blue-100">
      <SidebarHeader className="p-6 border-b border-blue-200">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            EchoMind
          </h1>
          <p className="text-sm text-blue-600 font-medium">
            AI-Powered Podcast Note-taking Tool
          </p>
        </div>
      </SidebarHeader>
      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-blue-700 font-semibold mb-2">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    className={`w-full transition-all duration-200 ${
                      location.pathname === item.url 
                        ? 'bg-blue-200 text-blue-800 shadow-sm' 
                        : 'hover:bg-blue-100 text-blue-700'
                    }`}
                  >
                    <Link to={item.url} className="flex items-center gap-3 px-3 py-2 rounded-lg">
                      <item.icon className="h-4 w-4" />
                      <span className="font-medium">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
