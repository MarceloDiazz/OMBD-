import React from "react";
import { useDispatch } from "react-redux";
import { postUserRegister } from "../state/registration";
import { Link } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import { useHistory } from "react-router-dom";
import { useName, useEmail, usePassword } from "../hooks/validate/logger";

const Register = () => {
  const dispatch = useDispatch();
  const history = useHistory("");
  const { name, onChangeName, validateName } = useName();
  const { email, onChangeEmail, validateEmail } = useEmail();
  const { password, onChangePassword, validatePassword } = usePassword();

  const handleSumbit = (e) => {
    e.preventDefault();
    const passwordValidate = validatePassword();
    const emailValidate = validateEmail();
    const nameValidate = validateName();

    if (passwordValidate.error) return toast.error(passwordValidate.message);
    if (emailValidate.error) return toast.error(emailValidate.message);
    if (nameValidate.error) return toast.error(nameValidate.message);

    dispatch(
      postUserRegister({ name: name, email: email, password: password })
    ).then((data) => {
      if (data.type === "userRegister/fulfilled") {
        toast.success("Bienvenido!, redirigiendo...", {
          duration: 4000,
          position: "top-center",
        });
        setTimeout(() => {
          history.push("/login");
        }, 4000);
      } else if (data.type === "userRegister/rejected") {
        toast.error("Error Registro :( , verifica los campos", {
          duration: 4000,
          position: "top-center",
        });
      }
    });
  };

  return (
    <div className="h-screen  flex justify-center items-center">
      <div className="lg:w-2/5 md:w-1/2 w-2/3">
        <form
          onSubmit={handleSumbit}
          className="bg-white p-10 rounded-lg shadow-lg min-w-full"
        >
          <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">
            Register
          </h1>
          <div>
            <label
              className="text-gray-800 font-semibold block my-3 text-md"
              htmlFor="username"
            >
              Username
            </label>
            <input
              onChange={onChangeName}
              className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
              type="text"
              name="username"
              id="username"
              placeholder="username"
            />
          </div>
          <div>
            <label
              className="text-gray-800 font-semibold block my-3 text-md"
              htmlFor="email"
            >
              Email
            </label>
            <input
              onChange={onChangeEmail}
              className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
              type="text"
              name="email"
              id="email"
              placeholder="@email"
            />
          </div>
          <div>
            <label
              className="text-gray-800 font-semibold block my-3 text-md"
              htmlFor="password"
            >
              Password
            </label>
            <input
              onChange={onChangePassword}
              className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </div>
          <Link to="/login">
            <p className=" text-blue-400 hover:text-blue-700 font-bold text-center">
              Already have an account? Sign in
            </p>
          </Link>
          <button
            type="submit"
            className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans"
          >
            Register
          </button>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default Register;
