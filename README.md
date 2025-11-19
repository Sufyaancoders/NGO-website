# First Point Creations - NGO Website for Poor Children Donations

A compassionate NGO website dedicated to empowering underprivileged children through education, healthcare, and community support. Our mission is to create brighter futures for children in need by connecting donors with opportunities that make a real difference.

## 🎯 Mission

To provide essential support to poor children through donations, education initiatives, and community programs that foster hope, dignity, and opportunity.

## 🛠️ Technology Stack

### Frontend Framework
- **React 19.1.1** - Modern JavaScript library for building user interfaces
- **Vite 7.1.7** - Fast build tool and development server with HMR (Hot Module Replacement)

### Styling & UI
- **Tailwind CSS 4.1.17** - Utility-first CSS framework for rapid UI development
- **Radix UI** - Unstyled, accessible UI components
  - Accordion
  - Checkbox
  - Hover Card
  - Label
  - Select
  - Slot
- **Tailwind CSS Animate 1.0.7** - Animation utilities

### State Management
- **Redux Toolkit 2.10.1** - State management with Redux
- **React Redux 9.2.0** - Official React binding for Redux

### Routing
- **React Router DOM 7.9.5** - Declarative routing for React

### Icons & Graphics
- **FontAwesome Icons 7.1.0** - Vector icons and social logos
- **Lucide React 0.553.0** - Beautiful & consistent icon set

### Animation & Motion
- **Motion 12.23.24** - JavaScript motion library for web animations

### Development Tools
- **ESLint 9.36.0** - JavaScript linting tool
- **TypeScript Types** - Type definitions for React
- **Vite Plugins** - React plugin for Vite
- **Autoprefixer 10.4.21** - PostCSS plugin for vendor prefixes
- **Babel Plugin React Compiler 19.1.0-rc.3** - React Compiler integration

### Additional Libraries
- **Embla Carousel React 8.6.0** - Accessible carousel component
- **Sonner 2.0.7** - Toast notification library
- **Class Variance Authority 0.7.1** - Type-safe CSS class composer
- **Tailwind Merge 3.4.0** - Utility to merge Tailwind CSS classes
- **clsx 2.1.1** - Conditional CSS class utility

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd first-point-creations
   ```

2. **Navigate to the frontend directory:**
   ```bash
   cd FirstPointCreations/frontend
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   The application will be running at `http://localhost:5173` (default Vite port)

## 📜 Available Scripts

### Development
- `npm run dev` - Start the development server with hot reload

### Production
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally

### Code Quality
- `npm run lint` - Run ESLint to check code quality

## 🌐 Features

### Core Functionality
- **Donation Portal** - Secure and easy donation process
- **Campaign Management** - Various social campaigns and awareness programs
- **Petition Section** - Community petitions for social change
- **About Us** - Information about the NGO's mission and impact
- **Contact Form** - Direct communication with the organization

### User Interface
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Interactive Components** - Modern UI with smooth animations
- **Accessibility** - WCAG compliant components using Radix UI

### Content Sections
- Hero banners and landing pages
- National movement campaigns
- Social awareness materials
- FAQ sections
- Footer with contact information

## 📁 Project Structure

```
FirstPointCreations/frontend/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and media files
│   │   ├── logo/          # Logo assets
│   │   └── slums/         # Campaign images
│   ├── components/        # Reusable UI components
│   │   ├── common/       # Common components
│   │   ├── core/         # Core application components
│   │   ├── ui/           # UI component library
│   │   └── logos/        # Logo components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── pages/            # Page components
│   │   └── auth.pages/   # Authentication pages
│   ├── reducer/          # Redux reducers
│   ├── services/         # API services
│   ├── slices/           # Redux slices
│   ├── App.jsx           # Main application component
│   └── main.jsx          # Application entry point
├── package.json          # Project dependencies
├── vite.config.js        # Vite configuration
└── tailwind.config.js    # Tailwind CSS configuration
```

## 🎨 Customization

### Styling
The project uses Tailwind CSS with custom components. Styles are located in:
- `src/index.css` - Global styles
- Component-specific styles within each component file

### Configuration
- `tailwind.config.js` - Tailwind customization settings
- `vite.config.js` - Build and development configuration
- `components.json` - UI component configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Radix UI for accessible component primitives
- Tailwind CSS for building modern designs
- The React community for excellent tooling
- FontAwesome for comprehensive icon sets

## 📞 Support

For questions or support, please contact us through the website's contact form or email us directly.

---

Built with ❤️ for children in need.
