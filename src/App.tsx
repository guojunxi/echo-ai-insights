
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import AIChat from "./pages/AIChat";
import NewPodcast from "./pages/NewPodcast";
import SavedPodcasts from "./pages/SavedPodcasts";
import Clips from "./pages/Clips";
import KnowledgeBase from "./pages/KnowledgeBase";
import PodcastDetail from "./pages/PodcastDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="min-h-screen flex w-full bg-white">
            <AppSidebar />
            <main className="flex-1 overflow-hidden">
              <Routes>
                <Route path="/" element={<AIChat />} />
                <Route path="/new-podcast" element={<NewPodcast />} />
                <Route path="/saved-podcasts" element={<SavedPodcasts />} />
                <Route path="/clips" element={<Clips />} />
                <Route path="/knowledge-base" element={<KnowledgeBase />} />
                <Route path="/podcast/:id" element={<PodcastDetail />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
