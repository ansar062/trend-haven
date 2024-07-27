export default function Navbar() {
  return (
    <header className="flex items-center px-20 py-4 bg-white justify-between">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Candal&display=swap');
      </style>
      <div className="navbar-logo">TrendHaven</div>
      <nav className="flex items-center justify-between list-none w-1/5">
        <li className="nav-li cursor-pointer">Shop</li>
        <li className="nav-li cursor-pointer">On Sale</li>
        <li className="nav-li cursor-pointer">New Arrivals</li>
        <li className="nav-li cursor-pointer">Brands</li>
      </nav>
      <div className="flex items-center bg-[#F0F0F0] rounded-3xl py-3 p-2 space-x-2 w-1/3">
        <img src="/Search.svg" />
        <input
          className="bg-transparent focus:outline-none"
          type="text"
          placeholder="Search for products..."
        />
      </div>

      <div className="flex justify-between items-center space-x-5">
        <img className="h-[24px] w-[24px]" src="/cart.svg" />
        <img className="h-[24px] w-[24px]" src="/profile.svg" />
      </div>
    </header>
  );
}
