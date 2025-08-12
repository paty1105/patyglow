export default function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="container-lg py-10 text-sm text-ink/70 grid md:grid-cols-3 gap-8">
        <div>
          <div className="font-display text-lg text-ink">Glow by Paty</div>
          <p className="mt-2">Modern esthetics studio specializing in skin health and confident glow.</p>
        </div>
        <div>
          <div className="font-display text-ink">Visit</div>
          <p className="mt-2">Orlando, FL</p>
          <p className="mt-2">Open: Tue–Sat 10–6</p>
        </div>
        <div>
          <div className="font-display text-ink">Contact</div>
          <p className="mt-2">
            <a href="tel:+16892671590" className="hover:text-blue">689-267-1590</a><br/>
            <a href="mailto:patyquevedo1105@gmail.com" className="hover:text-pink">patyquevedo1105@gmail.com</a>
          </p>
        </div>
      </div>
      <div className="text-center text-xs text-ink/60 pb-8">© {new Date().getFullYear()} Glow by Paty. All rights reserved.</div>
    </footer>
  )
}
