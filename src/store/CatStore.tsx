import { makeAutoObservable, runInAction } from "mobx";
import { getCatPictures } from "api/CatApi";

class CatStore {
  cats: CatImageModel[] = [];
  isLoading: boolean = true;

  constructor() {
    makeAutoObservable(this);
  }

  // Fetches new Cats from the server.
  async loadCats() {
    this.isLoading = true;
    const newPictures = await getCatPictures();
    runInAction(() => {
      this.cats = this.cats.concat(newPictures);
      this.isLoading = false;
    });
  }

  get favouriteCats() {
    return this.cats.filter((cat) => cat.isFavourite === true);
  }

  changeFavouriteStatus(index: number, isFavourite: boolean) {
    const updatedCats = this.cats.slice();
    updatedCats[index] = { ...updatedCats[index], isFavourite };
    this.cats = updatedCats;
  }
}

export default new CatStore();
