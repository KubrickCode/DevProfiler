import { FC } from "react";
import Layout from "./components/Layout/Layout";
import Main from "./components/Survey/Main";
import { Route, Routes } from "react-router-dom";
import MyPage from "./components/MyPage/MyPage";
import Authorize from "./components/Authorize";

const App: FC = () => {
  return (
    <div className="h-screen">
      <Layout />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/my-page" element={<MyPage />} />
        <Route path="/authorize" element={<Authorize />} />
      </Routes>
    </div>
  );
};

export default App;
