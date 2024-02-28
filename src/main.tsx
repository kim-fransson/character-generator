import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AssetsProvider } from "./context/AssetsContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AssetsProvider>
    <App />,
  </AssetsProvider>,
);
