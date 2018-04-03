import SearchPage from "./SearchPage";
import BrowsePage from "./BrowsePage";
import BrowseCategory from "./BrowseCategory";
import PageNotFound from "./PageNotFound";

const routes = [
  {
    id: "search",
    name: "Search",
    path: "/search",
    exact: true,
    component: SearchPage
  },
  {
    id: "browse",
    name: "Browse",
    path: "/browse",
    exact: true,
    component: BrowsePage
  },
  {
    id: "browse-category",
    name: "Browse Category",
    path: "/browse/category/:category",
    exact: true,
    component: BrowseCategory
  },
  { id: "404", component: PageNotFound }
];

export default routes;
