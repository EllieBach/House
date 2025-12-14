import housetext from "../assets/House_Text.png";

export default function Footer() {
  return (
    <footer className="bg-white">
  <div className="bg-[#101010] text-white pt-6 pb-0">
    
    <div className="max-w-[1200px] mx-auto px-4 h-auto md:h-[620px] flex flex-col justify-between">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <ul className="list-none space-y-2 font-mono font-medium">
          <li>Våra hus</li>
          <li>Tillval</li>
          <li>Hållbarhet</li>
        </ul>

        <p className="max-w-[245px] text-sm md:text-base md:text-right leading-relaxed md:justify-self-end">
          Morbi ornare sagittis dui, at dictum nulla bibendum non. Nullam rhoncus
          quam metus, id bibendum justo ultricies et. Integer nec nisl turpis.
          Nunc eget pulvinar urna.
        </p>
      </div>

      <div className="flex justify-center items-end">
        <div className="overflow-hidden h-auto md:h-[300px] w-full flex justify-center">
          <img
            src={housetext}
            alt="text house in big letters"
            className="w-[1376px] h-auto md:h-[366px] max-w-full object-contain"
          />
        </div>
      </div>

    </div>
  </div>
</footer>

  );
}
