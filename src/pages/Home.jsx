import Hero3D from '../components/Hero3D'
import Programs from '../components/Programs'
import Admissions from '../components/Admissions'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <Hero3D />
      <Programs />
      <Admissions />
    </Layout>
  )
}
