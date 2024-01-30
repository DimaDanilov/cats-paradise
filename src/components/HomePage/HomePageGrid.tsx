import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { ImageGrid } from "../common/ImageGrid/ImageGrid";
import CatStore from "store/CatStore";
import { Loader } from "components/common/Loader/Loader";

export const HomePageGrid = observer(() => {
  const catStore = CatStore;

  const handleScroll = () => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;

    if (bottom) {
      catStore.loadCats();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (catStore.cats.length === 0) {
      catStore.loadCats();
    }
  }, []);

  return (
    <div onScroll={handleScroll}>
      {catStore.isLoading && (
        <Loader className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 z-50" />
      )}
      <ImageGrid imageArray={catStore.cats} />
    </div>
  );
});
