'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const handler = () => setOpen(false)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-line">
      <div className="container-lg flex items-center justify-between h-16">
        <Link href="/" className="font-display text-xl tracking-wide">
          <span className="text-gold">Glow</span> by Paty
        </Link>
        <nav className="hidden md:flex gap-8 text-sm">
          <Link href="/#services" className="hover:text-ink/80">Services</Link>
          <Link href="/#results" className="hover:text-ink/80">Results</Link>
          <Link href="/#about" className="hover:text-ink/80">About</Link>
          <Link href="/#faq" className="hover:text-ink/80">FAQ</Link>
          <Link href="/contact" className="btn btn-gold">Book</Link>
        </nav>
        <button aria-label="Menu" className="md:hidden" onClick={()=>setOpen(!open)}>
          <div className="w-6 h-0.5 bg-ink mb-1"></div>
          <div className="w-6 h-0.5 bg-ink mb-1"></div>
          <div className="w-6 h-0.5 bg-ink"></div>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-line bg-white/95">
          <div className="container-lg py-3 flex flex-col gap-3 text-sm">
            <a href="/#services" onClick={()=>setOpen(false)}>Services</a>
            <a href="/#results" onClick={()=>setOpen(false)}>Results</a>
            <a href="/#about" onClick={()=>setOpen(false)}>About</a>
            <a href="/#faq" onClick={()=>setOpen(false)}>FAQ</a>
            <a className="btn btn-gold mt-2" href="/contact" onClick={()=>setOpen(false)}>Book</a>
          </div>
        </div>
      )}
    </header>
  )
}
