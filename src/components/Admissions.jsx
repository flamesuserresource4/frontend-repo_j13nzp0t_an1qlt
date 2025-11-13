export default function Admissions() {
  return (
    <section id="admissions" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Admissions</h2>
          <p className="text-gray-600 mt-2 max-w-2xl">We keep the process simple and welcoming. Join our community of curious creators.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Steps</h3>
            <ol className="mt-3 space-y-2 text-gray-700 list-decimal list-inside">
              <li>Book a campus visit</li>
              <li>Complete the application form</li>
              <li>Share previous reports (if any)</li>
              <li>Attend a friendly interview</li>
            </ol>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Quick Inquiry</h3>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              <input className="rounded-xl border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" placeholder="Parent/Guardian Name" />
              <input className="rounded-xl border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" placeholder="Email" type="email" />
              <input className="sm:col-span-2 rounded-xl border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" placeholder="Child's Name" />
              <textarea rows="4" className="sm:col-span-2 rounded-xl border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" placeholder="Tell us about your child" />
            </div>
            <button className="mt-4 rounded-full bg-orange-600 text-white px-6 py-3 text-sm font-semibold hover:bg-orange-700">Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}
