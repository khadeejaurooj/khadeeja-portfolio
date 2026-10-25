"use client";

import { useEffect, useRef } from "react";

// All the page-wide motion lives here so the rest of the page stays server-rendered:
// scroll-reveal, scroll progress, cursor glow, card spotlight/tilt and magnetic buttons.
// Every effect is skipped when the visitor prefers reduced motion.
export default function Effects() {
  const barRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    // ---- reveal on scroll ----
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    els.forEach((el) => io.observe(el));

    // ---- scroll progress bar ----
    let ticking = false;
    const update = () => {
      ticking = false;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      barRef.current?.style.setProperty("--p", String(p));
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    // ---- pointer effects ----
    let raf = 0;
    let tx = 0;
    let ty = 0;
    let gx = 0;
    let gy = 0;
    const glow = glowRef.current;
    const loop = () => {
      gx += (tx - gx) * 0.12;
      gy += (ty - gy) * 0.12;
      if (glow) glow.style.transform = `translate3d(${gx - 260}px, ${gy - 260}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    const onMove = (ev: PointerEvent) => {
      tx = ev.clientX;
      ty = ev.clientY;
      const t = ev.target as HTMLElement | null;
      if (!t || !t.closest) return;

      const spot = t.closest<HTMLElement>(".spot");
      if (spot) {
        const r = spot.getBoundingClientRect();
        spot.style.setProperty("--mx", `${ev.clientX - r.left}px`);
        spot.style.setProperty("--my", `${ev.clientY - r.top}px`);
      }

      if (reduce || !finePointer) return;

      const tilt = t.closest<HTMLElement>(".tilt");
      if (tilt) {
        const r = tilt.getBoundingClientRect();
        const px = (ev.clientX - r.left) / r.width - 0.5;
        const py = (ev.clientY - r.top) / r.height - 0.5;
        tilt.style.setProperty("--rx", `${(-py * 7).toFixed(2)}deg`);
        tilt.style.setProperty("--ry", `${(px * 9).toFixed(2)}deg`);
      }

      const mag = t.closest<HTMLElement>(".magnetic");
      if (mag) {
        const r = mag.getBoundingClientRect();
        const dx = ev.clientX - (r.left + r.width / 2);
        const dy = ev.clientY - (r.top + r.height / 2);
        mag.style.setProperty("--tx", `${(dx * 0.18).toFixed(1)}px`);
        mag.style.setProperty("--ty", `${(dy * 0.28).toFixed(1)}px`);
      }
    };

    const onOut = (ev: PointerEvent) => {
      const t = ev.target as HTMLElement | null;
      if (!t || !t.closest) return;
      const tilt = t.closest<HTMLElement>(".tilt");
      if (tilt && !tilt.contains(ev.relatedTarget as Node | null)) {
        tilt.style.setProperty("--rx", "0deg");
        tilt.style.setProperty("--ry", "0deg");
      }
      const mag = t.closest<HTMLElement>(".magnetic");
      if (mag && !mag.contains(ev.relatedTarget as Node | null)) {
        mag.style.setProperty("--tx", "0px");
        mag.style.setProperty("--ty", "0px");
      }
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerout", onOut, { passive: true });

    if (!reduce && finePointer && glow) {
      glow.dataset.on = "true";
      tx = gx = window.innerWidth / 2;
      ty = gy = window.innerHeight / 3;
      raf = requestAnimationFrame(loop);
    }

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerout", onOut);
    };
  }, []);

  return (
    <>
      <div className="progress" ref={barRef} aria-hidden="true" />
      <div className="cursor-glow" ref={glowRef} aria-hidden="true" />
    </>
  );
}
