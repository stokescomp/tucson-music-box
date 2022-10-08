import { useRouter } from "next/router";
import { firestore } from "../../../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useRef } from "react";

const Post = () => {
  const titleRef = useRef();
  const router = useRouter();
  const { detail } = router.query;

  let productData;
  const getProduct = async (id) => {
    const productSnapshot = await getDoc(doc(firestore, "products", id));
    if (productSnapshot.exists()) {
      return productSnapshot.data();
    } else {
      console.log("Document doesn't exist");
    }
  };

  const display = async (data) => {
    titleRef.current.innerHTML = data.title;
  };

  // Uncomment below when you want the id passed into
  // firebase to be the id from the url
  //   getProduct(detail).then((result) => display(result);
  getProduct("h9qGcg0XBdnwmXVnXQPW").then((result) => display(result));

  return <h1 ref={titleRef}>Title: </h1>;
};

export default Post;
