// src/components/PackageTable.jsx
import React from "react";
import { packageData } from "../assets/constant";

const PackageTable = () => {
  const pkg = packageData.package[0]; // Single package

  return (
    <div className="px-4 py-6">
      <h2 className="text-2xl font-semibold text-center mb-6">Package Details</h2>

      {/* Responsive Card Layout for Mobile */}
      <div className="md:hidden bg-white rounded-xl shadow-md p-4 space-y-3">
        <div><span className="font-semibold">Package:</span> #{pkg.packageNumber}</div>
        <div><span className="font-semibold">Tracking ID:</span> {pkg.trackingNumber}</div>
        <div><span className="font-semibold">Customer:</span> {pkg.customerName}</div>
        <div><span className="font-semibold">Store:</span> {pkg.storeName}</div>
        <div><span className="font-semibold">Item:</span> {pkg.itemName}</div>
        <div><span className="font-semibold">Price:</span> ₹{pkg.itemPrice}</div>
        <div>
          <span className="font-semibold">Status:</span>{" "}
          <span
            className={`inline-block px-2 py-1 text-sm rounded-full font-medium ${
              pkg.packageStatus === "Delivered"
                ? "bg-green-100 text-green-700"
                : pkg.packageStatus === "On the way"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {pkg.packageStatus}
          </span>
        </div>
        <div><span className="font-semibold">{pkg.packageStatus === "Arrival Date"? 'ssd':'Expected Arrival Date'}:</span> {pkg.arrivalDate}</div>
      </div>

      {/* Table layout for medium+ screens */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full bg-white rounded-xl shadow-md mt-4">
          <thead className="bg-blue-100 text-blue-700">
            <tr>
              <th className="px-4 py-2 text-left">Package</th>
              <th className="px-4 py-2 text-left">Tracking ID</th>
              <th className="px-4 py-2 text-left">Customer</th>
              <th className="px-4 py-2 text-left">Store</th>
              <th className="px-4 py-2 text-left">Item</th>
              <th className="px-4 py-2 text-left">Price (₹)</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">{pkg.packageStatus === "Arrival Date"? 'ssd':'Expected Arrival Date'}</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-50">
              <td className="px-4 py-2">#{pkg.packageNumber}</td>
              <td className="px-4 py-2">{pkg.trackingNumber}</td>
              <td className="px-4 py-2">{pkg.customerName}</td>
              <td className="px-4 py-2">{pkg.storeName}</td>
              <td className="px-4 py-2">{pkg.itemName}</td>
              <td className="px-4 py-2">₹{pkg.itemPrice}</td>
              <td className="px-4 py-2">
                <span
                  className={`inline-block px-2 py-1 text-sm rounded-full font-medium ${
                    pkg.packageStatus === "Delivered"
                      ? "bg-green-100 text-green-700"
                      : pkg.packageStatus === "On the way"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {pkg.packageStatus}
                </span>
              </td>
              <td className="px-4 py-2">{pkg.arrivalDate}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PackageTable;
