import { Scale, Mail, Phone, MapPin, Twitter, Linkedin, Github } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo & Description */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Scale className="h-8 w-8 text-accent" />
                <span className="text-2xl font-bold">Legal Master</span>
              </div>
              <p className="text-primary-foreground/80 leading-relaxed mb-6 max-w-md">
                Making legal information accessible and understandable to everyone. 
                Simplify complex documents with AI-powered legal assistance.
              </p>
              <div className="flex space-x-4">
                <button 
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                  data-testid="link-twitter"
                >
                  <Twitter className="h-5 w-5" />
                </button>
                <button 
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                  data-testid="link-linkedin"
                >
                  <Linkedin className="h-5 w-5" />
                </button>
                <button 
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                  data-testid="link-github"
                >
                  <Github className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <nav className="space-y-3">
                <Link href="/simplify" className="block text-primary-foreground/80 hover:text-accent transition-colors" data-testid="link-footer-simplify">
                  Document Simplifier
                </Link>
                <Link href="/explorer" className="block text-primary-foreground/80 hover:text-accent transition-colors" data-testid="link-footer-explorer">
                  Law Explorer
                </Link>
                <Link href="/chat" className="block text-primary-foreground/80 hover:text-accent transition-colors" data-testid="link-footer-chat">
                  Case Analyzer
                </Link>
                <Link href="/guide" className="block text-primary-foreground/80 hover:text-accent transition-colors" data-testid="link-footer-guide">
                  Procedure Guide
                </Link>
                <Link href="/dashboard" className="block text-primary-foreground/80 hover:text-accent transition-colors" data-testid="link-footer-dashboard">
                  Dashboard
                </Link>
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-primary-foreground/80">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">support@legalmaster.com</span>
                </div>
                <div className="flex items-center space-x-2 text-primary-foreground/80">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">+91 1800-123-4567</span>
                </div>
                <div className="flex items-center space-x-2 text-primary-foreground/80">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">Mumbai, India</span>
                </div>
              </div>
              
              {/* Newsletter Signup */}
              <div className="mt-6">
                <h5 className="font-medium mb-2">Stay Updated</h5>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded text-sm text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent"
                    data-testid="input-newsletter-email"
                  />
                  <button 
                    className="px-4 py-2 bg-accent text-accent-foreground rounded text-sm font-medium hover-elevate"
                    data-testid="button-newsletter-subscribe"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap gap-6 text-sm text-primary-foreground/80">
              <Link href="/privacy" className="hover:text-accent transition-colors" data-testid="link-privacy">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-accent transition-colors" data-testid="link-terms">
                Terms of Service
              </Link>
              <Link href="/disclaimer" className="hover:text-accent transition-colors" data-testid="link-disclaimer">
                Legal Disclaimer
              </Link>
              <Link href="/contact" className="hover:text-accent transition-colors" data-testid="link-contact">
                Contact Us
              </Link>
            </div>
            <div className="text-sm text-primary-foreground/60">
              © 2024 Legal Master. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}