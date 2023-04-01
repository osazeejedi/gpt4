import React from 'react'
import {Blog, Features, Footer, Header, Possibilty, Whatgpt4} from './containers'
import {Cta, Navbar, Brand} from './components'

const App = () => {

  return (
   <div className="App">
    <div className="gradient__bg">
      <Navbar/>
      <Header/>
    </div>
    <Brand />
    <Whatgpt4 />
    <Features />
    <Possibilty />
    <Cta />
    <Blog />
    <Footer />
   </div>
  )
}

export default App
