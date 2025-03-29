import Landing from "../components/Landing/Landing";
import NavBar from "../components/NavBar/NavBar";
import Features from "../components/Features/Features";
import Footer from "../components/Footer/Footer";
import Product from "../components/Product/Product";
import State from "../wireropemanufacturers/page";



const HomePage = () => {
  return (
    <div>
       <NavBar/>
       <Landing/>
       <Features/>
       <Product/>
       <Footer/>
       <State/>
    </div>
  );
}

export default HomePage;
