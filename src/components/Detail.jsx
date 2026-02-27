import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [message, setMessage] = useState("");

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

  if (!product)
    return <h2 className="text-center mt-10 text-gray-700 text-xl">Loading...</h2>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      {/* Product Image */}
      <div className="flex justify-center mb-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-72 w-auto object-contain rounded-lg shadow-md"
        />
      </div>

      {/* Product Info */}
      <h2 className="text-3xl font-bold text-gray-800">{product.title}</h2>
      <p className="text-green-600 text-2xl font-extrabold mt-2">${product.price}</p>
      <p className="mt-4 text-gray-700">{product.description}</p>
      <p className="mt-2 text-sm text-gray-500">Category: {product.category}</p>

      {/* Add to Cart Section */}
      <div className="mt-6 flex flex-col items-center">
        <button
          onClick={() => {
            setMessage("Product successfully added to cart!");
            setTimeout(() => setMessage(""), 2000);
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-full shadow-lg transition transform hover:scale-105"
        >
          Add to Cart
        </button>

        {message && (
          <p className="text-green-600 font-semibold mt-4 animate-pulse">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Detail;