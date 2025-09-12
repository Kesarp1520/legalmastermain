import ChatInterface from '../ChatInterface';

export default function ChatInterfaceExample() {
  const handleMessageSent = (message: string) => {
    console.log('Message sent in example:', message);
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <ChatInterface onMessageSent={handleMessageSent} />
    </div>
  );
}