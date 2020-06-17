import React from "react";
import ContactInfo from "../molecules/contactInfo";
import AboutInfo from "../molecules/aboutInfo";
import ServiceInfo from "../molecules/serviceInfo";
import MenuHome from "../molecules/menuHome";
import CounterHome from "../molecules/counterHome";
import bg_4 from "../../assets/images/bg_4.jpg";
const HomePage = () => {
  return (
    <section style={{ backgroundImage: `url(${bg_4})`, paddingTop: "10px" }}>
      <ContactInfo />
      <AboutInfo />
      <ServiceInfo />
      <MenuHome />
      <CounterHome />
    </section>
  );
};

export default HomePage;
