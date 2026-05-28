import { useState, useEffect } from 'react';
import { seedCars } from '../data/seedCars.js';

export const useCars = () => {
  const [cars, setCars] = useState([]);

  // Initialize cars on mount
  useEffect(() => {
    const stored = localStorage.getItem('dealership_cars');
    if (stored) {
      setCars(JSON.parse(stored));
    } else {
      // First load - initialize with seed cars
      setCars(seedCars);
      localStorage.setItem('dealership_cars', JSON.stringify(seedCars));
    }
  }, []);

  // Save cars to localStorage whenever they change
  useEffect(() => {
    if (cars.length > 0) {
      localStorage.setItem('dealership_cars', JSON.stringify(cars));
    }
  }, [cars]);

  const addCar = (carData) => {
    const newCar = {
      ...carData,
      id: 'car-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9),
      isOfficial: false
    };
    setCars(prevCars => {
      // Keep official cars first, then sort by price
      const officialCars = prevCars.filter(car => car.isOfficial);
      const userCars = prevCars.filter(car => !car.isOfficial);
      const allUserCars = [...userCars, newCar].sort((a, b) => a.preco - b.preco);
      return [...officialCars, ...allUserCars];
    });
  };

  const updateCar = (carId, carData) => {
    setCars(prevCars =>
      prevCars.map(car => (car.id === carId ? { ...car, ...carData } : car))
    );
  };

  const deleteCar = (carId) => {
    const car = cars.find(c => c.id === carId);
    if (car && car.isOfficial) {
      console.warn('Cannot delete official seed cars');
      return false;
    }
    setCars(prevCars => prevCars.filter(car => car.id !== carId));
    return true;
  };

  return { cars, addCar, updateCar, deleteCar };
};
