/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import classNames from "classnames";
import logo from "../../assets/images/logo.svg";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";
import { ReactComponent as Discord } from "../../assets/icons/discord.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as Linkedin } from "../../assets/icons/linkedin.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobileOrTablet = useMediaQuery({ query: "(max-width:768px)" });

  useEffect(() => {
    if (!isMobileOrTablet && isOpen) {
      setIsOpen(false);
    }
  }, [isMobileOrTablet]);

  return (
    <nav
      className={classNames(
        {
          "h-[110vh] fixed top-0 left-0 right-0 bottom-0 z-50 bg-bg-primary":
            isOpen,
        },
        "px-2 sm:px-4 bg-transparent"
      )}
    >
      <div
        className={classNames(
          {
            "justify-center": !isOpen,
          },
          "container flex flex-col md:flex-row md:justify-between items-center mx-auto h-[10vh]"
        )}
      >
        <div className="w-full md:w-auto flex items-center justify-between py-2">
          <a href="#" className="flex items-center">
            <img
              src={logo}
              alt="Karamela DAO Logo"
              className="mr-3 h-9 sm:h-12"
            />
          </a>
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className="inline-flex items-center p-2 ml-3 md:hidden focus:outline-none transition-all"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <MenuIcon
              className={classNames(
                {
                  hidden: isOpen,
                },
                "w-6 h-6"
              )}
            />
            <CloseIcon
              className={classNames(
                {
                  hidden: !isOpen,
                },
                "w-6 h-6"
              )}
            />
          </button>
        </div>
        <div
          className={classNames(
            { hidden: !isOpen },
            "w-full md:block md:w-auto"
          )}
          id="mobile-menu"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a
                href="https://wiki.karameladao.com/"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Wiki
              </a>
            </li>
            <li>
              <a
                href="https://vote.karameladao.com/"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Vote
              </a>
            </li>
            <li>
              <a
                href="https://dex.karameladao.com/"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                DEX
              </a>
            </li>
            <li>
              <a
                href="https://mirror.xyz/karameladao.eth"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-2 pl-2 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                <div
                  className={classNames(
                    {
                      "justify-center": isOpen,
                    },
                    "flex items-center"
                  )}
                >
                  <a href="https://discord.gg/dKdeANjg8p"> <Discord className="mr-2.5" /></a>
                  <a href="https://twitter.com/karameladao"> <Twitter className="mr-2.5" /></a>
                  <a href="https://www.linkedin.com/company/karameladao/">  <Linkedin /></a>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
