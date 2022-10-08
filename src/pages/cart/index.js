import React from 'react';
import { useSelector } from 'react-redux';

import { selectProducts } from '../../slices/basketSlice';

function Index() {
  const products = useSelector(selectProducts);
  console.log(products);

  return <div>Cart</div>;
}

export default Index;
