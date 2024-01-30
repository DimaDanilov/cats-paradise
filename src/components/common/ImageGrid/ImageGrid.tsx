import { ImageCard } from "../ImageCard/ImageCard";

type ImageGrid = {
  imageArray: CatImageModel[];
};

export const ImageGrid = ({ imageArray }: ImageGrid) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 items-center justify-center pb-40`}
    >
      {imageArray.map((catImage: CatImageModel, index: number) => (
        <ImageCard
          key={index}
          index={index}
          url={catImage.url}
          isFavourite={catImage.isFavourite}
        />
      ))}
    </div>
  );
};
