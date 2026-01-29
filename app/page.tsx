"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import ReportShell from "./components/ReportShell";
import Slide1 from "./components/slides/Slide1";
import Slide2 from "./components/slides/Slide2";
import Slide3 from "./components/slides/Slide3";
import Slide4 from "./components/slides/Slide4";
import Slide5 from "./components/slides/Slide5";

const slideComponents = [Slide1, Slide2, Slide3, Slide4, Slide5];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = slideComponents.length;
  const slideRefs = useRef<(HTMLElement | null)[]>([]);

  const goToIndex = useCallback((targetIndex: number) => {
    const nextIndex = Math.max(0, Math.min(targetIndex, totalSlides - 1));
    slideRefs.current[nextIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    setActiveIndex(nextIndex);
  }, [totalSlides]);

  const goNext = useCallback(() => {
    setActiveIndex((current) => {
      const nextIndex = Math.min(current + 1, totalSlides - 1);
      slideRefs.current[nextIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      return nextIndex;
    });
  }, [totalSlides]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.defaultPrevented) return;

      if (event.key === " " || event.key === "Enter" || event.key === "ArrowDown") {
        event.preventDefault();
        goNext();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goNext]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const best = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!best) return;

        const index = Number(
          (best.target as HTMLElement).dataset.slideIndex,
        );
        if (!Number.isNaN(index)) {
          setActiveIndex(index);
        }
      },
      { threshold: [0.5, 0.75] },
    );

    slideRefs.current.forEach((slide) => {
      if (slide) observer.observe(slide);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <ReportShell
      currentIndex={activeIndex}
      totalSlides={totalSlides}
      onSelectSlide={goToIndex}
    >
      <div className="flex w-full flex-col items-center gap-10">
        {slideComponents.map((SlideComponent, index) => (
          <section
            key={`slide-${index}`}
            ref={(element) => {
              slideRefs.current[index] = element;
            }}
            data-slide-index={index}
            className="w-full snap-center"
          >
            <div className="flex min-h-[calc(100vh-96px)] items-center justify-center">
              <div className="bg-white relative flex w-full max-w-7xl aspect-video flex-col bg-report p-8 text-black shadow-soft md:p-12">
                <SlideComponent />
              </div>
            </div>
          </section>
        ))}
      </div>
    </ReportShell>
  );
}
