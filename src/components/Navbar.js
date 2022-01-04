import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { sendLogoutRequest, setUser } from "../state/registration";
import { useHistory } from "react-router";
import { toast, Toaster } from "react-hot-toast";

const Navbar = () => {
  const history = useHistory();
  const user = useSelector((state) => state.registration.user);
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(sendLogoutRequest()).then(() => {
      toast.success("Gracias por visitarnos!", {
        duration: 4000,
        position: "top-center",
      });
      setTimeout(() => {
        history.push("/");
      }, 400);
    });
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      dispatch(setUser(JSON.parse(localStorage.getItem("user"))));
    }
  }, [dispatch]);

  return (
    <div>
      <nav className="bg-yellow-400 px-6 relative shadow-md">
        <div className="flex flex-row justify-between items-center py-2">
          <Link to="/">
            <img
              className="font-semibold text-3xl text-gray-500 h-10"
              src="https://ia.media-imdb.com/images/M/MV5BMTc5NzU4OTU0N15BMl5BcG5nXkFtZTgwNTY0NjQ2OTE@._V1_.png"
              alt="OMBD"
            />
          </Link>
          <div className="group flex flex-col items-center">
            <div className="rounded  bg-white  text-gray-600 relative">
              {user?.id ? (
                <div
                  className=" flex flex-row justify-center items-center text-center font-semibold text-gray-500"
                  onClick={handleLogout}
                >
                  <Link
                    className="px-6 py-1 flex flex-col md:flex-row md:items-center"
                    to="/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 md:h-5 px-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                    Logout
                  </Link>
                  <Link
                    className="px-6 py-1 flex flex-col md:flex-row md:items-center"
                    to="/register"
                  ></Link>
                </div>
              ) : (
                <div className="flex flex-row justify-center items-center text-center font-semibold text-gray-500">
                  <Link
                    className="px-6 py-1 flex flex-col md:flex-row md:items-center"
                    to="/login"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="fill-current h-10 md:h-5 px-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                    </svg>
                    Login
                  </Link>
                  <Link
                    className="px-6 py-1 flex flex-col md:flex-row md:items-center"
                    to="/register"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current h-10 md:h-5 px-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                      />
                    </svg>
                    Sign in
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      <Toaster />
    </div>
  );
};

export default Navbar;
