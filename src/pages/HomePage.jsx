import React from "react";
import Header from "../components/Header";
import TrackingAnimation from "../components/TrackingAnimation";
import PackageTable from "../components/PackageTable";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <div className="flex-1 space-y-12  sm:px-6 lg:px-16 py-10">
        <TrackingAnimation />
        <PackageTable />
        <FAQ />
        <Contact />
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
