// import React from 'react'

// import Filter from "../../components/filter/Filter";
import HeroSection from "../../components/heroSection/HeroSection";
import ProductCard from "../../components/productCard/ProductCard";
import Testimonial from "../../components/testimonials/Testimonials";
// import { useSelector } from "react-redux";
// import { addToCart, deleteFromCart } from "../../redux/cartSlice";

const Home = () => {
  // const cartItem = useSelector((state) => state.cart);

  // console.log(cartItem);

  // const addCart = () => {
  //   dispatch(addToCart("pant"));
  // };
  // const deleteCart = () => {
  //   dispatch(deleteFromCart("pant"));
  // };

  return (
    <div>
      {/* <div className="flex gap-3">
        <button onClick={() => addCart()}>Add</button>
        <button onClick={() => deleteCart()}>Del</button>
      </div> */}

      <HeroSection />
      {/* <Filter /> */}
      <ProductCard />
      <Testimonial />
    </div>
  );
};

export default Home;
