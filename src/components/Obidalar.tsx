import { useNavigate } from "react-router-dom";
import { OBIDALAR } from "../static";

const Obidalar = () => {
  const navigate = useNavigate();
  return (
    <div className="text-[#4D4D4D] flex flex-col gap-5">
      <p className="font-bold">Obidalar</p>
      <div className="flex flex-col gap-[10px]">
        {OBIDALAR?.map((obida, index) => (
          <div
            onClick={() => navigate("/obidalar")}
            className="flex flex-col justify-center cursor-pointer gap-4 w-[250px] h-[50px] text-sm bg-white rounded-xl px-4 py-2"
          >
            <p key={index}>{obida.name}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-end pr-2">
        <button
          onClick={() => navigate("/obidalar")}
          className="text-[#A2591A] text-xs font-bold tracking-widest"
        >
          BARCHASI...
        </button>
      </div>
    </div>
  );
};

export default Obidalar;
