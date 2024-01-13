import React from "react";
import TechCarousel from "./TechCarousel";

export default function StayingAhead() {
  return (
    <>
      <section className="min-h-48 p-6">
        <div className="container flex flex-col mx-auto pt-32 lg:pt-32 justify-center gap-10 items-center">
          <div className="flex flex-col lg:w-1/2 space-y-10 items-center">
            <h1 className="text-4xl font-bold text-center">
              Staying ahead of technology
            </h1>

            <p className=" mx-auto text-center text-slate-400">
              With a relentless commitment to delivering unparalleled content,
              we strategically embrace emerging technologies to ensure you
              receive the best solutions in the most cost-effective manner.
            </p>
          </div>

          <div className="container flex flex-col-reverse mx-auto lg:flex-row items-center mt-14 lg:mt-14 gap-10">
            {/* <div className="mx-auto md:w-96 lg:mb-0 z-100"> */}
            <TechCarousel />
            {/* </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
