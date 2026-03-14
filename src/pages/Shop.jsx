import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FiStar, FiShoppingCart } from "react-icons/fi";
import { supabase } from "../lib/supabaseClient";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

const categories = [
  "All",
  "Electronics",
  "Fashion",
  "Groceries",
  "Home & Kitchen",
  "Beauty",
  "Accessories",
];

function Shop() {

  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState(200000);
  const [sort, setSort] = useState("popular");
  const [loading, setLoading] = useState(true);

  // FETCH PRODUCTS

  useEffect(() => {

    const fetchProducts = async () => {

      try {

        const res = await fetch(`${API}/api/products`);

        if (!res.ok) {
          throw new Error(`Server error: ${res.status}`);
        }

        const data = await res.json();

        // Normalize API response
        const productList = Array.isArray(data)
          ? data
          : data.products || [];

        setProducts(productList);

      } catch (err) {

        console.error("Products API error:", err);
        setProducts([]);

      } finally {

        setLoading(false);

      }

    };

    fetchProducts();

  }, []);

  // ADD TO CART

  const addToCart = async (product) => {

    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      alert("Please login first");
      return;
    }

    try {

      const res = await fetch(`${API}/api/cart/add`, {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          userId: user.id,
          product,
        }),

      });

      if (!res.ok) {
        throw new Error("Cart API error");
      }

      alert("Added to cart");

    } catch (err) {

      console.error(err);
      alert("Cart error");

    }

  };

  // FILTER PRODUCTS

  let filteredProducts = (products || []).filter((product) => {

    const categoryMatch =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    const priceMatch = product.price <= priceRange;

    return categoryMatch && priceMatch;

  });

  // SORT PRODUCTS

  if (sort === "priceLow") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  }

  if (sort === "priceHigh") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }

  return (

    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex justify-between items-center mb-6">

          <div>
            <h1 className="text-3xl font-bold">Shop</h1>
            <p className="text-gray-500">
              {filteredProducts.length} products found
            </p>
          </div>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border rounded-lg px-4 py-2 text-gray-600"
          >
            <option value="popular">Most Popular</option>
            <option value="priceLow">Price: Low → High</option>
            <option value="priceHigh">Price: High → Low</option>
          </select>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* SIDEBAR */}

          <div className="space-y-8">

            <div>

              <h3 className="font-semibold mb-4">Category</h3>

              <ul className="space-y-3">

                {categories.map((cat) => (

                  <li
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`cursor-pointer ${
                      selectedCategory === cat
                        ? "text-green-600 font-medium"
                        : "text-gray-600"
                    }`}
                  >
                    {cat}
                  </li>

                ))}

              </ul>

            </div>

            <div>

              <h3 className="font-semibold mb-4">Price Range</h3>

              <input
                type="range"
                min="0"
                max="200000"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full accent-green-500"
              />

              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>₹0</span>
                <span>₹{priceRange.toLocaleString()}</span>
              </div>

            </div>

          </div>

          {/* PRODUCTS */}

          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {loading && (
              <p className="text-gray-500">Loading products...</p>
            )}

            {!loading && filteredProducts.length === 0 && (
              <p className="text-gray-500">No products found</p>
            )}

            {filteredProducts.map((product) => (

              <div
                key={product.id}
                className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden group"
              >

                {/* IMAGE */}

                <div className="relative">

                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-56 w-full object-cover"
                  />

                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                      {product.badge}
                    </span>
                  )}

                  {product.discount && (
                    <span className="absolute top-3 right-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                      {product.discount}
                    </span>
                  )}

                  {/* ADD TO CART */}

                  <div className="absolute bottom-4 left-0 w-full flex justify-center opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-300">

                    <button
                      onClick={() => addToCart(product)}
                      className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full flex items-center gap-2 shadow"
                    >
                      <FiShoppingCart />
                      Add to Cart
                    </button>

                  </div>

                </div>

                {/* PRODUCT INFO */}

                <div className="p-5 space-y-2">

                  <p className="text-sm text-gray-400">
                    {product.category}
                  </p>

                  <h3 className="font-semibold text-lg text-gray-800">
                    {product.title}
                  </h3>

                  <div className="flex items-center gap-1 text-sm text-gray-500">

                    <FiStar className="text-yellow-400" />

                    <span>
                      {product.rating} ({product.reviews})
                    </span>

                  </div>

                  <div className="flex items-center gap-3">

                    <span className="font-bold text-lg">
                      ₹{product.price.toLocaleString()}
                    </span>

                    {product.oldPrice && (
                      <span className="text-gray-400 line-through">
                        ₹{product.oldPrice.toLocaleString()}
                      </span>
                    )}

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      <Footer />

    </>
  );

}

export default Shop;
