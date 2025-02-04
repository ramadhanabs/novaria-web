import { ConnectButton } from "@rainbow-me/rainbowkit";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

export const Navbar = () => {
  return (
    <nav className="h-[100px] fixed w-full z-10 flex items-center bg-black text-white">
      <div className="container mx-auto flex lg:justify-between justify-end items-center px-4">
        <ul className="lg:flex hidden space-x-6">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                clsx(
                  " hover:text-main font-bold",
                  isActive ? "text-main" : "text-white"
                )
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mint"
              end
              className={({ isActive }) =>
                clsx(
                  " hover:text-main font-bold",
                  isActive ? "text-main" : "text-white"
                )
              }
            >
              Mint
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/deposit"
              end
              className={({ isActive }) =>
                clsx(
                  " hover:text-main font-bold",
                  isActive ? "text-main" : "text-white"
                )
              }
            >
              Deposit
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/swap"
              end
              className={({ isActive }) =>
                clsx(
                  " hover:text-main font-bold",
                  isActive ? "text-main" : "text-white"
                )
              }
            >
              Swap
            </NavLink>
          </li>
        </ul>
        <div>
          <ConnectButton />
        </div>
      </div>
    </nav>
  );
};
