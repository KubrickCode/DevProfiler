import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import ReactQueryProvider from "./QueryProvider.tsx";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <ReactQueryProvider>
      <App />
    </ReactQueryProvider>
  </BrowserRouter>
);
