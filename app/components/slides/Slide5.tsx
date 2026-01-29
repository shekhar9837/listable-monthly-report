import Image from "next/image";
import Slide from "../Slide";
import { motion } from "motion/react";
const metrics = [
  {
    title: "Visibility Score",
    description: "How often AI mentions you",
    platform: "21.1%",
    value: "34.1%",
  },
  {
    title: "Share of Voice",
    description: "Your slice vs competitors",
    platform: "4.8%",
    value: "6.8%",
  },
  {
    title: "Industry Rank",
    description: "Among tracked competitors",
    platform: "",
    value: "3 of 160",
  },
  {
    title: "Total Mentions",
    description: "AI responses naming you",
    platform: "",
    value: "1537",
  },
];

export default function Slide5() {
  const fadeUp = {
    initial: { opacity: 0, filter: "blur(10px)", y: 12 },
    whileInView: { opacity: 1, filter: "blur(0px)", y: 0 },
    transition: { duration: 0.5 },
    viewport: { once: true },
  };

  return (
    <Slide>
      <div className="flex h-full flex-col gap-2 p-8 md:p-12">
        <motion.p
          {...fadeUp}
          className="text-sm uppercase text-secondary tracking-tight font-semibold"
        >
          Your Visibility Breakdown
        </motion.p>
        <motion.h2
          {...fadeUp}
          className="flex items-center gap-2 text-3xl md:text-4xl font-medium leading-tight tracking-tight text-primary"
        >
          How
          {/* <span className="flex h-6 w-6 i rounded-full bg-red text-[11px] text-white"> */}
          <Image
            alt=""
            className="w-8 h-8 rounded-sm"
            src="https://www.google.com/s2/favicons?domain=groop.in&amp;sz=32"
            width={50}
            height={8}
          />
          {/* </span> */}
          Groop compares
        </motion.h2>

        <div className="grid flex-1 grid-cols-[1.1fr_1fr] gap-8 mt-4 md:mt-28">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, filter: "blur(8px)", x: -16 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
                viewport={{ once: true }}
                className="flex  items-start w-full  justify-between gap-4 border-b border-border pb-4 text-sm"
              >
                <div className="w-[75%]">
                  <p className="font-medium text-secondary  tracking-tight">
                    {metric.title}
                  </p>
                  <p className="text-xs tracking-tight text-secondary">
                    {metric.description}
                  </p>
                </div>
                <div className="w-[25%] flex flex-center gap-4 justify-between ">
                  <div className="text-right text-sm tracking-tight text-secondary">
                    {metric.platform && (
                      <>
                        <p className="text-xs tracking-tight text-secondary">
                          Platform Avg
                        </p>
                        <p className="text-sm font-semibold tracking-tight text-secondary">
                          {metric.platform}
                        </p>
                      </>
                    )}
                  </div>
                  <div className="text-right font-medium text-secondary tracking-tight">
                    <p className="text-xs tracking-tight text-secondary">You</p>
                    <p className="text-xl font-semibold tracking-tight text-primary">
                      {metric.value}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div {...fadeUp} className="flex flex-col items-start gap-2">
            <p className="text-xs uppercase text-secondary tracking-tight font-semibold">
              Visibility Spectrum
            </p>
            <div className="w-full flex flex-col items-center gap-4">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-sm tracking-tight text-secondary">
                  Your Position
                </p>
                <p className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight text-primary">
                  34.1
                </p>
                <p className="text-sm tracking-tight text-green-500 font-semibold">
                  Top 27%
                </p>
              </motion.div>

              <div className="relative w-full max-w-lg pt-6">
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
                  viewport={{ once: true }}
                  className="absolute top-0 left-0 right-0"
                >
                  <div
                    className="absolute top-0 flex flex-col items-center"
                    style={{ left: "16.7%", transform: "translateX(-50%)" }}
                  >
                    <span className="text-[11px] tracking-tight text-secondary">
                      Median
                    </span>
                    <div className="mt-0.5 h-2 w-px bg-primary/15" />
                  </div>
                  <div
                    className="absolute top-0 flex flex-col items-center"
                    style={{ left: "30%", transform: "translateX(-50%)" }}
                  >
                    <span className="text-[11px] tracking-tight text-secondary">
                      Top 25%
                    </span>
                    <div className="mt-0.5 h-2 w-px bg-primary/15" />
                  </div>
                  <div
                    className="absolute top-0 flex flex-col items-center"
                    style={{ left: "46.7%", transform: "translateX(-50%)" }}
                  >
                    <span className="text-[11px] tracking-tight text-secondary">
                      Top 10%
                    </span>
                    <div className="mt-0.5 h-2 w-px bg-primary/15" />
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 1, ease: "easeInOut", delay: 0.18 }}
                  viewport={{ once: true }}
                  className="mt-2 h-3 w-full rounded-full"
                  style={{
                    background:
                      "linear-gradient(to right, #ef4444 0%, #f97316 20%, #eab308 40%, #84cc16 60%, #22c55e 80%, #16a34a 100%)",
                    transformOrigin: "left center",
                  }}
                />

                <motion.div
                  initial={{ opacity: 0, x: "-34.1%" }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.28 }}
                  viewport={{ once: true }}
                className="absolute top-full z-10 mt-1.5 flex -translate-x-1/2 flex-col items-center"
                  style={{ left: "34.1%" }}
                >
                  <div className="h-0 w-0 border-l-[6px] border-r-[6px] border-b-8 border-l-transparent border-r-transparent border-b-primary" />
                  <img
                    alt=""
                    className="mt-1 h-6 w-6 rounded-sm"
                    src="https://www.google.com/s2/favicons?domain=groop.in&sz=32"
                  />
                <span className="mt-0.5 whitespace-nowrap text-sm font-medium tracking-tight text-primary">
                  Groop
                </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: "-38.35%" }}
                  whileInView={{ opacity: 0.7, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.34 }}
                  viewport={{ once: true }}
                className="absolute top-full z-5 mt-1.5 flex -translate-x-1/2 flex-col items-center opacity-70"
                  style={{ left: "38.35%" }}
                >
                  <div className="h-0 w-0 border-l-[5px] border-r-[5px] border-b-[6px] border-l-transparent border-r-transparent border-b-secondary" />
                  <img
                    alt=""
                    className="mt-1 h-5 w-5 rounded-sm"
                    src="https://www.google.com/s2/favicons?domain=qoruz.com&sz=32"
                  />
                  <span className="mt-0.5 max-w-[72px] truncate whitespace-nowrap text-xs font-medium text-secondary">
                    Qoruz
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: "-36.08%" }}
                  whileInView={{ opacity: 0.7, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.38 }}
                  viewport={{ once: true }}
                className="absolute top-full z-5 mt-1.5 flex -translate-x-1/2 flex-col items-center opacity-70"
                  style={{ left: "36.08%" }}
                >
                  <div className="h-0 w-0 border-l-[5px] border-r-[5px] border-b-[6px] border-l-transparent border-r-transparent border-b-secondary" />
                  <img
                    alt=""
                    className="mt-1 h-5 w-5 rounded-sm"
                    src="https://www.google.com/s2/favicons?domain=kofluence.com&sz=32"
                  />
                  <span className="mt-0.5 max-w-[72px] truncate whitespace-nowrap text-xs font-medium text-secondary">
                    Kofluence
                  </span>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                className="md:pt-24 flex items-center gap-4 text-sm tracking-tight text-secondary"
              >
                <span className="flex items-center gap-1 ">
                  <img
                    alt=""
                    className=" h-3 w-3 rounded-sm"
                    src="https://www.google.com/s2/favicons?domain=groop.in&sz=32"
                  />
                  You
                </span>
                <span className="flex items-center gap-1">
                  <img
                    alt=""
                    className=" h-3 w-3 rounded-sm"
                    src="https://www.google.com/s2/favicons?domain=qoruz.com&sz=32"
                  />
                  Qoruz
                </span>
                <span className="flex items-center gap-1">
                  <img
                    alt=""
                    className=" h-3 w-3 rounded-sm"
                    src="https://www.google.com/s2/favicons?domain=kofluence.com&sz=32"
                  />
                  Kofluence
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.p {...fadeUp} className="text-sm tracking-tight text-secondary">
          Compared against 10,000+ brands tracked by Searchable
        </motion.p>
      </div>
    </Slide>
  );
}
