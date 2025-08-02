import React from 'react';
import './CarCard.css';

export default function CarCard({ car, onEdit, onDelete }) {
  return (
    <div className="car-card">
      <img src={car.imageUrl} alt={`${car.make} ${car.model}`} className="car-image" />
      <div className="car-content">
        <h2 className="car-title">{car.make} {car.model}</h2>
        <p className="car-detail"><strong>Year:</strong> {car.year}</p>
        <p className="car-detail"><strong>Price:</strong> R{car.price}</p>
        <div className="car-buttons">
          <button className="btn edit" onClick={() => onEdit(car)}>Edit</button>
          <button className="btn delete" onClick={() => onDelete(car._id)}>Delete</button>
        </div>
      </div>
    </div>
  );
}
