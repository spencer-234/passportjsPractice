import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Home/Home.jsx";
import Posts from "./pages/Posts/Posts.jsx";
import Login from "./pages/Login/Login.jsx";
import "./app.css";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";

function App() {

  const user = false;

  const ProtectedRoute = ({ children }) => {
    if (!user) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  const Layout = () => {
    return (
      <div>
        <Navbar />
        <Outlet />
      </div>
    )
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/posts/:id",
          element: <Posts />,
        },
      ],
    },
    {
      path: "/login",
      element: (
        <>
          <Navbar />
          <Login />
        </>
      ),
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
