import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search, BookOpen, ChevronRight, Sparkles, Loader2 } from "lucide-react";

interface Law {
  id: string;
  section: string;
  title: string;
  description: string;
  category: string;
}

const mockLaws: Law[] = [
  {
    id: '1',
    section: 'Article 21',
    title: 'Right to Life and Personal Liberty',
    description: 'No person shall be deprived of his life or personal liberty except according to procedure established by law.',
    category: 'Constitution of India'
  },
  {
    id: '2',
    section: 'Section 420',
    title: 'Cheating and dishonestly inducing delivery of property',
    description: 'Punishment for cheating and dishonestly inducing delivery of property.',
    category: 'Indian Penal Code'
  },
  {
    id: '3',
    section: 'Section 73',
    title: 'Compensation for loss or damage caused by breach of contract',
    description: 'When a contract has been broken, the party who suffers by such breach is entitled to receive compensation.',
    category: 'Indian Contract Act'
  }
];

const categories = [
  'Constitution of India',
  'Indian Penal Code',
  'Indian Contract Act',
  'Information Technology Act',
  'Consumer Protection Act',
  'Companies Act'
];

interface LegalExplorerProps {
  onSearchPerformed?: (query: string) => void;
}

export default function LegalExplorer({ onSearchPerformed }: LegalExplorerProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Law[]>(mockLaws);
  const [isSearching, setIsSearching] = useState(false);
  const [simplifyingLaw, setSimplifyingLaw] = useState<string | null>(null);

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    onSearchPerformed?.(searchQuery);
    
    // Simulate search delay
    setTimeout(() => {
      const filtered = mockLaws.filter(law => 
        law.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        law.section.toLowerCase().includes(searchQuery.toLowerCase()) ||
        law.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered);
      setIsSearching(false);
    }, 1000);
  };

  const handleSimplifyLaw = async (lawId: string) => {
    setSimplifyingLaw(lawId);
    console.log(`Simplifying law ${lawId} with Gemini AI`);
    
    // Simulate API call
    setTimeout(() => {
      setSimplifyingLaw(null);
      // TODO: Show simplified explanation in modal or expanded card
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-primary" />
            All Laws Explorer
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6">
            <Input
              placeholder="Search by keyword, article number, or section (e.g., 'Article 21', 'Section 420', 'Theft')"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyPress}
              className="flex-1"
              data-testid="input-search-laws"
            />
            <Button 
              onClick={handleSearch} 
              disabled={isSearching}
              data-testid="button-search-laws"
            >
              {isSearching ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Search className="w-4 h-4" />
              )}
            </Button>
          </div>

          {/* Search Results */}
          {searchQuery && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">
                Search Results ({searchResults.length})
              </h3>
              <div className="space-y-4">
                {searchResults.map((law) => (
                  <Card key={law.id} className="hover-elevate">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                              {law.section}
                            </span>
                            <span className="text-sm text-muted-foreground">
                              {law.category}
                            </span>
                          </div>
                          <h4 className="font-semibold mb-2">{law.title}</h4>
                          <p className="text-sm text-muted-foreground">{law.description}</p>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleSimplifyLaw(law.id)}
                          disabled={simplifyingLaw === law.id}
                          data-testid={`button-simplify-${law.id}`}
                        >
                          {simplifyingLaw === law.id ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                          ) : (
                            <>
                              <Sparkles className="w-4 h-4 mr-1" />
                              Simplify
                            </>
                          )}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle>Browse by Category</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {categories.map((category, index) => (
              <AccordionItem key={category} value={`category-${index}`}>
                <AccordionTrigger className="text-left" data-testid={`accordion-${category.replace(/\s+/g, '-').toLowerCase()}`}>
                  <div className="flex items-center justify-between w-full mr-4">
                    <span>{category}</span>
                    <span className="text-sm text-muted-foreground">
                      {mockLaws.filter(law => law.category === category).length} laws
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pt-2">
                    {mockLaws
                      .filter(law => law.category === category)
                      .map((law) => (
                        <div
                          key={law.id}
                          className="flex items-center justify-between p-3 border rounded-lg hover-elevate"
                        >
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-sm font-medium text-primary">
                                {law.section}
                              </span>
                              <ChevronRight className="w-3 h-3 text-muted-foreground" />
                              <span className="font-medium">{law.title}</span>
                            </div>
                            <p className="text-sm text-muted-foreground">{law.description}</p>
                          </div>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleSimplifyLaw(law.id)}
                            disabled={simplifyingLaw === law.id}
                            data-testid={`button-category-simplify-${law.id}`}
                          >
                            {simplifyingLaw === law.id ? (
                              <Loader2 className="w-4 h-4 animate-spin" />
                            ) : (
                              <>
                                <Sparkles className="w-4 h-4 mr-1" />
                                Simplify
                              </>
                            )}
                          </Button>
                        </div>
                      ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}