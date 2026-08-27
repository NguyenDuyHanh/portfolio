// Reusable Framer Motion variants & transitions

// Ultra-smooth Apple/Vercel deceleration curve (zero end-jerk)
export const smoothEase = [0.16, 1, 0.3, 1];

export const fadeInUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: smoothEase },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: smoothEase },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: smoothEase },
  },
};

export const cardHoverProps = {
  whileHover: { y: -6, transition: { duration: 0.3, ease: smoothEase } },
};

export const buttonHoverProps = {
  whileHover: { scale: 1.04 },
  whileTap: { scale: 0.96 },
  transition: { duration: 0.2, ease: smoothEase },
};

export const activePillTransition = {
  type: "spring",
  stiffness: 350,
  damping: 32,
};
