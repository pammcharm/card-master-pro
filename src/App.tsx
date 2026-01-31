import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";

import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Organizations from "./pages/Organizations";
import Members from "./pages/Members";
import Capture from "./pages/Capture";
import Cards from "./pages/Cards";
import Templates from "./pages/Templates";
import PrintQueue from "./pages/PrintQueue";
import Settings from "./pages/Settings";
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
          <Route path="/dashboard" element={<AppLayout><Dashboard /></AppLayout>} />
          <Route path="/organizations" element={<AppLayout><Organizations /></AppLayout>} />
          <Route path="/members" element={<AppLayout><Members /></AppLayout>} />
          <Route path="/capture" element={<AppLayout><Capture /></AppLayout>} />
          <Route path="/cards" element={<AppLayout><Cards /></AppLayout>} />
          <Route path="/templates" element={<AppLayout><Templates /></AppLayout>} />
          <Route path="/print" element={<AppLayout><PrintQueue /></AppLayout>} />
          <Route path="/settings" element={<AppLayout><Settings /></AppLayout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
