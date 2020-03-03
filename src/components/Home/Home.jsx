import React from 'react';
import contract from '../../contract.svg';
import restaurant from '../../restaurant.svg';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <section>
        <div className="brand-container">
          <h2 className="brand">Rappi Makers</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam,
            praesentium!
          </p>
        </div>
        <div className="work-container">
          <div className="restaurant-container card">
            <h4>Soy restaurante</h4>
            <img src={restaurant} alt="Contrato" />
          </div>
          <div className="contract-container card">
            <h4>Busco trabajo</h4>
            <img src={contract} alt="Contrato" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
