import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import { useContext } from "react";
// import { CartContext } from "./CartContext";

const Detail = () => {
const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [message, setMessage] = useState("");

  // const { cart, addToCart } = useContext(CartContext);

// const handleClick = () => {
//   addToCart(product);
//   console.log("Cart:", cart);
// };


useEffect(() => {
  async function fetchProduct() {
    try {
const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!res.ok) {
        throw new Error("Server Error");
      }

      const data = await res.json();
      setProduct(data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  fetchProduct();
}, [id]);


  if (!product) return <h2 className="text-center mt-10">Loading...</h2>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={product.image}
        alt={product.title}
        className="h-60 mx-auto object-contain"
      />
      <h2 className="text-2xl font-bold mt-4">{product.title}</h2>
      <p className="text-green-600 text-xl font-bold mt-2">
        ${product.price}
      </p>
      <p className="mt-4 text-gray-600">{product.description}</p>
      <p className="mt-2 text-sm text-gray-500">
        Category: {product.category}
      </p>
      <div className="text-center">
     <button
  onClick={() => {
    setMessage("Product successfully added to cart ");

    setTimeout(() => {
      setMessage("");
    }, 2000);
  }}
  className="bg-blue-300 p-2 m-2 rounded-xl font-bold"
>
  Add to Cart
</button>

{message && (
  <p className="text-green-600 font-bold mt-2">{message}</p>
)}

</div>
    </div>
  );
};

export default Detail;
