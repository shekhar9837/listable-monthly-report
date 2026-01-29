import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import Slide from "../Slide";

export default function Slide3() {
  const targetScore = 34.1;
  const [score, setScore] = useState(0);
  const scoreRef = useRef<HTMLDivElement | null>(null);
  const isScoreInView = useInView(scoreRef, { once: true, margin: "-10% 0px" });

  useEffect(() => {
    if (!isScoreInView) return;
    let start: number | null = null;
    let frameId = 0;
    const duration = 1100;

    const tick = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setScore(targetScore * progress);
      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick);
      }
    };

    setScore(0);
    frameId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frameId);
  }, [isScoreInView]);

  return (
    <Slide>
      <div className="flex h-full flex-col  p-8 md:p-11">
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="flex items-center gap-3"
        >
          <h2 className="text-3xl md:text-5xl font-medium leading-tight tracking-tight">
            Your AI Visibility Score
          </h2>
        </motion.div>

        <div className="grid h-full grid-cols-[1.05fr_1fr] gap-10 md:pt-10">
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", y: 12 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center gap-4"
          >
            <p className="text-base md:text-lg font-semibold leading-relaxed tracking-tight text-primary">
              Groop&apos;s visibility improved by 15.6% this period, reaching
              34.1. Your brand is being mentioned more frequently in AI-generated
              responses.
            </p>
            <p className="text-sm md:text-base leading-relaxed tracking-tight text-secondary">
              Momentum is on your side. Continue building authority signals to
              maintain this upward trajectory.
            </p>
          </motion.div>

          <div className="flex flex-col items-center justify-center ">
            <motion.div
              ref={scoreRef}
              initial={{ opacity: 0, filter: "blur(10px)", y: 12 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-soft"
            >
              <div className="mb-2 text-center">
                <p className="mb-1 text-sm tracking-tight text-secondary">Your Score</p>
                <span className="text-6xl md:text-7xl font-semibold tabular-nums text-primary">
                  {score.toFixed(1)}
                </span>
              </div>

              <div className="relative mt-6 pt-7">
                <motion.div
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: "easeInOut", delay: 0.15 }}
                  viewport={{ once: true }}
                  className="absolute top-0 flex flex-col items-center"
                  style={{ left: "16.7%", transform: "translateX(-50%)" }}
                >
                  <span className="text-[11px] tracking-tight text-secondary">Median</span>
                  <div className="mt-0.5 h-2 w-px bg-primary/15" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: "easeInOut", delay: 0.22 }}
                  viewport={{ once: true }}
                  className="absolute top-0 flex flex-col items-center"
                  style={{ left: "30%", transform: "translateX(-50%)" }}
                >
                  <span className="text-[11px] tracking-tight text-secondary">Top 25%</span>
                  <div className="mt-0.5 h-2 w-px bg-primary/15" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -4 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: "easeInOut", delay: 0.29 }}
                  viewport={{ once: true }}
                  className="absolute top-0 flex flex-col items-center"
                  style={{ left: "46.7%", transform: "translateX(-50%)" }}
                >
                  <span className="text-[11px] tracking-tight text-secondary">Top 10%</span>
                  <div className="mt-0.5 h-2 w-px bg-primary/15" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 1, ease: "easeInOut", delay: 0.18 }}
                  viewport={{ once: true }}
                  className="h-4 rounded-full"
                  style={{
                    background:
                      "linear-gradient(to right, #ef4444 0%, #f97316 20%, #eab308 40%, #84cc16 60%, #22c55e 80%, #16a34a 100%)",
                    transformOrigin: "left center",
                  }}
                />

                <motion.div
                  initial={{ opacity: 0, x: -6 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: "easeInOut", delay: 0.34 }}
                  viewport={{ once: true }}
                  className="absolute top-full z-10 mt-1 flex flex-col items-center"
                  style={{ left: "34.1%", transform: "translateX(-50%)" }}
                >
                  <div className="h-0 w-0 border-l-[6px] border-r-[6px] border-b-8 border-l-transparent border-r-transparent border-b-primary" />
                  <img
                    alt=""
                    className="mt-1 h-5 w-5 rounded-sm"
                    src="https://www.google.com/s2/favicons?domain=groop.in&amp;sz=32"
                  />
                  <span className="mt-0.5 whitespace-nowrap text-xs font-medium tracking-tight text-primary">
                    Top 27%
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -4 }}
                  whileInView={{ opacity: 0.7, x: 0 }}
                  transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
                  viewport={{ once: true }}
                  className="absolute top-full z-5 mt-1 flex flex-col items-center opacity-70"
                  style={{ left: "38.3523%", transform: "translateX(-50%)" }}
                >
                  <div className="h-0 w-0 border-l-[5px] border-r-[5px] border-b-[6px] border-l-transparent border-r-transparent border-b-secondary" />
                  <img
                    alt=""
                    className="mt-1 h-4 w-4 rounded-sm"
                    src="https://www.google.com/s2/favicons?domain=qoruz.com&amp;sz=32"
                  />
                  <span
                    className="mt-0.5 max-w-[50px] truncate whitespace-nowrap text-[10px] font-medium text-secondary"
                    title="Qoruz"
                  >
                    Qoruz
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -5 }}
                  whileInView={{ opacity: 0.7, x: 0 }}
                  transition={{ duration: 1, ease: "easeInOut", delay: 0.37 }}
                  viewport={{ once: true }}
                  className="absolute top-full z-5 mt-1 flex flex-col items-center opacity-70"
                  style={{ left: "36.0795%", transform: "translateX(-50%)" }}
                >
                  <div className="h-0 w-0 border-l-[5px] border-r-[5px] border-b-[6px] border-l-transparent border-r-transparent border-b-secondary" />
                  <img
                    alt=""
                    className="mt-1 h-4 w-4 rounded-sm"
                    src="https://www.google.com/s2/favicons?domain=kofluence.com&amp;sz=32"
                  />
                  <span
                    className="mt-0.5 max-w-[50px] truncate whitespace-nowrap text-[10px] font-medium text-secondary"
                    title="Kofluence"
                  >
                    Kofluence
                  </span>
                </motion.div>
              </div>

              <div className="mt-16 flex items-center justify-center gap-1.5">
                <span className="text-xs text-secondary">
                  Based on 10,000+ brands
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)", y: 12 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-1"
            >
              <div className="flex items-center gap-2 rounded-xl bg-green-100/70 px-4 py-2">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 19V5M5 12l7-7 7 7"></path>
                </svg>
                <span className="text-2xl font-bold tabular-nums text-green-500">
                  +15.6%
                </span>
              </div>
              <span className="text-xs text-secondary">
                change vs. last month
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
