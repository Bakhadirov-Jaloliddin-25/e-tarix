const Aside = () => {
  return (
    <div>
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
    </div>
  );
};

export default Aside;
