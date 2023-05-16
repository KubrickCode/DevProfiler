import { FC } from "react";
import Header from "./Header";
import Auth from "../Modal/Auth/Auth";
import Confirm from "../Modal/Confirm";

const Layout: FC = () => {
  return (
    <>
      <Header />
      <Auth />
      <Confirm />
    </>
  );
};

export default Layout;
