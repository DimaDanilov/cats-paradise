import { RouterProvider, createMemoryRouter } from "react-router-dom";
import "./App.css";
import { HomePage } from "pages/HomePage";
import { FavouritesPage } from "pages/FavouritesPage";
import { Header } from "components/common/Header/Header";

const router = createMemoryRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <HomePage />
      </>
    ),
  },
  {
    path: "favourites",
    element: (
      <>
        <Header />
        <FavouritesPage />
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
