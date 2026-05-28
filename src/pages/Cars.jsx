import { useState } from 'react';
import PropTypes from 'prop-types';
import CarCard from '../components/CarCard.jsx';
import CarModal from '../components/CarModal.jsx';
import './Cars.css';

export default function Cars({ cars, onAddCar, onUpdateCar, onDeleteCar }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCar, setEditingCar] = useState(null);

  const handleOpenModal = (car = null) => {
    setEditingCar(car);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setEditingCar(null);
    setIsModalOpen(false);
  };

  const handleSaveCar = (formData) => {
    if (editingCar) {
      onUpdateCar(editingCar.id, formData);
    } else {
      onAddCar(formData);
    }
    handleCloseModal();
  };

  const handleDeleteCar = (carId) => {
    if (window.confirm('Tem a certeza que deseja apagar este automóvel?')) {
      const deleted = onDeleteCar(carId);
      if (!deleted) {
        alert('Não é possível apagar automóveis oficiais.');
      }
    }
  };

  return (
    <div className="cars-page">
      <div className="cars-header">
        <h1>Inventário</h1>
        <div className="header-underline"></div>
      </div>

      {cars.length === 0 ? (
        <div className="no-cars">
          <p>Nenhum automóvel disponível no momento.</p>
        </div>
      ) : (
        <div className="cars-container">
          <div className="cars-grid">
            {cars.map(car => (
              <CarCard
                key={car.id}
                car={car}
                onEdit={handleOpenModal}
                onDelete={handleDeleteCar}
              />
            ))}
          </div>
        </div>
      )}

      <button className="fab-add-car" onClick={() => handleOpenModal(null)} title="Adicionar automóvel">
        +
      </button>

      <CarModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveCar}
        car={editingCar}
      />
    </div>
  );
}

Cars.propTypes = {
  cars: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      marca: PropTypes.string.isRequired,
      modelo: PropTypes.string.isRequired,
      ano: PropTypes.number.isRequired,
      preco: PropTypes.number.isRequired,
      quilometros: PropTypes.number.isRequired,
      combustivel: PropTypes.string.isRequired,
      transmissao: PropTypes.string.isRequired,
      categoria: PropTypes.string.isRequired,
      isOfficial: PropTypes.bool
    })
  ).isRequired,
  onAddCar: PropTypes.func.isRequired,
  onUpdateCar: PropTypes.func.isRequired,
  onDeleteCar: PropTypes.func.isRequired
};
