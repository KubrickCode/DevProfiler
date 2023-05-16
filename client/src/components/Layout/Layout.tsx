import { FC } from "react";
import Header from "./Header";
import Auth from "../Modal/Auth/Auth";
import Confirm from "../Modal/Confirm/Confirm";
import Setting from "../Modal/Setting/Setting";

const Layout: FC = () => {
  return (
    <>
      <Header />
      <Auth />
      <Confirm />
      <Setting />
    </>
  );
};

export default Layout;
