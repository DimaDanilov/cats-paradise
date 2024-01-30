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
    return this.cats.filter((cat) => cat.favourite === true);
  }
}

export default new CatStore();
