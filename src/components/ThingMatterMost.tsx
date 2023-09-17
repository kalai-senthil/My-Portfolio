import { motion } from "framer-motion";
import type { ThingSchema } from "../content/config";

function ThingMatterMost({ thing, idx }: { thing: ThingSchema; idx: number }) {
  return (
    <motion.div
      className="col-span-12 md:col-span-6 lg:col-span-4 aspect-video cursor-pointer overflow-y-visible"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: idx / 5 }}
    >
      <motion.video
        loop
        whileHover={{ y: -10 }}
        onMouseEnter={(e) => {
          e.currentTarget.volume = 0;
          e.currentTarget.play();
        }}
        className="rounded-3xl w-full h-full shadow lg:shadow-xl"
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
