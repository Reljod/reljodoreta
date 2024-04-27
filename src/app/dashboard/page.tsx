export default function Dashboard() {
  return (
    <section className="mx-auto flex flex-1 flex-col justify-center">
      <p className="text-center text-3xl p-4 text-primary font-bold ">My Apps</p>
      <div className="carousel carousel-end w-3/4 lg:max-w-3xl rounded-box border-2 border-secondary mx-auto">
        <a className="carousel-item h-64 cursor-pointer">
          <img
            src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
            alt="Drink"
          />
        </a>
        <a className="carousel-item h-64 cursor-pointer">
          <img
            src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
            alt="Drink"
          />
        </a>
        <a className="carousel-item h-64 cursor-pointer">
          <img
            src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
          />
        </a>
        <a className="carousel-item h-64 cursor-pointer">
          <img
            src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
          />
        </a>
      </div>
      <div className="h-40"></div>
    </section>
  );
}
