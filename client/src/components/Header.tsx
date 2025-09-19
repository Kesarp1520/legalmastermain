import { Button } from "@/components/ui/button";
import { Scale, Menu, X, LogOut } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import ThemeToggle from "./ThemeToggle";
import { useAuth } from "@/lib/AuthContext";
import { auth } from "@/lib/firebase";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user } = useAuth();

  const handleLogout = async () => {
    await auth.signOut();
    window.location.href = "/";
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 hover-elevate rounded-lg px-2 py-1" data-testid="link-home">
              <Scale className="h-8 w-8 transition-colors text-muted-foreground " />
              <span className="text-2xl font-bold transition-colors">Legal Master</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/simplify" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-simplify">
              Document Simplifier
            </Link>
            <Link href="/explorer" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-explorer">
              Law Explorer
            </Link>
            <Link href="/chat" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-chat">
              Case Analyzer
            </Link>
            <Link href="/guide" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-guide">
              Procedure Guide
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            {!user ? (
              <>
                <Link href="/login">
                  <Button variant="outline" size="sm" data-testid="button-login">
                    Login
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button size="sm" data-testid="button-signup">
                    Sign Up
                  </Button>
                </Link>
              </>
            ) : (
              <Button variant="outline" size="sm" onClick={handleLogout} data-testid="button-logout">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border py-4 space-y-4">
            <div className="flex flex-col space-y-3">
              <Link href="/simplify" className="text-muted-foreground hover:text-foreground px-2 py-1" data-testid="link-mobile-simplify">
                Document Simplifier
              </Link>
              <Link href="/explorer" className="text-muted-foreground hover:text-foreground px-2 py-1" data-testid="link-mobile-explorer">
                Law Explorer
              </Link>
              <Link href="/chat" className="text-muted-foreground hover:text-foreground px-2 py-1" data-testid="link-mobile-chat">
                Case Analyzer
              </Link>
              <Link href="/guide" className="text-muted-foreground hover:text-foreground px-2 py-1" data-testid="link-mobile-guide">
                Procedure Guide
              </Link>
            </div>
            <div className="flex flex-col space-y-2 pt-4 border-t border-border">
              {!user ? (
                <>
                  <Link href="/login">
                    <Button variant="outline" size="sm" className="w-full" data-testid="button-mobile-login">
                      Login
                    </Button>
                  </Link>
                  <Link href="/signup">
                    <Button size="sm" className="w-full" data-testid="button-mobile-signup">
                      Get Started
                    </Button>
                  </Link>
                </>
              ) : (
                <Button variant="outline" size="sm" className="w-full" onClick={handleLogout} data-testid="button-mobile-logout">
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
