import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="text-center text-2xl mb-8">
      <h1>Login Page</h1>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
