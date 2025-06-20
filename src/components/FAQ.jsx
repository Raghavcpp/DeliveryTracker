import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  
  return (
    <div className="max-w-3xl sm:mx-auto mx-4">
      <h2 className="text-2xl font-semibold text-center mb-6">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="space-y-2">
        <AccordionItem value="q1">
          <AccordionTrigger>How can I track my package?</AccordionTrigger>
          <AccordionContent>
            You can track your package using the search bar at the top of the page. Just enter your package number.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="q2">
          <AccordionTrigger>What if my package is delayed?</AccordionTrigger>
          <AccordionContent>
            If your package is delayed beyond the estimated time, contact our support team using the form below.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="q3">
          <AccordionTrigger>Can I change my delivery address?</AccordionTrigger>
          <AccordionContent>
            Address changes are possible only before the item is dispatched. Contact support to make changes.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQ;
