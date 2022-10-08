import { useRouter } from 'next/router';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useRef, useState } from 'react';

import { firestore } from '../../../../firebase';

const ProductDetail = () => {
  const [productInfo, setProductInfo] = useState(null);
  const router = useRouter();
  const { detail } = router.query;

  console.log(productInfo);

  useEffect(() => {
    const getProduct = async (id) => {
      console.log(id);
      const productSnapshot = await getDoc(doc(firestore, 'products', id));

      if (productSnapshot.exists()) {
        console.log(productSnapshot.data());
        setProductInfo(productSnapshot.data());
      } else {
        console.log("Document doesn't exist");
      }
    };

    getProduct(detail);
  }, []);

  return <h1>Product: {detail} </h1>;
};

export default ProductDetail;
