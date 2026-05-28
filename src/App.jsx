import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useMemo } from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Cars from './pages/Cars.jsx';
import { useCars } from './hooks/useCars.js';

export default function App() {
  const { cars, addCar, updateCar, deleteCar } = useCars();

  // Calculate stats
  const totalCars = useMemo(() => cars.length, [cars]);
  const totalCategories = useMemo(() => {
    const categories = new Set(cars.map(car => car.categoria));
    return categories.size;
  }, [cars]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home totalCars={totalCars} totalCategories={totalCategories} />}
        />
        <Route path="/sobre" element={<About />} />
        <Route
          path="/inventario"
          element={
            <Cars
              cars={cars}
              onAddCar={addCar}
              onUpdateCar={updateCar}
              onDeleteCar={deleteCar}
            />
          }
        />
      </Routes>
    </Router>
  );
}
