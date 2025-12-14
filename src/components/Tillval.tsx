import housetillval from '../assets/House_tillval.png'
import Button from "./Button"

export default function Tillval() {
  return (
    <section className="relative w-full h-full overflow-hidden">
      <img
        src={housetillval}
        alt="modern hus med solpaneler"
        className="w-full h-full object-cover block"
      />
      <h3 className="absolute top-4 left-4 text-2xl md:text-3xl font-mono font-medium text-white">
  Tillval
</h3>
<div className="absolute bottom-4 right-4">
        <Button variant='light'>läs mer</Button>
      </div>
    </section>
  )
}
