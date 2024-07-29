export default function DressStyle() {
  return (
    <section className="dress-style-card rounded-xl flex flex-col justify-center items-center">
      <h1 className="navbar-logo my-10">BROWSE BY DRESS STYLE</h1>
      <div class="grid">
            <div class="card">
                <img src="/image 11.png" alt="Casual"/>
                <div class="card-title">Casual</div>
            </div>
            <div class="card">
                <img src="/image 13.png" alt="Formal"/>
                <div class="card-title">Formal</div>
            </div>
            <div class="card">
                <img src="/image 12.png" alt="Party"/>
                <div class="card-title">Party</div>
            </div>
            <div class="card">
                <img src="/image 14.png" alt="Gym"/>
                <div class="card-title">Gym</div>
            </div>
        </div>
    </section>
  );
}
