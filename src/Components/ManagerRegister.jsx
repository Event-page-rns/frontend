import { DocumentContext } from "../Contexts/DocumentContext";
import { useContext, React, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../Contexts/DocumentContext";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ManagerRegister = () => {
  const [email, setEmail] = useState("");
  const [clubId, setClubId] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const navigate = useNavigate();
  const { myPassword } = useContext(DocumentContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please Enter Email id");
      return;
    }

    if (!clubId) {
      toast.error("Please Enter Password");
      return;
    }

    if (adminPassword !== myPassword) {
      toast.error("Invalid Admin Password");
    }

    console.log(email + clubId + adminPassword);

    try {
      const response = await axios.post(BASE_URL + "/manager-register");
      console.log(response);
      setClubId("");
      setClubName("");
      setAdminPassword("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-[80vh] flex justify-center items-center">
      <ToastContainer />
      <div className="flex justify-center items-center border-2 border-black rounded-md p-4">
        <div className="max-w-md relative flex flex-col p-4 rounded-md text-black bg-white">
          <div className="text-2xl font-bold mb-2 text-black text-center">
            <span className="text-red-500">Eventus</span> Manager Register page
          </div>
          <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
            Register a new manager
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
                htmlFor="club-id"
                className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
              >
                Club Id
              </label>
              <input
                type="password"
                id="club-id"
                value={clubId}
                onChange={(e) => setClubId(e.target.value)}
                className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
              />
            </div>
            <div className="block relative">
              <label
                htmlFor="club-name"
                className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
              >
                Admin Password
              </label>
              <input
                type="password"
                id="admin-password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
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
        </div>
      </div>
    </div>
  );
};

export default ManagerRegister;
