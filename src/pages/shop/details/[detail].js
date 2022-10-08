import { useRouter } from 'next/router';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';

import { firestore } from '../../../../firebase';
import ProductDetails from '../../../components/productDetails/productDetails';

const ProductDetail = () => {
  const [productInfo, setProductInfo] = useState(null);
  const router = useRouter();
  const { detail } = router.query;

  useEffect(() => {
    const getProduct = async (id) => {
      const productSnapshot = await getDoc(doc(firestore, 'products', id));

      if (productSnapshot.exists()) {
        setProductInfo(productSnapshot.data());
      } else {
        console.log("Document doesn't exist");
      }
    };

    getProduct(detail);
  }, []);

  return (
    <div>
      <ProductDetails {...productInfo} />
    </div>
  );
};

export default ProductDetail;
