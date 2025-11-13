import Layout from '../components/Layout'

export default function ProgramsPage() {
  const programs = [
    {
      title: 'Toddler (2–3 years)',
      desc: 'Gentle routines, sensory play, and social skills in a calm, joyful setting.',
      color: 'from-orange-400 to-amber-500',
    },
    {
      title: 'Preschool (3–4 years)',
      desc: 'Language-rich play, early numeracy, art, music, and outdoor exploration.',
      color: 'from-pink-500 to-rose-500',
    },
    {
      title: 'Pre-K (4–5 years)',
      desc: 'Kindergarten readiness through hands-on projects, stories, and problem-solving.',
      color: 'from-lime-500 to-emerald-500',
    },
  ]

  return (
    <Layout>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl font-bold text-gray-900">Our Programs</h1>
          <p className="mt-3 text-gray-700 max-w-2xl">Developmentally appropriate experiences for every age, led by nurturing teachers.</p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((p) => (
              <div key={p.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${p.color} shadow`} />
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{p.title}</h3>
                <p className="mt-2 text-gray-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
