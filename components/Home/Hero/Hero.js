import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";

const Dev = dynamic(() => import("@/components/Home/Hero/Dev"), {
  ssr: false,
});

export default function Hero() {
  return (
    <>
      <section id="hero">
        <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row items-center gap-10">
          <div className="flex flex-col lg:w-1/2 space-y-10 items-center">
            <h1 className="text-4xl font-thin text-center xl:text-6xl lg:max-w-md lg:text-left">
              We are <span className="font-bold ">not just web developers</span>{" "}
            </h1>

            <p className="text-2xl text-center text-slate-400 lg:max-w-md lg:text-left">
              we will build you a{" "}
              <span className="font-bold underline">free</span> professional
              customised website and optimize your business and brand to reach
              it's full potential.
            </p>

            <Link
              href="/contact"
              className={`p-4 text-center font-bold text-xl text-slate-100 w-full 
              hover:text-slate-300 rounded bg-cyan-600 hover:bg-cyan-900 self-center rounded-full`}
            >
              Request a call
            </Link>
          </div>
          <div className="mx-auto md:w-8/12 lg:mb-0 z-100">
            <Dev />
          </div>
        </div>
      </section>
    </>
  );
}
