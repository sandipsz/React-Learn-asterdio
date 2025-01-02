import { useAppSelector } from "@/app/hooks";
import { Button } from "./ui/button";

type RatingTypes = {
  rate: number;
  count: number;
};

export type CardsProps = {
  id: number;
  title: string;
  image: string;
  price: number;
  description?: string;
  rating: RatingTypes;
};
const Card = ({ title, image, price, description, rating }: CardsProps) => {
  const { currentUser } = useAppSelector((state) => state.user);
  const handleAddToCart = () => {
    if (!currentUser?.isLoggedIn) {
      alert("You need to log in to add products to the cart.");
      return;
    }
    alert("Product Added to card !!!");
  };
  return (
    <div className="flex flex-col items-center gap-2 border-2 rounded-[10px] border-orange-200 p-4 shadow-lg">
      <img
        src={image}
        alt=""
        className="object-contain w-[200px] h-[200px] rounded-md "
      />
      <h2 className="text-xl text-center">{title}</h2>
      <p className="line-clamp-3 text-sm text-center text-gray-500">
        {description}
      </p>
      <p className="font-semibold text-lg">Rs.{price}</p>
      <div className="flex items-center gap-2">
        <span className="flex items-center text-yellow-500">
          ⭐ {rating.rate}
        </span>
        <span className="text-gray-500">({rating.count} reviews)</span>
      </div>
      <Button
        onClick={handleAddToCart}
        className="rounded-[10px]"
        variant="outline"
      >
        Add To Card
      </Button>
    </div>
  );
};

export default Card;
