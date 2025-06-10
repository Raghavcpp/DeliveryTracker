import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";
import './TrackingAnimations.css';
import { packageData } from "../assets/constant";

const TrackingAnimation = () => {
  const pkg = packageData.package[0];

  const statusStages = ["In Warehouse", "Not Dispatched", "On the way", "Delivered"];

  const getProgressIndex = (status) => {
    switch (status) {
      case "Not dispatched":
        return 1;
      case "On the way":
        return 2;
      case "Delivered":
        return 3;
      default:
        return 0;
    }
  };

  const currentStage = getProgressIndex(pkg.packageStatus);

  return (
    <section className="vh-100" style={{ backgroundColor: "#8c9eff" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol size="12">
            <MDBCard className="card-stepper text-black" style={{ borderRadius: "16px" }}>
              <MDBCardBody className="p-5">
                {/* Invoice Header */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-5 ">
                  <div className="pb-0 sm:pb-5">
                    <MDBTypography tag="h5" className="mb-0 text-sm md:text-lg lg:text-xl">
                      INVOICE{" "}
                      <span className="text-primary font-semibold">
                        #{pkg.packageNumber}
                      </span>
                    </MDBTypography>
                  </div>
                  <div className="text-end">
                    <p className="mb-0 text-xs md:text-sm">Expected Arrival <span>{pkg.arrivalDate}</span></p>
                    <p className="mb-0">Tracking ID <span className="font-weight-bold">{pkg.trackingNumber}</span></p>
                  </div>
                </div>

                {/* Progress bar */}
                <ul id="progressbar-2" className="d-flex justify-content-between mx-0 mt-0 mb-5 px-0 pt-0 pb-2">
                  {statusStages.map((label, index) => (
                    <li
                      key={index}
                      className={`step step0 text-center ${index <= currentStage ? 'active' : 'text-muted'}`}
                    ></li>
                  ))}
                </ul>


                {/* Stage Icons & Labels */}
                <div className="d-flex justify-content-between">
                  <div className="d-lg-flex align-items-center">
                    <MDBIcon fas icon="warehouse me-lg-4 mb-3 mb-lg-0" size="2x" />
                    <div>
                      <p className="fw-bold mb-1 text-sm md:text-base">Package</p>
                      <p className="fw-bold mb-0 text-sm md:text-base">In Warehouse</p>
                    </div>
                  </div>
                  <div className="d-lg-flex align-items-center">
                    <MDBIcon fas icon="store me-lg-4 mb-3 mb-lg-0" size="2x" />
                    <div>
                      <p className="fw-bold mb-1 text-sm md:text-base">Store</p>
                      <p className="fw-bold mb-0 text-sm md:text-base">Awaiting Dispatch</p>
                    </div>
                  </div>
                  <div className="d-lg-flex align-items-center">
                    <MDBIcon fas icon="truck me-lg-4 mb-3 mb-lg-0" size="2x" />
                    <div>
                      <p className="fw-bold mb-1 text-sm md:text-base">Transit</p>
                      <p className="fw-bold mb-0 text-sm md:text-base">On the Way</p>
                    </div>
                  </div>                  
                  <div className="d-lg-flex align-items-center">
                    <MDBIcon fas icon="check-circle me-lg-4 mb-3 mb-lg-0" size="2x" />
                    <div>
                      <p className="fw-bold mb-1 text-sm md:text-base">Delivered</p>
                      <p className="fw-bold mb-0 text-sm md:text-base">Completed</p>
                    </div>
                  </div>

                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default TrackingAnimation;

// import React from "react";
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCol,
//   MDBContainer,
//   MDBRow,
//   MDBTypography,
//   MDBIcon
// } from "mdb-react-ui-kit";
// import './TrackingAnimations.css';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import { packageData } from "../assets/constant";

// const TrackingAnimation = () => {
//   const pkg = packageData.package[0];

//   // Define progress steps based on status
//   const statusSteps = {
//     "Processed": 1,
//     "Shipped": 2,
//     "On the way": 3,
//     "Delivered": 4
//   };

//   const currentStep = statusSteps[pkg.packageStatus] || 1;

//   return (
//     <section className="vh-100 bg-[#8c9eff] text-[12px] sm:text-[16px]">
//       <MDBContainer className="py-5 h-100">
//         <MDBRow className="justify-content-center align-items-center h-100">
//           <MDBCol size="12">
//             <MDBCard className="card-stepper text-black rounded-3">
//               <MDBCardBody className="p-3 sm:p-5">
//                 <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
//                   <div>
//                     <MDBTypography tag="h6" className="mb-1 text-sm sm:text-base">
//                       INVOICE <span className="text-primary font-semibold">#{pkg.packageNumber}</span>
//                     </MDBTypography>
//                   </div>
//                   <div className="text-start sm:text-end text-xs sm:text-sm">
//                     <p className="mb-0">Expected Arrival <span>01/12/19</span></p>
//                     <p className="mb-0">USPS <span className="font-semibold">234094567242423422898</span></p>
//                   </div>
//                 </div>

//                 <ul id="progressbar-2" className="flex justify-between mx-0 mt-0 mb-4 px-0 pt-0 pb-2 text-[10px] sm:text-sm">
//                   {[1, 2, 3, 4].map((step) => (
//                     <li
//                       key={step}
//                       className={`step0 text-center ${currentStep >= step ? 'active' : 'text-muted'}`}
//                       id={`step${step}`}
//                     ></li>
//                   ))}
//                 </ul>

//                 <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-4 text-center sm:text-left">
//                   <div className="flex flex-col items-center sm:flex-row sm:items-center">
//                     <MDBIcon fas icon="clipboard-list" size="lg" className="mb-1 sm:mb-0 sm:me-3" />
//                     <div>
//                       <p className="font-bold mb-0 text-xs sm:text-sm">Order Processed</p>
//                     </div>
//                   </div>
//                   <div className="flex flex-col items-center sm:flex-row sm:items-center">
//                     <MDBIcon fas icon="box-open" size="lg" className="mb-1 sm:mb-0 sm:me-3" />
//                     <div>
//                       <p className="font-bold mb-0 text-xs sm:text-sm">Order Shipped</p>
//                     </div>
//                   </div>
//                   <div className="flex flex-col items-center sm:flex-row sm:items-center">
//                     <MDBIcon fas icon="shipping-fast" size="lg" className="mb-1 sm:mb-0 sm:me-3" />
//                     <div>
//                       <p className="font-bold mb-0 text-xs sm:text-sm">On the Route</p>
//                     </div>
//                   </div>
//                   <div className="flex flex-col items-center sm:flex-row sm:items-center">
//                     <MDBIcon fas icon="home" size="lg" className="mb-1 sm:mb-0 sm:me-3" />
//                     <div>
//                       <p className="font-bold mb-0 text-xs sm:text-sm">Arrived</p>
//                     </div>
//                   </div>
//                 </div>
//               </MDBCardBody>
//             </MDBCard>
//           </MDBCol>
//         </MDBRow>
//       </MDBContainer>
//     </section>
//   );
// };

// export default TrackingAnimation;


// import React from "react";
// import { Truck, Store, Package, CheckCircle } from "lucide-react";
// import { motion } from "framer-motion";

// const stages = [
//   { label: "In Warehouse", icon: <Package /> },
//   { label: "Nearest Store", icon: <Store /> },
//   { label: "Dispatched", icon: <Truck /> },
//   { label: "Delivered", icon: <CheckCircle /> },
// ];
// const progress = 3;
// const TrackingAnimation = () => {
//   return (
//     <div className="w-full">
//       <h2 className="text-2xl font-semibold text-center mb-8">Package Journey</h2>
//       <div className="flex w-190 justify-between gap-0.5 px-4">
//         <>
//           <div className="flex flex-col items-center text-center relative" >
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ delay: 0 * 0.3, type: "spring" }}
//               className="bg-blue-100 p-4 rounded-full text-blue-600 mb-2"
//             >
//               {stages[0].icon}
//             </motion.div>
//             <span className="text-sm font-medium">{stages[0].label}</span>
//           </div>
//           <div className=" mt-7  w-full max-h-1  z-[-1] hidden sm:block">
//             {progress > 0 &&
//               <div className="bg-blue-300 h-1 delay-150 animate-comes"></div>
//             }
//           </div>
//         </>
//         <>
//           <div className="flex flex-col items-center text-center relative" >
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ delay: 1 * 0.3, type: "spring" }}
//               className="bg-blue-100 p-4 rounded-full text-blue-600 mb-2"
//             >
//               {stages[1].icon}
//             </motion.div>
//             <span className="text-sm font-medium">{stages[1].label}</span>
//           </div>
//           <div className=" mt-7  w-full max-h-1  z-[-1] hidden sm:block">
//           {progress > 1 &&
//               <div className="bg-blue-300 h-1 delay-150 animate-comes"></div>
//             }  
//           </div>
//         </>
//         <>
//           <div className="flex flex-col items-center text-center relative" >
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ delay: 2 * 0.3, type: "spring" }}
//               className="bg-blue-100 p-4 rounded-full text-blue-600 mb-2"
//             >
//               {stages[2].icon}
//             </motion.div>
//             <span className="text-sm font-medium">{stages[2].label}</span>
//           </div>
//           <div className=" mt-7  w-full max-h-1  z-[-1] hidden sm:block">
//             {progress > 2 &&
//               <div className="bg-blue-300 h-1 delay-150 animate-comes"></div>
//             }
//             </div>
//         </>
//         <>
//           <div className="flex flex-col items-center text-center relative" >
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ delay: 3 * 0.3, type: "spring" }}
//               className="bg-blue-100 p-4 rounded-full text-blue-600 mb-2"
//             >
//               {stages[3].icon}
//             </motion.div>
//             <span className="text-sm font-medium">{stages[3].label}</span>
//           </div>
//         </>
//       </div>
//     </div>
//   );
// };

// export default TrackingAnimation;
