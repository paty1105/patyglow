import Image from "next/image"
import Badge from "@/components/Badge"

const services = [
  { title: "HydraFacial®", blurb: "Deep cleanse, extract, and hydrate for instant glow.", price: "from $165" },
  { title: "Microneedling", blurb: "Stimulate collagen; refine texture and tone.", price: "from $225" },
  { title: "Chemical Peel", blurb: "Brighten, smooth, and even tone with tailored strengths.", price: "from $140" },
  { title: "Morpheus8 (RF Microneedling)", blurb: "Lift, tighten, and improve laxity with minimal downtime.", price: "consult" },
  { title: "Advanced Pulsed Light (APL)", blurb: "Reduce redness, capillaries, and sun damage.", price: "from $200" },
  { title: "Laser Resurfacing", blurb: "Refine texture, pores, and fine lines.", price: "consult" },
  { title: "Laser Hair Removal", blurb: "Fast, effective hair reduction for face & body.", price: "from $75" },
  { title: "Tattoo Removal", blurb: "Fade and remove unwanted ink over a series of sessions.", price: "consult" },
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="section pt-20">
        <div className="container-lg grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="mb-4"><Badge>Central Florida • Esthetics</Badge></div>
            <h1 className="font-display text-4xl md:text-6xl leading-tight">
              Minimal care. <span className="text-gold">Maximum glow.</span>
            </h1>
            <p className="mt-4 text-ink/70 max-w-prose">A clean, minimal studio where science meets skin artistry. Personalized facials and advanced treatments for results you can see—without the noise.</p>
            <div className="mt-8 flex gap-3 flex-wrap">
              <a className="btn btn-gold" href="/contact">Book a consult</a>
              <a className="btn btn-blue" href="#services">Explore services</a>
              <a className="btn btn-pink" href="#results">See results</a>
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-line bg-stone">
            <Image src="/hero.jpg" alt="Studio ambiance" fill priority sizes="(min-width: 768px) 50vw, 100vw" className="object-cover"/>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section border-t border-line bg-stone/40">
        <div className="container-lg">
          <h2 className="font-display text-3xl md:text-4xl">Signature Services</h2>
          <p className="mt-3 text-ink/70">Targeted treatments tailored to your skin—built on evidence, delivered with care.</p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s)=> (
              <div key={s.title} className="card">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-xl">{s.title}</h3>
                  <span className="text-sm text-ink/60">{s.price}</span>
                </div>
                <p className="mt-2 text-sm text-ink/70">{s.blurb}</p>
                <a href="/contact" className="btn btn-gold mt-6">Book</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section id="results" className="section border-t border-line">
        <div className="container-lg">
          <h2 className="font-display text-3xl md:text-4xl">Before & After</h2>
          <p className="mt-3 text-ink/70">Real clients. Natural-looking results.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[1,2,3].map(i => (
              <div key={i} className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-stone">
                <Image src={`/ba${i}.jpg`} alt={`Result ${i}`} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover"/>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section border-t border-line bg-stone/40">
        <div className="container-lg grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="font-display text-3xl md:text-4xl">About Paty</h2>
            <p className="mt-4 text-ink/80">Licensed esthetician focused on skin health, corrective treatments, and long-term results. From personalized consultations to smart home-care plans, every visit is crafted to be simple, calm, and effective.</p>
            <ul className="mt-6 space-y-2 text-sm text-ink/70 list-disc pl-5">
              <li>Specializes in acne, melasma, and texture refinement</li>
              <li>Advanced device training: HydraFacial®, RF microneedling, APL</li>
              <li>Holistic, minimal-product philosophy</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="font-display text-xl">Studio Policies</h3>
            <ul className="mt-3 text-sm text-ink/70 space-y-2">
              <li><strong>Late/Cancellations:</strong> 24-hour notice to avoid fee.</li>
              <li><strong>Contraindications:</strong> Please disclose medications and recent procedures.</li>
              <li><strong>Aftercare:</strong> Sunscreen daily; avoid actives 48 hrs post-treatment.</li>
            </ul>
            <a className="btn btn-blue mt-6" href="/contact">Questions? Message us</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section border-t border-line">
        <div className="container-lg">
          <h2 className="font-display text-3xl md:text-4xl">FAQ</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="card">
              <h4 className="font-display">Is it safe for sensitive skin?</h4>
              <p className="mt-2 text-sm text-ink/70">Yes—treatments are customized after a consultation. We’ll start gentle and build as your skin tolerates.</p>
            </div>
            <div className="card">
              <h4 className="font-display">I’m on tretinoin. Can I have a peel?</h4>
              <p className="mt-2 text-sm text-ink/70">Usually yes with a pause beforehand; we’ll advise exact timelines during your consult.</p>
            </div>
            <div className="card">
              <h4 className="font-display">Do you offer memberships?</h4>
              <p className="mt-2 text-sm text-ink/70">Monthly plans and packages available—ask at your visit.</p>
            </div>
            <div className="card">
              <h4 className="font-display">How do I book?</h4>
              <p className="mt-2 text-sm text-ink/70">Use the booking page to choose a time, or call/text the studio.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
