import React from "react";
import { render } from "../../utils";

import Difference from "../../../components/Home/Difference/Difference";
import ServiceCard from "../../../components/Home/Difference/ServiceCard";

describe("Home - Difference section", () => {
  let component = <Difference />;
  beforeEach(async () => {
    await render(component);
  });

  it("Has a <h1> with contents 'We Excel In'", async () => {
    expect(document.body.textContent).toContain("We excel in");
  });

  it("Has 3 service cards", () => {
    // expect(component.findAll(ServiceCard).length).toBe(3);
  });

  it("Has a button that navigates to the services view", () => {});
});
