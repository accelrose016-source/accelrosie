import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 to-rose-100 dark:from-zinc-900 dark:to-zinc-800 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold text-zinc-900 dark:text-white mb-6 leading-tight">
            Welcome to <span className="text-rose-400">Accel Rose's Garden</span>
          </h1>
          <p className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-300 mb-8 leading-relaxed">
            Beautiful flowers and plants for every occasion. Discover our premium selection of fresh roses, exotic plants, and garden arrangements.
            Celebrate life's special moments with nature's finest blooms.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg
                className="w-6 h-6 text-rose-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.856-1.487M15 10a3 3 0 11-6 0 3 3 0 016 0zM4 20h16c.552 0 1-.448 1-1v-2a3 3 0 00-5.856-1.487M9 10a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
              Premium Rose Collection
            </h3>
            <p className="text-zinc-600 dark:text-zinc-300">
              Explore our stunning collection of premium roses in various colors and varieties. Perfect for weddings, anniversaries, and special celebrations.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg
                className="w-6 h-6 text-rose-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
              Custom Arrangements
            </h3>
            <p className="text-zinc-600 dark:text-zinc-300">
              Create personalized floral arrangements tailored to your needs. From bouquets to garden designs, we bring your vision to life.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg
                className="w-6 h-6 text-rose-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
              Garden Plants & More
            </h3>
            <p className="text-zinc-600 dark:text-zinc-300">
              Beyond roses, discover our selection of exotic plants, indoor greenery, and outdoor garden solutions for your home.
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/login"
            className="px-8 py-4 bg-rose-400 text-white rounded-lg hover:bg-rose-500 transition-colors font-semibold text-lg"
          >
            Shop Now
          </Link>
          <Link
            href="/signup"
            className="px-8 py-4 bg-white dark:bg-zinc-800 text-rose-400 dark:text-rose-300 border-2 border-rose-400 rounded-lg hover:bg-pink-50 dark:hover:bg-zinc-700 transition-colors font-semibold text-lg"
          >
            Subscribe to Updates
          </Link>
        </div>

        {/* Additional Info */}
        <div className="mt-16 pt-8 border-t border-zinc-300 dark:border-zinc-700">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Delivering fresh, beautiful flowers and plants to bring joy and beauty to your life. Quality guaranteed, customer satisfaction assured.
          </p>
        </div>
      </div>
    </div>
  );
}
