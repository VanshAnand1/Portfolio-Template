import React, { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

/* ------------------------- Types ------------------------- */
export type Carousel3DItem = {
  id: string | number;
  title: string;
  brand: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
};

export type Carousel3DProps = {
  items: Carousel3DItem[];
  autoRotate?: boolean;
  rotateInterval?: number;
  cardHeight?: number;
  title?: string;
  subtitle?: string;
  tagline?: string;
  isMobileSwipe?: boolean;
};

/* ----------------------- Helpers ------------------------ */
function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = window.matchMedia("(max-width: 1024px)");

    const update = () => setIsMobile(mql.matches);
    update(); // run once on mount

    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  return isMobile;
}

/* ---------------------- Component ----------------------- */
export default function Carousel3D(props: Carousel3DProps) {
  const {
    items,
    autoRotate = true,
    rotateInterval = 4000,
    cardHeight = 500,
    title = "From Textile to Intelligence",
    subtitle = "Customer Cases",
    tagline = "Explore how our textile sensor technology is revolutionizing multiple industries with intelligent fabric solutions tailored to specific needs.",
    isMobileSwipe = true,
  } = props;

  const [active, setActive] = useState<number>(0);
  const [isInView, setIsInView] = useState<boolean>(false);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const carouselRef = useRef<HTMLDivElement | null>(null);
  const isMobile = useIsMobile();
  const minSwipeDistance = 50;

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!autoRotate || !isInView || isHovering || items.length <= 1) return;
    const id = window.setInterval(
      () => setActive((p) => (p + 1) % items.length),
      rotateInterval
    );
    return () => window.clearInterval(id);
  }, [autoRotate, isInView, isHovering, rotateInterval, items.length]);

  const onTouchStart = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(null);
  }, []);
  const onTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);
  const onTouchEnd = useCallback(() => {
    if (touchStart == null || touchEnd == null) return;
    const dx = touchStart - touchEnd;
    if (Math.abs(dx) < minSwipeDistance) return;
    setActive((p) =>
      dx > 0 ? (p + 1) % items.length : (p - 1 + items.length) % items.length
    );
  }, [touchStart, touchEnd, items.length]);

  const getCardAnimationClass = (index: number) => {
    if (index === active) return "scale-100 opacity-100 z-20";
    if (index === (active + 1) % items.length)
      return "translate-x-[40%] scale-95 opacity-60 z-10";
    if (index === (active - 1 + items.length) % items.length)
      return "translate-x-[-40%] scale-95 opacity-60 z-10";
    return "scale-90 opacity-0";
  };
  return (
    <section
      id="carousel3d"
      className="bg-transparent min-w-full flex items-center justify-center"
      aria-labelledby="carousel3d-title"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 min-w-[350px] md:min-w-[1000px] max-w-7xl">
        {/* ✅ Heading now ABOVE the relative/absolute carousel layer */}
        <div className="text-center mb-8 relative z-40">
          {subtitle && (
            <p className="text-xs uppercase tracking-wider text-gray-400">
              {subtitle}
            </p>
          )}
          <h2
            id="carousel3d-title"
            className="mt-1 text-3xl md:text-4xl font-bold text-white"
          >
            {title}
          </h2>
          {tagline && (
            <p className="mt-3 text-gray-300 max-w-2xl mx-auto">{tagline}</p>
          )}
        </div>

        {/* Carousel viewport */}
        <div
          ref={carouselRef}
          className="relative overflow-hidden h-[550px]"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onTouchStart={isMobileSwipe ? onTouchStart : undefined}
          onTouchMove={isMobileSwipe ? onTouchMove : undefined}
          onTouchEnd={isMobileSwipe ? onTouchEnd : undefined}
        >
          {/* Cards layer covers the viewport, not the heading */}
          <div className="absolute inset-0 flex items-center justify-center">
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`absolute top-0 w-full max-w-md transform transition-all duration-500 ${getCardAnimationClass(
                  index
                )}`}
              >
                <div
                  className="overflow-hidden rounded-xl border border-white/10 shadow-sm hover:shadow-md flex flex-col
                             bg-black/80"
                  style={{ height: cardHeight }}
                >
                  <div
                    className="relative p-6 flex items-center justify-center h-48 overflow-hidden"
                    style={{
                      backgroundImage: `url(${item.imageUrl})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="relative z-10 text-center text-white">
                      <h3 className="text-2xl font-bold mb-2">
                        {item.brand.toUpperCase()}
                      </h3>
                      <div className="w-12 h-1 bg-white mx-auto mb-2" />
                      <p className="text-sm">{item.title}</p>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-1 text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm font-medium mb-2">
                      {item.brand}
                    </p>
                    <p className="text-gray-300/90 text-sm flex-grow">
                      {item.description}
                    </p>

                    <div className="mt-4">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gray-50/10 text-gray-200 rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <a
                        href={item.link}
                        className="text-gray-200 flex items-center hover:underline relative group"
                        onClick={() => {
                          if (item.link.startsWith("/")) window.scrollTo(0, 0);
                        }}
                      >
                        <span className="relative z-10">Learn more</span>
                        <ArrowRight className="ml-2 w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-200 transition-all duration-300 group-hover:w-full" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          {!isMobile && items.length > 1 && (
            <>
              <button
                className="
                  absolute left-4 top-1/2 -translate-y-1/2 size-9
                  z-50 grid place-items-center shadow-md transition

                  !rounded-full !p-0
                  !border !border-[#ddccff]
                  !text-[#ddccff] !bg-black/30
                  hover:!bg-[#ddccff] hover:!text-black
                  focus:!outline-none
                "
                onClick={() =>
                  setActive((p) => (p - 1 + items.length) % items.length)
                }
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                className="
                  absolute right-4 top-1/2 -translate-y-1/2 size-9
                  z-50 grid place-items-center shadow-md transition

                  !rounded-full !p-0
                  !border !border-[#ddccff]
                  !text-[#ddccff] !bg-black/30
                  hover:!bg-[#ddccff] hover:!text-black
                  focus:!outline-none
                "
                onClick={() => setActive((p) => (p + 1) % items.length)}
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Dots */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center space-x-3 z-50">
            {items.map((_, idx) => (
              <button
                key={idx}
                className={`h-2 rounded-full transition-all duration-300 ${
                  active === idx
                    ? "!bg-[#ddccff] w-6"
                    : "!bg-[#ddccff]/40 hover:!bg-[#ddccff]/70 w-2"
                }`}
                onClick={() => setActive(idx)}
                aria-label={`Go to item ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
