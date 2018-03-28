import normalizeMeal from "./normalizeMeal";

export const fetchLatestMeals = () => {
  return fetchMeals("https://www.themealdb.com/api/json/v1/1/latest.php");
};

export const fetchRelatedMeals = () => Promise.resolve([]);

export const searchMealsByName = value => {
  return fetchMeals(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`
  );
};

function fetchMeals(url) {
  return fetch(url)
    .then(resp => resp.json())
    .then(json => json.meals || [])
    .then(meals => meals.map(normalizeMeal));
}

export default {
  fetchRelatedMeals,
  fetchLatestMeals,
  searchMealsByName
};
