import MostViewed from "./MostViewed";
import Videolar from "./Videolar";

const Sidebar = () => {
  return (
    <div className="container max-w-[360px]">
      <div className="flex flex-col justify-between">
        <div className="bg-white w-full h-[70px] rounded-xl font-semibold text-2xl flex items-center indent-8 text-[#4D4D4D]">
          Ko‘p ko‘rilganlar
        </div>
        {[...Array(5)].map((_, index) => (
          <MostViewed key={index} />
        ))}
        <p className="font-bold text-2xl text-[#4D4D4D] pb-6 pt-8">Videolar</p>
        <Videolar />
      </div>
    </div>
  );
};

export default Sidebar;
