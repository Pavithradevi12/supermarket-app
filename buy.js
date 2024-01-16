import React, { useState } from 'react';
import './buy.css';
import { Link, Route, Routes } from 'react-router-dom';
import Add from './add';
import Payment from './pay';

const Buy = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalSum, setTotalSum] = useState(0);

  const groceryItems = [
    { id: 1, name: 'Apple', rate: 2.99, image: "https://5.imimg.com/data5/AK/RA/MY-68428614/apple.jpg" },
    { id: 2, name: 'Banana', rate: 1.99, image: 'https://www.shutterstock.com/image-photo/bunch-bananas-isolated-on-white-600nw-1722111529.jpg' },
    { id: 3, name: 'Carrot', rate: 0.99, image: 'https://seed2plant.in/cdn/shop/products/carrotseeds.jpg?v=1604032858' },
    { id: 4, name: 'Dragon Fruit', rate: 1.49, image: 'https://budsnblush.com/cdn/shop/products/RareRedDragonFruitPlantBudsnblush.com.jpg?crop=center&height=2048&v=1668080374&width=2048'},
    { id: 5, name: 'Grapes', rate: 3.99, image: 'https://www.orgpick.com/cdn/shop/products/ThompsonSeedlessGrapes_ResidueFree.jpg?v=1675760923'},
    { id: 6, name: 'Tomato', rate: 0.79,image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/1200px-Tomato_je.jpg'},
    { id: 7, name: 'Raddish', rate: 1.29,image: 'https://i.ndtvimg.com/i/2017-11/raddish_620x350_41511944773.jpg'},
    { id: 8, name: 'Potato', rate: 1.79, image:  'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/313dtY-LOEL._AC_UF1000,1000_QL80_.jpg'},
    { id: 9, name: 'Spinach', rate: 1.49, image: 'https://freshji.in/wp-content/uploads/2020/09/Spinach-1.jpg'},
    { id: 10, name: 'Broccoli', rate: 2.29, image: 'https://5.imimg.com/data5/SELLER/Default/2023/2/JA/NO/LI/39399291/fresh-brocolli-500x500.jpg'},
    { id: 11, name: 'Promegranate', rate: 1.99,image: 'https://www.tasteofhome.com/wp-content/uploads/2023/04/GettyImages-635981056.jpg?fit=700%2C1024'},
    { id: 12, name: 'Mango', rate: 2.49,image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/31cXlUcvRVL.jpg'},
  ];

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    setTotalSum(totalSum + item.rate);
  };

  const removeFromCart = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCart);
    setTotalSum(totalSum - item.rate);
  };

  const renderGroceryCards = () => {
    return groceryItems.map((item) => (
      <div key={item.id} className="grocery-card">
        <img src={item.image} alt={item.name} />
        <h3>{item.name}</h3>
        <p>Rate: ${item.rate.toFixed(2)}</p>
        <button className="explore-btn" onClick={() => addToCart(item)}>
          Add to cart
        </button>
      </div>
    ));
  };

  const renderCartItems = () => {
    return cartItems.map((cartItem) => (
      <div key={cartItem.id} className="cart-item">
        <img src={cartItem.image} alt={cartItem.name} />
        <h3>{cartItem.name}</h3>
        <p>Rate: ${cartItem.rate.toFixed(2)}</p>
        <button className="remove-btn" onClick={() => removeFromCart(cartItem)}>
          Remove from cart
        </button>
      </div>
    ));
  };

  return (
    <div className="grocery-page">
      <h2>Start Purchasing</h2>
      <div className="grocery-container">{renderGroceryCards()}</div>

      <div className="cart-section">
        <h2>Shopping Cart</h2>
        <div className="cart-container">
          {renderCartItems()}
        </div>
        {cartItems.length > 0 && (
          <div className="total-sum">
            <p>Total: ${totalSum.toFixed(2)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Buy;
