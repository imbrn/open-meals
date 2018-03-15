import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {
  MealMiniature,
  Thumb,
  Title,
  Info,
  Button,
  SMALL_WIDTH
} from "../../src/widgets/MealMiniature";

Enzyme.configure({
  adapter: new Adapter()
});

describe("MealMiniature", function() {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      name: "Meal",
      area: "Canadian",
      category: "Dessert",
      thumb: "meal.png"
    };
    wrapper = mount(<MealMiniature {...props} />);
  });

  it("always render the meal thumb", () => {
    expect(wrapper.find(Thumb).length).toBe(1);
    expect(wrapper.find("img").prop("src")).toEqual("meal.png");
  });

  it("always render the meal title", () => {
    expect(wrapper.find(Title).length).toBe(1);
    expect(wrapper.find(Title).text()).toBe(props.name);
  });

  it("always render the meal area and category", () => {
    const info = wrapper.find(Info);
    expect(info.length).toBe(1);
    expect(info.text()).toBe(`${props.area} ${props.category}`);
  });

  describe("when width <= SMALL_WIDTH", () => {
    beforeEach(() => {
      wrapper.setProps({
        width: SMALL_WIDTH
      });
    });

    it("does not render a 'More' button", () => {
      expect(wrapper.find(Button).length).toBe(0);
    });

    it("calls onRequestMoreInfo when click in the miniature", () => {
      const action = jest.fn();
      wrapper.setProps({
        onRequestMoreInfo: action
      });
      wrapper.first().simulate("click");
      expect(action.mock.calls).toHaveLength(1);
    });
  });

  describe("when width > SMALL_WIDTH", () => {
    beforeEach(() => {
      wrapper.setProps({
        width: SMALL_WIDTH + 1
      });
    });

    it("renders a 'More' button", () => {
      expect(wrapper.find(Button).length).toBe(1);
    });

    it("calls onRequestMoreInfo when click in the button more", () => {
      const action = jest.fn();
      wrapper.setProps({
        onRequestMoreInfo: action
      });
      wrapper.find(Button).simulate("click");
      expect(action.mock.calls).toHaveLength(1);
    });

    it("does not call onRequestMoreInfo when click in the miniature", () => {
      const action = jest.fn();
      wrapper.setProps({
        onRequestMoreInfo: action
      });
      wrapper.first().simulate("click");
      expect(action.mock.calls).toHaveLength(0);
    });
  });
});
