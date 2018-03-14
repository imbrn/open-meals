import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SearchBox from "../../src/components/SearchBox";

Enzyme.configure({
  adapter: new Adapter()
});

describe("SearchBox", function() {
  it("always render an input search", () => {
    const wrapper = mount(<SearchBox />);
    expect(wrapper.find("input").length).toBe(1);
  });

  describe("when size is defined greater than or equal to medium", () => {
    it("always render a submit button", () => {
      const wrapper = mount(<SearchBox size="medium" />);
      expect(wrapper.find("button").length).toBe(1);
    });
  });

  describe("when size is defined lesser than medium", () => {
    it("never render a submit button", () => {
      const wrapper = mount(<SearchBox size="small" />);
      expect(wrapper.find("button").length).toBe(0);
    });
  });

  describe("when size is not defined", () => {
    it("sets size default to small", () => {
      const wrapper = mount(<SearchBox />);
      expect(wrapper.prop("size")).toEqual("small");
    });
  });

  it("always prevent form from the defaults", () => {
    const preventDefault = jest.fn();
    const withouthCallback = mount(<SearchBox />);
    const withCallback = mount(<SearchBox onSearch={() => {}} />);
    withouthCallback.find("form").simulate("submit", { preventDefault });
    withCallback.find("form").simulate("submit", { preventDefault });
    expect(preventDefault.mock.calls).toHaveLength(2);
  });

  describe("when onSearch callback is defined", () => {
    it("onSearch is called by the onSubmit", () => {
      const callback = jest.fn();
      const wrapper = mount(<SearchBox onSearch={callback} />);
      wrapper.find("form").simulate("submit");
      expect(callback.mock.calls).toHaveLength(1);
    });

    it("onSearch receives the searched value", () => {
      const callback = jest.fn();
      const wrapper = mount(<SearchBox onSearch={callback} />);
      wrapper.instance().setSearchValue("Search value");
      wrapper.find("form").simulate("submit");
      expect(callback.mock.calls[0][0]).toEqual("Search value");
    });
  });
});
