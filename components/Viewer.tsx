"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties, KeyboardEvent, ReactNode } from "react";
import type { Shot } from "@/lib/data";

/**
 * Screenshot lightbox on a native <dialog>: focus is trapped, Esc closes and focus
 * returns to the thumbnail that opened it. `open(n)` shows screenshot n.
 */
export function useShotViewer(shots: Shot[]): { open: (n: number) => void; viewer: ReactNode } {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState<number | null>(null);
  const count = shots.length;

  useEffect(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;
    const onClose = () => setIndex(null);
    dlg.addEventListener("close", onClose);
    return () => dlg.removeEventListener("close", onClose);
  }, []);

  const open = (n: number) => {
    setIndex(n);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();
  const step = (d: number) => setIndex((v) => (v === null ? v : (v + d + count) % count));

  const onKeyDown = (e: KeyboardEvent<HTMLDialogElement>) => {
    if (count < 2) return;
    if (e.key === "ArrowRight") step(1);
    if (e.key === "ArrowLeft") step(-1);
  };

  const current = index === null ? null : shots[index];

  const viewer = (
    <dialog
      ref={dialogRef}
      className="lightbox"
      aria-label="Screenshot viewer"
      onKeyDown={onKeyDown}
      onClick={(e) => {
        if (e.target === dialogRef.current) close();
      }}
    >
      {current ? (
        <figure className="lb-figure" style={{ ["--ar" as string]: current.w / current.h } as CSSProperties}>
          <Image
            className="lb-img"
            src={current.src}
            alt={current.alt}
            width={current.w}
            height={current.h}
            sizes="(max-width: 1100px) 92vw, 1000px"
            loading="eager"
          />
          {current.label || count > 1 ? (
            <figcaption>
              {current.label}
              {count > 1 ? (
                <span>
                  {" "}
                  {(index ?? 0) + 1} / {count}
                </span>
              ) : null}
            </figcaption>
          ) : null}
        </figure>
      ) : null}

      <button type="button" className="lb-btn lb-close" onClick={close} aria-label="Close viewer">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
      {count > 1 ? (
        <>
          <button type="button" className="lb-btn lb-prev" onClick={() => step(-1)} aria-label="Previous screenshot">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 5l-7 7 7 7" />
            </svg>
          </button>
          <button type="button" className="lb-btn lb-next" onClick={() => step(1)} aria-label="Next screenshot">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      ) : null}
    </dialog>
  );

  return { open, viewer };
}
