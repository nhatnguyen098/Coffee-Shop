import React, { useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";
import { NavbarMenu } from "../../../constants/routes";
import { Route, Link } from "react-router-dom";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { FaUserCircle } from "react-icons/fa";
import ModalUser from "../modalUser";
import { useSelector } from "react-redux";
import "./style.scss";
interface INavMenu {
  id: number;
  label: string;
  path: string;
  activeOnlyWhenExact: boolean;
  children: any;
  private: boolean;
  main: () => void
}

const popover = (
  <Popover
    style={{ backgroundColor: `#c49b63`, color: "black" }}
    id="popover-basic"
  >
    <Popover.Title
      className="text-center"
      style={{ backgroundColor: `#c49b63` }}
      as="h3"
    >
      <strong>User Profile</strong>
    </Popover.Title>
    <Popover.Content style={{ color: "black" }}>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
    </Popover.Content>
  </Popover>
);

const Index = () => {
  const owlClass = "navWrapper";
  const [showDropDown, setShowDropDown] = useState(-1);
  const [bgNav, setBgNav] = useState("");
  const [modalShow, setModalShow] = useState<boolean>(false);
  const { token } = useSelector((state: any) => state.users.data);

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y <= -100) {
      setBgNav("#151111");
    }
    if (currPos.y > -100) {
      setBgNav("");
    }
  });

  const scrollTop = (id:number) => {
    window.scrollTo({
      top: id === 1 ? 0 : 800,
      behavior: "smooth",
    });
  };

  const RenderNavItem = ({
    menuItem,
    className,
  }: {
    menuItem: INavMenu;
    className: string;
  }) => {
    let xhtml = null;
    let { id, label, path, children } = menuItem;
    let status = showDropDown === id ? true : false;
    xhtml =
      children.length > 0 ? (
        <NavDropdown
          id="nav-dropdown"
          title={label}
          className={`${owlClass}-nav-drop ml-3 mr-3 ${className}`}
          size="16px"
          onMouseOver={() => setShowDropDown(id)}
          onMouseOut={() => setShowDropDown(-1)}
          active={status}
          show={status}
        >
          {children.map((child: any, index: number) => {
            return (
              <Link
                className={`${owlClass}-nav-drop-item nav-link ${className}`}
                key={index}
                onClick={() => scrollTop(child.id)}
                to={child.path}
              >
                {child.childLabel}
                <span className="sr-only">(current)</span>
              </Link>
            );
          })}
        </NavDropdown>
      ) : (
        <Link
          key={id}
          className={`${owlClass}-nav-drop ml-3 mr-3 nav-link ${className}`}
          onClick={() => scrollTop(id)}
          to={path}
        >
          <strong>{label}</strong>
          <span className="sr-only">(current)</span>
        </Link>
      );

    return xhtml;
  };
  const mapContentRoutes = (navArr: any) => {
    let xhtml = null;
    if (navArr.length > 0) {
      xhtml = navArr.map(
        (item: any, index: number) =>
          item.label !== undefined && (
            <Route
              key={index}
              path={item.path}
              exact={item.activeOnlyWhenExact}
              children={({ match }: { match: any }) => (
                <RenderNavItem
                  key={index}
                  menuItem={item}
                  className={match ? "active" : ""}
                />
              )}
            />
          )
      );
    }
    return xhtml;
  };
  return (
    <Navbar
      expand="lg"
      className={`${owlClass}`}
      style={{ background: bgNav, transition: "0.5s" }}
    >
      <Link
        to="/"
        className="d-flex justify-content-end align-items-center w-25"
        style={{ textDecoration: "unset" }}
        onClick = {() => scrollTop(1)}
      >
        {" "}
        <Navbar.Brand style={{ color: "white" }}>Coffee Home</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className={`${owlClass}-nav mr-auto`}>
          {mapContentRoutes(NavbarMenu)}
          <Nav.Item>
            {token ? (
              <OverlayTrigger
                trigger="click"
                placement="bottom"
                overlay={popover}
              >
                <FaUserCircle size="1.5em" color="white" />
              </OverlayTrigger>
            ) : (
              <Nav.Link onClick={() => setModalShow(true)}>
                <FaUserCircle size="1.5em" color="white" />
              </Nav.Link>
            )}
            <ModalUser show={modalShow} onHide={() => setModalShow(false)} />
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Index;
