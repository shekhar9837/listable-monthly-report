import Slide from "../Slide";
import { motion } from "motion/react";
import Image from "next/image";

const rising = [
  {
    name: "Upfluence",
    share: "5.0% share",
    change: "+2.7%",
    tone: "green",
    icon: { type: "letter", value: "U", bg: "#2563EB", fg: "white" },
  },
  {
    name: "Infloq",
    share: "2.8% share",
    change: "+2.1%",
    tone: "green",
    icon: { type: "dots", value: "Infloq" },
  },
  {
    name: "HashFame",
    share: "2.1% share",
    change: "+2.1%",
    tone: "green",
    icon: { type: "letter", value: "H", bg: "#F4EFEA", fg: "#6B7280" },
  },
];

const declining = [
  {
    name: "Reelax",
    share: "0.4% share",
    change: "-3.4%",
    tone: "red",
    icon: { type: "letter", value: "R", bg: "#F3F4F6", fg: "#6B7280" },
  },
  {
    name: "Kofluence",
    share: "9.6% share",
    change: "-1.8%",
    tone: "red",
    icon: { type: "globe", value: "Kofluence" },
  },
  {
    name: "JioStarverse",
    share: "0.0% share",
    change: "-1.5%",
    tone: "red",
    icon: { type: "letter", value: "J", bg: "#F3F4F6", fg: "#6B7280" },
  },
];

const toneStyles = {
  green: { badge: "bg-green-100 text-green-500" },
  red: { badge: "bg-red-100 text-red-500" },
} as const;

export default function Slide2() {
  return (
    <Slide>
      <div className="flex h-full flex-col  p-8 md:p-11">
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="flex items-center gap-3 "
        >
          <span
            style={{
              backgroundColor: "rgba(47, 179, 83, 0.082)",
              color: "rgb(47, 179, 83)",
            }}
            className="text-xs font-medium tracking-wide uppercase px-2 py-1 rounded-full"
          >
            MONTHLY REPORT
          </span>
          <span className="text-secondary text-sm">
            Dec 29, 2025 – Jan 5, 2026
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.05 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mt-3"
        >
          <span className="flex  items-center justify-center rounded-full bg-red text-[11px] text-white">
            <Image
              alt=""
              className=" rounded-xl"
              src="https://www.google.com/s2/favicons?domain=groop.in&amp;sz=32"
              width={30}
              height={30}
            />
          </span>
          <h2 className="text-3xl md:text-4xl text-primary font-medium leading-tight tracking-tight flex items-center gap-3">
            Groop Monthly Performance
          </h2>
        </motion.div>

        <div className="grid h-full grid-cols-[1.1fr_1fr] gap-10 md:pt-20">
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)", y: 12 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.15 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-[#FBFBFA] p-6 shadow-soft"
            >
              <p className="text-sm  font-medium mb-4 text-secondary tracking-tight">
                Visibility Score
              </p>
              <div className="flex items-center gap-2 justify-between">
                <div>
                  <p className="text-4xl font-semibold tabular-nums mb-1">
                    34.1%
                  </p>
                  <p className="text-xs text-secondary">Started at 29.5%</p>
                </div>
                <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-100 text-green-500">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 19V5M5 12l7-7 7 7"></path>
                  </svg>
                  <span className="text-sm font-semibold tabular-nums text-green-500">
                    +15.6%
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)", y: 12 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.25 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-[#FBFBFA] p-6 shadow-soft"
            >
              <p className="text-sm  font-medium mb-4 text-secondary tracking-tight">Share of Voice</p>
              <div className="flex items-center gap-2 justify-between">
                <div>
                  <p className="text-4xl font-semibold tabular-nums mb-1">6.8%</p>
                  <p className="text-xs text-secondary">Started at 10.1%</p>
                </div>
                <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-red-100 text-red-500">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14M19 12l-7 7-7-7" />
                  </svg>
                  <span className="text-sm font-semibold tabular-nums text-red-500">-32.7%</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", y: 12 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white p-4 shadow-soft"
          >
            <p className="text-sm  font-medium mb-4 text-secondary tracking-tight">
              Competitor Share of Voice Movement
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <p className="flex items-center gap-2 text-sm font-medium text-secondary tracking-tight">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  Rising
                </p>
                {rising.map((item, index) => {
                  const tone =
                    item.tone ??
                    (item.change.startsWith("+") ? "green" : "red");
                  const badgeClass =
                    toneStyles[tone as keyof typeof toneStyles]?.badge ??
                    toneStyles.green.badge;

                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.45,
                        ease: "easeInOut",
                        delay: 0.2 + index * 0.08,
                      }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F3F4F6] text-[10px] font-semibold text-muted">
                        {item.icon.type === "letter" && (
                          <span
                            className="flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-semibold"
                            style={{
                              backgroundColor: item.icon.bg,
                              color: item.icon.fg,
                            }}
                          >
                            {item.icon.value}
                          </span>
                        )}
                        {item.icon.type === "dots" && (
                          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F5F7FF]">
                            <svg
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                              className="h-4 w-4 text-[#1D4ED8]"
                            >
                              <circle cx="7" cy="8" r="2" fill="currentColor" />
                              <circle
                                cx="15"
                                cy="8"
                                r="2"
                                fill="currentColor"
                              />
                              <circle
                                cx="11"
                                cy="15"
                                r="2"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        )}
                      </span>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-primary">
                          {item.name}
                        </p>
                        <p className="text-xs text-secondary">{item.share}</p>
                      </div>
                      <span
                        className={`rounded-full px-2 py-0.5 text-sm font-medium ${badgeClass}`}
                      >
                        {item.change}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              <div className="space-y-4">
                <p className="flex items-center gap-2 text-sm font-medium text-secondary tracking-tight">
                  <span className="h-2 w-2 rounded-full bg-red-500" />
                  Declining
                </p>
                {declining.map((item, index) => {
                  const tone =
                    item.tone ??
                    (item.change.startsWith("+") ? "green" : "red");
                  const badgeClass =
                    toneStyles[tone as keyof typeof toneStyles]?.badge ??
                    toneStyles.red.badge;

                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.45,
                        ease: "easeInOut",
                        delay: 0.2 + index * 0.08,
                      }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F3F4F6] text-[10px] font-semibold text-muted">
                        {item.icon.type === "letter" && (
                          <span
                            className="flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-semibold"
                            style={{
                              backgroundColor: item.icon.bg,
                              color: item.icon.fg,
                            }}
                          >
                            {item.icon.value}
                          </span>
                        )}
                        {item.icon.type === "globe" && (
                          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EEF2FF]">
                            <svg
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                              className="h-4 w-4 text-[#6366F1]"
                            >
                              <circle
                                cx="12"
                                cy="12"
                                r="8.5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                              />
                              <path
                                d="M3.8 12H20.2M12 3.8c2.6 2.4 2.6 14 0 16.4M12 3.8c-2.6 2.4-2.6 14 0 16.4"
                                stroke="currentColor"
                                strokeWidth="1.2"
                                fill="none"
                              />
                            </svg>
                          </span>
                        )}
                      </span>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-primary">
                          {item.name}
                        </p>
                        <p className="text-xs text-secondary">{item.share}</p>
                      </div>
                      <span
                        className={`rounded-full px-2 py-0.5 text-sm font-medium ${badgeClass}`}
                      >
                        {item.change}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}
