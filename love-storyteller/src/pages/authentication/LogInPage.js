import React from "react";
import "./Authentication.css";
import { useFormik } from "formik";
import { loginSchema } from "../../schema/schema_index";
import { useAuth } from "../../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import * as routes from "../../constants/routes";

function LogInPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || routes.HOME;
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values, actions) => {
      try {
        login(values.email, values.password);
        console.log("user is loggedIn");
        navigate(from, { replace: true });
      } catch (error) {
        console.log(error.message);
      }
      actions.resetForm();
      
    },
  });
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign In</h3>
          <div className="mb-3">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              className={
                errors.email && touched.email
                  ? "form-control input-error"
                  : "form-control"
              }
              placeholder="Enter email"
              id="email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
            />
            {errors.email && touched.email && (
              <p className="error">{errors.email}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className={
                errors.password && touched.password
                  ? "form-control input-error"
                  : "form-control"
              }
              placeholder="Enter password"
              id="password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
            />
            {errors.password && touched.password && (
              <p className="error">{errors.password}</p>
            )}
          </div>
          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              &nbsp;
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>
          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-danger"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </div>
          <p className="forgot-password text-right">
            Forgot <a href="#!">password?</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LogInPage;
