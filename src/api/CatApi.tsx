import axios from "axios";

export const getCatPictures = async () => {
  try {
    const response = await axios.get<CatImageModel[]>(
      `https://api.thecatapi.com/v1/images/search`,
      { params: { limit: 10 } }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data from API", error);
    return [];
  }
};
