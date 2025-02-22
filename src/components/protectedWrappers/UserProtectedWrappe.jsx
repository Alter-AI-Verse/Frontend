import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const UserProtectedWrapper = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const navigate = useNavigate();
  const hasChecked = useRef(false); 

  useEffect(() => {
    console.log("Checking token:", token);
    if (!token && !hasChecked.current) {
      hasChecked.current = true;
      navigate("/signin");
    }
  }, [token, navigate]);

  return token ? <>{children}</> : null;
};

export default UserProtectedWrapper;
