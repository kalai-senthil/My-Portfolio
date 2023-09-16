import { motion } from "framer-motion";
import type { ThingSchema } from "../content/config";

function ThingMatterMost({ thing, idx }: { thing: ThingSchema; idx: number }) {
  return (
    <motion.div
      className="w-[25rem] cursor-pointer overflow-y-visible"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: idx / 10 }}
    >
      <motion.video
        loop
        whileHover={{ y: -10 }}
        onMouseEnter={(e) => {
          e.currentTarget.volume = 0;
          e.currentTarget.play();
        }}
        className="rounded-3xl shadow-xl p-2"
        src={thing.video}
      ></motion.video>
      <section className="px-4 mt-2">
        <p className="font-semibold text-xl">{thing.title}</p>
        <a
          target="_blank"
          href={thing.link}
          className="text-primary underline text-sm font-bold"
        >
          {thing.linkName}
        </a>
      </section>
    </motion.div>
  );
}

export default ThingMatterMost;
