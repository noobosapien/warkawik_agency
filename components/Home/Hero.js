import dynamic from "next/dynamic";
import React from "react";

const Dev = dynamic(() => import("@/components/Home/Dev"), {
  ssr: false,
});

export default function Hero() {
  return (
    <>
      <section id="hero">
        <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row items-center">
          <div className="flex flex-col lg:w-1/2 space-y-10 items-center">
            <h1 className="text-4xl font-bold text-center xl:text-6xl lg:max-w-md lg:text-left">
              We create mordern/fast SEO friendly websites
            </h1>

            <p className="text-2xl text-center text-slate-400 lg:max-w-md lg:text-left">
              Build your brand's recognition with cutting edge web technologies
              to stay ahead of competition.
            </p>
          </div>
          <div className="mx-auto md:w-5/6lg:mb-0 z-100">
            <Dev />
          </div>
        </div>
      </section>
    </>
  );
}
