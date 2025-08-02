import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CarCard from './components/CarCard';
import EditCarForm from './components/EditCarForm';
import './index.css'; // Import the CSS file

export default function App() {
  const [cars, setCars] = useState([]);
  const [editingCar, setEditingCar] = useState(null);

  // Fetch cars from API
  const fetchCars = () => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/cars`)
      .then((res) => setCars(res.data))
      .catch(console.error);
  };

  useEffect(() => {
    fetchCars();
  }, []);

  // Delete a car by ID
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this car?')) {
      axios
        .delete(`${import.meta.env.VITE_API_BASE_URL}/cars/${id}`)
        .then(() => fetchCars())
        .catch((err) => alert('Delete failed: ' + err.message));
    }
  };

  // Start editing a car
  const handleEdit = (car) => {
    setEditingCar(car);
  };

  // Save edited car details
  const handleSave = (updatedCar) => {
    axios
      .put(`${import.meta.env.VITE_API_BASE_URL}/cars/${editingCar._id}`, updatedCar)
      .then(() => {
        setEditingCar(null);
        fetchCars();
      })
      .catch((err) => alert('Update failed: ' + err.message));
  };

  // Cancel editing
  const handleCancel = () => {
    setEditingCar(null);
  };

  return (
    <div className="app-container">
      <h1>KCMotors Inventory</h1>

      <div className="car-list">
        {cars.map((car) => (
          <CarCard
            key={car._id}
            car={car}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {/* Conditionally render EditCarForm only when editing */}
      {editingCar && (
        <EditCarForm car={editingCar} onCancel={handleCancel} onSave={handleSave} />
      )}
    </div>
  );
}
