# 🚢 Trade Portal Components

Beautiful React components for shipment tracking and trade document management with premium design aesthetics.

## 📦 Components Included

### 1. **ShipmentTracker**
A stunning shipment status timeline component featuring:
- **Four Stage Timeline**: Order Processed → In Transit → Customs Clearance → Delivered
- **Animated Progress Bar**: Smooth gradient progress indicator with glow effects
- **Detailed Sidebar**: Displays container weight, origin (Shanghai), destination (Rotterdam), and other shipment details
- **Interactive Demo**: Toggle between different stages to see the timeline in action

### 2. **DocumentsGallery**
A grid-style document management UI featuring:
- **Six Document Templates**: Proforma Invoice, Bill of Lading, Packing List, Certificate of Origin, Commercial Invoice, and Insurance Certificate
- **Premium Hover Effects**: Cards lift and glow on hover with smooth animations
- **Color-Coded Categories**: Each document type has a unique gradient theme
- **Download Functionality**: Interactive download buttons with loading states

## 🎨 Design Features

### Visual Excellence
- **Dark Mode Theme**: Elegant dark background with vibrant gradients
- **Glassmorphism**: Blur effects and translucent panels
- **Smooth Animations**: Fade-ins, slide-ups, and micro-interactions
- **Color Gradients**: Blue, purple, pink, green, orange, and cyan themes
- **Typography**: Inter font family for modern, clean look

### Interactive Elements
- **Hover Effects**: Cards transform with elevation and glow
- **Shine Animation**: Light sweep effect on hover
- **Pulse Animations**: Active stage indicator pulses
- **Progress Shimmer**: Animated shimmer on progress bar
- **Button States**: Hover, active, and loading states

## 🚀 Usage

### Quick Start

```jsx
import React from 'react';
import ShipmentTracker from './ShipmentTracker';
import DocumentsGallery from './DocumentsGallery';

// Use individually
function MyApp() {
  return (
    <div>
      <ShipmentTracker />
      {/* or */}
      <DocumentsGallery />
    </div>
  );
}
```

### With Navigation (Included Demo)

```jsx
import App from './App';

// The App component includes navigation to toggle between both components
function Main() {
  return <App />;
}
```

## 📁 Files Structure

```
import/
├── App.jsx                  # Demo app with navigation
├── App.css                  # App navigation styles
├── ShipmentTracker.jsx      # Shipment timeline component
├── ShipmentTracker.css      # Shipment tracker styles
├── DocumentsGallery.jsx     # Documents grid component
└── DocumentsGallery.css     # Documents gallery styles
```

## 🎯 Component Props

### ShipmentTracker
Currently uses internal state, but can be easily modified to accept:
- `currentStage` (number): Active stage index (0-3)
- `shipmentDetails` (object): Custom shipment information
- `stages` (array): Custom timeline stages

### DocumentsGallery
Currently uses internal data, but can be extended to accept:
- `documents` (array): Custom document list
- `onDownload` (function): Custom download handler

## 🎨 Customization

### Colors
Edit the CSS files to customize gradient colors:
```css
/* In ShipmentTracker.css */
.progress-bar-fill {
  background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%);
}

/* In DocumentsGallery.css */
.document-card.blue:hover .card-gradient {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(37, 99, 235, 0.1));
}
```

### Animations
Adjust animation timing in CSS:
```css
/* Speed up/slow down animations */
.document-card {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
```

## 📱 Responsive Design

Both components are fully responsive with breakpoints at:
- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: < 768px

The grid layout automatically adjusts:
- Desktop: Multi-column grid
- Tablet: 2 columns
- Mobile: Single column stacked layout

## 🌟 Key Features

### ShipmentTracker
✅ Four-stage timeline visualization  
✅ Animated progress bar with gradient  
✅ Detailed shipment information sidebar  
✅ Interactive stage selector (demo mode)  
✅ Completed/Active/Pending state indicators  
✅ Smooth transitions and animations  

### DocumentsGallery
✅ Grid layout with 6 document types  
✅ Hover effects with card elevation  
✅ Shine animation on hover  
✅ Download button with loading state  
✅ Color-coded categories  
✅ File metadata display  

## 💡 Tips

1. **Import Fonts**: Both components use Google Fonts (Inter), which are imported in the CSS files
2. **Icons**: Components use emoji icons - you can replace with icon libraries like React Icons
3. **State Management**: Currently using local state - can be connected to Redux/Context for global state
4. **API Integration**: Download handlers can be connected to actual file download endpoints

## 🎯 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Modern mobile browsers

## 📄 License

Free to use and modify for your projects!

---

Built with ❤️ using React and CSS
