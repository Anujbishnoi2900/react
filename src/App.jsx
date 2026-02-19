import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Detail from "./components/Detail";
import { CartProvider } from "./components/CartContext"; // ✅ Correct

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
