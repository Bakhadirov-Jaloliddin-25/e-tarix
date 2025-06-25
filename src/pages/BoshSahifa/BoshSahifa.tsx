import Hero from "../../components/Hero";
import Sidebar from "../../components/Sidebar";
import Aside from "./Aside";
import madinah from "../../assets/images/madinah.png";
import search from "../../assets/images/second_search.svg";
import comment from "../../assets/images/comment.svg";
import share from "../../assets/images/share.svg";

const BoshSahifa = () => {
  return (
    <>
      <Hero />
      <div className="container flex gap-6 justify-center">
        <Aside />
        <div>
          <div className="w-[680px] h-[700px] bg-white p-5 rounded-lg">
            <img src={madinah} alt="madinah.png" />
            <div className="flex justify-between py-5">
              <div className="w-[100px] h-[30px] rounded-2xl bg-[#ebc8b6] font-bold text-xs flex items-center justify-center tracking-widest">
                SIYRAT
              </div>
              <div className="flex gap-5 font-bold text-xs">
                <div className="flex gap-2">
                  <img className="size-4" src={search} alt="search.svg" />
                  5.6 ming
                </div>
                <div className="flex gap-2">
                  <img className="size-4" src={comment} alt="comment.svg" />5
                  yuz
                </div>
                <div className="flex gap-2">
                  <img className="size-4" src={share} alt="share.svg" />
                  25
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="font-bold text-2xl">
                Жонли нарсани нишон қилманглар
              </h2>
              <p className="w-[610px] leading-6 font-medium text-sm text-gray-500 py-3">
                Ҳижрий 950-йил 17-робиъул-аввал куни (милодий 1543-йил 20-июн)
                Усмонлилар ҳарбий денгиз флоти Барбароса қўмондонлигида Ситсилия
                ва Италиянинг баъзи қирғоқларини ва Типпер дарёсида жойлашган
                Остия портини қўлга киритади.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center px-10 gap-2 font-bold text-xs text-gray-500">
                <p>10:10</p>
                <div className="w-2 h-2 rounded-full bg-[#D9D9D9] block"></div>
                <p>13.06.2024</p>
              </div>
              <button className="w-[140px] h-[40px] text-[#A2591A] border border-[#A2591A] rounded-2xl hover:bg-[#A2591A] hover:text-white duration-300">
                BATAFSIL...
              </button>
            </div>
          </div>
        </div>
        <Sidebar />
      </div>
    </>
  );
};

export default BoshSahifa;
