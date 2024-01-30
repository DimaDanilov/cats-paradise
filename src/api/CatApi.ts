import axios from "axios";
import { CatAdapter } from "./CatAdapter";

export const getCatPictures = async () => {
  try {
    const response = await axios.get<CatImageModel[]>(
      `https://api.thecatapi.com/v1/images/search`,
      { params: { limit: 10 } }
    );
    return CatAdapter.transform(response.data);
  } catch (error) {
    console.error("Error fetching data from API", error);
    return [];
  }
};
