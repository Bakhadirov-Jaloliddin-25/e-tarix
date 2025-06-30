import madinah from "../assets/images/madinah215x215.png";
import search from "../assets/images/search.svg";

const Main = () => {
  return (
    <div className="w-[680px] h-[270px] bg-white p-5 rounded-lg flex gap-6">
      <div className="w-[215px] h-[215px]">
        <img src={madinah} alt="madinah.png" />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col pb-4">
          <h1 className="text-[#DD7338] font-bold tracking-widest text-xs pb-[14px]">
            TARIX
          </h1>
          <h2 className="font-bold text-lg w-[400px] pb-6">
            Салмон Форсий розияллоҳу анҳунинг ёшлари ҳақида
          </h2>
          <p className="text-gray-500 text-sm leading-6 w-[390px]">
            Ҳижрий 950-йил 17-робиъул-аввал куни (милодий 1543-йил 20-июн)
            Усмонлилар ҳарбий денгиз флоти Барбароса қўмондонлигида Ситсилия ва{" "}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center px-10 gap-2 font-bold text-xs text-gray-500">
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
  );
};

export default Main;
