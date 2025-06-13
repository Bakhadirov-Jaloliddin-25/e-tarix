import { LINKS } from "../static";
import logo from "/E-TARIX.svg";
import video from "../assets/images/video.svg";
import photo from "../assets/images/photo.svg";
import search from "../assets/images/search.svg";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white">
      <div className="container flex justify-between py-8">
        <img
          src={logo}
          alt="logo"
          className="select-none cursor-pointer duration-150"
          onClick={() => navigate("")}
        />
        <ul className="flex gap-8 items-center">
          {LINKS?.map((link, index) => (
            <Link
              key={index}
              to={link.url}
              className="font-bold text-[#4D4D4D] hover:text-[#A2591A] duration-150"
            >
              {link.name}
            </Link>
          ))}
        </ul>
        <div className="flex justify-between gap-4">
          <img src={video} alt="video icon" />
          <img src={photo} alt="photo icon" />
          <div className="w-[230px] h-10 rounded-lg bg-[#F8F8F8] flex justify-end items-center px-3">
            <input
              type="text"
              onKeyDown={(e) => e.key == "Enter"}
              className="w-full outline-none bg-[#F8F8F8]"
            />
            <img src={search} alt="search icon" className="size-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
