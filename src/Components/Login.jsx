import { DocumentContext } from "../Contexts/DocumentContext";
import { useContext, React, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../Contexts/DocumentContext";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      const response = await axios.post(BASE_URL + "/login", {
        email: email,
        password: password,
      });
      // console.log("response:\n");
      // console.log(response);
      localStorage.setItem("email", email);
      toast.success("Login successfull");
      navigate("/");
    } catch (error) {
      console.error("Error login: ", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email + " " + password);
    login();
  };

  return (
    <div className="h-[80vh] flex justify-center items-center">
      <ToastContainer />
      <div className="flex justify-center items-center border-2 border-black rounded-md p-4">
        <div className="max-w-md relative flex flex-col p-4 rounded-md text-black bg-white">
          <div className="text-2xl font-bold mb-2 text-black text-center">
            Welcome back to <span className="text-red-500">Eventus</span>
          </div>
          <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
            Log in to your account
          </div>
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <div className="block relative">
              <label
                htmlFor="email"
                className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
              />
            </div>
            <div className="block relative">
              <label
                htmlFor="password"
                className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
              />
            </div>
            <button
              type="submit"
              className="bg-red-500 w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
            >
              Submit
            </button>
          </form>
          <div className="text-sm text-center mt-[1.6rem]">
            Don’t have an account yet?{" "}
            <Link className="text-sm text-red-500" to="/signup">
              Sign up for free!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
