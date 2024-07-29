import ProductsCard from "./ProductCard";

export default function NewArrivals() {
  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="navbar-logo my-10">NEW ARRIVALS</h1>
      <div className="flex w-full justify-evenly">
        {dummyData.map((item) => {
          return (
            <ProductsCard
              key={item.id}
              title={item.title}
              rating={item.rating}
              price={item.price}
              discount={item.discount}
            />
          );
        })}
      </div>

      <button className="outlined-button rounded-3xl px-10 py-2 my-10">
      View All
    </button>
    </section>
  );
}


const dummyData = [
  {
    id: 0,
    title: "T-shirt with Tape Details",
    rating: 4.5,
    price: 120,
    discount: 0,
  },
  {
    id: 1,
    title: "Skinny Fit Jeans",
    rating: 3.5,
    price: 240,
    discount: 10,
  },
  {
    id: 2,
    title: "Checkered Shirt",
    rating: 4.5,
    price: 180,
    discount: 0,
  },
  {
    id: 3,
    title: "Sleeve Striped T-shirt",
    rating: 4.5,
    price: 130,
    discount: 0,
  },
];
