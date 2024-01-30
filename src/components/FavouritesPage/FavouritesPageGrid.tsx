import { observer } from "mobx-react-lite";
import { ImageGrid } from "../common/ImageGrid/ImageGrid";
import CatStore from "store/CatStore";

export const FavouritesPageGrid = observer(() => {
  const catStore = CatStore;

  return <ImageGrid imageArray={catStore.favouriteCats} />;
});
