import React from "react";
import HomePage from "../../components/pages/homePage/homePage";
import { useDispatch, useSelector } from "react-redux";
import { fetching_product } from "../../redux/actions/products";
import { useHistory } from "react-router-dom";

const Index = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { data, loading } = useSelector((state: any) => state.products);
  React.useEffect(() => {
    dispatch(fetching_product());
  }, [dispatch]);
  return (
    <HomePage
      data={data}
      loading={loading}
      getIdToDetail={(val: any) => history.push(`/product/${val}`)}
    />
  );
};

export default Index;
