import { motion } from "framer-motion";
import type { StuffType } from "../content/config";
function typeClass(tyy: StuffType) {
  switch (tyy) {
    case "xs":
      return "aspect-square";
    case "sm":
      return "aspect-video";
    case "md":
      return "aspect-square";
    case "lg":
      return "aspect-video";
    case "xl":
      return "aspect-video";
    default:
      break;
  }
}
function StuffShow({
  stuff,
  children,
  idx,
}: {
  stuff: StuffType;
  children: any;
  idx: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      transition={{ delay: idx / 50 }}
      className={`cursor-pointer my-2 w-full rounded-xl ${typeClass(stuff)}`}
    >
      {children}
    </motion.div>
  );
}

export default StuffShow;
