import React, { useEffect, useRef, useState } from "react";

export default function ScienceTable() {
  const [active, setActive] = useState("color");
  const [spanLen, setSpanLen] = useState(0);
  const [spanLeft, setSpanLeft] = useState(0);

  const parent = useRef(null);
  const colorNameRef = useRef(null);
  const resNameRef = useRef(null);
  const typNameRef = useRef(null);

  const colorContRef = useRef(null);

  const spanAttribs = () => {
    let p = parent.current;

    let element =
      active === "color"
        ? colorNameRef.current && colorNameRef.current
        : active === "res"
        ? resNameRef.current && resNameRef.current
        : active === "typ"
        ? typNameRef.current && typNameRef.current
        : undefined;

    let len = element && element.clientWidth;

    let parentRect = p && p.getBoundingClientRect();
    let rect = element && element.getBoundingClientRect();

    if (parentRect && rect) {
      let left = rect.left - parentRect.left;
      setSpanLeft(left);
    }

    setSpanLen(len);
  };

  useEffect(() => {
    window?.addEventListener("resize", spanAttribs);
  }, []);

  useEffect(() => {
    spanAttribs();
  }, [colorNameRef, resNameRef, typNameRef, parent, active]);

  const nameClick = (name) => (e) => {
    if (name === "color") {
      setActive("color");
    }

    if (name === "res") {
      setActive("res");
    }

    if (name === "typ") {
      setActive("typ");
    }
  };

  return (
    <>
      <div className="flex flex-col rounded">
        {/* headings */}
        <div
          ref={parent}
          className="flex flex-row relative gap-8 items-center justify-evenly text-center p-6 bg-slate-100 dark:bg-slate-900 rounded-t-lg"
          style={{ cursor: "pointer" }}
        >
          <p onClick={nameClick("color")} ref={colorNameRef}>
            Color Theory
          </p>
          <p onClick={nameClick("res")} ref={resNameRef}>
            Responsive Design
          </p>
          <p onClick={nameClick("typ")} ref={typNameRef}>
            Typography / Spacing
          </p>

          <span
            style={{
              width: spanLen,
              left: spanLeft,
              bottom: -2,
              transition: "all 0.25s linear",
            }}
            className="absolute border-b-4 rounded border-slate-600 dark:border-slate-200"
          />
        </div>
        {/* container */}

        <div className="relative dark:bg-slate-600 bg-slate-300 w-full h-48">
          <div
            className={`sci-table-entry ${
              active === "color" ? "fade" : ""
            } absolute min-h-64 pt-12 lg:pt-6 p-6`}
          >
            <p>
              We use color theory in our design for the most visually pleasing
              designs
            </p>
          </div>

          <div
            className={`sci-table-entry ${
              active === "res" ? "fade" : ""
            } absolute min-h-64 pt-12 lg:pt-6 p-6`}
          >
            <p>Responsive design which is mobile friendly.</p>
          </div>

          <div
            className={`sci-table-entry ${
              active === "typ" ? "fade" : ""
            } absolute min-h-64 pt-12 lg:pt-6 p-6`}
          >
            <p>Consistent Typography and spacing.</p>
          </div>
        </div>
      </div>
    </>
  );
}
