import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "../HOCs/privateRoute";
export const mapRouteMenu = (val:any) => {
  var rs = null;
  if (val.length > 0) {
    rs = val.map((item:any, index:number) => {
      return !item.private ? (
        <Route
          key={index}
          path={item.path}
          exact={item.exact}
          component={item.main}
        />
      ) : (
        <PrivateRoute
          key={index}
          path={item.path}
          exact={item.exact}
          component={item.main}
        />
      );
    });
  }
  return rs;
};
