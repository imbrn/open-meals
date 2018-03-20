import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { setImpl as mockApi } from "../../src/api";
import MealScreen, {
  Title,
  Info,
  CloseButton,
  RelatedMeals
} from "../../src/widgets/MealScreen";
import MealDisplay from "../../src/widgets/MealDisplay";
import MealPreview from "../../src/widgets/MealPreview";

Enzyme.configure({
  adapter: new Adapter()
});

describe("MealScreen", () => {
  let meal;
  let relatedMeals;

  beforeAll(() => {
    meal = {
      id: 1,
      name: "Meal's name",
      area: "Canadian",
      category: "Dessert",
      ingredients: [
        { name: "Ingredient 1", measure: "1 unit" },
        { name: "Ingredient 2", measure: "2 unit" },
        { name: "Ingredient 3", measure: "3 unit" }
      ],
      instructions: ["Step one", "Step two", "Step three"]
    };

    relatedMeals = [
      { id: 2, name: "Meal 1", area: "Area 1", category: "Category 1" },
      { id: 3, name: "Meal 2", area: "Area 2", category: "Category 2" },
      { id: 4, name: "Meal 3", area: "Area 3", category: "Category 3" }
    ];

    // Mocks the Api implementation
    mockApi({
      fetchRelatedMeals: () => Promise.resolve(relatedMeals)
    });
  });

  it("renders the meal name", () => {
    const wrapper = shallow(<MealScreen meal={meal} />);
    expect(wrapper.find(Title).length).toBe(1);
    expect(
      wrapper
        .find(Title)
        .render()
        .text()
    ).toEqual(meal.name);
  });

  it("renders the mal area and category", () => {
    const wrapper = shallow(<MealScreen meal={meal} />);
    expect(wrapper.find(Info).length).toBe(1);
    expect(
      wrapper
        .find(Info)
        .render()
        .text()
    ).toEqual(`${meal.area} ${meal.category}`);
  });

  it("renders a close button", () => {
    const wrapper = shallow(<MealScreen meal={meal} />);
    expect(wrapper.find(CloseButton).length).toBe(1);
  });

  it("calls onRequestClose when CloseButton is clicked", () => {
    const onRequestClose = jest.fn();
    const wrapper = shallow(
      <MealScreen meal={meal} onRequestClose={onRequestClose} />
    );
    wrapper.find(CloseButton).simulate("click");
    expect(onRequestClose.mock.calls).toHaveLength(1);
  });

  it("renders a MealDisplay", () => {
    const wrapper = shallow(<MealScreen meal={meal} />);
    expect(wrapper.find(MealDisplay).length).toBe(1);
  });

  it("passes the meal prop to the MealDisplay", () => {
    const wrapper = shallow(<MealScreen meal={meal} />);
    expect(wrapper.find(MealDisplay).prop("meal")).toEqual(meal);
  });

  it("renders related meals", async done => {
    const fetchRelatedMeals = jest
      .fn()
      .mockReturnValue(Promise.resolve(relatedMeals));
    const wrapper = mount(
      <MealScreen meal={meal} fetchRelatedMeals={fetchRelatedMeals} />
    );

    setImmediate(() => {
      try {
        expect(wrapper.find(RelatedMeals).length).toBe(1);
        expect(
          wrapper
            .find(RelatedMeals)
            .render()
            .children().length
        ).toEqual(relatedMeals.length);
      } catch (error) {
        done.fail(error);
      }
      done();
    });
  });
});

describe("RelatedMeals", () => {
  let meals;

  beforeAll(() => {
    meals = [
      { id: 1, name: "Meal 1", area: "Area 1", category: "Category 1" },
      { id: 2, name: "Meal 2", area: "Area 2", category: "Category 2" },
      { id: 3, name: "Meal 3", area: "Area 3", category: "Category 3" },
      { id: 4, name: "Meal 4", area: "Area 4", category: "Category 4" }
    ];
  });

  it("renders a list of MealPreview", () => {
    const wrapper = shallow(<RelatedMeals meals={meals} />);
    expect(wrapper.find(MealPreview).length).toEqual(meals.length);
  });
});
