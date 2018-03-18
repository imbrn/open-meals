import React from "react";
import { MemoryRouter, Link } from "react-router-dom";
import Enzyme, { mount } from "enzyme";
import EnzymeReactAdapter from "enzyme-adapter-react-16";
import NavigationMenuLink from "../../src/components/NavigationMenu";

Enzyme.configure({
  adapter: new EnzymeReactAdapter()
});

describe("NavigationMenu", () => {
  it("renders a link to the search page", () => {
    const wrapper = mount(
      <MemoryRouter>
        <NavigationMenuLink />
      </MemoryRouter>
    );
    const link = wrapper.find(Link).find({ to: "/search" });
    expect(link.length).toBe(1);
    expect(link.text()).toBe("Search");
  });

  it("renders a link to the browse page", () => {
    const wrapper = mount(
      <MemoryRouter>
        <NavigationMenuLink />
      </MemoryRouter>
    );
    const link = wrapper.find(Link).find({ to: "/browse" });
    expect(link.length).toBe(1);
    expect(link.text()).toBe("Browse");
  });
});
