import React from 'react'
import "./App.css"
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Education from './components/education/Education'
import Portfolio from './components/porfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import ScrollUp from './components/scrollup/ScrollUp'

const App = () => {
    return (
        <>
        <Header />

        <main className='main'>
            <Home />
            <About />
            <Skills />
            <Education />
            <Portfolio />
            <Contact />
        </main>

        <Footer />
        <ScrollUp />
        </>
    )
}

export default App