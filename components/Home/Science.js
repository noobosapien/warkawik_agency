import React from "react";
import ScienceTable from "./ScienceTable";
import WGLColorWheel from "./webglColorWheel";

export default function Science() {
  return (
    <>
      <div className="dark:bg-slate-700 bg-slate-200"></div>
      <section className="dark:bg-slate-700 bg-slate-200 min-h-48 p-6">
        <div className="container flex flex-col mx-auto  lg:pt-32 justify-center items-center">
          <div className="flex flex-col lg:w-1/2 space-y-4 items-center">
            <h1 className="text-4xl font-bold text-center">
              Science behind every design
            </h1>

            <p className="mx-auto text-center text-slate-400">
              We use industry standards for our designs as well as color
              psychology to get you the best results out of your web site.
            </p>
          </div>

          <div className="relative container flex flex-col items-center px-6 mx-auto justify-evenly lg:flex-row lg:space-x-7">
            <WGLColorWheel />
            <ScienceTable />
          </div>
        </div>
      </section>
    </>
  );
}
