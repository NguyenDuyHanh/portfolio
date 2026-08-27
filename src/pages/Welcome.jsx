import { useEffect, useState } from "react";
import { Hand } from "lucide-react";

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
        bg-background
        transition-opacity duration-700
        ease-in-out
        ${visible && !leaving ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      {/* TEXT */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-center text-foreground">
        Welcome To My
      </h1>
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-center text-foreground">
        Portfolio Website
      </h1>

      <span className="hand-wave mb-6">
        <Hand className="w-10 h-10 -rotate-45 text-yellow-300 fill-yellow-300" />
      </span>

      {/* PROGRESS BAR */}
      <div className="w-64 h-4 border border-foreground rounded overflow-hidden">
        <div
          className="h-full bg-foreground transition-transform duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-4 text-muted-foreground text-xs tracking-widest">
        &gt; INITIALIZING PORTFOLIO...
      </p>
    </div>
  );
};

export default Welcome;
