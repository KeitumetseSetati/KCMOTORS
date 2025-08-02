import React, { useState, useEffect } from 'react';

export default function EditCarForm({ car, onCancel, onSave }) {
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    price: '',
    description: '',
    imageUrl: '',
  });

  useEffect(() => {
    if (car) {
      setFormData({
        make: car.make,
        model: car.model,
        year: car.year,
        price: car.price,
        description: car.description,
        imageUrl: car.imageUrl,
      });
    }
  }, [car]);

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSave(formData);
  };

  if (!car) return null;

  return (
    <div className="edit-form-overlay">
      <form className="edit-car-form" onSubmit={handleSubmit}>
        <h2>Edit Car</h2>
        <input name="make" value={formData.make} onChange={handleChange} required />
        <input name="model" value={formData.model} onChange={handleChange} required />
        <input name="year" type="number" value={formData.year} onChange={handleChange} required />
        <input name="price" type="number" value={formData.price} onChange={handleChange} required />
        <input name="imageUrl" value={formData.imageUrl} onChange={handleChange} required />
        <textarea name="description" value={formData.description} onChange={handleChange} required />
        <div className="form-buttons">
          <button type="submit" className="save-btn">Save</button>
          <button type="button" className="cancel-btn" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
