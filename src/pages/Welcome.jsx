import { useEffect, useState } from "react";
import FrontHandIcon from '@mui/icons-material/FrontHand';

const Welcome = ({ onFinish, visible }) => {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (!visible) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);

          // bắt đầu fade-out
          setLeaving(true);

          // sau khi fade-out xong → ẩn welcome
          setTimeout(() => {
            onFinish();
          }, 700);

          return 100;
        }
        return prev + 1.5; // tốc độ chạy (điều chỉnh)
      });
    }, 30);

    return () => clearInterval(interval);
  }, [visible, onFinish]);

  return (
    <div
      className={`
        fixed inset-0 z-9999
        flex flex-col items-center justify-center
        bg-white dark:bg-black text-black dark:text-white
        transition-opacity duration-700
        ease-in-out
        ${visible && !leaving ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      {/* TEXT */}
      <h1 className="text-5xl font-extrabold tracking-widest mb-4 neon-text">
        Welcome To My
      </h1>
      <h1 className="text-5xl font-extrabold tracking-widest mb-4 neon-text">
        Portfolio Website
      </h1>

      <span className="hand-wave mb-6">
        <FrontHandIcon fontSize="large" className="rotate-315 text-yellow-300" />
      </span>

      {/* PROGRESS BAR */}
      <div className="w-64 h-4 border border-black dark:border-white rounded overflow-hidden">
        <div
          className="h-full bg-black dark:bg-white transition-transform duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-4 text-xs tracking-widest opacity-80">
        &gt; INITIALIZING PORTFOLIO...
      </p>
    </div>
  );
};

export default Welcome;
