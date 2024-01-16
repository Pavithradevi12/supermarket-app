// Card.js
import React from 'react';
import './cart.css';
import {Link} from 'react-router-dom'


const Card = () => {
  const groceryItems = [
    { id: 1, name: 'Fruites&Vegetables', rate: 2.99, image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQi5KLCPf8wNGpgLIksEKySN5jXV2tFeHBGj8hQN0CddbluLld6' },
    { id: 2, name: 'Foodgrains', rate: 1.99, image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ9YRLr-gJoBuoiTIequ4n_LKQXAxYpnFiIOyOPVSXJMI4Bh2kb' },
    { id: 3, name: 'Oil & Masala', rate: 0.99, image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRGWX8HRK79pC_vUqiuwC7EbToM9sXyHcZT_loxWrEn1I4Qm28h' },
    { id: 4, name: 'Bakery & Dairy', rate: 1.49, image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRSEivAtCS4eKhzQjPES7T2zNOsprJsHbz-CximIYrk1_HCGSyj'},
    { id: 5, name: 'Snacks & Branded Foods', rate: 3.99, image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRttF4gDKwwRZ1iYghP432EBtE36_FrRIK9_i3G0_QR6ILWCbaX'},
    { id: 6, name: 'Beauty & Hygiene', rate: 0.79,image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRA-awkTADe7kRmhn2vrc1xTIzmfBt0segU7gYoxBLUy-_JnKdA'},
    { id: 7, name: 'Beverages', rate: 1.29,image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQYrbA8iu-BUgS7hYAhvwWvTi2VIzGyoTsPeb0vH10G0V5e1aoa'},
    { id: 8, name: 'Cleaning & Household', rate: 1.79, image:  'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ-3RRlHpsGuneEMfzedYf93-9zFjjzzWIc05uG4GXa_5yoO3a6'},
    { id: 9, name: 'Kitchenware', rate: 1.49, image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQHMUnHeTdynO0jPcgtzyKuBrffnPdayv0joEJ3_5uAS-MlKdGO'},
    { id: 10, name: 'Egg, Meat & Fish', rate: 2.29, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRocU3a9Fdc5OFqiVA_dzHuHrVJSIOq2XIZrLxpDAKIPNcR2F6-'},
    { id: 11, name: 'Gourmet', rate: 1.99,image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTf_SC4sPtCiLXnDTDqcpT6CpEqTncahiJ8-q2g4zZzy3nUfMFi'},
    { id: 12, name: 'Baby care', rate: 2.49,image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS39hsmuXU84Ws6LopR3eftfR4TlQRrxti6lnYKiSojVAVHrvYW'},
  ];

  const renderGroceryCards = () => {
    return groceryItems.map((item) => (
      <div key={item.id} className="grocery-card">
        <img src={item.image} alt={item.name} />
        <h3>{item.name}</h3>
        {/* <p>Rate: Rs {item.rate.toFixed(2)}</p> */}
        <button className="explore-btn">
          <Link to="/buy">Explore</Link>
        </button>
      </div>
    ));
  };
return (
    <div className="grocery-page">
      <div className="start-purchasing">
        <h2>Start Purchasing</h2>
        
      </div>
      <div className="grocery-container">{renderGroceryCards()}</div>
    </div>
  );
};
export default Card;
