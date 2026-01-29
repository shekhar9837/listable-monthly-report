import Slide from "../Slide";
import { PiEyeLight, PiLinkThin, PiPuzzlePieceThin } from "react-icons/pi";
import { CiFaceSmile } from "react-icons/ci";
import { motion } from "motion/react";

const items = [
  {
    icon: <PiEyeLight />,
    title: "Visibility Score",
    description:
      "How often AI names your brand when users ask relevant questions. This is what your score measures.",
  },
  {
    icon: <PiPuzzlePieceThin />    ,
    title: "Share of Voice",
    description:
      "Your slice of the conversation compared to competitors. Shows how you stack up in your category.",
  },
  {
    icon: <PiLinkThin />,
    title: "Citations",
    description:
      "When AI links directly to your website as a source. Indicates trust and authority.",
  },
  {
    icon: <CiFaceSmile />,
    title: "Sentiment",
    description:
      "How positively AI describes your brand. Getting mentioned is good--getting praised is better.",
  },
];

export default function Slide4() {
  return (
    <Slide>
      <div className="flex h-full flex-col gap-">
        <motion.p initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }} className="text-sm  font-medium mb-2 text-secondary tracking-tight uppercase">
          Understanding AI Presence
        </motion.p>
        <motion.h2 initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }} className="text-3xl md:text-4xl font-medium leading-tight tracking-tight">Four Dimensions of AI Presence</motion.h2>
        <motion.p initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }} className="max-w-xl text-sm tracking-tight text-secondary mt-4">
          Your visibility score measures how often AI mentions Groop. These
          additional metrics reveal the full picture.
        </motion.p>

        <div className="mt-16 space-y-5">
          {items.map((item, index) => (
            <motion.div initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
              viewport={{ once: true }} key={item.title} className="flex flex-col items-start justify-center gap-2">
              <div className="flex items-center justify-center gap-2">
                <span className=" text-center text-xl font-medium text-secondary tracking-tight">
                  {item.icon}
                </span>
                <motion.p initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
                  whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{ duration: 0.5 * index, ease: "easeInOut", delay: 0.1 }}
                  viewport={{ once: true }} className="text-md font-medium text-primary tracking-tight">{item.title}</motion.p>
              </div>
              <motion.p initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 0.5 * index, ease: "easeInOut", delay: 0.1 }}
                viewport={{ once: true }} className="text-sm tracking-tight text-secondary">{item.description}</motion.p>
            </motion.div>
          ))}
        </div>

        <motion.p initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" ,delay: 0.3 }}
          viewport={{ once: true }} className="mt-auto text-sm tracking-tight text-secondary">
          Together, these show not just if you&apos;re being mentioned, but how
          prominently and positively.
        </motion.p>
      </div>
    </Slide>
  );
}
