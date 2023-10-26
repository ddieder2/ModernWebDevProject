import React, { useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { checkUser } from "../Auth/AuthService";

// You can pass props using the spread operator to throw them on an object if there are too many to break out
const ProtectedRoute = ({ element: Component, ...rest }) => {
  console.log("element: ", Component);
  const navigate = useNavigate();
  // const goBackHandler = () => {
  //   navigate("/auth");
  // };

  // flags in the state to watch for add/remove updates
  // const [goBack, setGoBack] = useState(false);

  // // redirect already authenticated users back to home
  // useEffect(() => {
  //   if (goBack) {
  //     alert("You are not logged in");
  //     setGoBack(false);
  //     navigate("/auth");
  //   }
  // }, [goBack, navigate]);
  
  if (checkUser()) {
    return <Component />;
  } else {
    // setGoBack(true);
    return <Navigate to="/auth" replace />;
  }
};

export default ProtectedRoute;
