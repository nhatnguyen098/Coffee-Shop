import React from "react";
import Loading from "../../atoms/loading";

const Index = () => {
  return (
    <section style={{ margin: "100px", textAlign: "center" }}>
      <h2 className="m-5 text-secondary">Login account to continue coffee</h2>
      <Loading />
    </section>
  );
};

export default Index;
