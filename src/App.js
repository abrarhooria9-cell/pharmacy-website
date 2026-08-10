import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Products from "./components/Products";
import WhyChooseUs from "./components/WhyChooseUs";
import About from "./components/About";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar cartCount={0} />

      <Hero />

      <Categories />

      <Products />

      <WhyChooseUs />

      <About />

      <Newsletter />

      <Footer />
    </div>
  );
}

export default App;