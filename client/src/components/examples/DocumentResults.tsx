import DocumentResults from '../DocumentResults';

const mockResult = {
  keyObligations: [
    "Pay rent by 5th of each month to avoid late fees",
    "Maintain property in good condition and report damages immediately", 
    "Provide 30 days written notice period before lease termination"
  ],
  potentialRisks: [
    "Late payment penalties of 5% will be charged after grace period",
    "Full security deposit forfeit for property damages beyond normal wear",
    "Legal action for breach of contract may result in eviction proceedings"
  ],
  importantDeadlines: [
    "Monthly rent due: 5th of every month",
    "Lease renewal notice: 60 days before expiry", 
    "Security deposit return: Within 30 days after lease termination"
  ]
};

export default function DocumentResultsExample() {
  const handleTermClick = (term: string) => {
    console.log('Legal term clicked in example:', term);
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <DocumentResults result={mockResult} onTermClick={handleTermClick} />
    </div>
  );
}