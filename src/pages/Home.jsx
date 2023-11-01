import React from 'react';
import Products from '../components/Products';
import Banner from '../components/Banner';

export default function Home() {
  return (
    <>
      <Banner text="WoongStore" image="secondBanner" />
      <Products />
    </>
  );
}
