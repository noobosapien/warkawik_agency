import React from "react";
import BrowserSVG from "@/public/browser.svg";
import OpenAISVG from "@/public/openai.svg";
import AzureSVG from "@/public/azure.svg";
import AWSSVG from "@/public/aws.svg";
import KubernetesSVG from "@/public/kubernetes.svg";
import ReactSVG from "@/public/react.svg";
import RustSVG from "@/public/rust.svg";
import WebglSVG from "@/public/webgl.svg";
import WASVG from "@/public/wa.svg";

export default function TechCarousel() {
  return (
    <>
      <div className="flex flex-col items-center gap-10 bg-slate-300 dark:bg-slate-600 p-6 rounded-2xl">
        <div
          id="tech_carousel"
          className=" relative flex flex-row flex-wrap items-center justify-evenly gap-10"
        >
          <img id="openai" className="w-16" src={OpenAISVG.src} />
          <img id="azure" className="w-16" src={AzureSVG.src} />
          <img id="aws" className="w-16" src={AWSSVG.src} />
          <img id="kubernetes" className="w-16" src={KubernetesSVG.src} />
          <img id="react" className="w-16" src={ReactSVG.src} />
          <img id="rust" className="w-16" src={RustSVG.src} />
          <img id="webgl" className="w-16" src={WebglSVG.src} />
          <img id="wa" className="w-16" src={WASVG.src} />
        </div>

        <p className="text-center md:text-left">
          Some of the technologies we use
        </p>
      </div>
    </>
  );
}
