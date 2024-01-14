import React from "react";
import InnovateBG from "./InnovateBG";

export default function Innovation() {
  return (
    <>
      <section className="min-h-48 p-6">
        <div className="container flex flex-col mx-auto  lg:pt-32 justify-center items-center">
          <div className="flex flex-col lg:w-1/2 space-y-4 items-center">
            <h1 className="text-4xl font-bold text-center">
              Where ever you might be in New Zealand
            </h1>

            <p className="mx-auto text-center text-slate-400">
              We will make your web dreams a reality.
            </p>

            <a
              href="#"
              className="px-8 py-3 font-bold text-slate-200 bg-cyan-600 rounded-full hover:opacity-70"
            >
              Get in touch
            </a>
          </div>

          <div>
            <InnovateBG />
          </div>
        </div>
      </section>
    </>
  );
}
