import { useEffect, useState } from 'react';
import Icon from '@/components/ui/icon';

interface SatellitePosition {
  x: number;
  y: number;
}

export default function FloatingSatellites() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [satellites, setSatellites] = useState<SatellitePosition[]>([
    { x: 100, y: 100 },
    { x: 200, y: 300 },
    { x: 300, y: 200 },
  ]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSatellites((prev) =>
        prev.map((sat, index) => {
          const delay = (index + 1) * 0.15;
          const smoothness = 0.05 / (delay * 2);
          
          const dx = mousePos.x - sat.x;
          const dy = mousePos.y - sat.y;

          return {
            x: sat.x + dx * smoothness,
            y: sat.y + dy * smoothness,
          };
        })
      );
    }, 16);

    return () => clearInterval(interval);
  }, [mousePos]);

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {satellites.map((sat, index) => (
        <div
          key={index}
          className="absolute transition-transform duration-100"
          style={{
            left: `${sat.x}px`,
            top: `${sat.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div
            className="relative animate-pulse"
            style={{
              animationDelay: `${index * 0.3}s`,
              animationDuration: '3s',
            }}
          >
            <Icon
              name="Satellite"
              size={32 + index * 8}
              className="text-primary drop-shadow-[0_0_15px_rgba(99,102,241,0.7)]"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(99, 102, 241, 0.8))',
                transform: `rotate(${index * 45}deg)`,
              }}
            />
            <div
              className="absolute inset-0 rounded-full blur-xl opacity-50"
              style={{
                background: `radial-gradient(circle, rgba(99, 102, 241, 0.6) 0%, transparent 70%)`,
                width: `${48 + index * 12}px`,
                height: `${48 + index * 12}px`,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
