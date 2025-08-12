export const metadata = { title: "Book — Glow by Paty" }

export default function ContactPage() {
  return (
    <section className="section pt-24">
      <div className="container-lg max-w-2xl">
        <h1 className="font-display text-4xl">Book / Contact</h1>
        <p className="mt-3 text-ink/70">Prefer text? <a className="hover:text-blue" href="tel:+16892671590">689-267-1590</a></p>
        <div className="card mt-8">
          <form action="mailto:patyquevedo1105@gmail.com" method="POST" className="grid gap-4">
            <label className="text-sm">Name<input name="name" required className="mt-1 w-full bg-white border border-line rounded-xl px-4 py-3"/></label>
            <label className="text-sm">Email<input name="email" type="email" required className="mt-1 w-full bg-white border border-line rounded-xl px-4 py-3"/></label>
            <label className="text-sm">Phone<input name="phone" className="mt-1 w-full bg-white border border-line rounded-xl px-4 py-3"/></label>
            <label className="text-sm">Message<textarea name="message" rows={5} className="mt-1 w-full bg-white border border-line rounded-xl px-4 py-3"/></label>
            <button className="btn btn-gold mt-2" type="submit">Send</button>
          </form>
          <p className="mt-3 text-xs text-ink/50">This form opens your email app and sends directly to patyquevedo1105@gmail.com</p>
        </div>
        <div className="mt-10">
          <h2 className="font-display text-2xl">Booking link</h2>
          <p className="mt-2"><a className="btn btn-blue" href="#">Open calendar</a></p>
        </div>
      </div>
    </section>
  )
}
