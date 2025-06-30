import Obidalar from "../../components/Obidalar";
import Shaxslar from "../../components/Shaxslar";

const Aside = () => {
  return (
    <div className="flex flex-col gap-14">
      <div className="w-[250px] h-[120px] bg-white text-[#4D4D4D] rounded-xl px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <p className="text-[#478731] font-bold text-2xl">8</p>
            <p>Zulhijja</p>
          </div>
          <div className="text-[#47873180]">21:45</div>
        </div>
        <div className="flex flex-col">
          <p className="text-xl">1445</p>
          <p className="text-[#4D4D4D50] text-[10px]">
            Ushbu kunda sodir bo‘lgan xodisalar
          </p>
        </div>
        <div className="flex items-center justify-between text-xs">
          <p>
            O‘zbekistonda <span className="text-[#309A1E]">2</span>
          </p>
          <p>
            Jahonda <span className="text-[#309A1E]">2</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-[250px] h-[220px] bg-white text-[#4D4D4D] rounded-xl px-4 py-2">
        <h2 className="font-bold">Tarixda bugun</h2>
        <p className="w-[220px] text-xs leading-5">
          Ҳижрий 950-йил 17-робиъул-аввал куни (милодий 1543-йил 20-июн)
          Усмонлилар ҳарбий денгиз флоти Барбароса қўмондонлигида Ситсилия ва
          Италиянинг баъзи қирғоқларини ва Типпер дарёсида жойлашган Остия
          портини қўлга киритади.
        </p>
      </div>
      <Shaxslar />
      <Obidalar />
    </div>
  );
};

export default Aside;
