import { Leaf, Droplet, Award } from "lucide-react"

export function CompanySection() {
  return (
    <section id="about" className="py-10 sm:py-16 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-light text-center mb-4 sm:mb-6 text-gray-800 dark:text-gray-100">
          Our <span className="font-bold">Story</span>
        </h2>
        <div className="w-full flex justify-center mb-8 sm:mb-12">
          <hr className="w-1/2 border-t-2 border-gray-400 dark:border-gray-600" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <div className="relative bg-white/70 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm px-6 py-6 sm:px-8 sm:py-8 flex flex-col gap-4 backdrop-blur">
              {/* Minimalist accent */}
              <div className="absolute left-6 top-6 sm:left-8 sm:top-8 w-3 h-3 rounded-full bg-green-400 dark:bg-green-600 shadow-md" />
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                Founded in 2024, Quench was born from a simple but bold idea: to make staying healthy feel refreshing, exciting, and effortless.
              </p>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                We blend nature's best—carefully selected fruits, herbs, and superfoods—into vibrant juices that awaken your taste buds and fuel your body. Each bottle is a celebration of freshness, crafted without shortcuts or compromises.
              </p>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                At Quench, we believe great juice should do more than quench thirst—it should energize, nourish, and bring joy. Whether you're starting your day, taking a break, or chasing wellness goals, we're here to make it easier, one sip at a time.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white dark:bg-gray-900 p-4 sm:p-6 rounded-lg shadow-sm">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <Leaf className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-medium mb-2 text-green-800 dark:text-green-400">
                Nature's Best
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                Carefully selected fruits, herbs, and superfoods for maximum nutrition and flavor.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-4 sm:p-6 rounded-lg shadow-sm">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 dark:bg-orange-900/50 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <Droplet className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500 dark:text-orange-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-medium mb-2 text-green-800 dark:text-green-400">Fresh & Pure</h3>
              <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                No shortcuts, no compromises—just pure, refreshing goodness in every bottle.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-4 sm:p-6 rounded-lg shadow-sm sm:col-span-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-100 dark:bg-yellow-900/50 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <Award className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-medium mb-2 text-green-800 dark:text-green-400">
                Energize & Nourish
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                More than just quenching thirst—our juices energize your body and bring joy to your day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
