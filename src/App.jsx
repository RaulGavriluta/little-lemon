import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Nav from "./assets/components/Nav"
import Footer from './assets/components/Footer'
import Home from "./assets/components/Home";
import BookingPage from "./assets/components/BookingPage";

function App() {

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
