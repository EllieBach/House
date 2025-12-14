export default function About() {
  return (
    <section className="bg-[#2B2B2B] text-white py-6">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-[420px_420px] gap-6 justify-center">
          <div className="flex flex-col gap-3">
            <h2 style={{ fontFamily: 'DM Mono' }}className="text-3xl font-medium">
              Lorem ipsum dolor
            </h2>
            <p style={{ fontFamily: 'DM Sans' }} className="text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
              erat tempor, fringilla nunc vitae, laoreet velit. Suspendisse eu
              odio.
            </p>
            <p style={{ fontFamily: 'DM Sans' }} className="text-sm leading-relaxed">
              dapibus molestie nec quis ipsum. Pellentesque pretium finibus
              vulputate. Praesent et urna ultricies, varius ipsum eget, iaculis
              ante. Pellentesque quis mi tempus elit lobortis cursus. Etiam vel
              sollicitudin elit, nec fringilla nibh. Aenean convallis enim
              justo, nec lobortis velit molestie vitae. Integer ac erat iaculis,
              blandit orci fermentum, ullamcorper augue. Suspendisse vel massa
              sollicitudin, varius lectus eu, rhoncus nisi. Fusce ullamcorper
              diam at lectus cursus efficitur.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p style={{ fontFamily: 'DM Sans' }} className="text-sm leading-relaxed">
              Morbi ornare sagittis dui, at dictum nulla bibendum non. Nullam
              rhoncus quam metus, id bibendum justo ultricies et. Integer nec
              nisl turpis. Nunc eget pulvinar urna. Duis mattis porttitor
              semper. Nam sollicitudin odio et urna consectetur, dignissim
              tempor eros dapibus. Duis a tortor et mauris egestas interdum.
              Vivamus sed tortor ultricies, efficitur diam et, pulvinar ligula.
              Ut ac rhoncus erat, eget rhoncus neque. Fusce eu fermentum est.
              Nam fermentum tincidunt est, eget tempus ex convallis nec. Ut
              felis nulla, consequat ac lorem quis, dapibus cursus magna. Nunc
              sed lacus nuleros.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
