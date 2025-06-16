import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import HeroSwiper from "../components/Hero";
// import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <HeroSwiper />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
