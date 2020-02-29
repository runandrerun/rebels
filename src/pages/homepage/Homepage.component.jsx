import React from 'react';
import Hero from '../../components/hero/Hero.component';
import ShoppingList from '../../components/shopping-list/ShoppingList.component';
import './Homepage.styles.scss';

const Homepage = () => {
  return (
    <section className="section-homepage">
      <Hero />
      <ShoppingList />
    </section>
  );
};

export default Homepage;
