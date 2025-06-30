import { useNavigate } from "react-router-dom";
import { SHAXSLAR } from "../static";

const Shaxslar = () => {
  const navigate = useNavigate();
  return (
    <div className="text-[#4D4D4D] flex flex-col gap-5">
      <p className="font-bold">Shaxslar</p>
      <div className="flex flex-col gap-[10px]">
        {SHAXSLAR?.map((shaxs, index) => (
          <div
            onClick={() => navigate("/shaxslar")}
            className="flex flex-col justify-center cursor-pointer gap-4 w-[250px] h-[50px] text-sm bg-white rounded-xl px-4 py-2"
          >
            <p key={index}>{shaxs.name}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-end pr-2">
        <button
          onClick={() => navigate("/shaxslar")}
          className="text-[#A2591A] text-xs font-bold tracking-widest"
        >
          BARCHASI...
        </button>
      </div>
    </div>
  );
};

export default Shaxslar;
