import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";
import { DocumentContext } from "../../Contexts/DocumentContext";

const ProtectedRoutesAddEvent = ({ children }) => {
  console.log(localStorage.getItem("role"));
  if (localStorage.getItem("role") === "student") {
    return <Navigate to="/events" replace={true} />;
  }

  return <>{children}</>;
};

export default ProtectedRoutesAddEvent;
