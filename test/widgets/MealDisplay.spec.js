import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {
  MealDisplay,
  Image,
  Ingredients,
  IngredientItem,
  Instructions,
  InstructionItem
} from "../../src/widgets/MealDisplay";
import { Tabs, Tab } from "react-tabs";

Enzyme.configure({
  adapter: new Adapter()
});

describe("MealDisplay", () => {
  let props;

  beforeEach(() => {
    props = {
      name: "Meal's name",
      area: "Canadian",
      category: "Dessert",
      thumb: "thumb.png",
      ingredients: [
        { name: "One", measure: "1" },
        { name: "Two", measure: "2" }
      ],
      instructions: ["Step one", "Step two"]
    };
  });

  it("always render an Image component", () => {
    const wrapper = mount(<MealDisplay {...props} />);
    expect(wrapper.find(Image).length).toBe(1);
  });

  describe("the meal Image component", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<MealDisplay {...props} />);
    });

    it("'src' prop is equal to the thumb", () => {
      expect(wrapper.find(Image).prop("src")).toBe(props.thumb);
    });

    it("'alt' prop is equal to the name", () => {
      expect(wrapper.find(Image).prop("alt")).toBe(props.name);
    });
  });

  it("always render a Tabs component", () => {
    const wrapper = shallow(<MealDisplay {...props} />);
    expect(wrapper.find(Tabs).length).toBe(1);
  });

  it("passes the ingredients prop to the Ingredients component", () => {
    const wrapper = shallow(<MealDisplay {...props} />);
    expect(wrapper.find(Ingredients).prop("ingredients")).toEqual(
      props.ingredients
    );
  });

  it("passes instructions prop to the Instructions component", () => {
    const wrapper = shallow(<MealDisplay {...props} />);
    expect(wrapper.find(Instructions).prop("instructions")).toEqual(
      props.instructions
    );
  });

  describe("the Tabs component", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<MealDisplay {...props} />);
    });

    it("renders the 'ingredients' tab", () => {
      expect(
        wrapper.find(Tab).findWhere(it => it.text() === "Ingredients").length
      ).toBe(1);
    });

    it("renders the 'instructions' tab", () => {
      expect(
        wrapper.find(Tab).findWhere(it => it.text() === "Instructions").length
      ).toBe(1);
    });

    describe("when 'ingredients' tab is selected", () => {
      beforeEach(() => {
        wrapper
          .find(Tabs)
          .childAt(0)
          .simulate("click");
      });

      it("renders the ingredients", () => {
        expect(wrapper.find(Ingredients).length).toBe(1);
      });
    });

    describe("when 'instructions' tab is selected", () => {
      beforeEach(() => {
        wrapper
          .find(Tabs)
          .childAt(1)
          .simulate("click");
      });

      it("renders the instructions", () => {
        expect(wrapper.find(Instructions).length).toBe(1);
      });
    });
  });
});

describe("Ingredients", () => {
  let props;

  beforeAll(() => {
    props = {
      ingredients: [
        { name: "One", measure: "1" },
        { name: "Two", measure: "2" }
      ]
    };
  });

  it("renders an IngredientItem for each ingredient", () => {
    const wrapper = shallow(<Ingredients {...props} />);
    expect(wrapper.find(IngredientItem).length).toBe(props.ingredients.length);
  });
});

describe("IngredientItem", () => {
  let props;

  beforeAll(() => {
    props = {
      measure: "1kg",
      name: "Ingredient name"
    };
  });

  it("renders a measure", () => {
    const wrapper = shallow(<IngredientItem {...props} />);
    expect(
      wrapper
        .childAt(0)
        .render()
        .text()
    ).toEqual(props.measure);
  });

  it("renders the name", () => {
    const wrapper = shallow(<IngredientItem {...props} />);
    expect(
      wrapper
        .childAt(1)
        .render()
        .text()
    ).toEqual(props.name);
  });
});

describe("Instructions", () => {
  let props;

  beforeAll(() => {
    props = {
      instructions: ["Step 1", "Step 2", "Step 3"]
    };
  });

  it("renders an InstructionItem for each instruction", () => {
    const wrapper = shallow(<Instructions {...props} />);
    expect(wrapper.find(InstructionItem).length).toBe(
      props.instructions.length
    );
  });
});

describe("InstructionItem", () => {
  let props;

  beforeAll(() => {
    props = {
      instruction: "Instruction"
    };
  });

  it("renders the instruction text", () => {
    const wrapper = shallow(<InstructionItem {...props} />);
    expect(wrapper.render().text()).toEqual(props.instruction);
  });
});
