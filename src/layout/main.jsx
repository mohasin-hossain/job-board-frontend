import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  return (
    <div className="font-inter min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeButton={false}
        />
        <div className="container mx-auto px-4">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Main;
