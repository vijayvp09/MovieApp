import { Routes, Route, Link } from 'react-router-dom'
import './App.scss'
import { Home, Header, Footer, PageNotFound, MovieDetails } from './components'

function App() {

  return (
    <div className="app">
      <Header />
      <div className="container">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie/:imdbId' element={<MovieDetails />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
