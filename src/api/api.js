import normalizeMeal from "./normalizeMeal";

export function searchMealsByName(string) {
  return fetchMeals(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${string}`
  );
}

export function fetchLatestMeals() {
  return fetchMeals("https://www.themealdb.com/api/json/v1/1/latest.php");
}

export function listCategories() {
  return fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
    .then(resp => resp.json())
    .then(json => json.meals || []);
}

export function listAreas() {
  return fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
    .then(resp => resp.json())
    .then(json => json.meals || []);
}

function fetchMeals(url) {
  return fetch(url)
    .then(resp => resp.json())
    .then(json => json.meals || [])
    .then(meals => meals.map(normalizeMeal));
}
