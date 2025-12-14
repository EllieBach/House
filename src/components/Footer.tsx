import housetext from "../assets/House_Text.png";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="w-full px-4 h-auto md:h-[620px] flex flex-col justify-between bg-[#101010] text-white pt-6 pb-0">
    
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <ul className="list-none space-y-2 text-white md:text-left font-mono font-medium">
            <li>Våra hus</li>
            <li>Tillval</li>
            <li>Hållbarhet</li>
          </ul>
          <div className="flex items-center h-full md:justify-end">
            <p className="mb-0 w-full max-w-[245px] text-sm md:text-base md:text-right leading-relaxed">
              Morbi ornare sagittis dui, at dictum nulla bibendum non. Nullam rhoncus
              quam metus, id bibendum justo ultricies et. Integer nec nisl turpis.
              Nunc eget pulvinar urna.
            </p>
          </div>
        </div>
      
          <div className="flex justify-center grow items-end">
            <div className="overflow-hidden h-auto md:h-[300px] w-full flex justify-center">
              <img
                src={housetext}
                alt="text house in big letters"
                className="w-[1376px] h-auto md:h-[366px] max-w-full object-contain block mx-auto"
              />
            </div>
          </div>
      </div>
    </footer>
  );
}
