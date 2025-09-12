# Legal Master Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from professional legal platforms like LegalZoom and modern SaaS applications like Notion for clean, trustworthy design that balances authority with accessibility.

## Core Design Elements

### Color Palette
- **Primary**: Deep Indigo (230 25% 25%) - Professional authority and trust
- **Secondary**: Soft Gold (45 85% 75%) - Premium accent for CTAs and highlights
- **Background**: Off-White (210 10% 98%) - Clean, readable foundation
- **Dark Mode**: Deep navy backgrounds with muted gold accents

### Typography
- **Primary**: Inter or Source Sans Pro via Google Fonts
- **Headings**: Font weights 600-700, sizes from text-xl to text-4xl
- **Body**: Font weight 400-500, text-base to text-lg for readability
- **Legal Text**: Monospace font for code/legal citations

### Layout System
- **Spacing**: Tailwind units of 4, 6, 8, 12, 16 (p-4, m-6, gap-8, etc.)
- **Containers**: Max-width constraints of max-w-4xl for content, max-w-7xl for landing
- **Grid**: 12-column responsive grid with consistent gutters

### Component Library

#### Navigation
- Clean header with logo, main nav links, and user profile dropdown
- Sticky navigation with subtle shadow on scroll
- Mobile hamburger menu with slide-out drawer

#### Forms & Inputs
- Rounded corners (rounded-lg)
- Focus states with indigo ring
- Error states with red borders and helper text
- File upload zones with drag-and-drop styling

#### Data Display
- Card-based layouts with subtle shadows
- Expandable sections for legal content
- Tooltip overlays for jargon explanations
- Progress indicators for document processing

#### Interactive Elements
- Primary buttons: Deep indigo with soft gold hover states
- Secondary buttons: Outline style with indigo borders
- Hover effects: Subtle scale transforms and color transitions

### Content-Specific Design

#### Landing Page
- **Hero Section**: Large, professional hero with animated typing effect
- **Sections**: 4 key sections - Hero, Features, Benefits, CTA
- **Visual Treatment**: Gradient overlays from deep indigo to lighter blues
- **Call-to-Actions**: Prominent gold buttons with clear hierarchy

#### Document Interface
- **Upload Area**: Large dropzone with clear visual feedback
- **Processing States**: Loading spinners and progress bars
- **Results Display**: Clean typography with highlighted simplifications
- **Comparison View**: Side-by-side original and simplified text

#### Legal Explorer
- **Category Cards**: Grid layout with icons and brief descriptions
- **Search Interface**: Prominent search bar with filtering options
- **Content Hierarchy**: Clear heading structure with expandable sections

#### Chat Interface
- **Message Bubbles**: Distinct styling for user vs AI responses
- **Input Area**: Sticky bottom input with file attachment options
- **Conversation History**: Scrollable with clear timestamps

### Images
- **Hero Image**: Large, professional image of legal documents or courthouse (1200x600px)
- **Feature Icons**: Simple line icons for each main feature
- **Background Elements**: Subtle geometric patterns or gradients
- **Document Mockups**: Clean screenshots showing the interface in action

### Accessibility
- High contrast ratios (4.5:1 minimum)
- Focus indicators on all interactive elements
- Screen reader friendly alt text and ARIA labels
- Keyboard navigation support
- Consistent dark mode implementation

This design system creates a professional, trustworthy platform that makes complex legal information accessible while maintaining the authority expected in the legal domain.