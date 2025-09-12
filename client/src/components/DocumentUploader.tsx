import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, FileText, ClipboardType, ExternalLink, Loader2 } from "lucide-react";

interface DocumentUploaderProps {
  onDocumentProcessed?: (result: any) => void;
}

export default function DocumentUploader({ onDocumentProcessed }: DocumentUploaderProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [pastedText, setPastedText] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [activeTab, setActiveTab] = useState("upload");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      console.log('File selected:', file.name);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setSelectedFile(file);
      console.log('File dropped:', file.name);
    }
  };

  const handleProcessDocument = async () => {
    setIsProcessing(true);
    
    // Simulate processing delay
    setTimeout(() => {
      const mockResult = {
        keyObligations: ["Pay rent by 5th of each month", "Maintain property in good condition", "Provide 30 days notice before termination"],
        potentialRisks: ["Late payment penalties of 5%", "Security deposit forfeit for damages", "Legal action for breach of contract"],
        importantDeadlines: ["Monthly rent due: 5th", "Lease renewal notice: 60 days", "Security deposit return: 30 days after termination"]
      };
      
      console.log('Document processed:', mockResult);
      onDocumentProcessed?.(mockResult);
      setIsProcessing(false);
    }, 3000);
  };

  const handleDigilocker = () => {
    console.log('Digilocker integration triggered');
    // TODO: Implement Digilocker OAuth integration
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-6 h-6 text-primary" />
            Document Simplifier
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="upload" data-testid="tab-upload">
                <Upload className="w-4 h-4 mr-2" />
                Upload File
              </TabsTrigger>
              <TabsTrigger value="paste" data-testid="tab-paste">
                <ClipboardType className="w-4 h-4 mr-2" />
                ClipboardType Text
              </TabsTrigger>
              <TabsTrigger value="digilocker" data-testid="tab-digilocker">
                <ExternalLink className="w-4 h-4 mr-2" />
                Digilocker
              </TabsTrigger>
            </TabsList>

            <TabsContent value="upload" className="space-y-4">
              <div
                className="border-2 border-dashed border-muted rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                data-testid="dropzone-upload"
              >
                {selectedFile ? (
                  <div className="space-y-2">
                    <FileText className="w-12 h-12 text-primary mx-auto" />
                    <p className="font-medium">{selectedFile.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Upload className="w-12 h-12 text-muted-foreground mx-auto" />
                    <p className="text-lg font-medium">Drop your document here</p>
                    <p className="text-muted-foreground">or click to browse files</p>
                    <p className="text-sm text-muted-foreground">Supports PDF, Word documents</p>
                  </div>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  className="hidden"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileSelect}
                  data-testid="input-file"
                />
              </div>
            </TabsContent>

            <TabsContent value="paste" className="space-y-4">
              <Textarea
                placeholder="ClipboardType your legal document text here..."
                value={pastedText}
                onChange={(e) => setPastedText(e.target.value)}
                className="min-h-[200px] resize-none"
                data-testid="textarea-document"
              />
            </TabsContent>

            <TabsContent value="digilocker" className="space-y-4">
              <div className="text-center p-8 border rounded-lg bg-muted/20">
                <ExternalLink className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Connect to Digilocker</h3>
                <p className="text-muted-foreground mb-4">
                  Securely import your documents directly from your Digilocker account
                </p>
                <Button onClick={handleDigilocker} data-testid="button-digilocker">
                  Connect Digilocker
                </Button>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-6">
            <Button
              onClick={handleProcessDocument}
              disabled={!selectedFile && !pastedText.trim() || isProcessing}
              className="w-full"
              size="lg"
              data-testid="button-process-document"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Processing Document...
                </>
              ) : (
                <>
                  <FileText className="w-4 h-4 mr-2" />
                  Simplify Document
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}