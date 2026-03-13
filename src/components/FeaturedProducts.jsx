import ProductCard from "./ProductCard"

function FeaturedProducts() {

  const products = [
    {
      image:"https://images.unsplash.com/photo-1518444065439-e933c06ce9cd",
      category:"Electronics",
      title:"Wireless Noise-Cancelling Headphones",
      price:"249.99",
      oldPrice:"349.99",
      rating:"4.8"
    },
    {
      image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
      category:"Electronics",
      title:"Ultra-Slim Laptop Pro 14",
      price:"1299.99",
      oldPrice:"1499.99",
      rating:"4.9"
    },
    {
      image:"https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b",
      category:"Accessories",
      title:"Smart Watch Series X",
      price:"399.99",
      oldPrice:"449.99",
      rating:"4.7"
    },
    {
      image:"https://images.unsplash.com/photo-1593032465175-481ac7f401a0",
      category:"Fashion",
      title:"Premium Leather Crossbody Bag",
      price:"189.99",
      oldPrice:"249.99",
      rating:"4.6"
    }
  ]

  return (
    <section className="py-16">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center">

          <div>
            <h2 className="text-3xl font-bold">
              Featured Products
            </h2>

            <p className="text-gray-500">
              Hand-picked products just for you.
            </p>
          </div>

          <button className="text-green-500">
            View all →
          </button>

        </div>

        <div className="grid md:grid-cols-4 gap-6 mt-10">

          {products.map((product,index)=>(
            <ProductCard key={index} {...product}/>
          ))}

        </div>

      </div>

    </section>
  )
}

export default FeaturedProducts