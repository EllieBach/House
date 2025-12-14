import heroImg from "../assets/Hero.png";
import logo from "../assets/Logo.png";
import HamburgerMenu from "./HamburgerMenu";
import Button from "./Button";


function Hero() {
  return (
    <header className="relative bg-white w-full h-auto md:h-[697px] px-4 md:px-0 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full flex justify-center items-center">
        <img
          src={heroImg}
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Navbar */}
      <nav className="relative md:absolute top-0 left-1/2 md:left-1/2 transform -translate-x-1/2 z-20 w-full p-4 flex justify-between items-center">
        <img src={logo} alt="logo" className="object-contain" />
        <HamburgerMenu />
      </nav>

      {/* Hero content */}
      <div className="relative md:absolute md:top-0 md:left-[65%] md:-translate-x-0 md:translate-y-[50px] z-10 w-full px-0 h-auto md:h-[697px] flex flex-col justify-center text-white pt-8 md:pt-0 md:pr-8">
        <div className="max-w-xl flex flex-col items-start text-left gap-y-2 sm:gap-y-4 pb-[20px] sm:pb-0">
          <h1
            style={{ fontFamily: 'DM Mono' }} className="text-[28px] sm:text-[32px] md:text-[34px]  font-medium leading-snug"
          >
            Unika hus i<br /> en unik miljö
          </h1>
          <p style={{ fontFamily: 'DM Sans' }} className="w-full max-w-full sm:max-w-[450px] text-sm sm:text-base md:text-[18px] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
            erat tempor, fringilla nunc vitae, laoreet velit. Suspendisse eu
            tortor eu odio dapibus molestie nec quis ipsum.
          </p>
          <div style={{ fontFamily: 'DM Sans' }} className="mt-2 sm:mt-4">
            <Button size="responsive">Läs mer</Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
