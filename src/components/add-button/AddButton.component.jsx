import React from 'react';
import './AddButton.styles.scss';

const AddButton = ({ productId, handleAddToCart, isDisabled }) => {
  return (
    <div>
      <button
        disabled={isDisabled}
        onClick={(e) => handleAddToCart(e, productId)}
        className="btn-text"
      >
        {
          isDisabled ?
          "Added!" :
          "Add to Cart"
        }
      </button>
    </div>
  );
};

export default AddButton;
