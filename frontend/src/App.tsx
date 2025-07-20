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

// About sub-pages
import Introduction from "./pages/about/Introduction";
import History from "./pages/about/History";
import Faculty from "./pages/about/Faculty";

// Programs sub-pages
import Science from "./pages/programs/Science";
import Management from "./pages/programs/Management";
import { NewsForm } from "./components/ui/NewsForm";
import FacultyPage from "./pages/about/FacultyAdd";
import FacultyAdd from "./pages/about/FacultyAdd";
import GalleryUpload from "./pages/GalleryForm";

const queryClient = new QueryClient();

// Component to handle scroll to top on route change
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
                <Route path="/about" element={<About />} />
                <Route path="/about/introduction" element={<Introduction />} />
                <Route path="/about/history" element={<History />} />
                <Route path="/about/faculty" element={<Faculty />} />
                <Route path="/about/faculty/add" element={<FacultyAdd />} />

                <Route path="/programs" element={<Programs />} />
                <Route path="/programs/science" element={<Science />} />
                <Route path="/programs/management" element={<Management />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path='/gallery/add' element={<GalleryUpload/>}/>
                <Route path="/news" element={<News />} />
                <Route path="/news/add" element={<NewsForm/>}/>
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
          <ScrollToTopButton />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;