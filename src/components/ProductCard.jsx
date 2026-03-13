function ProductCard({ image, category, title, price, oldPrice, rating }) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden">

      <img src={image} className="w-full h-56 object-cover"/>

      <div className="p-4">

        <p className="text-sm text-gray-500">{category}</p>

        <h3 className="font-semibold mt-1">
          {title}
        </h3>

        <div className="text-sm text-yellow-500 mt-1">
          ⭐ {rating}
        </div>

        <div className="mt-2 flex gap-2 items-center">

          <span className="font-bold text-lg">
            ${price}
          </span>

          <span className="line-through text-gray-400 text-sm">
            ${oldPrice}
          </span>

        </div>

      </div>
    </div>
  )
}

export default ProductCard