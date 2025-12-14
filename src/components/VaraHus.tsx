import housevarahus from "../assets/House_varahus.png";
import Button from "./Button"

export default function Varahus() {
  return (
    <section className="relative w-full h-full overflow-hidden">
      <img
        src={housevarahus}
        alt="modern hus med skorsten"
        className="w-full h-full object-cover block"
      />
      <h3 style={{ fontFamily: 'DM Mono' }} className="absolute top-4 left-4 text-2xl md:text-3xl font-medium text-white">
        Våra hus
      </h3>
    <div style={{ fontFamily: 'DM Sans' }} className="absolute bottom-4 right-4">
        <Button variant='light'>våra hus</Button>
      </div>
    </section>
  );
}
