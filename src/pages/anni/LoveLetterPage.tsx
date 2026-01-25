import { Heart, Sparkles } from "lucide-react";

const LoveLetterPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 dark:from-rose-950 dark:via-pink-950 dark:to-red-950 relative overflow-hidden">
      {/* Floating hearts background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-rose-200/30 dark:text-rose-800/20 animate-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
              width: `${12 + Math.random() * 20}px`,
              height: `${12 + Math.random() * 20}px`,
            }}
            fill="currentColor"
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10 flex flex-col min-h-screen">
        {/* Letter Container */}
        <div className="flex-1 flex items-center justify-center">
          <div className="max-w-2xl w-full animate-fade-in">
            {/* Letter Card */}
            <div className="bg-white/80 dark:bg-rose-900/40 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-rose-100 dark:border-rose-800/50 relative">
              {/* Decorative corners */}
              <div className="absolute top-4 left-4">
                <Sparkles className="w-5 h-5 text-rose-300 dark:text-rose-600" />
              </div>
              <div className="absolute top-4 right-4">
                <Heart className="w-5 h-5 text-rose-400 dark:text-rose-500" fill="currentColor" />
              </div>
              <div className="absolute bottom-4 left-4">
                <Heart className="w-5 h-5 text-rose-400 dark:text-rose-500" fill="currentColor" />
              </div>
              <div className="absolute bottom-4 right-4">
                <Sparkles className="w-5 h-5 text-rose-300 dark:text-rose-600" />
              </div>

              {/* Letter Content */}
              <div className="text-center mb-8">
                <Heart className="w-10 h-10 text-rose-500 mx-auto mb-4 animate-pulse" fill="currentColor" />
                <h1 className="text-2xl md:text-3xl font-serif text-rose-600 dark:text-rose-400">
                  A Letter For You
                </h1>
              </div>

              <div className="prose prose-rose dark:prose-invert max-w-none">
                <p className="text-rose-800 dark:text-rose-200 text-lg md:text-xl font-serif italic mb-6">
                  My Dearest Hnin Thaw Tar,
                </p>

                <div className="space-y-4 text-rose-700 dark:text-rose-300 leading-relaxed">
                  <p>
                    As I sit here reflecting on this beautiful month we've shared together, my heart 
                    overflows with gratitude for having you in my life. Every moment with you feels 
                    like a blessing I never knew I needed.
                  </p>

                  <p>
                    Your presence brings warmth to my coldest days and light to my darkest moments. 
                    The way you smile, the sound of your laughter, the kindness in your eyes — 
                    these are the treasures I hold closest to my heart.
                  </p>

                  <p>
                    You mean the world to me, more than words could ever express. In you, I've found 
                    not just a partner, but a best friend, a confidant, and a source of endless joy. 
                    Every day spent with you feels like a beautiful dream I never want to wake from.
                  </p>

                  <p>
                    One month may seem short to some, but with you, it has been filled with a 
                    lifetime of happiness. I cherish every laugh we've shared, every conversation 
                    that lasted until the stars came out, and every quiet moment where simply being 
                    together was enough.
                  </p>

                  <p>
                    As we step into the future together, my heart is filled with hope and warmth. 
                    I look forward to creating countless more memories with you, to being there for 
                    you through every season of life, and to loving you more with each passing day.
                  </p>

                  <p>
                    Thank you for being you. Thank you for choosing me. Thank you for this 
                    beautiful month, and for all the months and years to come.
                  </p>
                </div>

                <div className="mt-8 text-right">
                  <p className="text-rose-600 dark:text-rose-400 font-serif text-lg">
                    Forever yours with love,
                  </p>
                  <p className="text-rose-700 dark:text-rose-300 font-serif text-xl mt-2 italic">
                    Si Thu Phyo
                  </p>
                  <div className="flex justify-end mt-3">
                    <Heart className="w-6 h-6 text-rose-500" fill="currentColor" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="py-6 text-center mt-8">
          <a
            href="https://www.lukeplayz.online"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-400/60 hover:text-rose-500 text-sm transition-colors duration-300"
          >
            © 2025 LukePlayZ
          </a>
        </footer>
      </div>
    </div>
  );
};

export default LoveLetterPage;
