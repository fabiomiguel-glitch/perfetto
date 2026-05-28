import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './CarModal.css';

export default function CarModal({ isOpen, onClose, onSave, car }) {
  const [formData, setFormData] = useState({
    marca: '',
    modelo: '',
    ano: new Date().getFullYear(),
    preco: '',
    quilometros: '',
    combustivel: 'Gasolina',
    transmissao: 'Manual',
    categoria: 'Berlina'
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (car) {
      setFormData({
        marca: car.marca,
        modelo: car.modelo,
        ano: car.ano,
        preco: car.preco,
        quilometros: car.quilometros,
        combustivel: car.combustivel,
        transmissao: car.transmissao,
        categoria: car.categoria
      });
    } else {
      setFormData({
        marca: '',
        modelo: '',
        ano: new Date().getFullYear(),
        preco: '',
        quilometros: '',
        combustivel: 'Gasolina',
        transmissao: 'Manual',
        categoria: 'Berlina'
      });
    }
    setErrors({});
  }, [car, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'ano' || name === 'preco' || name === 'quilometros'
        ? parseInt(value) || ''
        : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.marca.trim()) {
      newErrors.marca = 'Marca é obrigatória';
    }
    if (!formData.modelo.trim()) {
      newErrors.modelo = 'Modelo é obrigatório';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSave(formData);
    setFormData({
      marca: '',
      modelo: '',
      ano: new Date().getFullYear(),
      preco: '',
      quilometros: '',
      combustivel: 'Gasolina',
      transmissao: 'Manual',
      categoria: 'Berlina'
    });
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">{car ? 'Editar Automóvel' : 'Adicionar Automóvel'}</h2>

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="marca">Marca *</label>
              <input
                type="text"
                id="marca"
                name="marca"
                value={formData.marca}
                onChange={handleChange}
                placeholder="Ex: BMW"
                className={errors.marca ? 'error' : ''}
              />
              {errors.marca && <span className="error-message">{errors.marca}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="modelo">Modelo *</label>
              <input
                type="text"
                id="modelo"
                name="modelo"
                value={formData.modelo}
                onChange={handleChange}
                placeholder="Ex: Serie 3"
                className={errors.modelo ? 'error' : ''}
              />
              {errors.modelo && <span className="error-message">{errors.modelo}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="ano">Ano</label>
              <input
                type="number"
                id="ano"
                name="ano"
                value={formData.ano}
                onChange={handleChange}
                min="1990"
                max={new Date().getFullYear() + 1}
              />
            </div>
            <div className="form-group">
              <label htmlFor="preco">Preço (€)</label>
              <input
                type="number"
                id="preco"
                name="preco"
                value={formData.preco}
                onChange={handleChange}
                placeholder="0.00"
                min="0"
                step="100"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="quilometros">Quilómetros</label>
              <input
                type="number"
                id="quilometros"
                name="quilometros"
                value={formData.quilometros}
                onChange={handleChange}
                placeholder="0"
                min="0"
              />
            </div>
            <div className="form-group">
              <label htmlFor="combustivel">Combustível</label>
              <select id="combustivel" name="combustivel" value={formData.combustivel} onChange={handleChange}>
                <option value="Gasolina">Gasolina</option>
                <option value="Diesel">Diesel</option>
                <option value="Híbrido">Híbrido</option>
                <option value="Elétrico">Elétrico</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="transmissao">Transmissão</label>
              <select id="transmissao" name="transmissao" value={formData.transmissao} onChange={handleChange}>
                <option value="Manual">Manual</option>
                <option value="Automático">Automático</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="categoria">Categoria</label>
              <select id="categoria" name="categoria" value={formData.categoria} onChange={handleChange}>
                <option value="Berlina">Berlina</option>
                <option value="SUV">SUV</option>
                <option value="Desportivo">Desportivo</option>
                <option value="Familiar">Familiar</option>
                <option value="Comercial">Comercial</option>
              </select>
            </div>
          </div>

          <div className="modal-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="btn-save">
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

CarModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  car: PropTypes.shape({
    id: PropTypes.string,
    marca: PropTypes.string,
    modelo: PropTypes.string,
    ano: PropTypes.number,
    preco: PropTypes.number,
    quilometros: PropTypes.number,
    combustivel: PropTypes.string,
    transmissao: PropTypes.string,
    categoria: PropTypes.string
  })
};
