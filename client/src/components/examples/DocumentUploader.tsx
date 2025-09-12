import DocumentUploader from '../DocumentUploader';

export default function DocumentUploaderExample() {
  const handleDocumentProcessed = (result: any) => {
    console.log('Document processed in example:', result);
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <DocumentUploader onDocumentProcessed={handleDocumentProcessed} />
    </div>
  );
}