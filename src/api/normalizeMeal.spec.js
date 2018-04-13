import normalizeMeal from "./normalizeMeal";

describe("normalizeMeal", () => {
  let rawMeal;
  let ingredients;
  let measures;
  let instructions;
  let tags;
  let normalizedMeal;

  beforeAll(() => {
    rawMeal = {
      idMeal: "1234",
      strMeal: "Name",
      strCategory: "Category",
      strArea: "Area",
      strTags: "Tag1, Tag 2, Tag 3",
      strYoutube: "https://youtube.com/watch?v=somevideoid",
      strMealThumb: "https://somelocationforimages.com/imageid"
    };
    ingredients = mockIngredients(rawMeal, 15);
    measures = mockMeasures(rawMeal, 15);
    instructions = mockInstructions(rawMeal, 10);
    tags = mockTags(rawMeal, 5);
  });

  it("normalizes keys", () => {
    normalizedMeal = normalizeMeal(rawMeal);
    expect(normalizedMeal.id).toEqual(rawMeal.idMeal);
    expect(normalizedMeal.name).toEqual(rawMeal.strMeal);
    expect(normalizedMeal.category).toEqual(rawMeal.strCategory);
    expect(normalizedMeal.area).toEqual(rawMeal.strArea);
    expect(normalizedMeal.ingredients).toEqual(
      ingredients.map((ingredient, i) => ({
        name: ingredient,
        measure: measures[i]
      }))
    );
    expect(normalizedMeal.instructions).toEqual(instructions);
    expect(normalizedMeal.tags).toEqual(tags);
    expect(normalizedMeal.youtube).toEqual(rawMeal.strYoutube);
    expect(normalizedMeal.thumb).toEqual(rawMeal.strMealThumb);
  });
});

function mockIngredients(receiver, quantity) {
  const ingredients = [];
  for (let i = 0; i < Math.max(20, quantity); i++) {
    const j = i + 1;
    let ingredient = null;
    if (i < quantity) {
      ingredient = `Ingredient ${j}`;
      ingredients.push(ingredient);
    }
    receiver[`strIngredient${j}`] = ingredient;
  }
  return ingredients;
}

function mockMeasures(receiver, quantity) {
  const measures = [];
  for (let i = 0; i < Math.max(20, quantity); i++) {
    const j = i + 1;
    let measure = null;
    if (i < quantity) {
      measure = `Measure ${j}`;
      measures.push(measure);
    }
    receiver[`measure${j}`] = measure;
  }
  return measures;
}

function mockInstructions(receiver, quantity) {
  const instructions = [];
  for (let i = 0; i < quantity; i++) {
    const step = `Step ${i + 1}`;
    instructions.push(step);
  }
  receiver["strInstructions"] = instructions.join("\r\n");
  return instructions;
}

function mockTags(receiver, quantity) {
  const tags = [];
  for (let i = 0; i < quantity; i++) {
    const tag = `Tag ${i + 1}`;
    tags.push(tag);
  }
  receiver["strTags"] = tags.join(", ");
  return tags;
}
