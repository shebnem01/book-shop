import { TfiClose } from "react-icons/tfi";
import { BsEye } from "react-icons/bs";
import { RiEyeCloseLine } from "react-icons/ri";
import useToggle from "../../../hooks/useToggle";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase/config";
import * as Yup from "yup";
import CustomButton from "../../common/CustomButton";
import { createUserWithEmailAndPassword } from "firebase/auth";
import CustomInput from "../../common/CustomInput";
const RegisterModal = ({ toggleRegister }) => {
  const [emailError, setEmailError] = useState(false);
  const navigate = useNavigate();
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    touched,
    errors,
    isValid,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      cPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
          "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"
        ),
      cPassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      ),
    }),
    onSubmit: () => {
      const { email, password } = values;
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/");
        })
        .catch((error) => {
          console.log(error.code);
          if (error.code === "auth/email-already-in-use")
            setEmailError("Email already in use");
        });
    },
  });
  const [state, toggle] = useToggle();
  return (
    <div className="fixed top-0 right-0 bg-white z-50 h-screen flex flex-col p-8 shadow w-[400px]">
      <div
        className="absolute top-8 right-8 cursor-pointer"
        onClick={toggleRegister}
      >
        <TfiClose size={30} />
      </div>
      <div className="mt-44 mb-5 text-capitalize text-2xl font-medium leading-9 text-center text-red-600">
        Sign up
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
        <CustomInput
          placeholder="Confirm Password"
          name="cPassword"
          type="password"
          error={errors.cPassword}
          touch={touched.cPassword}
          value={values.cPassword}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {emailError && <div className="text-red-500 text-sm">{emailError}</div>}

        <div className="mb-6">
          <CustomButton title="Sign up" type="submit" disabled={!isValid} />
        </div>
        <div className="flex flex-col items-center">
          <span>
            <span className="text-gray-600 font-light text-sm leading-5 inline-block mb-2">
              forget password?
            </span>
          </span>
          <span className="text-gray-600 font-light text-sm leading-5 inline-block mb-2">
            Do you have an account ?
            <span className="cursor-pointer text-red-500">Sign in </span>
          </span>
        </div>
      </form>
    </div>
  );
};

export default RegisterModal;
