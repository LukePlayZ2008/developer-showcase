import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

const MusicPlayer = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Try to autoplay
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Autoplay was prevented, wait for user interaction
          setIsPlaying(false);
        });
    }

    return () => {
      audio.pause();
    };
  }, []);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!isPlaying) {
      audio.play().then(() => setIsPlaying(true));
    }

    setIsMuted(!isMuted);
    audio.muted = !isMuted;
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/romantic-music.mp3"
        loop
        preload="auto"
      />
      <Button
        onClick={toggleMute}
        variant="ghost"
        size="icon"
        className="fixed top-4 right-4 z-50 bg-white/80 dark:bg-rose-900/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white dark:hover:bg-rose-800 transition-all duration-300 border border-rose-200 dark:border-rose-700"
        aria-label={isMuted ? "Unmute music" : "Mute music"}
      >
        {isMuted || !isPlaying ? (
          <VolumeX className="w-5 h-5 text-rose-500" />
        ) : (
          <Volume2 className="w-5 h-5 text-rose-500 animate-pulse" />
        )}
      </Button>
    </>
  );
};

export default MusicPlayer;
