import { useEffect, useState, useContext } from "react";
import Search from "./Search";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const Home = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const { cart } = useContext(CartContext); // ✅ Yaha likhna hai

  useEffect(() => {
    async function api() {
      const res = await fetch("https://fakestoreapi.com/products");
      const result = await res.json();
      setData(result);
    }
    api();
  }, []);

  const filteredData = data.filter((item) =>
    item.title?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* 👇 Yaha show karna hai */}
      <h2 className="text-center text-xl font-bold mt-4">
        Cart Items: {cart.length}
      </h2>

      <Search setSearch={setSearch} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {filteredData.map((list) => (
          <div key={list.id} className="bg-white shadow-lg rounded-xl p-4">
            <img
              className="h-40 mx-auto object-contain my-3"
              src={list.image}
              alt={list.title}
            />
            <p className="text-green-600 font-bold">
              <span className="text-black">Price:</span> ${list.price}
            </p>
            <p>
              <span className="text-black font-bold">Title : </span>
              {list.title}
            </p>

            <Link to={`/product/${list.id}`}>
              <button className="bg-amber-600 p-2 m-1 rounded-xl border text-white font-bold">
                View detail
              </button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
