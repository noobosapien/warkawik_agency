import React from "react";
import BrowserSVG from "@/public/browser.svg";
import OpenAISVG from "@/public/openai.svg";
import AzureSVG from "@/public/azure.svg";
import AWSSVG from "@/public/aws.svg";
import KubernetesSVG from "@/public/kubernetes.svg";
import ReactSVG from "@/public/react.svg";
import MidjourneySVG from "@/public/midjourney.svg";
import WebglSVG from "@/public/webgl.svg";
import WASVG from "@/public/wa.svg";
import AISVG from "@/public/ai.svg";
import WebsiteSVG from "@/public/website.svg";
import CloudSVG from "@/public/cloud.svg";

export default function TechCarousel() {
  return (
    <>
      <section className="pb-32">
        <div className="relative container flex flex-col items-start px-6 mx-auto lg:flex-row lg:space-x-7">
          <div className="hidden absolute top-24 w-10/12 left-16 h-3 bg-cyan-600 lg:block"></div>
          <div className="absolute w-2 left-1/2 h-full -ml-1 bg-cyan-600 lg:hidden"></div>

          <div className="relative flex flex-col p-6 space-y-6 rounded-lg lg:w-1/3 bg-slate-300 dark:bg-slate-600">
            <div className="absolute -ml-10 left-1/2 -top-10 lg:left-16">
              <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-slate-100 dark:bg-slate-900">
                <img src={AISVG.src} alt="" />
              </div>
            </div>

            <h5 className="pt-6 text-xl font-bold text-center capitalize lg:text-left">
              Artificial Intelligence
            </h5>

            <p className="text-center lg:text-left">
              Utilizing state of the art AI technologies such as ChatGPT, DALL-E
              2, and Midjourney with our own trained models and configurations
              for more streamlined content just for you.
            </p>

            <div className="flex flex-row gap-4 items-center self-center">
              <div className="flex items-center justify-center w-10 h-10 p-2 rounded-full bg-slate-600 dark:bg-slate-100">
                <img src={OpenAISVG.src} alt="" />
              </div>

              <div className="flex items-center justify-center w-10 h-10 p-2 rounded-full bg-slate-600 dark:bg-slate-100">
                <img src={MidjourneySVG.src} alt="" />
              </div>
            </div>
          </div>

          <div className="relative mt-24 lg:mt-8 flex flex-col p-6 space-y-6 bg-slate-300 dark:bg-slate-600 rounded-lg lg:w-1/3">
            <div className="absolute -ml-10 left-1/2 -top-10 lg:left-16">
              <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-slate-100 dark:bg-slate-900">
                <img src={WebsiteSVG.src} alt="" />
              </div>
            </div>

            <h5 className="pt-6 text-xl font-bold text-center capitalize lg:text-left">
              Front end
            </h5>

            <p className="text-center lg:text-left">
              From landing pages to complex UI systems, get yur website come to
              life with killer content and industry standard designs.
            </p>

            <div className="flex flex-row gap-4 items-center self-center">
              <div className="flex items-center justify-center w-10 h-10 p-2 rounded-full bg-slate-600 dark:bg-slate-100">
                <img src={ReactSVG.src} alt="" />
              </div>

              <div className="flex items-center justify-center w-10 h-10 p-2 rounded-full bg-slate-600 dark:bg-slate-100">
                <img src={WebglSVG.src} alt="" />
              </div>

              <div className="flex items-center justify-center w-10 h-10 p-2 rounded-full bg-slate-600 dark:bg-slate-100">
                <img src={WASVG.src} alt="" />
              </div>
            </div>
          </div>

          <div className="relative mt-24 lg:mt-16 flex flex-col p-6 space-y-6 bg-slate-300 dark:bg-slate-600 rounded-lg lg:w-1/3">
            <div className="absolute flex flex-row gap-4 items-center -ml-10 left-1/2 -top-10 lg:left-16">
              <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-slate-100 dark:bg-slate-900">
                <img src={CloudSVG.src} alt="" />
              </div>
            </div>

            <h5 className="pt-6 text-xl font-bold text-center capitalize lg:text-left">
              Backend / Cloud hosting
            </h5>

            <p className="text-center lg:text-left">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>

            <div className="flex flex-row gap-4 items-center self-center">
              <div className="flex items-center justify-center w-10 h-10 p-2 rounded-full bg-slate-600 dark:bg-slate-100">
                <img src={AzureSVG.src} alt="" />
              </div>

              <div className="flex items-center justify-center w-10 h-10 p-2 rounded-full bg-slate-600 dark:bg-slate-100">
                <img src={AWSSVG.src} alt="" />
              </div>

              <div className="flex items-center justify-center w-10 h-10 p-2 rounded-full bg-slate-600 dark:bg-slate-100">
                <img src={KubernetesSVG.src} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
