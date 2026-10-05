import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import {
  WhoIHelp,
  Process,
  FeaturedWork,
  ExistingSystems,
  Capabilities,
  WhyMe,
  FinalCTA,
  Contact,
  Footer,
} from './components/Sections.jsx'

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Nav />
      <main id="main">
        <Hero />
        <WhoIHelp />
        <Process />
        <FeaturedWork />
        <ExistingSystems />
        <Capabilities />
        <WhyMe />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
