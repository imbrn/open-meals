import normalizeMeal from "./normalizeMeal";

export function searchMealsByName(string) {
  return fetchMeals(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${string}`
  );
}

export function fetchLatestMeals() {
  return fetchMeals("https://www.themealdb.com/api/json/v1/1/latest.php");
}

function fetchMeals(url) {
  return fetch(url)
    .then(resp => resp.json())
    .then(json => json.meals || [])
    .then(meals => meals.map(normalizeMeal));
}
