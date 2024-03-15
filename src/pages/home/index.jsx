import React from "react";
import Product from "../../shared/components/product";
import HeroSlider from "../../shared/components/heroSlider";
import Heading from "../../shared/common/Heading";
const Home = () => {
  return (
  
     <div className="dark:text-dark dark:bg-dark">
       <HeroSlider />
       <Heading/>
       <Product />
     </div>

  );
};

export default Home;
