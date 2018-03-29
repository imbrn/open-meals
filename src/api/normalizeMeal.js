function normalizeMeal(rawMeal) {
  const normalizedMeal = {};
  normalizedMeal["id"] = rawMeal.idMeal;
  normalizedMeal["name"] = rawMeal.strMeal;
  normalizedMeal["category"] = rawMeal.strCategory;
  normalizedMeal["area"] = rawMeal.strArea;
  normalizedMeal["thumb"] = rawMeal.strMealThumb;
  normalizedMeal["ingredients"] = normalizeIngredients(rawMeal);
  normalizedMeal["instructions"] = normalizeInstructions(rawMeal);
  normalizedMeal["tags"] = normalizeTags(rawMeal);
  normalizedMeal["youtube"] = rawMeal.strYoutube;
  return normalizedMeal;
}

function normalizeIngredients(rawMeal) {
  const ingredients = [];
  let i = 1;
  let searching = true;
  while (searching) {
    const key = `ingredient${i}`;
    if (rawMeal.hasOwnProperty(key) && rawMeal[key]) {
      ingredients.push({
        ingredient: rawMeal[key],
        measure: rawMeal[`measure${i}`]
      });
      i++;
    } else {
      searching = false;
    }
  }
  return ingredients;
}

function normalizeInstructions(rawMeal) {
  return rawMeal.strInstructions.split(/[\r\n]+/);
}

function normalizeTags(rawMeal) {
  return rawMeal.strTags ? rawMeal.strTags.split(", ") : [];
}

export default normalizeMeal;
