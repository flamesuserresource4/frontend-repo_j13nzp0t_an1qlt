import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout>
      <section className="py-24 bg-gradient-to-b from-orange-50 to-white">
        <div className="mx-auto max-w-5xl px-6">
          <h1 className="text-4xl font-bold text-gray-900">About Our Preschool</h1>
          <p className="mt-4 text-gray-700 max-w-3xl">
            We are a warm, play-based preschool focused on nurturing social-emotional growth,
            early literacy, and creativity. Our days are filled with discovery centers, outdoor
            exploration, music, and story time — all guided by passionate educators.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">Our Philosophy</h3>
              <p className="mt-2 text-gray-700">Children learn best through play. We create hands-on experiences that build curiosity, confidence, and kindness.</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">Safety & Care</h3>
              <p className="mt-2 text-gray-700">Small class sizes, secure facilities, healthy snacks, and caring teachers ensure children feel safe and supported.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
