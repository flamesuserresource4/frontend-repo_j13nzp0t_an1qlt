import Navbar from './components/Navbar'
import Hero3D from './components/Hero3D'
import Programs from './components/Programs'
import Admissions from './components/Admissions'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main className="pt-20">
        <Hero3D />
        <Programs />
        <Admissions />
        <footer className="py-12 border-t border-gray-200">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-600">© {new Date().getFullYear()} Orange Blocks School. All rights reserved.</p>
              <div className="flex items-center gap-4 text-sm">
                <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
                <a href="#programs" className="text-gray-600 hover:text-gray-900">Programs</a>
                <a href="#admissions" className="text-gray-600 hover:text-gray-900">Admissions</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
