import { useNavigate } from "react-router-dom";
import kokaldosh from "../assets/images/kokaldosh.png";
import search from "../assets/images/search.svg";

const MostViewed = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/tarix")}
      className="flex gap-[18px] pt-[22px] cursor-pointer"
    >
      <div className="w-[103px] h-[85px]">
        <img src={kokaldosh} alt="ko'kaldosh.png" />
      </div>
      <div className="flex flex-col justify-between pb-2">
        <h2 className="font-bold text-lg leading-6">
          «Ko‘kaldosh» madrasasi haqida
        </h2>
        <div className="flex justify-between">
          <p className="font-bold text-xs tracking-widest">TARIX</p>
          <div className="flex gap-2 font-bold text-xs text-gray-500">
            <img className="size-4" src={search} alt="search.svg" />
            5.6 ming
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostViewed;
