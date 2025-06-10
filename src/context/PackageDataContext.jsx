// src/context/PackageDataContext.js
import { createContext, useContext, useState } from "react";

// Create the context
const PackageDataContext = createContext();

// Custom hook for accessing context easily
export const usePackageData = () => useContext(PackageDataContext);

// Provider component
export const PackageDataProvider = ({ children }) => {
  const [packageData, setPackageData] = useState([]);

  return (
    <PackageDataContext.Provider value={{ packageData, setPackageData }}>
      {children}
    </PackageDataContext.Provider>
  );
};
