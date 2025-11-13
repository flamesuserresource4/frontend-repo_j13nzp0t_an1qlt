import Layout from '../components/Layout'

export default function Campus() {
  const features = [
    {
      title: 'Bright Classrooms',
      text: 'Sunlit spaces with learning centers for building, reading, and art.',
    },
    { title: 'Outdoor Play', text: 'Secure playground with slides, sand, nature corners, and bikes.' },
    { title: 'Creative Studio', text: 'Music, movement, and messy art that spark imagination.' },
  ]

  return (
    <Layout>
      <section className="py-24 bg-gradient-to-b from-amber-50 to-white">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-4xl font-bold text-gray-900">Campus Life</h1>
          <p className="mt-3 text-gray-700 max-w-2xl">A safe, joyful environment where little learners thrive.</p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900">{f.title}</h3>
                <p className="mt-2 text-gray-600">{f.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-orange-200 bg-orange-50 p-6">
            <h3 className="text-lg font-semibold text-gray-900">Daily Rhythm</h3>
            <p className="mt-2 text-gray-700">Morning circle, centers, snack, outdoor play, story time, lunch, rest, and afternoon discovery.</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
