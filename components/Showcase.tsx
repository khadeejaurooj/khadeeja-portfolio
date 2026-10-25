"use client";

import Image from "next/image";
import type { Shot } from "@/lib/data";
import { useShotViewer } from "@/components/Viewer";

const Arrow = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

/**
 * Three phones fanned out: shots[0] in front, shots[1] on the left, shots[2] on the right.
 * Any phone (or the button below) opens the viewer with all of the project's screenshots.
 */
export function PhoneCluster({ shots, note }: { shots: Shot[]; note?: string }) {
  const { open, viewer } = useShotViewer(shots);
  const slots = ["center", "left", "right"] as const;

  return (
    <div className="cluster-wrap">
      <div className="cluster">
        {slots.map((slot, i) => {
          const s = shots[i];
          if (!s) return null;
          return (
            <button
              key={s.src}
              type="button"
              className={`phone phone-${slot}`}
              onClick={() => open(i)}
              aria-haspopup="dialog"
              aria-label={`Enlarge screenshot: ${s.label}`}
            >
              <Image
                className="phone-img"
                src={s.src}
                alt={s.alt}
                width={s.w}
                height={s.h}
                sizes={slot === "center" ? "(max-width: 700px) 46vw, 270px" : "(max-width: 700px) 36vw, 220px"}
              />
            </button>
          );
        })}
      </div>
      <div className="cluster-foot">
        <button type="button" className="view-all" onClick={() => open(0)} aria-haspopup="dialog">
          View all screens <Arrow />
        </button>
        {note ? <p className="stage-note">{note}</p> : null}
      </div>
      {viewer}
    </div>
  );
}

/**
 * Website screenshots in browser windows: the first one large, up to two more below it.
 * Every window opens the viewer, which also holds any further screenshots.
 */
export function BrowserStack({ shots, note }: { shots: Shot[]; note?: string }) {
  const { open, viewer } = useShotViewer(shots);
  const [main, ...rest] = shots;
  const below = rest.slice(0, 2);

  const Win = ({ s, n, className }: { s: Shot; n: number; className: string }) => (
    <button type="button" className={`bwin ${className}`} onClick={() => open(n)} aria-haspopup="dialog" aria-label={`Enlarge screenshot: ${s.label}`}>
      <span className="bwin-bar" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <Image className="bwin-img" src={s.src} alt={s.alt} width={s.w} height={s.h} sizes={className === "bwin-main" ? "(max-width: 960px) 92vw, 540px" : "(max-width: 960px) 46vw, 270px"} />
    </button>
  );

  return (
    <div className="cluster-wrap">
      <div className="bgrid">
        <Win s={main} n={0} className="bwin-main" />
        {below.length ? (
          <div className="bgrid-row">
            {below.map((s, i) => (
              <Win key={s.src} s={s} n={i + 1} className="bwin-small" />
            ))}
          </div>
        ) : null}
      </div>
      <div className="cluster-foot">
        <button type="button" className="view-all" onClick={() => open(0)} aria-haspopup="dialog">
          {shots.length > 3 ? "View more screenshots" : "View larger"} <Arrow />
        </button>
        {note ? <p className="stage-note">{note}</p> : null}
      </div>
      {viewer}
    </div>
  );
}

/** A tidy grid of app screens (for screenshots that are not tall phone shapes). */
export function ScreenGrid({ shots }: { shots: Shot[] }) {
  const { open, viewer } = useShotViewer(shots);
  const shown = shots.slice(0, 6);

  return (
    <div className="cluster-wrap">
      <ul className="sgrid">
        {shown.map((s, i) => (
          <li key={s.src}>
            <button type="button" className="stile" onClick={() => open(i)} aria-haspopup="dialog" aria-label={`Enlarge screenshot: ${s.label}`}>
              <Image className="stile-img" src={s.src} alt={s.alt} width={s.w} height={s.h} sizes="(max-width: 700px) 30vw, 170px" />
            </button>
            <span>{s.label}</span>
          </li>
        ))}
      </ul>
      <div className="cluster-foot">
        {shots.length > shown.length ? (
          <button type="button" className="view-all" onClick={() => open(0)} aria-haspopup="dialog">
            View all screens <Arrow />
          </button>
        ) : null}
      </div>
      {viewer}
    </div>
  );
}
