import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main className="pt-20">{children}</main>
      <footer className="py-12 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} Orange Blocks School. All rights reserved.</p>
            <div className="flex items-center gap-4 text-sm">
              <a href="/about" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="/programs" className="text-gray-600 hover:text-gray-900">Programs</a>
              <a href="/admissions" className="text-gray-600 hover:text-gray-900">Admissions</a>
              <a href="/campus" className="text-gray-600 hover:text-gray-900">Campus Life</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
