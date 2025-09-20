import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, MessageSquare, Search, BookOpen, Shield, Zap } from "lucide-react";

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const features: Feature[] = [
  {
    id: '1',
    title: 'Document Simplification',
    description: 'Transform complex legal documents into clear, understandable language. Upload PDFs, Word docs, or paste text for instant simplification.',
    icon: <FileText className="w-8 h-8" />,
    color: 'text-sticker2'
  },
  {
    id: '2',
    title: 'AI Case Analysis',
    description: 'Get expert legal analysis of your situations. Our AI analyzes cases according to Indian law and provides relevant legal information.',
    icon: <MessageSquare className="w-8 h-8" />,
    color: 'text-sticker'
  },
  {
    id: '3',
    title: 'Interactive Law Explorer',
    description: 'Search and browse Indian laws by keyword, section, or category. Get simplified explanations with real-world examples.',
    icon: <Search className="w-8 h-8" />,
    color: 'text-sticker2'
  },
  {
    id: '4',
    title: 'Legal Procedure Guide',
    description: 'Step-by-step guides for obtaining legal documents and navigating procedures. Know exactly what documents you need.',
    icon: <BookOpen className="w-8 h-8" />,
    color: 'text-sticker'
  },
  {
    id: '5',
    title: 'Jargon Explainer',
    description: 'Click on any legal term to get simple explanations. No more confusion with complex legal terminology.',
    icon: <Zap className="w-8 h-8" />,
    color: 'text-sticker2'
  },
  {
    id: '6',
    title: 'Secure & Private',
    description: 'Your documents and data are handled with the highest security standards. We prioritize your privacy and confidentiality.',
    icon: <Shield className="w-8 h-8" />,
    color: 'text-sticker'
  }
];

interface FeatureCardsProps {
  onFeatureClick?: (featureId: string) => void;
}

export default function FeatureCards({ onFeatureClick }: FeatureCardsProps) {
  const handleFeatureClick = (featureId: string) => {
    console.log(`Feature clicked: ${featureId}`);
    onFeatureClick?.(featureId);
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Legal Assistance
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Everything you need to understand and navigate the legal landscape, 
            powered by advanced AI technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {features.map((feature) => (
            <Card 
              key={feature.id} 
              className="hover-elevate cursor-pointer transition-all duration-300 ease-in-out  hover:scale-[1.10]"
              onClick={() => handleFeatureClick(feature.id)}
              data-testid={`card-feature-${feature.id}`}
            >
              <CardHeader className="text-center pb-4">
                <div className={`mx-auto mb-4 ${feature.color}`}>
                  {feature.icon}
                </div>
                <CardTitle className="text-xl mb-2 ">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8 max-w-4xl mx-auto ">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Simplify Your Legal Journey?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of users who trust Legal Master for their legal document needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover-elevate"
                data-testid="button-get-started-features"
                onClick={() => handleFeatureClick('get-started')}
              >
                Get Started Free
              </button>
              <button 
                className="px-8 py-3 border border-border text-foreground rounded-lg font-medium hover-elevate"
                data-testid="button-learn-more-features"
                onClick={() => handleFeatureClick('learn-more')}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}