import PropTypes from 'prop-types';
import './CarCard.css';

export default function CarCard({ car, onEdit, onDelete }) {
  const canDelete = !car.isOfficial;

  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-PT', {
      style: 'currency',
      currency: 'EUR'
    }).format(price);
  };

  const formatMileage = (km) => {
    return new Intl.NumberFormat('pt-PT').format(km);
  };

  return (
    <div className="car-card">
      {car.isOfficial && <div className="destaque-badge">Destaque</div>}

      <div className="car-image-placeholder">
        <span>🚗</span>
      </div>

      <div className="car-content">
        <div className="car-price">{formatPrice(car.preco)}</div>

        <div className="car-header">
          <h3 className="car-title">
            <span className="car-brand">{car.marca}</span>
            <span className="car-model">{car.modelo}</span>
          </h3>
        </div>

        <div className="car-specs">
          <div className="spec">
            <span className="spec-label">Ano:</span>
            <span className="spec-value">{car.ano}</span>
          </div>
          <div className="spec">
            <span className="spec-label">Combustível:</span>
            <span className="spec-value">{car.combustivel}</span>
          </div>
          <div className="spec">
            <span className="spec-label">Quilómetros:</span>
            <span className="spec-value">{formatMileage(car.quilometros)}</span>
          </div>
          <div className="spec">
            <span className="spec-label">Transmissão:</span>
            <span className="spec-value">{car.transmissao}</span>
          </div>
          <div className="spec">
            <span className="spec-label">Categoria:</span>
            <span className="spec-value">{car.categoria}</span>
          </div>
        </div>

        {canDelete && (
          <div className="car-actions">
            <button className="btn-edit" onClick={() => onEdit(car)} title="Editar">
              ✏️
            </button>
            <button className="btn-delete" onClick={() => onDelete(car.id)} title="Apagar">
              🗑️
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

CarCard.propTypes = {
  car: PropTypes.shape({
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
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};
