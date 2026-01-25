import { useEffect, useState } from "react";

interface Petal {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
  opacity: number;
}

const FallingPetals = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const generatedPetals: Petal[] = [...Array(20)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 8 + Math.random() * 6,
      size: 12 + Math.random() * 16,
      rotation: Math.random() * 360,
      opacity: 0.4 + Math.random() * 0.4,
    }));
    setPetals(generatedPetals);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-20">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute animate-falling-petal"
          style={{
            left: `${petal.left}%`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
          }}
        >
          <svg
            width={petal.size}
            height={petal.size}
            viewBox="0 0 24 24"
            fill="none"
            style={{
              transform: `rotate(${petal.rotation}deg)`,
              opacity: petal.opacity,
            }}
          >
            <path
              d="M12 2C12 2 8 6 8 12C8 18 12 22 12 22C12 22 16 18 16 12C16 6 12 2 12 2Z"
              fill="rgb(244, 114, 182)"
              className="drop-shadow-sm"
            />
            <path
              d="M12 6C12 6 10 9 10 12C10 15 12 18 12 18C12 18 14 15 14 12C14 9 12 6 12 6Z"
              fill="rgb(251, 113, 133)"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default FallingPetals;
