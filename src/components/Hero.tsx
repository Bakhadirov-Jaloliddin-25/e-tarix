import hero from "../assets/images/uzbekistan.png";

const Hero = () => {
  return (
    <div className="py-9">
      <div className="w-full max-w-[1340px]  mx-auto h-[250px] sm:h-[300px] md:h-[357px] px-4">
        <img src={hero} alt="hero.png" />
      </div>
    </div>
  );
};

export default Hero;
