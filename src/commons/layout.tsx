import React from "react";
import Header from "../components/organisms/header";
import Footer from "../components/organisms/footer";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { toastError } from "../helpers/toastHellper";
import bg_4 from "../assets/images/bg_4.jpg";
interface LayoutProps {
  children: JSX.Element[] | JSX.Element;
  auth?: boolean;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => {
  const proError = useSelector((state: any) => state.products.error);
  const userError = useSelector((state: any) => state.users.error);
  // const scrollToRef = (ref:any) => window.scrollTo({top:ref.current.offsetTop,behavior:'smooth'})
  // const myRef = React.useRef(null)
  React.useEffect(() => {
    toastError(proError);
    toastError(userError);
  }, [proError, userError]);
  // React.useEffect(() => scrollToRef(myRef),[])
  return (
    <section
      style={{
        background: `url(${bg_4})`,
      }}
    >
      <Header />
      <Container fluid style={{ padding: 0, margin: 0 }}  >
        {children}
      </Container>
      <Footer />
    </section>
  );
};

export default Layout;
