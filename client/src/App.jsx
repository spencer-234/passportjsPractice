import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Home/Home.jsx";
import Posts from "./pages/Posts/Posts.jsx";
import Login from "./pages/Login/Login.jsx";
import "./app.css";
import { server_url } from "./server/server_url.js";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import { useEffect, useState } from "react";

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      await fetch(`${server_url}/auth/login/success`, {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        }
      }).then(res => {
        if (res.status === 200) return res.json();
        throw new Error("Authentication had failed");
      }).then(resObject => {
        setUser(resObject.user);
      }).catch(err => console.error(err));
    }
    getUser();
  },[])

  // console.log(user);

  const ProtectedRoute = ({ children }) => {
    if (!user) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  const Layout = () => {
    return (
      <div>
        <Navbar user={user} />
        <Outlet />
      </div>
    )
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/posts/:id",
          element: (
            <ProtectedRoute>
              <Posts />
            </ProtectedRoute>
          ),
        },
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
