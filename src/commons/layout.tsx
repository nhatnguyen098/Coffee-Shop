import React from "react";
import Header from "../components/organisms/header";
import Footer from "../components/organisms/footer";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { toastError } from "../helpers/toastHellper";
interface LayoutProps {
  children: JSX.Element[] | JSX.Element;
  auth?: boolean;
  className?: string;
}
const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => {
  const { error } = useSelector((state: any) => state.products);
  React.useEffect(() => {
    toastError(error);
  }, [error]);
  return (
    <React.Fragment>
      <Header />
      <Container fluid style = {{padding:0,margin:0}}>{children}</Container>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
