import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { IoPersonAddOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

const NavbarSticky = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to=""
          className={({ isActive }) =>
            isActive
              ? "text-pink-600 lg:border-b-2 underline-offset-2 border-pink-600 text-lg font-semibold"
              : "font-semibold text-lg"
          }
        >
          HOME
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to=""
          className={({ isActive }) =>
            isActive
              ? "text-pink-600 lg:border-b-2 underline-offset-2 border-pink-600 text-lg font-semibold"
              : "font-semibold text-lg"
          }
        >
          Account
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to=""
          className={({ isActive }) =>
            isActive
              ? "text-pink-600 lg:border-b-2 underline-offset-2 border-pink-600 text-lg font-semibold"
              : "font-semibold text-lg"
          }
        >
          Blocks
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to=""
          className={({ isActive }) =>
            isActive
              ? "text-pink-600 lg:border-b-2 underline-offset-2 border-pink-600 text-lg font-semibold"
              : "font-semibold text-lg"
          }
        >
          Docs
        </NavLink>
      </Typography>
    </ul>
  );
  return (
    <div>
      <div className=" max-h-[768px] w-[calc(100%+48px)]">
        <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
          <div className="flex items-center justify-between text-blue-gray-900">
            <Typography
              as="a"
              to=""
              className="mr-4 cursor-pointer py-1.5 text-3xl font-extrabold"
            >
              DK Khan
            </Typography>
            <div className="flex items-center gap-4">
              <div className="mr-4 hidden lg:block">{navList}</div>
              <div className="lg:flex items-center gap-x-1 hidden">
                <>
                  <div className="flex items-center justify-center gap-3">
                    <Link
                      to="/login"
                      className="hover:bg-pink-600 active:scale-90 duration-200 font-bold border text-pink-600 hover:text-white flex items-center justify-center gap-1 px-2 border-pink-600 rounded-md py-1"
                    >
                      <IoPersonAddOutline /> Sign In
                    </Link>
                    <span className="font-bold text-lg text-pink-600 hover:text-white">
                      |
                    </span>
                    <Link
                      to="/signup"
                      className="hover:bg-pink-600  border-pink-600 active:scale-90 duration-200 font-bold  text-pink-600 hover:text-white border flex items-center justify-center gap-1 px-2 rounded-md py-1"
                    >
                      Sign Up
                    </Link>
                  </div>
                </>
              </div>
              <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </IconButton>
            </div>
          </div>
          <MobileNav open={openNav}>
            <div>{navList}</div>
            <div>
              <div className="flex items-center gap-x-1">
                <>
                  <div className="flex items-center justify-center gap-5">
                    <Link
                      to="/login"
                      className="hover:bg-pink-600 active:scale-90 duration-200 font-bold border text-pink-600 hover:text-white flex items-center justify-center gap-1 px-2 border-pink-600 rounded-md py-1"
                    >
                      <IoPersonAddOutline /> Sign In
                    </Link>
                    <span className="font-bold text-lg text-pink-600 hover:text-white">
                      |
                    </span>
                    <Link
                      to="/signup"
                      className="hover:bg-pink-600  border-pink-600 active:scale-90 duration-200 font-bold  text-pink-600 hover:text-white border flex items-center justify-center gap-1 px-2 rounded-md py-1"
                    >
                      Sign Up
                    </Link>
                  </div>
                </>
              </div>
            </div>
          </MobileNav>
        </Navbar>
      </div>
    </div>
  );
};

export default NavbarSticky;
