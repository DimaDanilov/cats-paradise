import { useEffect, useState } from "react";
import { getCatPictures } from "api/CatApi";
import { ImageCard } from "components/common/ImageCard/ImageCard";
import { PageLayout } from "src/layouts/PageLayout";

export const HomePage = () => {
  const [images, setImages] = useState<CatImageModel[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const catPictures = await getCatPictures();
        setImages(catPictures);
      } catch (error) {
        console.error("Error fetching data from API", error);
      }
    };

    fetchData();
  }, []);

  return (
    <PageLayout>
      <div className="grid grid-cols-5 gap-5 items-center justify-center">
        {images.map((catImage: CatImageModel, index) => (
          <ImageCard url={catImage.url} key={index} />
        ))}
      </div>
    </PageLayout>
  );
};
