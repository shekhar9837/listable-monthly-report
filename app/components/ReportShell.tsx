import type { ReactNode } from "react";
import Header from "./Header";
import { FaArrowUpLong } from "react-icons/fa6";

type ReportShellProps = {
  children: ReactNode;
  currentIndex: number;
  totalSlides: number;
  onSelectSlide?: (index: number) => void;
};

export default function ReportShell({
  children,
  currentIndex,
  totalSlides,
  onSelectSlide,
}: ReportShellProps) {
  const progressDots = Array.from({ length: totalSlides }, (_, index) => ({
    index,
    isActive: index === currentIndex,
  }));

  return (
    <div className="relative min-h-screen bg-canvas text-ink">
      <div className="mobile-landscape-required">
        <Header currentIndex={currentIndex} totalSlides={totalSlides} />

        <div className="relative z-10 flex flex-col items-center px-6 pb-20 pt-12 sm:px-10 md:px-16 lg:px-24">
          {children}
        </div>

        <div className="fixed right-6 top-1/2 z-20 -translate-y-1/2">
          <div className="flex flex-col items-center gap-2">
            {progressDots.map((dot) => (
              <button
                key={dot.index}
                type="button"
                aria-label={`Go to slide ${dot.index + 1}`}
                onClick={() => onSelectSlide?.(dot.index)}
                className={`rounded-full transition-all cursor-pointer ${
                  dot.isActive
                    ? "h-3 w-3 bg-green-500 shadow-sm"
                    : "h-2.5 w-2.5 bg-stone-300 hover:bg-stone-400"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="fixed bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
          <span className="font-mono p-2 border border-stone-300 bg-white rounded-lg px-3 py-1.5 text-sm text-stone-500 shadow-sm">
            space
          </span>
          <span className="bg-white text-sm text-secondary">, </span>
          <span className="font-mono p-2 border border-stone-300 bg-white rounded-lg px-3 py-1.5 text-sm text-stone-500 shadow-sm">
            return
          </span>
          <span className="bg-white text-sm text-secondary">, or </span>
          <span className="font-mono p-2 border border-stone-300 bg-white rounded-lg px-3 py-1.5 text-sm text-stone-500 shadow-sm">
            <FaArrowUpLong className="text-stone-500 rotate-180" />
          </span>
        </div>
      </div>

      <div className="mobile-rotate-hint">
        <div className="max-w-md text-center">
          <p className="text-lg font-semibold text-stone-600">
            Rotate your phone to landscape
          </p>
          <p className="mt-2 text-sm text-stone-600">
            This report is optimized for landscape mode on mobile.
          </p>
        </div>
      </div>
    </div>
  );
}
