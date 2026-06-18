"use client";

import { useEffect, useState } from "react";

type Petal = {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  opacity: number;
};

const PETAL_COUNT = 14;

function PetalShape({ opacity }: { opacity: number }) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 32 32" style={{ opacity }}>
      <path
        d="M16 2c4 4 8 6 8 11a8 8 0 0 1-16 0c0-5 4-7 8-11z"
        fill="#ff7d96"
      />
      <path
        d="M16 2c4 4 8 6 8 11a8 8 0 0 1-16 0c0-5 4-7 8-11z"
        fill="#ffb0c2"
        opacity="0.6"
      />
    </svg>
  );
}

export default function SakuraPetals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    setPetals(
      Array.from({ length: PETAL_COUNT }, (_, id) => ({
        id,
        left: Math.random() * 100,
        size: 12 + Math.random() * 14,
        duration: 9 + Math.random() * 8,
        delay: Math.random() * 10,
        drift: 60 + Math.random() * 100,
        opacity: 0.7 + Math.random() * 0.3,
      }))
    );
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
      {petals.map((petal) => (
        <span
          key={petal.id}
          className="petal"
          style={{
            left: `${petal.left}%`,
            width: petal.size,
            height: petal.size,
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`,
            "--petal-drift": `${petal.drift}px`,
          } as React.CSSProperties}
        >
          <PetalShape opacity={petal.opacity} />
        </span>
      ))}
    </div>
  );
}
