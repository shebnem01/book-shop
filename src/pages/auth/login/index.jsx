import { signInWithEmailAndPassword } from "firebase/auth";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../firebase/config";
import * as Yup from "yup";
const Login = () => {
  const [passwordError, setPasswordError] = useState(null);
  const navigate = useNavigate();
  const { values, handleSubmit, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: () => {
        const { email, password } = values;
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            navigate("/admin");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if (errorCode === "auth/invalid-credential") {
              setPasswordError("Şifre ve ya email yalnış girildi");
            }
            {
            }
          });
      },
      validationSchema: Yup.object({
        email: Yup.string()
          .email("Please enter a valid email address")
          .required("Email is required"),
        password: Yup.string().required("Password is required"),
      }),
    });
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div
          className="w-full bg-white rounded-lg shadow dark:border
         md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
        >
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1
              className="text-xl font-bold leading-tight tracking-tight
             text-gray-900 md:text-2xl dark:text-white"
            >
              Login
            </h1>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300
                   text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600
                    focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700
                     dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                      dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
                {errors.email && touched.email && (
                  <div className="text-red-500 text-sm mt-2">
                    {errors.email}
                  </div>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  value={values.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  name="password"
                  id="password"
                  placeholder=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 
                  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 
                  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                   dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
                {errors.password && touched.password && (
                  <div className="text-red-500 text-sm">{errors.password}</div>
                )}
                {passwordError && (
                  <div className="text-red-500 text-sm">{passwordError}</div>
                )}
              </div>

              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4  bg-blue-500
                focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 
                text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>

              <div className="flex items-center justify-between">
                <Link
                  to="/reset"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 text-blue-500"
                >
                  Forgot password?
                </Link>
              </div>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  to="/register"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
