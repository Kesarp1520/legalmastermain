import FeatureCards from '../FeatureCards';

export default function FeatureCardsExample() {
  const handleFeatureClick = (featureId: string) => {
    console.log('Feature clicked in example:', featureId);
  };

  return (
    <div className="min-h-screen bg-background">
      <FeatureCards onFeatureClick={handleFeatureClick} />
    </div>
  );
}