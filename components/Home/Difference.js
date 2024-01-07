import React from "react";
import ServiceCard from "./ServiceCard";

const cards = [
  {
    heading: "Web Design / Web Development",
    content:
      "Warkawik is a customer-centric digital agency, where your vision is our top priority. We are committed to delivering a seamless and personalized experience, guided by industry best practices that ensure your satisfaction at every step of the journey.",
    num: 1,
  },
  {
    heading: "Brand Identity Creation",
    content:
      "Our experienced team collaborates closely with you to understand your vision, values, and aspirations, crafting a brand identity that resonates with authenticity and purpose. We pride ourselves on transparent communication, strategic thinking, and a relentless pursuit of perfection to bring your brand to life.",
    num: 2,
  },
  {
    heading: "Cloud to Cloud Migration",
    content:
      "We understand that navigating the complexities of cloud migration can be a daunting task, and that's where our dedicated team steps in with confidence and expertise. Our commitment goes beyond seamless migration – we prioritize your unique business needs, ensuring a customized and stress-free transition to the cloud.",
    num: 3,
  },
];

export default function Difference() {
  return (
    <>
      <div id="difference" className="dark:bg-slate-700 bg-slate-200"></div>
      <section className="dark:bg-slate-700 bg-slate-200 min-h-48">
        <div className="container flex flex-col mx-auto p-16 lg:pt-32 justify-center items-center">
          <div className="flex flex-col lg:w-1/2 space-y-4 items-center">
            <h1 className="text-4xl font-bold text-center">We excel in</h1>

            <p className="max-w-xs mx-auto text-center text-slate-400">
              We strive for your digital presence. We are savants in these but
              not limited to.
            </p>
          </div>

          <div className="relative container flex flex-col items-center px-6 mx-auto lg:flex-row lg:space-x-7">
            {/* <div className="hidden absolute top-24 w-10/12 left-16 h-3 bg-cyan md:block"></div> */}

            {/* <div className="absolute w-2 left-1/2 h-full -ml-1 bg-cyan md:hidden"></div> */}

            {cards.map((card) => (
              <ServiceCard heading={card.heading} Num={card.num}>
                {card.content}
              </ServiceCard>
            ))}
          </div>
        </div>
      </section>
      <div id="difference2" className="dark:bg-slate-700 bg-slate-200"></div>
    </>
  );
}
