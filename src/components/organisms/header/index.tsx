import React from "react";
import Navbar from "../../molecules/navbar";
import Carousel from "../../molecules/carouselHome";
const Index = ({
  displayModal,
  changeDisplayModal,
  cartData,
  onDeleteCart,
}: any) => {
  return (
    <section style={{ position: "relative" }}>
      <Navbar
        cartData={cartData}
        onDeleteCart={(id: any) => onDeleteCart(id)}
        displayModal={displayModal}
        changeDisplayModal={(val: any) => changeDisplayModal(val)}
      />
      <Carousel />
    </section>
  );
};

export default Index;
