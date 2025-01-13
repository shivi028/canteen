export default function TopPicks() {
    const dishes = [
      { name: "Pasta", description: "Creamy Alfredo Pasta", price: "$8.99" },
      { name: "Burger", description: "Cheese-loaded Burger", price: "$5.99" },
      { name: "Pizza", description: "Thin Crust Pizza", price: "$12.50" },
    ];
  
    return (
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-gray-800">Top Picks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-4 rounded-lg flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-bold text-gray-800">{dish.name}</h3>
                <p className="text-sm text-gray-600">{dish.description}</p>
                <p className="text-green-500 font-bold">{dish.price}</p>
              </div>
              <button className="bg-green-500 text-white px-3 py-1 rounded">
                +
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  }
  