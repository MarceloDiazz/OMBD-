import React from "react";
import useInput from "../hooks/useInput";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postUserLoged } from "../state/registration";
import { toast, Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const email = useInput("");
  const password = useInput("");
  const history = useHistory("");
  const handleSumbit = (e) => {
    e.preventDefault();

    dispatch(
      postUserLoged({ email: email.value, password: password.value })
    ).then((data) => {
      if (data.type === "userLoged/fulfilled") {
        toast.success("Logueo exitoso!, redirigiendo...", {
          duration: 4000,
          position: "top-center",
        });
        setTimeout(() => {
          history.push("/");
        }, 4000);
      } else if (data.type === "userLoged/rejected") {
        toast.error("Error Login :( , verifica correo y/o contraseña", {
          duration: 4000,
          position: "top-center",
        });
      }
    });
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="lg:w-2/5 md:w-1/2 w-2/3">
        <form
          onSubmit={handleSumbit}
          className="bg-white p-10 rounded-lg shadow-lg min-w-full"
        >
          <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">
            Login
          </h1>
          <div>
            <label
              className="text-gray-800 font-semibold block my-3 text-md"
              htmlFor="email"
            >
              Email
            </label>
            <input
              {...email}
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
              {...password}
              className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none "
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </div>
          <Link to="/register">
            <p className="border text-blue-400 hover:text-blue-700 font-bold text-center mt-5">
              You don't have a registered account? Sign up
            </p>
          </Link>
          <button
            type="submit"
            className="w-full mt-6 mb-3 bg-blue-200 rounded-lg px-4 py-2 text-lg text-gray-800 tracking-wide font-semibold font-sans hover:bg-blue-500"
          >
            Login
          </button>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
