import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { checkUser } from "./AuthService";

const AuthModule = () => {
  const navigate = useNavigate();

  // redirect already authenticated users back to home
  useEffect(() => {
    if (checkUser()) {
      alert("You are already logged in");
      navigate("/");
    }
  }, [navigate]);

  return (
    <div>
      <div className="card border-dark mx-auto">
        <div className="card-body text-center">
          <h1 className="text-center">College Guessing Game</h1>
          <Link to="/auth/register">
            <button className="text-center btn btn-dark upper-margin">Register</button>
          </Link>
          <br/>
          <Link to="/auth/login">
            <button className="mx-auto btn btn-dark upper-margin">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthModule;
