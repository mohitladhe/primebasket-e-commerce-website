function Footer() {

  return (
    <footer className="bg-slate-900 text-gray-400 pt-16 pb-10">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-10">

        {/* Logo Section */}
        <div>

          <div className="flex items-center gap-2 text-white text-lg font-semibold">
            <div className="bg-green-500 w-8 h-8 rounded-full flex items-center justify-center">
              P
            </div>
            PrimeBasket
          </div>

          <p className="mt-4 text-sm">
            Your one-stop shop for premium products at great prices.
          </p>

        </div>


        {/* Shop */}
        <div>
          <h4 className="text-white font-semibold mb-3">Shop</h4>

          <ul className="space-y-2">
            <li>All Products</li>
            <li>Electronics</li>
            <li>Fashion</li>
            <li>Home & Kitchen</li>
          </ul>
        </div>


        {/* Company */}
        <div>
          <h4 className="text-white font-semibold mb-3">Company</h4>

          <ul className="space-y-2">
            <li>About Us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Blog</li>
          </ul>
        </div>


        {/* Support */}
        <div>
          <h4 className="text-white font-semibold mb-3">Support</h4>

          <ul className="space-y-2">
            <li>Help Center</li>
            <li>Returns</li>
            <li>Shipping</li>
            <li>Contact</li>
          </ul>
        </div>


        {/* Legal */}
        <div>
          <h4 className="text-white font-semibold mb-3">Legal</h4>

          <ul className="space-y-2">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookie Policy</li>
          </ul>
        </div>

      </div>


      {/* Copyright */}

      <div className="text-center text-sm text-gray-500 mt-10">
        © 2026 PrimeBasket. All rights reserved.
      </div>

    </footer>
  )
}

export default Footer