import Layout from '../components/Layout'

export default function AdmissionsPage() {
  return (
    <Layout>
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h1 className="text-4xl font-bold text-gray-900">Admissions</h1>
          <p className="mt-3 text-gray-700">We keep things welcoming and simple. Reach out, visit, and apply when you're ready.</p>

          <div className="mt-10 grid lg:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Steps</h3>
              <ol className="mt-3 space-y-2 text-gray-700 list-decimal list-inside">
                <li>Book a campus visit</li>
                <li>Complete the application form</li>
                <li>Share previous reports (if any)</li>
                <li>Friendly family interview</li>
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
    </Layout>
  )
}
