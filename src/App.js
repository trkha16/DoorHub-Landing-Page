import About from "./layout/About";
import CTA from "./layout/CTA";
import FoodType from "./layout/FoodType";
import Header from "./layout/Header";
import Hero from "./layout/Hero";
import Order from "./layout/Order";
import Popular from "./layout/Popular";

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
        </div>
    );
}

export default App;
