import React from "react";
import ServiceCard from "./ServiceCard";

const cards = [
  {
    heading: "Web Design / Web Development",
    content:
      "Warkawik is a customer-centric digital agency, where your vision is our top priority. We cater to your imagination and will not limit it in any way.",
    num: 1,
  },
  {
    heading: "Brand Identity Creation",
    content:
      "We collaborate closely with you to understand your vision, values, and aspirations, crafting a brand identity that resonates with authenticity and purpose.",
    num: 2,
  },
  {
    heading: "Cloud Infrastructure / Cloud Migration",
    content:
      "We understand that navigating the complexities of the cloud can be a daunting task, therefore we step in with confidence and expertise for a seamless service accustomed to your unique business needs.",
    num: 3,
  },
];

export default function Difference() {
  return (
    <>
      <div id="difference" className="dark:bg-slate-700 bg-slate-200"></div>
      <section className="dark:bg-slate-700 bg-slate-200 min-h-48 p-6">
        <div className="container flex flex-col mx-auto  lg:pt-32 justify-center items-center">
          <div className="flex flex-col lg:w-1/2 space-y-4 items-center">
            <h1 className="text-4xl font-bold text-center">We excel in</h1>

            <p className="mx-auto text-center text-slate-400">
              We strive for your digital presence. We are savants in these but
              not limited to.
            </p>
          </div>

          <div className="relative container flex flex-col items-center px-6 mx-auto lg:flex-row lg:space-x-7">
            {cards.map((card) => (
              <ServiceCard
                key={card.num + "service_cards"}
                heading={card.heading}
                Num={card.num}
              >
                {card.content}
              </ServiceCard>
            ))}
          </div>

          <div className="flex flex-col lg:w-1/2 space-y-4 items-center pt-12">
            <a
              href="#"
              className="max-w-xs mx-auto text-center py-2 px-6 rounded-2xl border-2 border-cyan-600/50"
            >
              View all our services
            </a>
          </div>
        </div>
      </section>
      <div id="difference2" className="dark:bg-slate-700 bg-slate-200"></div>
    </>
  );
}
