import Image from "next/image";
import Slide from "../Slide";
import { motion } from "motion/react";

export default function Slide1() {
  return (
    <Slide>
      <div className="relative h-full p-8 md:p-11">
        <div className="relative z-10 flex h-full w-full flex-col justify-start gap-5">
          <motion.h1
            initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="text-7xl font-medium tracking-tighter "
          > 
            Groop Monthly Report
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="text-base md:text-lg text-black/60 max-w-2xl tracking-tighter "
          >
            A comprehensive overview of Groop&apos;s visibility, citations, and
            performance across AI-driven search platforms.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="absolute bottom-[36%] tracking-tight flex items-center gap-8 text-sm text-black/60"
          >
            <span className="flex items-center gap-2">
              <Image
                alt=""
                className="h-4 w-4 rounded-sm"
                src="https://www.google.com/s2/favicons?domain=groop.in&amp;sz=32"
                width={16}
                height={16}
              />
              <span className="underline">groop.in</span>
            </span>
            <span>January 5, 2026</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="absolute bottom-0 left-0 right-0  pointer-events-none  md:-left-1 md:-right-1 "
        >
          <svg
            viewBox="0 0 1920 834"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="coverWaveGradient"
                x1="960"
                y1="-490.629"
                x2="960"
                y2="833.371"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#2fb35315" stopOpacity="0.01"></stop>
                <stop offset="0.798077" stopColor="white"></stop>
              </linearGradient>
            </defs>
            <path
              d="M1037.08 576.2C662.177 706.836 0 669.403 0 669.403V833.371H1920V0.371094C1920 0.371094 1411.98 445.563 1037.08 576.2Z"
              fill="url(#coverWaveGradient)"
            ></path>
            <path
              d="M0 669.403C0 669.403 662.177 706.836 1037.08 576.2C1411.98 445.563 1920 0.371094 1920 0.371094"
              stroke="#2fb353"
            ></path>
            <path
              d="M92 672L92 833.371"
              stroke="black"
              strokeOpacity="0.1"
              strokeDasharray="4 4"
            ></path>
            <path
              d="M195 675L195 833.371"
              stroke="black"
              strokeOpacity="0.1"
              strokeDasharray="4 4"
            ></path>
            <path
              d="M298 675L298 833.371"
              stroke="black"
              strokeOpacity="0.1"
              strokeDasharray="4 4"
            ></path>
            <path
              d="M401 672L401 833.371"
              stroke="black"
              strokeOpacity="0.1"
              strokeDasharray="4 4"
            ></path>
            <path
              d="M504 666L504 833.371"
              stroke="black"
              strokeOpacity="0.1"
              strokeDasharray="4 4"
            ></path>
            <path
              d="M607 658L607 833.371"
              stroke="black"
              strokeOpacity="0.1"
              strokeDasharray="4 4"
            ></path>
            <path
              d="M710 647L710 833.371"
              stroke="black"
              strokeOpacity="0.1"
              strokeDasharray="4 4"
            ></path>
            <path
              d="M814 631L814 833.371"
              stroke="black"
              strokeOpacity="0.1"
              strokeDasharray="4 4"
            ></path>
            <path
              d="M916 611L916 833.371"
              stroke="black"
              strokeOpacity="0.1"
              strokeDasharray="4 4"
            ></path>
            <path
              d="M1019 582L1019 833.371"
              stroke="black"
              strokeOpacity="0.1"
              strokeDasharray="4 4"
            ></path>
            <path
              d="M1122 542L1122 833.371"
              stroke="black"
              strokeOpacity="0.1"
              strokeDasharray="4 4"
            ></path>
            <path
              d="M1225 492L1225 833.371"
              stroke="black"
              strokeOpacity="0.1"
              strokeDasharray="4 4"
            ></path>
            <path
              d="M1328 434L1328 833.371"
              stroke="black"
              strokeOpacity="0.1"
              strokeDasharray="4 4"
            ></path>
            <path
              d="M1431 369L1431 833.371"
              stroke="black"
              strokeOpacity="0.1"
              strokeDasharray="4 4"
            ></path>
            <path
              d="M1534 300L1534 833.371"
              stroke="black"
              strokeOpacity="0.1"
              strokeDasharray="4 4"
            ></path>
            <path
              d="M1637 226L1637 833.371"
              stroke="black"
              strokeOpacity="0.1"
              strokeDasharray="4 4"
            ></path>
            <path
              d="M1740 148L1740 833.371"
              stroke="black"
              strokeOpacity="0.1"
              strokeDasharray="4 4"
            ></path>
            <path
              d="M1843 65L1843 833.371"
              stroke="black"
              strokeOpacity="0.1"
              strokeDasharray="4 4"
            ></path>
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="absolute bottom-11 right-11 flex items-center gap-2 text-xs text-muted"
        >
          <Image
            alt="Searchable"
            src="https://app.searchable.com/searchable-dark.svg"
            className=" text-3xl rounded-sm"
            width={130}
            height={130}
          />
        </motion.div>
      </div>
    </Slide>
  );
}
