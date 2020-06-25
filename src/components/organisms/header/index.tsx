import React from "react";
import Navbar from "../../molecules/navbar";
import Carousel from "../../molecules/carouselHome";
const Index = () => {
  return (
    <section style = {{position:'relative'}}>
      <Navbar />
      <Carousel />
    </section>
  );
};

export default Index;
