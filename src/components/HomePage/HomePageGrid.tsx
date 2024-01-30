import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { ImageGrid } from "../common/ImageGrid/ImageGrid";
import CatStore from "store/CatStore";

export const HomePageGrid = observer(() => {
  const catStore = CatStore;

  useEffect(() => {
    catStore.loadCats();
  }, [catStore]);

  return <ImageGrid colsAmount={5} imageArray={catStore.cats} />;
});
