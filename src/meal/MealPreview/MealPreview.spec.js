import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MealPreview, { Thumb, Title, Info, MoreButton } from "./MealPreview";
import imageLoader from "../../common/imageLoader";

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
    // Mocks the image loading process
    imageLoader.impl = () => Promise.resolve(new Image());
  });

  it("always render the meal thumb", async done => {
    const wrapper = mount(<MealPreview {...props} />);
    setImmediate(() => {
      try {
        wrapper.update();
        expect(wrapper.find(Thumb).length).toBe(1);
        expect(wrapper.find("img").prop("src")).toEqual(props.meal.thumb);
      } catch (error) {
        done.fail(error);
      }
      done();
    });
  });

  it("always render the meal name", async done => {
    const wrapper = mount(<MealPreview {...props} />);
    setImmediate(() => {
      try {
        wrapper.update();
        expect(wrapper.find(Title).length).toBe(1);
        expect(wrapper.find(Title).text()).toBe(props.meal.name);
      } catch (error) {
        done.fail(error);
      }
      done();
    });
  });

  it("always render the meal area and category", async done => {
    const wrapper = mount(<MealPreview {...props} />);
    setImmediate(() => {
      try {
        wrapper.update();
        const info = wrapper.find(Info);
        expect(info.length).toBe(1);
        expect(info.text()).toBe(`${props.meal.area} ${props.meal.category}`);
      } catch (error) {
        done.fail(error);
      }
      done();
    });
  });

  it("renders a 'More' button", async done => {
    const wrapper = mount(<MealPreview {...props} />);
    setImmediate(() => {
      try {
        wrapper.update();
        expect(wrapper.find(MoreButton).length).toBe(1);
      } catch (error) {
        done.fail(error);
      }
      done();
    });
  });

  it("calls onRequestMoreInfo when click in the button more", async done => {
    const onRequestMoreInfo = jest.fn();
    const wrapper = mount(
      <MealPreview {...props} onRequestMoreInfo={onRequestMoreInfo} />
    );
    setImmediate(() => {
      try {
        wrapper.update();
        wrapper.find(MoreButton).simulate("click");
        expect(onRequestMoreInfo.mock.calls).toHaveLength(1);
      } catch (error) {
        done.fail(error);
      }
      done();
    });
  });
});
