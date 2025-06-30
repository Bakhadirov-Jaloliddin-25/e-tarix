import { useRoutes } from "react-router-dom";
import Layout from "../layout/Layout";
import BoshSahifa from "../pages/BoshSahifa/BoshSahifa";
import NotFound from "../pages/NotFound/NotFound";
import Tarix from "../pages/Tarix/Tarix";
import JahonTarixi from "../pages/JahonTarixi/JahonTarixi";
import Shaxslar from "../pages/Shaxslar/Shaxslar";
import Obidalar from "../pages/Obidalar/Obidalar";
import Maqolalar from "../pages/Maqolalar/Maqolalar";
import Videolar from "../components/Videolar";

const Routers = () => {
  return (
    <>
      {useRoutes([
        {
          path: "/",
          element: <Layout />,
          children: [
            {
              path: "/",
              element: <BoshSahifa />,
            },
            {
              path: "/tarix",
              element: <Tarix />,
            },
            {
              path: "/jahon-tarixi",
              element: <JahonTarixi />,
            },
            {
              path: "/maqolalar",
              element: <Maqolalar />,
            },
            {
              path: "/shaxslar",
              element: <Shaxslar />,
            },
            {
              path: "/obidalar",
              element: <Obidalar />,
            },
            {
              path: "/videolar",
              element: <Videolar />,
            },
            {
              path: "/rasmlar",
              element: <Videolar />,
            },
          ],
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ])}
    </>
  );
};

export default Routers;
