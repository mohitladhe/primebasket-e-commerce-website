import { FaLaptop, FaTshirt, FaAppleAlt, FaHome, FaStar } from "react-icons/fa";

function Categories() {

  const categories = [
    { icon: <FaLaptop />, name: "Electronics", items: 156 },
    { icon: <FaTshirt />, name: "Fashion", items: 243 },
    { icon: <FaAppleAlt />, name: "Groceries", items: 89 },
    { icon: <FaHome />, name: "Home & Kitchen", items: 178 },
    { icon: <FaStar />, name: "Beauty", items: 134 },
  ];

  return (
    <section className="bg-gray-50 py-16">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center">
          Shop by Category
        </h2>

        <p className="text-gray-500 text-center mt-2">
          Browse our curated collections and find exactly what you need.
        </p>

        <div className="grid md:grid-cols-5 gap-6 mt-10">

          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition text-center"
            >
              <div className="text-3xl text-green-500 mb-3 flex justify-center">
                {cat.icon}
              </div>

              <h3 className="font-semibold">{cat.name}</h3>
              <p className="text-sm text-gray-500">
                {cat.items} items
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Categories