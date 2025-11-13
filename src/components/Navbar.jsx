import { Menu, School } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Admissions', href: '#admissions' },
    { label: 'Campus Life', href: '#campus' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/20 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/40 shadow-sm">
          <div className="flex h-16 items-center justify-between px-4">
            <a href="#" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 text-white flex items-center justify-center shadow">
                <School className="h-5 w-5" />
              </div>
              <span className="font-bold text-gray-800">Orange Blocks School</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-sm font-medium text-gray-700 hover:text-gray-900">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="#admissions" className="rounded-full bg-gray-900 text-white px-4 py-2 text-sm font-semibold hover:bg-black">
                Apply Now
              </a>
            </div>

            <button onClick={() => setOpen((o) => !o)} className="md:hidden inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white/80 p-2">
              <Menu className="h-5 w-5 text-gray-700" />
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/30 px-4 pb-4">
              <div className="flex flex-col gap-2 pt-3">
                {navItems.map((item) => (
                  <a key={item.label} href={item.href} className="rounded-xl px-3 py-2 text-sm font-medium text-gray-700 hover:bg-white/60">
                    {item.label}
                  </a>
                ))}
                <a href="#admissions" className="rounded-xl bg-gray-900 text-white px-3 py-2 text-sm font-semibold text-center">
                  Apply Now
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
