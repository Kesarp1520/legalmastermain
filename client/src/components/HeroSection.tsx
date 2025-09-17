import { Button } from "@/components/ui/button";
import { FileText, Search, Upload, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";
import heroImage from "@assets/generated_images/Professional_legal_office_scene_311bcd16.png";
import { Link } from "react-router-dom";
const typingTerms = ["Contracts...", "Agreements...", "Policies...", "Simplified."];

export default function HeroSection() {
  const [currentTermIndex, setCurrentTermIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTerm = typingTerms[currentTermIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTerm.length) {
          setDisplayText(currentTerm.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTermIndex((prev) => (prev + 1) % typingTerms.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTermIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary/60 dark:from-primary/90 dark:to-primary/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
              Simplify Legal Documents
              <br />
              <span className="text-accent">Instantly</span>
            </h1>
            
            <div className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/90 font-medium min-h-[40px] flex items-center justify-center">
              <span className="inline-block min-w-[200px] text-left">
                {displayText}
                <span className="animate-pulse text-accent">|</span>
              </span>
            </div>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Transform complex legal documents into simple, understandable language with 
              AI-powered Legal Master. Get instant explanations and expert guidance.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg font-semibold"
              data-testid="button-analyze-document"
              asChild
            >
              <Link to="/document-uploader">
                <Upload className="w-5 h-5 mr-2" />
                Analyze Document
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm"
              data-testid="button-explore-laws"
            >
              <Search className="w-5 h-5 mr-2" />
              Explore Laws
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <FileText className="w-8 h-8 text-accent mb-3" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">Document Simplification</h3>
              <p className="text-primary-foreground/80 text-sm">Upload and instantly understand complex legal documents</p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <MessageSquare className="w-8 h-8 text-accent mb-3" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">AI Case Analysis</h3>
              <p className="text-primary-foreground/80 text-sm">Get expert analysis of your legal scenarios</p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <Search className="w-8 h-8 text-accent mb-3" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">Law Explorer</h3>
              <p className="text-primary-foreground/80 text-sm">Search and understand Indian laws simplified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}