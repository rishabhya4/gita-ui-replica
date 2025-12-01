import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import IntroductionPage from "./pages/IntroductionPage";
import DailyRoutinesPage from "./pages/DailyRoutinesPage";
import AyurvedaIntroductionPage from "./pages/AyurvedaIntroductionPage";
import AyurvedaTimingPage from "./pages/AyurvedaTimingPage";
import YogaIntroductionPage from "./pages/YogaIntroductionPage";
import YogaObstaclesPage from "./pages/YogaObstaclesPage";
import YogaPracticePage from "./pages/YogaPracticePage";
import YogasanaPage from "./pages/YogasanaPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/introduction" element={<IntroductionPage />} />
          <Route path="/daily-routines" element={<DailyRoutinesPage />} />
          <Route path="/ayurveda-introduction" element={<AyurvedaIntroductionPage />} />
          <Route path="/ayurveda-timing" element={<AyurvedaTimingPage />} />
          <Route path="/yoga-introduction" element={<YogaIntroductionPage />} />
          <Route path="/yoga-obstacles" element={<YogaObstaclesPage />} />
          <Route path="/yoga-practice" element={<YogaPracticePage />} />
          <Route path="/yogasana" element={<YogasanaPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
