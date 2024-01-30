import HeartEmpty from "assets/icons/favourite_empty_icon.svg";
import HeartFilled from "assets/icons/favourite_fill_icon.svg";
import { observer } from "mobx-react-lite";
import CatStore from "store/CatStore";

type ImageCardProps = Pick<CatImageModel, "url" | "isFavourite" | "id">;

export const ImageCard = observer(
  ({ url, isFavourite, id }: ImageCardProps) => {
    const catStore = CatStore;

    function changeFavouriteStatus() {
      catStore.changeFavouriteStatus(id, !isFavourite);
      console.log(id);
    }

    return (
      <div className="relative aspect-square">
        {/* /Image of a cat */}
        <img className="object-cover w-full aspect-square" src={url} />

        {/* Border div for heart icon  */}
        <div
          className="absolute cursor-pointer right-3 bottom-3 rounded-full bg-white/[.5] p-2"
          onClick={changeFavouriteStatus}
        >
          <img src={isFavourite ? HeartFilled : HeartEmpty} width={30} />
        </div>
      </div>
    );
  }
);
