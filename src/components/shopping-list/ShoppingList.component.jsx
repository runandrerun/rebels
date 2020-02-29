import React, { Component } from 'react';
import ItemCard from '../item-card/ItemCard.component';
import Cart from '../cart/Cart.component';
import Loader from '../loader/Loader.component';
import { setShopItems, setUserCart, clearCart } from '../../actions';
import { fetchShopItems, purchaseItems } from '../../adapters';
import { connect } from 'react-redux';
import './ShoppingList.styles.scss';

class ShoppingList extends Component {

  state = {
    fetched: false,
    loading: false,
    orderSuccess: false,
  };

  componentDidMount() {
    const { dispatch } = this.props;

    this.setState({
      loading: true
    });

    return fetchShopItems()
    .then(itemsData => {
      this.setState({
        loading: true,
        fetched: true
      });
      return dispatch(setShopItems(itemsData));
    });
  };

  handleCartUpdate = (e, id) => {
    const { dispatch } = this.props;
    e.preventDefault();
    return dispatch(setUserCart(id));
  };

  cartCheck = (id) => {
    const { cart } = this.props;
    if (cart.length >= 1) {
      return cart.find(cartItem => {
        if (cartItem === id) {
          return true;
        };
      });
    };
  };

  handlePurchase = () => {
    const { user, cart, dispatch } = this.props;
    if (cart.length >= 1) {
      cart.map(item => {
        return purchaseItems(user.token, item)
        .then(res => {
          if (res.msg === "Success") {
           dispatch(clearCart());
           this.setState({
            orderSuccess: true
           });
          };
        });
      });
    };
  };

  render() {
    const { loading, fetched, orderSuccess } = this.state;
    const { items, user, cart } = this.props;
    const cartCount = cart.length;

    if (loading && !fetched) { return <Loader /> }
    if (loading && fetched && items.length === 0) { return <div>Sold out!</div> }
    if (!loading && !fetched) { return <div/> }

    return (
      <div id="section-shopping" className="shopping-list">
        <div className="text-center margin-bottom-m">
          <h2 className="heading-secondary">
            Pick Your Litter
          </h2>
        </div>
        <div className="shopping-list__cart">
          <Cart
            orderSuccess={orderSuccess}
            handlePurchase={this.handlePurchase}
            cartCount={cartCount}
          />
        </div>
        <div className="shopping-list__container">
          {
            items.map(({ id, ...otherItemProps }) => {
              return (
                <ItemCard
                  key={id}
                  id={id}
                  {...otherItemProps}
                  handleCartUpdate={this.handleCartUpdate}
                  cartCheck={this.cartCheck(id)}
                />
              )
            })
          }
        </div>
      </div>
    )
  };
};

const mapStateToProps = (state) => {
  return {
    items: state.shopState.items,
    cart: state.shopState.cart,
    user: state.userState.user
  };
};

export default connect(mapStateToProps)(ShoppingList);
