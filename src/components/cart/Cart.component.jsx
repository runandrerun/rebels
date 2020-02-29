import React from 'react';
import OrderButton from '../order-button/OrderButton.component';
import './Cart.styles.scss';

const Cart = ({ cartCount, orderSuccess, handlePurchase }) => {
  return (
    <div className="cart margin-bottom-m">
      <div className="cart--order-success">
        { orderSuccess ?
          "Order Placed!" :
          null
        }
      </div>
      <div className="cart--sub-ready">
        {
          cartCount >= 1 ?
          <OrderButton
            handlePurchase={handlePurchase}
          /> :
          null
        }
      </div>
      <img
        className="cart--icon"
        src={require('../../_assets/img/shopping-cart.svg')}
        alt="Cart icon"
      />
      <div className="cart--copy">
        { cartCount }
      </div>
    </div>
  );
};

export default Cart;
