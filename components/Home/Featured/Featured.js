import React, { useEffect, useState } from "react";
import SiteCard from "./SiteCard";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "@/tailwind.config.js";

export default function Featured() {
  const [windowWidth, setWindowWidth] = useState(0);

  const fullConfig = resolveConfig(tailwindConfig);

  const resize = () => {
    setWindowWidth(Number(window.innerWidth));
  };

  useEffect(() => {
    setWindowWidth(Number(window.innerWidth));
    window.addEventListener("resize", resize);
  }, []);

  return (
    <>
      <section className="min-h-48 p-6 pb-32">
        <div className="container relative flex flex-col mx-auto lg:pt-32 justify-center items-center">
          <div
            className="absolute z-10 hidden lg:block w-2 left-1/2 h-4/6 bottom-0 -ml-1 bg-cyan-600 rounded-xl "
            style={{
              bottom: "1%",
            }}
          ></div>

          <div
            className="absolute lg:hidden block w-2 left-1/2 h-5/6 bottom-0 -ml-1 bg-cyan-600 rounded-xl "
            style={{
              bottom: "1%",
            }}
          ></div>

          <div className="flex flex-col lg:w-1/2 space-y-4 items-center">
            <h1 className="text-4xl font-bold text-center">
              Featured Projects
            </h1>

            <p className="mx-auto text-center text-slate-400">
              A curated selection of many of our projects.
            </p>
          </div>

          <div className="container flex flex-col flex-wrap mx-auto lg:flex-row items-center justify-evenly mt-14 gap-10">
            <div className="flex flex-col items-center w-full sm:w-9/12 lg:w-1/3 justify-evenly gap-10">
              <SiteCard
                siteName={"ArtisanCey "}
                tech={["react", "strapi", "mdb", "aws"]}
              />
              <SiteCard
                siteName={"ArtisanCey "}
                tech={["react", "strapi", "mdb", "aws"]}
              />
              <SiteCard
                siteName={"ArtisanCey "}
                tech={["react", "strapi", "mdb", "aws"]}
              />
            </div>
            <div className="flex flex-col w-full sm:w-9/12 lg:w-1/3 items-center justify-evenly gap-10 lg:mt-96">
              <SiteCard
                left={
                  windowWidth > Number(fullConfig.theme.screens.lg.slice(0, -2))
                }
                siteName={"ArtisanCey "}
                tech={["react", "strapi", "mdb", "aws"]}
              />
              <SiteCard
                left={
                  windowWidth > Number(fullConfig.theme.screens.lg.slice(0, -2))
                }
                siteName={"ArtisanCey "}
                tech={["react", "strapi", "mdb", "aws"]}
              />
              <SiteCard
                left={
                  windowWidth > Number(fullConfig.theme.screens.lg.slice(0, -2))
                }
                siteName={"ArtisanCey "}
                tech={["react", "strapi", "mdb", "aws"]}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
