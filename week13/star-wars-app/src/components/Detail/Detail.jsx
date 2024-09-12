import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { shipImages } from '../../shipImages';
import './Detail.css';

function Detail({ selectedShip }) {
  useEffect(() => {
    // sayfa yüklendiğinde veya selectedShip değiştiğinde scroll'u en alta getir (detail componentine denk getirmek icin):
    window.scrollTo(0, document.body.scrollHeight);
  }, [selectedShip]);

  if (!selectedShip) {
    return <div>Seçilen bir gemi yok.</div>;
  }

  return (
    <div className='detail-container'>
      <div className="detail-card">
        <Link to="/" className="back-link">
          <i className="fa-solid fa-arrow-left"></i>
          Geri
        </Link>
        <h2>{selectedShip.name}</h2>
        
        <img src={shipImages[selectedShip.name]} alt={selectedShip.name} />
        <ul>
          <li><b>Model:</b> {selectedShip.model}</li>
          <li><b>Manufacturer:</b> {selectedShip.manufacturer}</li>
          <li><b>Cost in Credits:</b> {selectedShip.cost_in_credits}</li>
          <li><b>Length:</b> {selectedShip.length}</li>
          <li><b>Max Atmosphering Speed:</b> {selectedShip.max_atmosphering_speed}</li>
          <li><b>Crew:</b> {selectedShip.crew}</li>
          <li><b>Passengers:</b> {selectedShip.passengers}</li>
          <li><b>Cargo Capacity:</b> {selectedShip.cargo_capacity}</li>
          <li><b>Hyperdrive Rating:</b> {selectedShip.hyperdrive_rating}</li>
        </ul>
      </div>
    </div>
  );
}

export default Detail;
