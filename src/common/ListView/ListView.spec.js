import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeReactAdapter from "enzyme-adapter-react-16";
import ListView, { ListViewItem } from "./ListView";

Enzyme.configure({
  adapter: new EnzymeReactAdapter()
});

describe("ListView", () => {
  it("renders a ListViewItem for each child", () => {
    const wrapper = shallow(
      <ListView>
        <button>One</button>
        <button>Two</button>
        <button>Three</button>
        <button>Four</button>
      </ListView>
    );
    expect(wrapper.find(ListViewItem).length).toBe(4);
  });

  it("renders all the children", () => {
    const wrapper = shallow(
      <ListView>
        <button>One</button>
        <button>Two</button>
      </ListView>
    );
    expect(wrapper.find("button").length).toBe(2);
    expect(
      wrapper
        .childAt(0)
        .render()
        .text()
    ).toBe("One");
    expect(
      wrapper
        .childAt(1)
        .render()
        .text()
    ).toBe("Two");
  });
});
