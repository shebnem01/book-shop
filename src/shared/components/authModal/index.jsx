import { TfiClose } from "react-icons/tfi";
import useToggle from "../../../hooks/useToggle";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useFormik } from "formik";
import React, { useState } from "react";
import { auth } from "../../../firebase/config";
import * as Yup from "yup";
import CustomButton from "../../common/CustomButton";
import CustomInput from "../../common/CustomInput";
const AuthModal = ({ hideModal }) => {
  const [passwordError, setPasswordError] = useState(null);
  const {
    values,
    handleSubmit,
    handleChange,
    handleBlur,
    touched,
    errors,
    isValid,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: () => {
      const { email, password } = values;
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          toggle();
          console.log(isValid);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode === "auth/invalid-credential") {
            setPasswordError("Password or email entered incorrectly");
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
  const [toggle] = useToggle();
  return (
    <div className="fixed top-0 right-0 bg-white z-50 h-screen flex flex-col p-8 shadow w-[400px]">
      <div
        className="absolute top-8 right-8 cursor-pointer"
        onClick={hideModal}
      >
        <TfiClose size={30} />
      </div>
      <div className="mt-44 mb-5 text-capitalize text-2xl font-medium leading-9 text-center text-red-600">
        Sign in
      </div>
      <form onSubmit={handleSubmit}>
        <CustomInput
          placeholder="Email"
          name="email"
          type="email"
          error={errors.email}
          touch={touched.email}
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <CustomInput
          placeholder="Password"
          name="password"
          type="password"
          error={errors.password}
          touch={touched.password}
          value={values.password}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <div className="mb-6">
          <CustomButton title="Sign in" type="submit" disabled={!isValid} />
        </div>
        <div className="flex flex-col items-center">
          <span>
            <span className="text-gray-600 font-light text-sm leading-5 inline-block mb-2">
              forget password?
            </span>
          </span>
          <span className="text-gray-600 font-light text-sm leading-5 inline-block mb-2">
            Don't have an account ?
            <span className="cursor-pointer text-red-500">Sign Up </span>
          </span>
        </div>
      </form>
    </div>
  );
};
export default AuthModal;
