import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import AboutClass from "./components/AboutClass";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenus from "./components/RestaurantMenus";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";

const AppLayout = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    //after api call
    const data = {
      name: "sumit",
    };

    setName(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: name, setName }}>
      <div className="app">
        <UserContext.Provider value={{ loggedInUser: "Sumit C" }}>
          <Header />
        </UserContext.Provider>
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const Grocery = lazy(() => {
  return import("./components/Grocery");
});

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h3>Loading....</h3>}>
            <Grocery />
          </Suspense>
        ),
      },
      { path: "/restaurant/:resId", element: <RestaurantMenus /> },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
