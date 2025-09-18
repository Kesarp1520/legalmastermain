import { useState } from "react";
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

function ProtectedRoute({ component: Component, ...rest }: { component: React.ComponentType<any> }) {
  const { user, loading } = useAuth();
  const [, setLocation] = useLocation();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    setLocation("/");
    return null;
  }

  return <Component {...rest} />;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/Document-uploader" component={() => <ProtectedRoute component={DocumentUploader} />} />
      <Route path="/simplify" component={() => <ProtectedRoute component={SimplifyPage} />} />
      <Route path="/explorer" component={() => <ProtectedRoute component={ExplorerPage} />} />
      <Route path="/chat" component={() => <ProtectedRoute component={ChatPage} />} />
      <Route path="/guide" component={() => <ProtectedRoute component={GuidePage} />} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignUpPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Router />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;