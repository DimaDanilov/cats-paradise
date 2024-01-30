import { makeAutoObservable, runInAction } from "mobx";
import { getCatPictures } from "api/CatApi";

class CatStore {
  cats: CatImageModel[] = [];
  isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  // Fetches new Cats from the server.
  async loadCats() {
    if (this.isLoading !== true) {
      this.isLoading = true;
      try {
        const newPictures = await getCatPictures();
        runInAction(() => {
          const uniqueIds = new Set(this.cats.map((cat) => cat.id));

          const filteredNewPictures = newPictures.filter(
            (cat) => !uniqueIds.has(cat.id)
          );

          this.cats = this.cats.concat(filteredNewPictures);
        });
      } finally {
        runInAction(() => {
          this.isLoading = false;
        });
      }
    }
  }

  get favouriteCats() {
    return this.cats.filter((cat) => cat.isFavourite === true);
  }

  changeFavouriteStatus(id: string, isFavourite: boolean) {
    const updatedCats = this.cats.map((cat) => {
      if (cat.id === id) {
        return { ...cat, isFavourite };
      }
      return cat;
    });

    runInAction(() => {
      this.cats = updatedCats;
    });
  }
}

export default new CatStore();
