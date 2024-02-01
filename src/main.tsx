import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { TranslateProvider } from "./context/TranslateContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <TranslateProvider>
    <App />
  </TranslateProvider>
);
