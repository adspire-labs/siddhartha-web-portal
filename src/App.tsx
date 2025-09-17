import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LoadingScreen } from "@/components/ui/loading-screen";
import { ScrollToTop as ScrollToTopButton } from "@/components/ui/scroll-to-top";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Gallery from "./pages/Gallery";
import News from "./pages/News";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Chatbot from "./components/Chatbot";

// About sub-pages
import Introduction from "./pages/about/Introduction";
import History from "./pages/about/History";
import Faculty from "./pages/about/Faculty";
import AlumniParents from "./pages/about/alumni-parents";
import Leaders from "./pages/about/Leaders";
import ManagementCommittee from "./pages/about/Management-Committe";

// Programs sub-pages
import Science from "./pages/programs/Science";
import Management from "./pages/programs/Management";

// Facilities pages (new)
import WellEquippedLabsAndLibrary from "./pages/facilities/WellEquippedLabsAndLibrary";
import PlayGround from "./pages/facilities/PlayGround";
import Transportation from "./pages/facilities/Transportation";
import Cafeteria from "./pages/facilities/Cafeteria";
import ProjectorHallAndAudioVisualRoom from "./pages/facilities/ProjectorHallAndAudioVisualRoom";
import ExcursionAndFieldVisits from "./pages/facilities/ExcursionAndFieldVisits";
import Hostel from "./pages/facilities/Hostel";

import { NewsForm } from "./components/ui/NewsForm";
import FacultyAdd from "./pages/about/FacultyAdd";
import GalleryUpload from "./pages/GalleryForm";
import Dashboard from "./components/ui/Dashboard";
import AdminLogin from "./components/ui/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";
import ForgotPassword from "./components/ForgotPassword";

const queryClient = new QueryClient();

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
        <BrowserRouter>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col w-full">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin/forgot" element={<ForgotPassword />} />
    
                {/* About and its subpages */}
                <Route path="/about" element={<About />} />
                <Route path="/about/introduction" element={<Introduction />} />
                <Route path="/about/history" element={<History />} />
                <Route path="/about/faculty" element={<Faculty />} />
                <Route
                  path="/about/alumni-parents"
                  element={<AlumniParents />}
                />
                <Route path="/about/leaders" element={<Leaders />} />
                <Route
                  path="/about/management-committee"
                  element={<ManagementCommittee />}
                />

                {/* Programs */}
                <Route path="/programs" element={<Programs />} />
                <Route path="/programs/science" element={<Science />} />
                <Route path="/programs/management" element={<Management />} />

                {/* Facilities and its subpages */}
                <Route
                  path="/facilities/wellequippedlabsandlibrary"
                  element={<WellEquippedLabsAndLibrary />}
                />
                <Route path="/facilities/playground" element={<PlayGround />} />
                <Route
                  path="/facilities/transportation"
                  element={<Transportation />}
                />
                <Route path="/facilities/cafeteria" element={<Cafeteria />} />
                <Route
                  path="/facilities/projectorhallandaudiovisualroom"
                  element={<ProjectorHallAndAudioVisualRoom />}
                />
                <Route
                  path="/facilities/excursionandfieldvisits"
                  element={<ExcursionAndFieldVisits />}
                />
                <Route path="/facilities/hostel" element={<Hostel />} />

                <Route element={<ProtectedRoutes />}>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route
                    path="/dashboard/about/faculty/Optimistic@2082"
                    element={<FacultyAdd />}
                  />
                  <Route
                    path="/dashboard/news/Optimistic@2082"
                    element={<NewsForm />}
                  />
                  <Route
                    path="/dashboard/gallery/Optimistic@2082"
                    element={<GalleryUpload />}
                  />
                </Route>

                {/* Gallery */}
                <Route path="/gallery" element={<Gallery />} />

                {/* News */}
                <Route path="/news" element={<News />} />

                {/* Contact */}
                <Route path="/contact" element={<Contact />} />

                {/* Not Found */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <Chatbot />
          </div>
          <ScrollToTopButton />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
