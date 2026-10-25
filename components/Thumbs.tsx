"use client";

import Image from "next/image";
import type { Shot } from "@/lib/data";
import { useShotViewer } from "@/components/Viewer";

// Small thumbnails that open the lightbox over the page (no navigation away).
export default function Thumbs({ shots }: { shots: Shot[] }) {
  const { open, viewer } = useShotViewer(shots);

  return (
    <>
      <ul className="thumbs" aria-label="Screenshots (select to enlarge)">
        {shots.map((s, n) => (
          <li key={s.src}>
            <button
              type="button"
              className="thumb-btn"
              onClick={() => open(n)}
              aria-haspopup="dialog"
              aria-label={s.label ? `Enlarge screenshot: ${s.label}` : "Enlarge screenshot"}
            >
              <Image className="shot thumb" src={s.src} alt={s.alt} width={s.w} height={s.h} sizes="160px" />
            </button>
            {s.label ? <span>{s.label}</span> : null}
          </li>
        ))}
      </ul>
      {viewer}
    </>
  );
}
