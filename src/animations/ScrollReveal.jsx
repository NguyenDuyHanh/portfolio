import { motion } from "framer-motion";
import { fadeInUp } from "./variants";

export const ScrollReveal = ({
  children,
  className = "",
  variants = fadeInUp,
  viewportMargin = "-40px",
  delay = 0,
  ...props
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: viewportMargin }}
      variants={{
        hidden: variants.hidden,
        visible: {
          ...variants.visible,
          transition: {
            ...variants.visible?.transition,
            delay,
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

export default ScrollReveal;
