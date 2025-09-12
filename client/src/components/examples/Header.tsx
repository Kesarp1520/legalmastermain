import Header from '../Header';
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../../lib/queryClient";

export default function HeaderExample() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background">
        <Header />
        <div className="h-96 flex items-center justify-center">
          <p className="text-muted-foreground">Header component example</p>
        </div>
      </div>
    </QueryClientProvider>
  );
}