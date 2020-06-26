import React from "react";
import Navbar from "../../molecules/navbar";
import Carousel from "../../molecules/carouselHome";
import {useDispatch,useSelector} from 'react-redux'
import {fetching_cart,delete_cart} from '../../../redux/actions/cart'
const Index = () => {
  const dispatch = useDispatch();
  const {data} = useSelector((state:any) => state.carts)
  React.useEffect(() => {
    dispatch(fetching_cart())
  },[dispatch])
  return (
    <section style = {{position:'relative'}}>
      <Navbar cartData = {data} onDeleteCart = {(id:any) => dispatch(delete_cart(id))}/>
      <Carousel />
    </section>
  );
};

export default Index;
