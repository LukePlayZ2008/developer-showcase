import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AnniversaryPage from "./pages/anni/AnniversaryPage";
import LoveLetterPage from "./pages/anni/LoveLetterPage";
import { AdminAuthProvider } from "./contexts/AdminAuthContext";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ProtectedRoute from "./components/admin/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AdminAuthProvider>
          <Routes>
            {/* Hidden Anniversary Routes - No Layout wrapper */}
            <Route path="/project/anni" element={<AnniversaryPage />} />
            <Route path="/project/anni/love-letter" element={<LoveLetterPage />} />
            
            {/* Admin Routes - No Layout wrapper */}
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } />
            
            {/* Main Portfolio Routes with Layout */}
            <Route path="/" element={<Layout><Index /></Layout>} />
            <Route path="/about" element={<Layout><About /></Layout>} />
            <Route path="/projects" element={<Layout><Projects /></Layout>} />
            <Route path="/contact" element={<Layout><Contact /></Layout>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<Layout><NotFound /></Layout>} />
          </Routes>
        </AdminAuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
