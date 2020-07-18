import React from "react";
import Header from "../organisms/header";
import Footer from "../organisms/footer";
import { Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { toastError } from "../../helpers/toastHelper";
import { display_modal } from "../../redux/actions/navbar";
import { fetching_cart, delete_cart } from "../../redux/actions/cart";
import {sign_out} from '../../redux/actions/users'
import bg_4 from "../../assets/images/bg_4.jpg";

interface LayoutProps {
  children: JSX.Element[] | JSX.Element;
  auth?: boolean;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => {
  const dispatch = useDispatch();
  const proError = useSelector((state: any) => state.products.error);
  const userError = useSelector((state: any) => state.users.error);
  const cartError = useSelector((state: any) => state.carts.error);
  const { show } = useSelector((state: any) => state.navbar);
  const { data } = useSelector((state: any) => state.carts);
  const {token} = useSelector((state: any) => state.users.data);
  React.useEffect(() => {
    toastError(proError);
    toastError(userError);
    toastError(cartError);
  }, [proError, userError, cartError]);
  React.useEffect(() => {
    dispatch(fetching_cart());
  }, [dispatch]);
  return (
    <section
      style={{
        background: `url(${bg_4})`,
        opacity: show ? 0.98 : 1
      }}
    >
      <Header
        displayModal={show}
        changeDisplayModal={(val: any) => dispatch(display_modal(val))}
        cartData = {data}
        onDeleteCart = {(val:any) =>dispatch(delete_cart(val)) }
        onSignOut = {() => dispatch(sign_out())}
        token = {token}
      />
      <Container fluid style={{ padding: 0, margin: 0 }}>
        {children}
      </Container>
      <Footer />
    </section>
  );
};

export default Layout;
