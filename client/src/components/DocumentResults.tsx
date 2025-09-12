import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle2, AlertTriangle, Clock, HelpCircle } from "lucide-react";

interface DocumentResult {
  keyObligations: string[];
  potentialRisks: string[];
  importantDeadlines: string[];
}

interface DocumentResultsProps {
  result: DocumentResult;
  onTermClick?: (term: string) => void;
}

export default function DocumentResults({ result, onTermClick }: DocumentResultsProps) {
  const handleTermClick = (term: string) => {
    console.log(`Legal term clicked: ${term}`);
    onTermClick?.(term);
  };

  const clickableTerms = ["breach of contract", "security deposit", "notice period", "penalty"];

  const renderTextWithClickableTerms = (text: string) => {
    let processedText = text;
    const elements: (string | JSX.Element)[] = [];
    
    clickableTerms.forEach((term) => {
      const regex = new RegExp(`(${term})`, 'gi');
      const parts = processedText.split(regex);
      
      const newElements: (string | JSX.Element)[] = [];
      parts.forEach((part, index) => {
        if (part.toLowerCase() === term.toLowerCase()) {
          newElements.push(
            <button
              key={`${term}-${index}`}
              className="text-primary underline decoration-dotted hover:text-accent transition-colors"
              onClick={() => handleTermClick(part)}
              data-testid={`term-${term.replace(/\s+/g, '-')}`}
            >
              {part}
            </button>
          );
        } else {
          newElements.push(part);
        }
      });
      
      elements.length = 0;
      elements.push(...newElements);
      processedText = elements.join('');
    });
    
    return elements.length > 0 ? elements : [text];
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Alert className="border-accent/50 bg-accent/5">
        <CheckCircle2 className="w-4 h-4 text-accent" />
        <AlertDescription className="text-foreground">
          <strong>Document processed successfully!</strong> Your legal document has been simplified. 
          Click on highlighted terms for explanations.
        </AlertDescription>
      </Alert>

      <div className="grid gap-6">
        {/* Key Obligations */}
        <Card className="border-green-200 dark:border-green-800">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
              <CheckCircle2 className="w-5 h-5" />
              Key Obligations
              <Badge variant="secondary" className="ml-2">What you must do</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {result.keyObligations.map((obligation, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="text-foreground leading-relaxed" data-testid={`obligation-${index}`}>
                    {renderTextWithClickableTerms(obligation)}
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Potential Risks */}
        <Card className="border-yellow-200 dark:border-yellow-800">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-yellow-700 dark:text-yellow-300">
              <AlertTriangle className="w-5 h-5" />
              Potential Risks
              <Badge variant="secondary" className="ml-2">What to watch out for</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {result.potentialRisks.map((risk, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="text-foreground leading-relaxed" data-testid={`risk-${index}`}>
                    {renderTextWithClickableTerms(risk)}
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Important Deadlines */}
        <Card className="border-blue-200 dark:border-blue-800">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
              <Clock className="w-5 h-5" />
              Important Deadlines
              <Badge variant="secondary" className="ml-2">Don't miss these dates</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {result.importantDeadlines.map((deadline, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="text-foreground leading-relaxed" data-testid={`deadline-${index}`}>
                    {renderTextWithClickableTerms(deadline)}
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Help Section */}
      <Card className="bg-muted/50 border-muted">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <HelpCircle className="w-5 h-5 text-muted-foreground mt-1 flex-shrink-0" />
            <div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Need help?</strong> Click on any highlighted legal term above 
                for simple explanations. This simplified version is for informational purposes only and should not 
                replace professional legal advice.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}