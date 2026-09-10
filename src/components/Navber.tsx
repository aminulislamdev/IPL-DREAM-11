import logo from "../assets/logo.png";
import { RiBitCoinLine } from "react-icons/ri";
import { TiThMenu } from "react-icons/ti";

const Navber = ({ coin }: { coin: number }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="navbar flex items-center justify-between py-4">

        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="navbar-logo"
            className="h-8 w-auto md:h-10"
          />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-6 md:flex lg:gap-10">
          <li>
            <a href="" className="font-medium hover:text-yellow-500">
              Home
            </a>
          </li>
          <li>
            <a href="" className="font-medium hover:text-yellow-500">
              Fixture
            </a>
          </li>
          <li>
            <a href="" className="font-medium hover:text-yellow-500">
              Teams
            </a>
          </li>
          <li>
            <a href="" className="font-medium hover:text-yellow-500">
              Schedules
            </a>
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-2 md:gap-4">

          {/* Coin */}
          <button
            className="flex h-10 items-center gap-1.5 rounded-lg border border-yellow-200 bg-yellow-50 px-3 text-sm font-bold text-gray-800 shadow-sm transition hover:border-yellow-400 hover:bg-yellow-100 active:scale-95 md:h-11 md:gap-2 md:px-4 md:text-base"
          >
            <span>{coin}</span>
            <RiBitCoinLine className="text-lg text-yellow-500 md:text-xl" />
          </button>

          {/* Mobile Menu */}
          <div className="dropdown md:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-square"
            >
              <TiThMenu className="h-7 w-7" />
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content right-0 z-50 mt-3 w-48 rounded-box bg-base-100 p-2 shadow-lg"
            >
              <li><a href="">Home</a></li>
              <li><a href="">Fixture</a></li>
              <li><a href="">Teams</a></li>
              <li><a href="">Schedules</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navber;