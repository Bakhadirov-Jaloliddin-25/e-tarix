import { useNavigate } from "react-router-dom";
import madinah from "../assets/images/madinah322x184.png";
import search from "../assets/images/search.svg";

const Videolar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-white w-[356px] px-4 py-5 rounded-lg flex flex-col gap-5 mb-7 cursor-pointer">
        <img src={madinah} alt="madinah.png" />
        <div className="flex flex-col gap-5">
          <h2 className="font-bold text-lg">
            «Оламларга раҳмат бўлган Пайғамбар»
          </h2>
          <div className="flex justify-between">
            <div className="flex items-center gap-2 font-bold text-xs text-gray-500">
              <p>10:10</p>
              <div className="w-2 h-2 rounded-full bg-[#D9D9D9] block"></div>
              <p>13.06.2024</p>
            </div>
            <div className="flex gap-2 font-bold text-xs">
              <img className="size-4" src={search} alt="search.svg" />
              5.6 ming
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-[356px] px-4 py-5 rounded-lg flex flex-col gap-5 mb-7 cursor-pointer">
        <img src={madinah} alt="madinah.png" />
        <div className="flex flex-col gap-5">
          <h2 className="font-bold text-lg">
            «Оламларга раҳмат бўлган Пайғамбар»
          </h2>
          <div className="flex justify-between">
            <div className="flex items-center gap-2 font-bold text-xs text-gray-500">
              <p>10:10</p>
              <div className="w-2 h-2 rounded-full bg-[#D9D9D9] block"></div>
              <p>13.06.2024</p>
            </div>
            <div className="flex gap-2 font-bold text-xs">
              <img className="size-4" src={search} alt="search.svg" />
              5.6 ming
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end pr-2">
        <button
          onClick={() => navigate("/videolar")}
          className="text-[#A2591A] text-xs font-bold tracking-widest"
        >
          BARCHASI...
        </button>
      </div>
    </>
  );
};

export default Videolar;
