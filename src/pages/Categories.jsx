import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Categories(){

return(

<>
<Navbar/>

<div className="max-w-7xl mx-auto px-6 py-16 text-center">

<h1 className="text-3xl font-bold mb-4">
Categories
</h1>

<p className="text-gray-500">
Browse products by category
</p>

</div>

<Footer/>
</>

);

}

export default Categories;