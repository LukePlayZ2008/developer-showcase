import { Link } from "react-router-dom";
import { Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import MusicPlayer from "@/components/anni/MusicPlayer";
const photos = [
  "/photo1.jpg",
  "/photo2.jpg",
  "/photo3.jpg",
  "/photo4.jpg",
];

const AnniversaryPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 dark:from-rose-950 dark:via-pink-950 dark:to-red-950 relative overflow-hidden">
      <MusicPlayer />
      {/* Floating hearts background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-rose-200/40 dark:text-rose-800/30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
              fontSize: `${16 + Math.random() * 24}px`,
              width: `${16 + Math.random() * 24}px`,
              height: `${16 + Math.random() * 24}px`,
            }}
            fill="currentColor"
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-rose-400 animate-pulse" />
            <Heart className="w-8 h-8 text-rose-500 animate-pulse" fill="currentColor" />
            <Sparkles className="w-6 h-6 text-rose-400 animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-rose-600 dark:text-rose-400 mb-4">
            Happy 1 Month Anniversary
          </h1>
          <p className="text-lg md:text-xl text-rose-500/80 dark:text-rose-300/80 font-light">
            One month of beautiful memories together
          </p>
        </div>

        {/* Photo Gallery */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={photo}
                    alt={`Memory ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-rose-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Heart
                  className="absolute bottom-3 right-3 w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                  fill="currentColor"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Love Letter Button */}
        <div className="text-center animate-fade-in" style={{ animationDelay: "600ms" }}>
          <Link to="/project/anni/love-letter">
            <Button
              size="lg"
              className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Heart className="w-5 h-5 mr-2" fill="currentColor" />
              Go to Love Letter
              <Sparkles className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 py-4 text-center">
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
  );
};

export default AnniversaryPage;
