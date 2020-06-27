import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { display_modal } from "../redux/actions/navbar";
const PrivateRoute = ({ component: RouteComponent, ...rest }: any) => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (token === null) {
      dispatch(display_modal(true));
    }
  }, [token, dispatch]);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!token ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect
            to={{
              pathname: "/waitLogin",
              state: { from: routeProps.location },
            }}
          />
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
