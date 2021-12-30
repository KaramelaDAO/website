import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";



export default function ConnectWalletModal({ open, setOpen }) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-20 inset-0 overflow-y-auto"
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom text-center bg-cyan-200 border-4 border-purpleC rounded-lg p-5 overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div className="flex justify-end">
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
              <h1 className="uppercase text-2xl tracking-wider font-bold mb-2">
                Sorry, but you can’t connect your wallet just yet!
              </h1>
              <hr className="border-[1px] border-greenC" />
              <p className="mt-5 text-lg capitalize">Please try again when our Citizenship NFTs are ready for minting.</p>
              <a href="https://twitter.com/karameladao">
                <button className="px-3 py-2 mt-8 w-full tracking-wide shadow-md shadow-cyan-500/50 bg-fuchsia-300 rounded-md border-2 border-blue-600 flex items-center justify-between focus:outline-none">
                  Follow us on Twitter

                </button>
              </a>

              <a href="https://discord.gg/dKdeANjg8p">
                <button className="px-3 py-2 mt-5 w-full tracking-wide shadow-md shadow-cyan-500/50 bg-fuchsia-300 rounded-md border-2 border-blue-600 flex focus:outline-none">

                  Join our Discord
                </button>
              </a>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
