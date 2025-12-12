import heroImg from "../assets/Hero.png";
import logo from "../assets/Logo.png";
import HamburgerMenu from "./HamburgerMenu";
import Button from "./Button";

function Hero() {
  return (
    <header className="relative min-h-screen">
      {/* Background*/}
      <img
        src={heroImg}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full p-4 flex justify-between items-center z-20">
        <img src={logo} alt="logo" />
        <HamburgerMenu />
      </nav>

      {/* Hero content */}
      <div className="absolute inset-0 z-10 flex flex-col items-end justify-center h-full text- text-white p-4 md:px-16">
        <h1 className="text-[34px] md:text-[48px] font-mono leading-snug">
          Unika hus i<br /> en unik miljö
          <br />
        </h1>
        <p className="mt-4 max-w-xl font-sans text-[18px] leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
          erat tempor, fringilla nunc vitae, laoreet velit. Suspendisse eu
          tortor eu odio dapibus molestie nec quis ipsum.
        </p>
        <Button />
      </div>
    </header>
  );
}

export default Hero;
