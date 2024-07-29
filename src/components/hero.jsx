export default function Hero() {
  return (
    <section className="bg-[#F0F0F0]  ">
      <div className="flex justify-around gap-4 items-center">
        <div className="left w-1/3 space-y-10">
         
          <h1 className="hero-text">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
          <p className="hero-subtext">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>

          <button className="bg-black px-10 py-2 min-w-fit rounded-3xl  text-white">
            Shop Now
          </button>

          <div className="flex justify-between items-center">
            <div>
              <h1 className="hero-punchline">200+</h1>
              <h2>International Brands</h2>
            </div>
            <div className="vl"></div>
            <div>
              <h1 className="hero-punchline">2,000+</h1>
              <h2>High-Quality Products</h2>
            </div>
            <div className="vl"></div>
            <div>
              <h1 className="hero-punchline">30,000+</h1>
              <h2>Happy Customers</h2>
            </div>
          </div>
        </div>

        <div>
          <img src="hero2.jpeg" alt="" />
        </div>
        <img className="absolute top-1/4 right-10" src="heroStar.svg" alt="" />
      </div>
      <marquee className="bg-black text-white py-12 ">
        <div className="flex justify-around items-center">
          <img src="vercase.svg" alt="" />
          <img src="zara.svg" alt="" />
          <img src="gucci.svg" alt="" />
          <img src="prada.svg" alt="" />
          <img src="calvin.svg" alt="" />
        </div>
      </marquee>
    </section>
  );
}
