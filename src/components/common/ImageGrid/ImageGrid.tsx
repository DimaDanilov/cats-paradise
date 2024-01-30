import { ImageCard } from "../ImageCard/ImageCard";

type ImageGrid = {
  colsAmount: number;
  imageArray: CatImageModel[];
};

export const ImageGrid = ({ colsAmount, imageArray }: ImageGrid) => {
  return (
    <div
      className={`grid grid-cols-${colsAmount} gap-5 items-center justify-center`}
    >
      {imageArray.map((catImage: CatImageModel, index: number) => (
        <ImageCard url={catImage.url} key={index} />
      ))}
    </div>
  );
};
