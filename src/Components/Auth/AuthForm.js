import React from "react";

const AuthForm = ({ user, isLogin, onChange, onSubmit }) => {
  return (
    <div className="card border-dark mx-auto">
      <form onSubmit={onSubmit} autoComplete="off">
      <div className="card-body">
      {!isLogin ? (
        <div>
          <h1 className="text-center">Register</h1>
          <div className="form-group">
            <label>First Name</label>
            <br />
            <input
              type="text"
              className="form-control full"
              id="first-name-input"
              value={user.firstName}
              onChange={onChange}
              name="firstName"
              required
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <br />
            <input
              type="text"
              className="form-control full"
              id="last-name-input"
              value={user.lastName}
              onChange={onChange}
              name="lastName"
              required
            />
          </div>{" "}
        </div>
      ) : (
        <h1 className="text-center">Login</h1>
      )}
      <div>
        <div className="form-group">
          <label>Email</label>
          <br />
          <input
            type="email"
            className="form-control full"
            id="email-input"
            value={user.email}
            onChange={onChange}
            name="email"
            data-test="email-input"
            required
          />
        </div>{" "}
        <div className="form-group">
          <label>Password</label>
          <br />
          <input
            type="password"
            className="form-control full"
            id="password-input"
            value={user.password}
            onChange={onChange}
            name="password"
            min="0"
            data-test="password-input"  
            required
          />
        </div>
        <div className="text-center form-group">
          <button type="submit" className="btn btn-dark upper-margin" onSubmit={onSubmit}>
            Submit
          </button>
        </div>
      </div>
      </div>
    </form>
    </div>
  );
};

export default AuthForm;
