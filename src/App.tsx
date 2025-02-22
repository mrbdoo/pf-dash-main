
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { MainLayout } from "@/components/layout/MainLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import { StrictMode } from "react";

const queryClient = new QueryClient();

const App = () => (
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <MainLayout>
                  <Index />
                </MainLayout>
              }
            />
          </Routes>
        </BrowserRouter>
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </QueryClientProvider>
  </StrictMode>
);

export default App;
