import { FC } from "react";
import Header from "./Header";
import Auth from "../Modal/Auth/Auth";

const Layout: FC = () => {
  return (
    <>
      <Header />
      <Auth />
    </>
  );
};

export default Layout;
