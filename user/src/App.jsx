// src/App.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/cars`)
      .then(res => setCars(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>KCMotors Car Listings</h1>
      <div style={{ display: 'grid', gap: 20, gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' }}>
        {cars.map(car => (
          <div key={car._id} style={{ border: '1px solid #ccc', padding: 15, borderRadius: 10 }}>
            <img src={car.imageUrl} alt={car.make} style={{ width: '100%', borderRadius: 8 }} />
            <h3>{car.make} {car.model}</h3>
            <p><strong>Price:</strong> R{car.price}</p>
            <p>{car.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
