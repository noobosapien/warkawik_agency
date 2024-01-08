import dynamic from "next/dynamic";
import React from "react";

const WebDev = dynamic(() => import("@/components/Home/WebDev"), {
  ssr: false,
});

const Branding = dynamic(() => import("@/components/Home/Branding"), {
  ssr: false,
});

const Migrate = dynamic(() => import("@/components/Home/Migrate"), {
  ssr: false,
});

export default function ServiceCard({ Num, heading, children }) {
  return (
    <>
      <div className="card relative mt-48 md:mt-40 lg:h-96 flex flex-col items-center justify-center pt-6 pb-6 pl-2 pr-2 md:p-6 space-y-6 bg-slate-300 dark:bg-slate-600 rounded-lg lg:w-1/3 ">
        <div className="absolute -top-40 ">
          <div className="flex items-center justify-center w-150 h-150 p-4 rounded-full">
            {Num === 1 ? (
              <WebDev />
            ) : Num === 2 ? (
              <Branding />
            ) : Num === 3 ? (
              <Migrate />
            ) : (
              <></>
            )}
          </div>
        </div>

        <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
          {heading}
        </h5>

        <p className="text-center md:text-left">{children}</p>
      </div>
    </>
  );
}
