import React from "react";
import { Route, Routes } from "react-router-dom";
import routeConfig from "./route-config";

function WebRoutes(/* {authStore} */) {
  const { routes } = routeConfig;

  return (
      <Routes>
        {routes.map((route, i) => {
          const { component, path } = route;
          return (
            <Route path={path} Component={component} key={i}/>
          );
        })}
      </Routes>
  );
}

export default WebRoutes;
