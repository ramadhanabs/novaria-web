import { ConnectButton } from "@rainbow-me/rainbowkit";

export const Navbar = () => {
  return (
    <nav className="h-[100px] fixed w-full z-10 flex items-center bg-black text-white">
      <div className="container mx-auto flex justify-between items-center px-4">
        <ul className="flex space-x-6">
          <li>
            <a href="/" className="text-white hover:text-main font-bold">
              Home
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="text-white hover:text-main font-bold"
            >
              Deposit
            </a>
          </li>
        </ul>
        <div>
          <ConnectButton />
        </div>
      </div>
    </nav>
  );
};
