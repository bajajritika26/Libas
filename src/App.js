import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUp from "./Components/SignUpPage/SignUp";
import NavBar from "./Components/NavBar/NavBar";
import SignIn from "./Components/SignInPage/SignIn";
import Home from "./Components/Home/Home";
import Order from "./Components/Order/Order";
import Footer from "./Components/Footer/Footer";
import CustomeContex from "./context";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import CottonSets from "./Components/Collections/CottonSets/CottonSets";
import AllData from "./Components/AllData/AllData";

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,

      children: [
        { path: "/", element: <Home /> },
        { path: "/signUp", element: <SignUp /> },
        { path: "/signIn", element: <SignIn /> },
        { path: "/cart", element: <Cart /> },
        { path: "order", element: <Order /> },
        { path: "/cottonSets", element: <CottonSets /> },
        {path: "/all-products", element: <AllData/>}
      ],
    },
  ]);
  return (
    <CustomeContex>
      <ToastContainer />
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </CustomeContex>
  );
}

export default App;
