import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MealPreview, { Thumb, Title, Info, Button } from "./MealPreview";

Enzyme.configure({
  adapter: new Adapter()
});

describe("MealPreview", function() {
  let props;

  beforeEach(() => {
    props = {
      meal: {
        name: "Meal",
        area: "Canadian",
        category: "Dessert",
        thumb: "meal.png"
      }
    };
  });

  it("always render the meal thumb", () => {
    const wrapper = mount(<MealPreview {...props} />);
    expect(wrapper.find(Thumb).length).toBe(1);
    expect(wrapper.find("img").prop("src")).toEqual(props.meal.thumb);
  });

  it("always render the meal name", () => {
    const wrapper = mount(<MealPreview {...props} />);
    expect(wrapper.find(Title).length).toBe(1);
    expect(wrapper.find(Title).text()).toBe(props.meal.name);
  });

  it("always render the meal area and category", () => {
    const wrapper = mount(<MealPreview {...props} />);
    const info = wrapper.find(Info);
    expect(info.length).toBe(1);
    expect(info.text()).toBe(`${props.meal.area} ${props.meal.category}`);
  });

  it("renders a 'More' button", () => {
    const wrapper = mount(<MealPreview {...props} />);
    expect(wrapper.find(Button).length).toBe(1);
  });

  it("calls onRequestMoreInfo when click in the button more", () => {
    const onRequestMoreInfo = jest.fn();
    const wrapper = mount(
      <MealPreview {...props} onRequestMoreInfo={onRequestMoreInfo} />
    );
    wrapper.find(Button).simulate("click");
    expect(onRequestMoreInfo.mock.calls).toHaveLength(1);
  });
});
