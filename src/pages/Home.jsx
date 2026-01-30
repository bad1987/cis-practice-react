import React from 'react';
import HeroBanner from '../components/HeroBanner';
import CategoryFilter from '../components/CategoryFilter';
import ProductGrid from '../components/ProductGrid';

function Home() {
  return (
    <>
      <HeroBanner />
      <CategoryFilter />
      <ProductGrid />
    </>
  );
}

export default Home;
