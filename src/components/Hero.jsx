function Hero() {
  return (
    <section className="bg-gray-50">

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}

        <div>

          <span className="inline-block bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm">
            ✨ New Collection 2026
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-6 leading-tight">
            Shop Smart.
            <br />
            <span className="text-green-500">Live Better.</span>
          </h1>

          <p className="text-gray-600 mt-6 max-w-lg">
            Discover premium products curated for your lifestyle. From cutting-edge tech to everyday essentials — all in one place.
          </p>

          {/* Buttons */}

          <div className="flex gap-4 mt-8">

            <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition">
              Shop Now →
            </button>

            <button className="bg-gray-200 px-6 py-3 rounded-lg font-medium">
              View Deals
            </button>

          </div>

          {/* Stats */}

          <div className="flex gap-12 mt-12">

            <div>
              <h3 className="text-2xl font-bold">50K+</h3>
              <p className="text-gray-500 text-sm">Products</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">100K+</h3>
              <p className="text-gray-500 text-sm">Customers</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">4.9</h3>
              <p className="text-gray-500 text-sm">Rating</p>
            </div>

          </div>

        </div>


        {/* RIGHT IMAGE */}

        <div className="relative">

          {/* Background Shape */}

          <div className="absolute -bottom-6 -right-6 w-full h-full bg-green-100 rounded-3xl"></div>

          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
            className="relative rounded-3xl shadow-lg"
          />

        </div>

      </div>

    </section>
  )
}

export default Hero