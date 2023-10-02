import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import MenuPage from "./pages/Menu/MenuPage";
import Contact from "./pages/Contact/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        { path: "/menu", element: <MenuPage /> },
        { path: "/gallery", element: <Gallery /> },
        { path: "/contact", element: <Contact /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
