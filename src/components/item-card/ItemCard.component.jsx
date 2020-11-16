import React from 'react';
import AddButton from '../add-button/AddButton.component';
import './ItemCard.styles.scss';

const ItemCard = ({ id, product, price, handleCartUpdate, cartCheck }) => {
  return (
    <div id={id} className="item-card">
      <div className="mg-container">
      <img
        className="img-container__img"
        src={require(`../../_assets/img/apples.jpg`)}
        alt={product}
      />
      {/*<img
         className="img-container__img"
         src={require(`../../_assets/img/${product.toLowerCase()}.jpg`)}
         alt={product}
       />*/}
      </div>
      <div className="item-card-container">
        <div className="text-center margin-bottom-s">
          <h3 className="heading-tertiary">
            {product}
          </h3>
        </div>
        <div className="text-center margin-bottom-s">
          <div className="item-card__price">
            <span>Price:</span> ${price}
          </div>
        </div>
        <div className="text-center">
          <AddButton
            isDisabled={cartCheck}
            productId={id}
            handleAddToCart={handleCartUpdate}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
