import React from "react";
import "./Authentication.css";
import { useFormik } from "formik";
import { registerSchema } from "../../schema/schema_index";
import { useNavigate } from "react-router-dom";
import * as routes from "../../constants/routes";
import { useAuth } from "../../context/AuthContext";

function SignUpPage() {
  const { signUp } = useAuth();
  const navigate = useNavigate();
  // let location = useLocation();
  // let from = location.state?.from?.pathname || routes.HOME;

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
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerSchema,
    onSubmit: async (values, actions) => {
      try {
        const res = await signUp(values.email, values.password, values);
        console.log("user is registered");
        console.log(res);
      } catch (error) {
        console.log(error.message);
      }
      actions.resetForm();
      navigate(routes.HOME, { replace: true });
    },
  });
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
          <div className="mb-3">
            <label htmlFor="firstName">Full Name</label>
            <input
              id="firstName"
              type="text"
              className={
                errors.firstName && touched.firstName
                  ? "form-control input-error"
                  : "form-control"
              }
              placeholder="First name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.firstName}
            />
            {errors.firstName && touched.firstName && (
              <p className="error">{errors.firstName}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              type="text"
              className={
                errors.lastName && touched.lastName
                  ? "form-control input-error"
                  : "form-control"
              }
              placeholder="Last name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.lastName}
            />
            {errors.lastName && touched.lastName && (
              <p className="error">{errors.lastName}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              className={
                errors.email && touched.email
                  ? "form-control input-error"
                  : "form-control"
              }
              placeholder="Enter email"
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
              id="password"
              type="password"
              className={
                errors.password && touched.password
                  ? "form-control input-error"
                  : "form-control"
              }
              placeholder="Enter password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
            />
            {errors.password && touched.password && (
              <p className="error">{errors.password}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              className={
                errors.confirmPassword && touched.confirmPassword
                  ? "form-control input-error"
                  : "form-control"
              }
              placeholder="Enter password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.confirmPassword}
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <p className="error">{errors.confirmPassword}</p>
            )}
          </div>
          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-danger"
              disabled={isSubmitting}
            >
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <a href="/sign-in">sign in?</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
