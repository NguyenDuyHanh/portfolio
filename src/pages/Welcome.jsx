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
        bg-(--bg-light) dark:bg-(--bg-dark)
        transition-opacity duration-700
        ease-in-out
        ${visible && !leaving ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      {/* TEXT */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-center text-(--text-primary-light) dark:text-(--text-primary-dark)">
        Welcome To My
      </h1>
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-center text-(--text-primary-light) dark:text-(--text-primary-dark)">
        Portfolio Website
      </h1>

      <span className="hand-wave mb-6">
        <FrontHandIcon fontSize="large" className="rotate-315 text-yellow-300" />
      </span>

      {/* PROGRESS BAR */}
      <div className="w-64 h-4 border border-(--text-primary-light) dark:border-(--text-primary-dark) rounded overflow-hidden">
        <div
          className="h-full bg-(--bg-dark) dark:bg-(--bg-light) transition-transform duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-4 text-(--text-secondary-light) dark:text-(--text-secondary-dark) text-xs tracking-widest">
        &gt; INITIALIZING PORTFOLIO...
      </p>
    </div>
  );
};

export default Welcome;
