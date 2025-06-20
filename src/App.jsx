import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TrackingPage from "./components/TrackingPage";
import Header from "./components/Header";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/:trackingId" element={<TrackingPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <div className="flex-1 space-y-12  sm:px-6 lg:px-16 py-10">
          <FAQ />
          <Contact />
        </div>
        <Footer />
      </div>
    </Router>
  );
}
export default App
