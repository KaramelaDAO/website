import logo from "../images/logo.png";
import { BsWallet } from "react-icons/bs";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useLocation } from "react-router";
import SideOver from "./SideOver";
import ConnectWalletModal from "./ConnectWalletModal";

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <nav className="px-5 lg:px-8 xl:px-12 2xl:px-32 pt-5 flex justify-between items-center">
      <Link to="/">
        <img src={logo} alt="logo" className="h-20 sm:h-28" />
      </Link>

      <div className="flex items-center space-x-10">
        <NavLink to="/governance-proposals" className="hidden lg:block">
          <h1
            className={`${
              location.pathname === "/governance-proposals"
                ? "text-emerald-900"
                : "text-white"
            } text-lg font-bold tracking-wider hover:text-gray-700`}
          >
            GOVERNANCE
          </h1>
        </NavLink>
        <NavLink to="/proposals" className="hidden lg:block">
          <h1
            className={`${
              location.pathname === "/proposals"
                ? "text-emerald-900"
                : "text-white"
            } text-lg font-bold tracking-wider hover:text-gray-700`}
          >
            PROPOSALS
          </h1>
        </NavLink>
        <NavLink to="/propose" className="hidden lg:block">
          <h1
            className={`${
              location.pathname === "/propose"
                ? "text-emerald-900"
                : "text-white"
            } text-lg font-bold tracking-wider hover:text-gray-700`}
          >
            PROPOSE
          </h1>
        </NavLink>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 transition duration-300 ease-in-out hover:text-redC cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => setOpen(!open)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <div
          className="bg-white p-2 rounded-md shadow-md border-2 border-greenC cursor-pointer transition duration-500 ease-in-out hover:scale-105 hidden lg:block"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          <BsWallet className="text-2xl text-purpleC" />
        </div>
      </div>

      <SideOver open={open} setOpen={setOpen} />
      <ConnectWalletModal open={openModal} setOpen={setOpenModal} />
    </nav>
  );
};

export default Navbar;
