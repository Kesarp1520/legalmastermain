import LegalExplorer from '../LegalExplorer';

export default function LegalExplorerExample() {
  const handleSearchPerformed = (query: string) => {
    console.log('Search performed in example:', query);
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <LegalExplorer onSearchPerformed={handleSearchPerformed} />
    </div>
  );
}