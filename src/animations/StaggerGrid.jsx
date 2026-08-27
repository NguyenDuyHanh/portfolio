import { motion } from "framer-motion";
import { staggerItem, smoothEase } from "./variants";

export const StaggerContainer = ({
  children,
  className = "",
  staggerDelay = 0.1,
  viewportMargin = "-40px",
  ...props
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: viewportMargin }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.05,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({
  children,
  className = "",
  hoverLift = -6,
  ...props
}) => {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: hoverLift }}
      transition={{ duration: 0.3, ease: smoothEase }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
