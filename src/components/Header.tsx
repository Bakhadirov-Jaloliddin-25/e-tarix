import { useState } from "react";
import { LINKS } from "../static";
import logo from "/E-TARIX.svg";
import video from "../assets/images/video.svg";
import photo from "../assets/images/photo.svg";
import search from "../assets/images/search.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import SlidingMenu from "./SlidingMenu";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto py-4 flex items-center justify-between">
        <img
          src={logo}
          alt="logo"
          className="select-none cursor-pointer w-28"
          onClick={() => navigate("/")}
        />
        <ul className="hidden lg:flex gap-8 items-center">
          {LINKS.map((link, index) => (
            <NavLink
              key={index}
              to={link.url}
              className={({ isActive }) =>
                `font-bold duration-150 ${
                  isActive
                    ? "text-[#A2591A]"
                    : "text-[#4D4D4D] hover:text-[#A2591A]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </ul>
        <div className="hidden lg:flex items-center gap-4">
          <Link to="/videolar">
            <img src={video} alt="video" className="w-5 h-5" />
          </Link>
          <Link to="/rasmlar">
            <img src={photo} alt="photo" className="w-5 h-5" />
          </Link>
          <div className="w-[230px] h-10 rounded-lg bg-[#F8F8F8] flex items-center px-3">
            <input
              type="text"
              placeholder="Search..."
              onKeyDown={(e) => e.key === "Enter"}
              className="w-full bg-[#F8F8F8] outline-none text-sm"
            />
            <img src={search} alt="search" className="w-5 h-5 cursor-pointer" />
          </div>
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden focus:outline-none"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {menuOpen && <SlidingMenu isOpen={menuOpen} setIsOpen={setMenuOpen} />}
    </header>
  );
};

export default Header;
