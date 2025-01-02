import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { logout } from "@/features/users/userSlice";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Link, NavLink } from "react-router";
import { Input } from "./ui/input";

const Header = () => {
  const { currentUser } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <header>
      <nav className="flex justify-between px-8 py-4">
        <ul className=" hidden md:flex gap-6 list-none">
          <li>
            <NavLink
              to="/messages"
              style={({ isActive }) => ({
                color: isActive ? "red" : "black",
              })}
            >
              Messages
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                color: isActive ? "red" : "black",
              })}
            >
              About
            </NavLink>
          </li>
        </ul>
        <Input
          autoFocus
          placeholder="Search"
          className="w-[80%] md:w-1/4 rounded-[8px] border border-gray-400"
        />

        {currentUser?.isLoggedIn ? (
          <DropdownMenu>
            <DropdownMenuTrigger>
              {currentUser.email.split("@")[0]}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem
                className="cursor-pointer hover:text-orange-300"
                onClick={handleLogout}
              >
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link to="login">
            <div className="bg-orange-500 p-2 text-white rounded-[10px]">
              Login
            </div>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
