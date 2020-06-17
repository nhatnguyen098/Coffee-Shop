import React from "react";
import { Route, Redirect } from "react-router-dom";
const PrivateRoute = ({ component: RouteComponent, ...rest}: any) => {
  const token = localStorage.getItem('token')
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!token ? (
          <RouteComponent {...routeProps}/>
        ) : (
          <Redirect to={{
            pathname:"/login",
            state: {from:routeProps.location}
          }} />
        )
      }
    ></Route>
  );
};

export default PrivateRoute;