import Spline from '@splinetool/react-spline'

export default function Hero3D() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/95Gu7tsx2K-0F3oi/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 pointer-events-none flex items-center min-h-[90vh]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-semibold text-gray-700 border border-white/40 shadow">
            <span className="inline-block h-2 w-2 rounded-full bg-orange-500" />
            Innovative K-12 Education
          </div>

          <h1 className="mt-5 text-4xl sm:text-6xl font-extrabold text-gray-900 leading-tight">
            Learn, build and play with
            <span className="block bg-gradient-to-r from-orange-600 via-amber-500 to-lime-500 bg-clip-text text-transparent"> Orange Blocks</span>
          </h1>

          <p className="mt-4 max-w-2xl text-gray-700 text-lg">
            A creative school blending technology, arts, and playful learning in a safe and inspiring environment.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 pointer-events-auto">
            <a href="#programs" className="rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-semibold hover:bg-black">Explore Programs</a>
            <a href="#admissions" className="rounded-full bg-white/80 backdrop-blur border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-800 hover:bg-white">Apply Now</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
    </section>
  )
}
