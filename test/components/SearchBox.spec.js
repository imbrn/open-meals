import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { SearchBox } from "../../src/components/SearchBox";

Enzyme.configure({
  adapter: new Adapter()
});

describe("SearchBox", function() {
  it("always render an input search", () => {
    const wrapper = shallow(<SearchBox />);
    expect(wrapper.render().find("input").length).toBe(1);
  });

  it("renders a search button", () => {
    const wrapper = shallow(<SearchBox />);
    wrapper.setProps({ contentRect: { client: { width: 481 } } });
    expect(wrapper.render().find("button").length).toBe(1);
  });

  it("always prevent form from the defaults", () => {
    const preventDefault = jest.fn();
    const wrapper = mount(<SearchBox />);
    wrapper.find("form").simulate("submit", { preventDefault });
    expect(preventDefault.mock.calls.length).toBe(1);
  });

  describe("when onSearch callback is defined", () => {
    it("onSearch is called by the onSubmit", () => {
      const onSearch = jest.fn();
      const wrapper = mount(<SearchBox onSearch={onSearch} />);
      wrapper.find("form").simulate("submit");
      expect(onSearch.mock.calls).toHaveLength(1);
    });
  });

  describe("when onChange callback is defined", () => {
    const onChange = jest.fn();
    const wrapper = mount(<SearchBox onChange={onChange} />);
    wrapper.find("input").simulate("change", { target: { value: "Search" } });
    expect(onChange.mock.calls.length).toBe(1);
    expect(onChange.mock.calls[0][0]).toBe("Search");
  });
});
