import React from "react";
import { Truck, Store, Package, CheckCircle } from "lucide-react";
import { gsap } from 'gsap/gsap-core';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const TrackingAnimation = ({ data }) => {
  const pkg = {
    packageNumber: data.sku || `PKG-${data.id}`,
    trackingNumber: data.id,
    customerName: data.reviews?.[0]?.reviewerName || "Unknown",
    storeName: data.brand || "Unknown Brand",
    itemName: data.title,
    itemPrice: data.price,
    packageStatus: status,
    arrivalDate: new Date(data.meta?.updatedAt || Date.now()).toLocaleDateString(),
    review: data.reviews,
  };

  const stages = [
    { label: "In Warehouse", icon: <Package /> },
    { label: "Nearest Store", icon: <Store /> },
    { label: "Dispatched", icon: <Truck /> },
    { label: "Delivered", icon: <CheckCircle /> },
  ];
  useGSAP(() => {
    gsap.utils.toArray('.expText').forEach((text) => {
      gsap.from(text, {
        xPercent: 0,
        opacity: 0,
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: text,
          start: 'top 60%'
        }
      })
    })

  }, []);
  return (
    <section id="experience" className='w-full md:mt-40 mt-20 section-padding xl:px-0'>
      <div className="w-full h-full md:px-20  px-5">
        <div className="mt-32 relative">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-5 ">
            <div className="pb-0 sm:pb-5">
              <h5 className="mb-0 text-sm md:text-lg lg:text-xl">
                INVOICE{" "}
                <span className="text-primary font-semibold">
                  #{pkg.packageNumber}
                </span>
              </h5>
            </div>
            <div className="text-end">
              <p className="mb-0 text-xs md:text-sm">Expected Arrival <span>{pkg.arrivalDate}</span></p>
              <p className="mb-0">Tracking ID <span className="font-weight-bold">{pkg.trackingNumber}</span></p>
            </div>
          </div>
          <div className="relative z-50 xl:space-y-32 space-y-10 ">
            {pkg.review.map((card, index) => (
              <div key={index} className="exp-card-wrapper">
                <div className="flex items-start">
                  <div className="expText flex  md:gap-10 gap-5 relative z-20 sm:w-100 w-[80%] mx-auto right-[10%]">
                    <div className="timeline-logo">
                      {stages[index].icon}
                    </div>
                    <div className="min-w-full">
                      <h2 className='font-semibold text-2xl'>{stages[index].label}</h2>
                      <div className="flex flex-row  justify-between">
                        <p className="text-[#5b6b7c] italic ">
                          {card.reviewerName}
                        </p>
                        <p className="text-bold text-black  ">
                          {new Date(card.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrackingAnimation