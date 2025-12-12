import housetext from "../assets/House_Text.png";

export default function Footer() {
  return (
    <footer className="bg-[#101010] text-white p-8">
      <ul className="list-none space-y-2 text-white">
        <li>Våra hus</li>
        <li>Tillval</li>
        <li>Hållbarhet</li>
      </ul>

      <p className="mb-4 text-sm md:text-base">
        Morbi ornare sagittis dui, at dictum nulla bibendum non. Nullam rhoncus
        quam metus, id bibendum justo ultricies et. Integer nec nisl turpis.
        Nunc eget pulvinar urna.
      </p>

      <img
        src={housetext}
        alt="text house in big letters"
        className="w-full max-w-lg"
      />
    </footer>
  );
}
