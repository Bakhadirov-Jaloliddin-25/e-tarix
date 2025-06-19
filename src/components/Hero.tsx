import hero from "../assets/images/uzbekistan.png";

function HeroSwiper() {
  return (
    <div className="w-full max-w-[1368.14px] mx-auto h-[250px] sm:h-[300px] md:h-[357px] px-4">
      <div className="w-full h-full bg-cover bg-center flex items-center justify-center text-white rounded-xl transition-opacity duration-500">
        <img src={hero} alt="hero.png" />
      </div>
    </div>
  );
}

export default HeroSwiper;
