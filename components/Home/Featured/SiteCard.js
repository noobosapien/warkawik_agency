import React from "react";
import { v4 as uuidv4 } from "uuid";

import ReactSVG from "@/public/react.svg";
import StrapiSVG from "@/public/strapi.svg";
import MDBSVG from "@/public/mdb.svg";
import AWSSVG from "@/public/aws.svg";
import RectSVG from "@/public/rect.svg";

export default function SiteCard({ left, siteName, tech }) {
  return (
    <>
      <div className="relative w-full">
        <div
          style={{
            left: left ? "-16.6666667%" : "100%",
            top: "calc(50% - 0.25rem)",
          }}
          className={`absolute z-10 hidden lg:block w-1/6 rounded ${
            left ? "left-0" : "left-full"
          } h-2 bg-cyan-600`}
        ></div>

        <div
          className="absolute hidden lg:block w-10 h-10 rounded-full bg-white dark:bg-slate-900 z-10 top-1/2"
          style={{
            left: left ? "calc(0% - 1.25rem)" : "calc(100% - 1.25rem)",
            top: "calc(50% - 1.25rem)",
          }}
        ></div>

        <div
          className="absolute z-10 w-1 h-full bg-cyan-600 opacity-20"
          style={{
            left: left ? "80%" : "20%",
          }}
        ></div>

        <div
          className="absolute z-10 w-full h-1 bg-cyan-600 opacity-20"
          style={{
            top: "20%",
          }}
        ></div>

        <div className="relative flex flex-row justify-center w-full h-64 p-6 space-y-6 rounded-lg bg-slate-300 dark:bg-slate-600">
          <p className="font-medium">{siteName}</p>

          <div
            className={`absolute flex flex-col h-full w-1/5 top-0 ${
              left ? "right-0" : "left-0"
            } items-center justify-center items-center space-y-4 px-2`}
          >
            {tech instanceof Array &&
              tech.map((t, i) => (
                <>
                  <div key={uuidv4() + i}>
                    {t == "react" ? (
                      <img className="w-7" src={ReactSVG.src} />
                    ) : t == "mdb" ? (
                      <img className="w-7" src={MDBSVG.src} />
                    ) : t == "aws" ? (
                      <img className="w-7" src={AWSSVG.src} />
                    ) : t == "strapi" ? (
                      <img className="w-7" src={StrapiSVG.src} />
                    ) : (
                      <></>
                    )}
                  </div>
                </>
              ))}
          </div>

          <div className="absolute animate-ping w-10 h-10 rounded-full bg-cyan-600 z-10 bottom-1"></div>
          <div className="absolute flex items-center justify-center w-10 h-10 rounded-full bg-cyan-600 z-10 bottom-1">
            <img src={RectSVG.src} alt="Rectangle" className="w-8" />
          </div>
        </div>
      </div>
    </>
  );
}
