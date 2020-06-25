import React, { lazy, Suspense } from "react";
import { Tab, Row, Col, Nav } from "react-bootstrap";
import Loading from "../../atoms/loading";
const SignIn = lazy(() => import("../../../containers/login"));
const SignUp = lazy(() => import("../../../containers/signUp"));
const Index = () => {
  const [key, setKey] = React.useState("SignIn");
  return (
    <Tab.Container
      id="left-tabs-example"
      defaultActiveKey="SignIn"
      activeKey={key}
      onSelect={(key: any) => setKey(key)}
    >
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="SignIn">Sign In</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="SignUp">Sign Up</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="SignIn">
              <Suspense fallback={<Loading />}>
                <SignIn />
              </Suspense>
            </Tab.Pane>
            <Tab.Pane eventKey="SignUp">
              <Suspense fallback={<Loading />}>
                <SignUp />
              </Suspense>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default Index;
