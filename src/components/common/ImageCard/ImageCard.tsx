type ImageCardProps = Pick<CatImageModel, "url">;

export const ImageCard = ({ url }: ImageCardProps) => {
  return <img src={url} />;
};
