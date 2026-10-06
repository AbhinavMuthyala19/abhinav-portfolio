import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import Hero from './components/blocks/Hero.jsx'
import WhoIHelp from './components/blocks/WhoIHelp.jsx'
import WhatIDo from './components/blocks/WhatIDo.jsx'
import HowIWork from './components/blocks/HowIWork.jsx'
import FeaturedWork from './components/blocks/FeaturedWork.jsx'
import Systems from './components/blocks/Systems.jsx'
import WhyMe from './components/blocks/WhyMe.jsx'
import FinalCTA from './components/blocks/FinalCTA.jsx'

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <WhoIHelp />
        <WhatIDo />
        <HowIWork />
        <FeaturedWork />
        <Systems />
        <WhyMe />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
