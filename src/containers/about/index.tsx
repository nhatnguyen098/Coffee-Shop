import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {add_new_product} from '../../redux/actions/products'
const Index = () => {
  const [product, setProduct] = useState({
    id: Date.now(),
    name: "",
    imageUrl: "",
    price: 0,
  });
  const dispatch = useDispatch();
  const onSubmitForm = (event: any) => {
    event.preventDefault();
    dispatch(add_new_product(product))
  };
  return (
    <React.Fragment>
      <form>

        <input
          onChange={(event: any) =>
            setProduct({ ...product, name: event.target.value })
          }
        />
        <input
          onChange={(event: any) =>
            setProduct({ ...product, imageUrl: event.target.value })
          }
        />
        <input
          type="number"
          onChange={(event: any) =>
            setProduct({ ...product, price: Number(event.target.value) })
          }
        />
        <button onClick = {(e:any) => onSubmitForm(e)}>Submit</button>
      </form>
    </React.Fragment>
  );
};

export default Index;
