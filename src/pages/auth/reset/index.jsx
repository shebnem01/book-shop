import { sendPasswordResetEmail } from "firebase/auth";
import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../../firebase/config";
import * as Yup from "yup";
const Reset = () => {
  const { handleBlur, handleSubmit, handleChange, values, touched, errors } =
    useFormik({
      initialValues: {
        email: "",
      },
      validationSchema: Yup.object({
        email: Yup.string()
          .email("Please enter a valid email address")
          .required("Email is required"),
      }),
      onSubmit: () => {
        const { email } = values;
        sendPasswordResetEmail(auth, email)
          .then(() => {  console.log("error");})
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error);
          });
      },
     
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
              Reset password
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300
               text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600
                focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700
                 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                />
                {touched.email && errors.email && (
                  <div className="text-red-500 text-sm mt-3">
                    {errors.email}
                  </div>
                )}
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4  bg-blue-500
            focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 
            text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Reset passsword
              </button>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400 flex items-center justify-between">
                <Link
                  to="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login
                </Link>
                <Link
                  to="/login"
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

export default Reset;
