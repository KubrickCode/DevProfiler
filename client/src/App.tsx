import { FC } from "react";
import Layout from "./components/Layout/Layout";
import Main from "./components/Survey/Main";

const App: FC = () => {
  return (
    <div className="h-screen">
      <Layout />
      <Main />
    </div>
  );
};

export default App;
