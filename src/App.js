import About from "./layout/About";
import Blog from "./layout/Blog";
import CTA from "./layout/CTA";
import FoodType from "./layout/FoodType";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Hero from "./layout/Hero";
import Order from "./layout/Order";
import Popular from "./layout/Popular";
import Subcribe from "./layout/Subcribe";
import Testimonials from "./layout/Testimonials";

function App() {
    return (
        <div>
            <Header></Header>
            <Hero></Hero>
            <FoodType></FoodType>
            <Order></Order>
            <Popular></Popular>
            <About></About>
            <CTA></CTA>
            <Testimonials></Testimonials>
            <Blog></Blog>
            <Subcribe></Subcribe>
            <Footer></Footer>
        </div>
    );
}

export default App;
