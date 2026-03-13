import { FaTruck, FaShieldAlt, FaUndo, FaHeadset } from "react-icons/fa";

function Features() {

  const features = [
    {
      icon: <FaTruck />,
      title: "Free Shipping",
      desc: "On orders over $50"
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Payment",
      desc: "100% protected"
    },
    {
      icon: <FaUndo />,
      title: "Easy Returns",
      desc: "30-day returns"
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      desc: "Always available"
    }
  ]

  return (
    <section className="bg-gray-50 py-16">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6">

        {features.map((feature,index)=>(
          <div
            key={index}
            className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition"
          >

            <div className="text-green-500 text-3xl flex justify-center mb-4">
              {feature.icon}
            </div>

            <h3 className="font-semibold text-lg">
              {feature.title}
            </h3>

            <p className="text-gray-500 text-sm mt-1">
              {feature.desc}
            </p>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Features