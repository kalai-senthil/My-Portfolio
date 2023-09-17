import { motion } from "framer-motion";
import { useRef, useState } from "react";

function Hero() {
  const [showShadow, setShowShadow] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  return (
    <section className="grid my-10 place-items-center grid-cols-2">
      <section className="md:pl-5 md:flex hidden flex-col col-span-2 md:col-span-1 gap-y-4">
        <motion.h2
          className={`text-6xl lg:text-8xl col-auto text-primary font-bold ${
            showShadow ? "text-shadow" : ""
          }`}
          animate={{ y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1 }}
          onAnimationComplete={() => {
            setShowShadow(true);
          }}
        >
          About Life
        </motion.h2>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-xl"
        >
          <b>Life</b> is an{" "}
          <span className="text-primary font-semibold">opportunity</span> to
          just <span className="text-primary font-semibold">experience</span> &{" "}
          <br />
          <span className="text-primary font-semibold">explore</span> things
          around you.
        </motion.p>
      </section>
      <section className="md:col-span-1 col-span-2 flex flex-col justify-center items-center">
        <motion.div
          className="cursor-pointer p-5"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            className="border-primary border-[.2em] lg:border-[.4em] rounded-full shadow-xl"
            alt="me"
            src="https://lh3.googleusercontent.com/ogw/AGvuzYYdATWLe1mE5MSEgs3KlUXC7j8-ig63Y_0gw8y3zNM=s300-c-mo"
          />
        </motion.div>
        <section className="mt-5 md:mt-2 gap-y-2 flex flex-col justify-center items-center">
          <motion.h3
            className="font-bold text-2xl"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Kalaiarasan Senthil
          </motion.h3>
          <motion.button
            ref={btnRef}
            onMouseEnter={() => {
              if (btnRef) {
                if (btnRef.current?.classList.contains("shadow-animate")) {
                  const ani = btnRef.current?.animate(
                    [
                      {
                        boxShadow: "1px 1px black",
                      },
                    ],
                    { duration: 200, easing: "ease-in-out" }
                  );
                  ani.addEventListener("finish", () => {
                    btnRef.current?.classList.remove("shadow-animate");
                  });
                }
              }
            }}
            onMouseLeave={() => {
              if (btnRef) {
                btnRef.current?.classList.add("shadow-animate");
              }
            }}
            className="bg-primary transition-all px-4 p-2 font-semibold shadow-animate rounded-lg text-white"
          >
            About
          </motion.button>
        </section>
      </section>
    </section>
  );
}
export default Hero;
