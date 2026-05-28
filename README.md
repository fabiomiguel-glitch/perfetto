# Perfetto - Concessionária de Automóveis 🚗

A modern, responsive car dealership website built with React, Vite, and React Router. Perfetto offers a sleek interface for managing and browsing car inventory with a sophisticated dark theme.

## Features

- **Modern Design**: Dark theme with gold accents (#FFD700)
- **Responsive Layout**: Works seamlessly from 375px mobile to 1440px desktop
- **Car Inventory Management**: Add, edit, and delete cars from inventory
- **Data Persistence**: localStorage integration to save cars between sessions
- **Seed Data**: Pre-loaded with 5 official cars that cannot be deleted
- **Navigation**: React Router for smooth page transitions
- **No Dependencies**: Uses plain CSS (no Tailwind or UI libraries)

## Tech Stack

- **Frontend**: React 18 + Vite
- **Routing**: React Router v6
- **Styling**: Plain CSS with CSS variables
- **Storage**: localStorage API
- **Validation**: PropTypes

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx           # Fixed top navigation
│   ├── Navbar.css
│   ├── CarCard.jsx          # Individual car display
│   ├── CarCard.css
│   ├── CarModal.jsx         # Add/Edit car modal
│   └── CarModal.css
├── pages/
│   ├── Home.jsx             # Homepage with stats
│   ├── Home.css
│   ├── About.jsx            # Dealership info
│   ├── About.css
│   ├── Cars.jsx             # Inventory grid
│   └── Cars.css
├── data/
│   └── seedCars.js          # Initial 5 cars
├── hooks/
│   └── useCars.js           # State management hook
├── App.jsx                  # Root component
├── main.jsx                 # React entry point
├── index.css                # Global styles
└── vite.config.js
```

## Color Palette

- **Primary Black**: `#0a0a0a`
- **Secondary Gold**: `#FFD700`
- **White**: `#ffffff`
- **Background**: `#111111`
- **Card Background**: `#1a1a1a`

## Pages

### Home Page (`/`)
- Hero banner with logo, name, and tagline
- Stats bar: total cars, categories, management button
- 3 highlight cards about the dealership

### About Page (`/sobre`)
- Timeline-style layout with 4 sections
- Decorative section numbers (01, 02, 03, 04)
- Contact information

### Cars Inventory (`/inventario`)
- Responsive 3-column grid (desktop), 1-column (mobile)
- Car cards with:
  - Price in gold
  - Brand, model, year, fuel, mileage
  - Edit/delete buttons (user cars only)
  - "Destaque" badge for official cars
- Floating "+" button to add new cars
- Car modal for add/edit operations

## Getting Started

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd perfetto

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

The app will open at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## Usage

### Adding a Car

1. Click the **+** floating button (bottom right)
2. Fill in car details:
   - Marca (Brand) - required
   - Modelo (Model) - required
   - Ano (Year)
   - Preço (Price)
   - Quilómetros (Mileage)
   - Combustível (Fuel type dropdown)
   - Transmissão (Transmission dropdown)
   - Categoria (Category dropdown)
3. Click **Guardar** to save

### Editing a Car

1. Click the **✏️** button on any user-added car
2. Update details in the modal
3. Click **Guardar** to save

### Deleting a Car

1. Click the **🗑️** button on any user-added car
2. Confirm deletion
3. Car is removed from inventory

### Official vs User Cars

- **Official Cars**: 5 seed cars marked with "Destaque" badge, cannot be deleted
- **User Cars**: Added by you, can be edited or deleted

## Data Persistence

- All user-added cars are saved to localStorage
- localStorage key: `dealership_cars`
- On first load, seed cars are initialized if storage is empty
- Cars are stored as JSON and automatically synced on changes

## useCars Hook API

```javascript
const { cars, addCar, updateCar, deleteCar } = useCars();

// Returns
cars;              // Array of all cars
addCar(carData);   // Add new car, returns true
updateCar(id, data); // Update existing car
deleteCar(id);     // Delete user car, returns true/false
```

## Component PropTypes

All components include proper PropTypes validation for type safety.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Features in Detail

### Responsive Design

- **Desktop (1024px+)**: 3-column car grid
- **Tablet (768px-1023px)**: 2-column grid
- **Mobile (< 768px)**: 1-column grid, hamburger menu
- **Small Mobile (< 480px)**: Optimized spacing and sizing

### Color Scheme

The entire app uses CSS variables for easy theming:

```css
:root {
  --primary-black: #0a0a0a;
  --secondary-gold: #FFD700;
  --white: #ffffff;
  --background: #111111;
  --card-bg: #1a1a1a;
  --text-light: #e0e0e0;
  --text-muted: #999999;
  --border-color: #333333;
}
```

### Modal Validation

- Brand and Model fields are required
- Form shows error messages for invalid input
- Backdrop blur effect for focus

### Navigation

- Fixed navbar with active link highlighting
- Mobile hamburger menu
- Logo with car emoji
- Smooth transitions between pages

## Notes

- No backend required - all data stored locally
- Seed cars are protected from deletion
- Responsive images use emoji placeholders
- All form inputs validated before saving
- Confirmation dialog before deleting cars

## License

This project is provided as-is for dealership website purposes.
