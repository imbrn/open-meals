import normalizeMeal from "./normalizeMeal";

function fetchLatestMeals() {
  return fetchMeals("https://www.themealdb.com/api/json/v1/1/latest.php");
}

function fetchMeals(url) {
  return fetch(url)
    .then(resp => resp.json())
    .then(json => json.meals || [])
    .then(meals => meals.map(normalizeMeal));
}

export default {
  fetchLatestMeals
};
