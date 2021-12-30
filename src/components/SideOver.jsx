import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { BsWallet } from "react-icons/bs";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import ConnectWalletModal from "./ConnectWalletModal";

export default function SideOver({ open, setOpen }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-hidden z-10"
        onClose={setOpen}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-500"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-500"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen max-w-xs">
                <div className="h-full flex flex-col bg-purple-400 shadow-xl p-4 relative">
                  <div className="ml-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 text-redC cursor-pointer"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      onClick={() => setOpen(false)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>

                  <div className="mt-3">
                    <img src={logo} alt="logo" className="h-20 mx-auto" />
                  </div>

                  <div className="mx-auto mt-5">
                    <button
                      className="flex items-center bg-greenC px-6 py-2 text-lg rounded-md shadow-xl border-2 border-blue-600 transition duration-500 ease-in-out hover:scale-105 focus:outline-none"
                      onClick={() => {
                        setOpenModal(true);
                      }}
                    >
                      <BsWallet className="text-2xl text-purpleC mr-2" />
                      Connect
                    </button>
                  </div>
                  <hr className="mt-5 border-2" />

                  <div className="mt-8 pl-5">
                    <Link to="/" onClick={() => setOpen(false)}>
                      <h1 className="text-xl md:text-2xl text-gray-900 font-bold tracking-wider hover:text-gray-700">
                        CONTRIBUTE
                      </h1>
                    </Link>
                    <Link to="/propose" onClick={() => setOpen(false)}>
                      <h1 className="mt-4 text-xl md:text-2xl text-gray-900 font-bold tracking-wider hover:text-gray-700">
                        PROPOSE
                      </h1>
                    </Link>
                    <Link
                      to="/governance-proposals"
                      onClick={() => setOpen(false)}
                    >
                      <h1 className="mt-4 text-xl md:text-2xl text-gray-900 font-bold tracking-wider hover:text-gray-700">
                        GOVERNANCE
                      </h1>
                    </Link>
                    <Link to="/proposals" onClick={() => setOpen(false)}>
                      <h1 className="mt-4 text-xl md:text-2xl text-gray-900 font-bold tracking-wider hover:text-gray-700">
                        PROPOSALS
                      </h1>
                    </Link>
                    <Link to="">
                      <h1 className="mt-4 text-xl md:text-2xl text-gray-900 font-bold tracking-wider hover:text-gray-700">
                        HELP
                      </h1>
                    </Link>
                  </div>
                  <ConnectWalletModal open={openModal} setOpen={setOpenModal} />
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
