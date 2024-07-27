export default function NewArrivals() {
  return (
    <section>
      <h1>NEW ARRIVALS</h1>
      <div className="flex">
        {dummyData.map((item) => {
          return <ItemsCard key={item.id} />;
        })}
      </div>
    </section>
  );
}

function ItemsCard() {
  return (
    <div>
      <img src="Frame 32.png" alt="" />
      <h1>Title</h1>
      <div className="flex">Rating</div>
      <h2>price</h2>
    </div>
  );
}

const dummyData = [
  {
    id: 0,
    title: "T-shirt with Tape Details",
    rating: 4.5,
    price: 120,
  },
  {
    id: 1,
    title: "Skinny Fit Jeans",
    rating: 3.5,
    price: 240,
  },
  {
    id: 2,
    title: "Checkered Shirt",
    rating: 4.5,
    price: 180,
  },
  {
    id: 3,
    title: "Sleeve Striped T-shirt",
    rating: 4.5,
    price: 130,
  },
];
