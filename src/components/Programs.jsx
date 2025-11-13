export default function Programs() {
  const programs = [
    {
      title: 'Early Explorers (K-2)',
      desc: 'Foundations in creativity, storytelling, and playful coding with age-appropriate tools.',
      color: 'from-orange-400 to-amber-500',
    },
    {
      title: 'Creators Lab (3-5)',
      desc: 'Blend of art, science, and technology—robotics, music tech, and hands-on projects.',
      color: 'from-pink-500 to-rose-500',
    },
    {
      title: 'Innovators Studio (6-8)',
      desc: 'Deeper problem solving with 3D design, game making, web creation, and team challenges.',
      color: 'from-lime-500 to-emerald-500',
    },
  ]

  return (
    <section id="programs" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Programs</h2>
          <p className="text-gray-600 mt-2 max-w-2xl">Our curriculum grows with your child—from playful discovery to confident creation.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p) => (
            <div key={p.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${p.color} shadow`} />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-gray-600">{p.desc}</p>
              <a href="#admissions" className="mt-4 inline-block text-sm font-semibold text-orange-600 hover:text-orange-700">Learn more →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
