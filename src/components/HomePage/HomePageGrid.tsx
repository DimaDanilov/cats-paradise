import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { ImageGrid } from "../common/ImageGrid/ImageGrid";
import CatStore from "store/CatStore";

export const HomePageGrid = observer(() => {
  const catStore = CatStore;

  useEffect(() => {
    if (catStore.cats.length === 0) {
      catStore.loadCats();
    }
  }, [catStore]);

  return <ImageGrid imageArray={catStore.cats} />;
});
