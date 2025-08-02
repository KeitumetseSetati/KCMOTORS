import { useState } from 'react';
import axios from 'axios';

export default function AddCarForm({ onCarAdded }) {
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    price: '',
    description: '',
    imageUrl: '',
  });

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/cars`, formData);
      alert('Car added successfully!');
      setFormData({
        make: '',
        model: '',
        year: '',
        price: '',
        description: '',
        imageUrl: '',
      });
      onCarAdded(res.data); // notify parent to refresh list
    } catch (err) {
      alert('Failed to add car: ' + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, marginBottom: 20 }}>
      <input name="make" value={formData.make} onChange={handleChange} placeholder="Make" required />
      <input name="model" value={formData.model} onChange={handleChange} placeholder="Model" required />
      <input name="year" type="number" value={formData.year} onChange={handleChange} placeholder="Year" required />
      <input name="price" type="number" value={formData.price} onChange={handleChange} placeholder="Price (ZAR)" required />
      <input name="imageUrl" value={formData.imageUrl} onChange={handleChange} placeholder="Image URL" required />
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
      <button type="submit">Add Car</button>
    </form>
  );
}
