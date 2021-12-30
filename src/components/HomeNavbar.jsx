import logo from "../images/logo.png";
import { BsWallet } from "react-icons/bs";
import { useState } from "react";
import SideOver from "./SideOver";
import ConnectWalletModal from "./ConnectWalletModal";

const HomeNavbar = () => {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <nav className="px-5 lg:px-8 xl:px-12 2xl:px-32 pt-5 flex justify-between items-center">
      <img src={logo} alt="logo" className="h-20 sm:h-28" />

      <div className="flex items-center">
        <button className="bg-yellowC px-6 py-2 mr-10 text-lg rounded-md shadow-xl transition duration-500 ease-in-out hover:bg-yellow-500 hover:scale-110 hidden">
          About
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 lg:mr-10 transition duration-300 ease-in-out hover:text-redC cursor-pointer hidden"
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
          className="bg-white p-2 rounded-md shadow-md border-2 border-greenC cursor-pointer transition duration-500 ease-in-out hover:scale-105"
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

export default HomeNavbar;
