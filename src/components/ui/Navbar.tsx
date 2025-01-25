export const Navbar = () => {
  return (
    <nav className="h-[100px] fixed w-full z-10 flex items-center bg-black text-white">
      <div className="container mx-auto">
        <ul className="flex space-x-6">
          <li>
            <a href="/" className="text-white hover:text-[#17E3C2] font-bold">
              Home
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="text-white hover:text-[#17E3C2] font-bold"
            >
              Deposit
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
