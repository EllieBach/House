import Tillval from "./Tillval";
import VaraHus from "./VaraHus";

export default function Feature() {
    return (
        <section className="w-full px-0 grid grid-cols-1 md:grid-cols-2 min-h-[360px] items-stretch gap-0">
            <VaraHus />
            <Tillval />
        </section>
    );
}