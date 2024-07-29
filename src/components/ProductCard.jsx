import RatingStars from "./RatingStars";

export default function ProductsCard({ title, rating, price, discount }) {
  const discountedPrice =
    discount > 0 ? price - price * (discount / 100) : price;
  return (
    <div className="space-y-2">
      <img src="Frame 32.png" alt="" />
      <h1 className="itemcard-title">{title}</h1>
      <div className="flex items-center itemcard-rating">
        <RatingStars rating={rating} />
        {rating}/5
      </div>
      <h2 className="itemcard-price flex gap-4 items-center">
        <span>${discountedPrice}</span>
        <span className="text-[#999999] font-normal line-through"> {discount > 0 ? `$${price}` : ""}</span>
        {discount > 0 ? (
          <span className="text-[#FF3333] bg-[#FFEBEB] py-1 px-2 rounded-3xl font-extralight text-sm">
            -{discount}%
          </span>
        ) : (
          <></>
        )}
      </h2>
    </div>
  );
}
