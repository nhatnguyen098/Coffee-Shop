import React from "react";
import ProductList from "../../components/pages/productList/productPage";
import { fetching_product } from "../../redux/actions/products";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
const Index = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetching_product());
  }, [dispatch]);
  const { data } = useSelector((state: any) => state.products);
  return (
    <ProductList
      proList={data}
      onGetProId={(val) => history.push(`/product/${val}`)}
    />
  );
};

export default Index;
