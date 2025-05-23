import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Nav from "./assets/components/Nav"
import Footer from './assets/components/Footer'
import Home from "./assets/components/HomePage/Home";
import BookingPage from './assets/components/BookingPage/BookingPage'
import AboutPage from './assets/components/AboutPage/AboutPage'
import MenuPage from './assets/components/MenuPage/MenuPage'

function App() {

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
