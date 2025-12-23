# Riddhi Kate - Physical Therapy Website

A modern, responsive single-page website for Riddhi Kate's physical therapy practice.

## Features

- Clean, modern design with light olive green and white color scheme
- Fully responsive (mobile and desktop)
- Smooth scroll navigation
- Sections: Home, About, Services, Contact

## Tech Stack

- **React.js** - Frontend framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **React Icons** - Icon library

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Open http://localhost:5173 in your browser

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` folder.

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx      # Navigation with mobile menu
│   ├── Hero.jsx        # Hero/landing section
│   ├── About.jsx       # About the therapist
│   ├── Services.jsx    # Services offered
│   ├── Contact.jsx     # Contact information
│   └── Footer.jsx      # Footer with links
├── App.jsx             # Main app component
├── index.css           # Tailwind imports + custom styles
└── main.jsx            # React entry point
```

## Services Offered

- Sports Rehab
- Post Surgery Recovery
- Vestibular Rehab
- Dance Rehab

## Customization

### Colors
Edit `tailwind.config.js` to change the color palette:
- Primary olive greens: `#A3B18A`, `#588157`, `#3A5A40`
- Background: White and off-white

### Content
Update the text content directly in the component files under `src/components/`.

## License

Private - All rights reserved
# riddhikate
