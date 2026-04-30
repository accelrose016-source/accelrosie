import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 dark:from-zinc-900 dark:to-zinc-800 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold text-zinc-900 dark:text-white mb-6 leading-tight">
            Welcome to <span className="text-blue-700">BOHOL BIBLE BAPTIST YOUTH FELLOWSHIP</span>
          </h1>
          <p className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-300 mb-8 leading-relaxed">
            A vibrant youth ministry connecting young believers across Bohol. 
            Build leadership, strengthen faith, and create unforgettable memories at our annual youth camps.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg
                className="w-6 h-6 text-blue-700"
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
              Youth Leadership Network
            </h3>
            <p className="text-zinc-600 dark:text-zinc-300">
              Connect with core leaders from churches across Bohol and develop your leadership skills.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg
                className="w-6 h-6 text-purple-700"
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
              Annual Youth Camp
            </h3>
            <p className="text-zinc-600 dark:text-zinc-300">
              Register and manage your participation in our exciting annual youth camp experience.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg
                className="w-6 h-6 text-blue-700"
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
              Leadership Selection
            </h3>
            <p className="text-zinc-600 dark:text-zinc-300">
              Core leaders nominate and select camp leaders and assistant leaders for our ministry.
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/login"
            className="px-8 py-4 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors font-semibold text-lg"
          >
            Youth Leader Login
          </Link>
          <Link
            href="/signup"
            className="px-8 py-4 bg-white dark:bg-zinc-800 text-blue-700 dark:text-blue-400 border-2 border-blue-700 rounded-lg hover:bg-blue-50 dark:hover:bg-zinc-700 transition-colors font-semibold text-lg"
          >
            Join Fellowship
          </Link>
        </div>

        {/* Additional Info */}
        <div className="mt-16 pt-8 border-t border-zinc-300 dark:border-zinc-700">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Open to young believers from Baptist churches across Bohol. Build your faith and leadership with us.
          </p>
        </div>
      </div>
    </div>
  );
}
