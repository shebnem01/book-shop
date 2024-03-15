import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/config";

useFormik;
const Register = () => {
  const navigate=useNavigate();
  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        cPassword: "",
      },
      validationSchema: Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string().required('Password is required').min(8, "Password must be at least 8 characters")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
          "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"
        ),
        cPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
      }),
      onSubmit: () => {
        const { email, password } = values; 
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            navigate("/admin")
          })
          .catch((error) => {
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
              Register
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
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
                {touched.email && errors.email ? (
                  <div className="text-red-500 text-sm my-2">
                    {errors.email}
                  </div>
                ) : null}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 
                sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 
                block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
                {touched.password && errors.password ? (
                  <div className="text-red-500 text-sm my-2">
                    {errors.password}
                  </div>
                ) : null}
              </div>
              <div>
                <label
                  htmlFor="cPassword"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm Password
                </label>
                <input
                  onChange={handleChange}
                  value={values.cPassword}
                  onBlur={handleBlur}
                  type="password"
                  name="cPassword"
                  id="cPassword"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 
                sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 
                block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
                {touched.cPassword && errors.cPassword ? (
                  <div className="text-red-500 text-sm my-2">
                    {errors.cPassword}
                  </div>
                ) : null}
              </div>

              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4  bg-blue-500
              focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 
              text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Register
              </button>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already an account?
                <Link
                  to="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
