import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Cours from './pages/Cours'
import APropos from './pages/APropos'
import Contact from './pages/Contact'
import Evenements from './pages/Evenements'
import Planning from './pages/Planning'
import FAQ from './pages/FAQ'
import Inscription from './pages/Inscription'
import EvenementsAdmin from './pages/admin/EvenementsAdmin'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <ScrollToTop />
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cours" element={<Cours />} />
          <Route path="/planning" element={<Planning />} />
          <Route path="/evenements" element={<Evenements />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/admin/evenements" element={<EvenementsAdmin />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
