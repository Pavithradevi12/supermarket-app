import React from 'react';

const Add = ({ cartItems, removeFromCart, totalSum, onCheckout }) => {
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
    <div className="cart-sidebar">
      <h2>Shopping Cart</h2>
      <div className="cart-container">
        {renderCartItems()}
      </div>
      {cartItems.length > 0 && (
        <div className="total-sum">
          <p>Total: ${totalSum.toFixed(2)}</p>
          <button className="checkout-btn" onClick={onCheckout}>
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Add;
