export default function Header() {
    return (
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-gray-800">Canteenly</div>
          <nav className="space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Menu
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Offers
            </a>
          </nav>
          <div className="relative">
            <div className="bg-green-500 text-white w-6 h-6 rounded-full absolute top-0 right-0 text-sm flex items-center justify-center">
              3
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h18l-1.68 12.037a2 2 0 01-1.99 1.763H6.67a2 2 0 01-1.99-1.763L3 3z"
              />
            </svg>
          </div>
        </div>
      </header>
    );
  }
  