import React from 'react';
import './OrderButton.styles.scss';

const OrderButton = ({ handlePurchase }) => {
  return (
    <button
    onClick={handlePurchase}
    className="btn-order-now"
    >
      Order Now!
    </button>
  );
};

export default OrderButton;
