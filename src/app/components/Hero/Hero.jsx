import Header from "../Header/Header";
import TopPicks from "../TopPicks/TopPicks";

export default function Hero() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Banner Section */}
        <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-gray-800">
              Taste the Delight!
            </h1>
            <p className="mt-4 text-gray-600">
              Freshly prepared meals, made with love.
            </p>
            <div className="flex items-center mt-6 space-x-4">
              <span className="bg-green-500 text-white px-3 py-1 rounded-full">
                From $8
              </span>
              <span className="text-gray-500 text-sm">4.8 since 1990</span>
            </div>
          </div>
          <div>
            <img
              src="/dish-banner.jpg"
              alt="Delicious Dish"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Interactive Sections */}
        <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Menu Section */}
          <div className="bg-blue-200 p-6 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-gray-800">Explore Our Menu</h2>
            <p className="mt-2 text-gray-600">
              Discover snacks, drinks, and main courses.
            </p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
              View Menu
            </button>
          </div>

          {/* Most Loved Dishes Section */}
          <div className="bg-orange-200 p-6 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-gray-800">Most Loved Dishes</h2>
            <p className="mt-2 text-gray-600">
              Loved by our customers every day.
            </p>
            <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded">
              Explore Dishes
            </button>
          </div>
        </section>

        {/* Top Picks Section */}
        {/* <TopPicks /> */}
        <TopPicks/>
      </div>
    </div>
  );
}
