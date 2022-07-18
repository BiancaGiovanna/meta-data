import { Header } from "./components/Header";
import { SalesContainer } from "./components/SalesContainer";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export function App() {
  return (
    <>
      <ToastContainer theme='colored' />
      <Header />
      <SalesContainer />
    </>
  );
}
