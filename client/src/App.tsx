import { createContext, useContext, useEffect, useState } from "react";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useAuth } from "./lib/AuthContext";
import NotFound from "@/pages/not-found";

// Components
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeatureCards from "./components/FeatureCards";
import Footer from "./components/Footer";
import DocumentUploader from "./components/DocumentUploader";
import ChatInterface from "./components/ChatInterface";
import LegalExplorer from "./components/LegalExplorer";
import DocumentResults from "./components/DocumentResults";

// Landing Page
function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeatureCards />
      </main>
      <Footer />
    </div>
  );
}

// Document Simplifier Page
function SimplifyPage() {
  const [documentResult, setDocumentResult] = useState<any>(null);

  const handleDocumentProcessed = (result: any) => {
    setDocumentResult(result);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8">
        <DocumentUploader onDocumentProcessed={handleDocumentProcessed} />
        {documentResult && (
          <div className="mt-8">
            <DocumentResults result={documentResult} />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

// Law Explorer Page
function ExplorerPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8">
        <LegalExplorer />
      </main>
      <Footer />
    </div>
  );
}

// Case Analyzer Page
function ChatPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8">
        <ChatInterface />
      </main>
      <Footer />
    </div>
  );
}

// Procedure Guide Page
function GuidePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8">
        <div className="max-w-4xl mx-auto p-6 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Legal Procedure Guide</h1>
          <p className="text-muted-foreground mb-8">
            Get step-by-step guidance for legal procedures and document requirements.
          </p>
          <div className="bg-muted/20 border border-muted rounded-lg p-8">
            <p className="text-muted-foreground">
              Procedure Guide feature coming soon! This will provide detailed steps for obtaining legal documents like rent agreements, passports, wills, and more.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import LoginPage from "@/pages/Login";
import SignUpPage from "@/pages/SignUp";

const AuthContext = createContext<any>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Example: check localStorage or API call
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    setLoading(false); // ✅ IMPORTANT: always clear loading
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}


function ProtectedRoute({ component: Component, ...rest }: { component: React.ComponentType<any> }) {
  const { user, loading } = useAuth();
  const [, setLocation] = useLocation();

  //if (!user) {
  //  setLocation("/login");
  //  return null;
  //}

  return <Component {...rest} />;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />

      <Route path="/Document-uploader">
        <ProtectedRoute component={DocumentUploader} />
      </Route>

      <Route path="/simplify">
        <ProtectedRoute component={SimplifyPage} />
      </Route>

      <Route path="/explorer">
        <ProtectedRoute component={ExplorerPage} />
      </Route>

      <Route path="/chat">
        <ProtectedRoute component={ChatPage} />
      </Route>

      <Route path="/guide">
        <ProtectedRoute component={GuidePage} />
      </Route>

      <Route path="/login">
        <ProtectedRoute component={LoginPage} />
      </Route>
      <Route path="/signup">
        <ProtectedRoute component={SignUpPage} />
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Router />
        </div>
        <Toaster />
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;