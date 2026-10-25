import Image from "next/image";
import type { CSSProperties } from "react";
import type { Media, Shot } from "@/lib/data";

function PhoneStrip({ shots, height = 360, caption }: { shots: Shot[]; height?: number; caption?: string }) {
  const single = shots.length === 1;
  return (
    <figure className="media">
      <ul
        className={`phones${single ? " phones-single" : ""}`}
        style={{ ["--h" as string]: `${height}px` } as CSSProperties}
        tabIndex={single ? undefined : 0}
        aria-label={single ? undefined : "Screenshots. Scroll sideways to see more."}
      >
        {shots.map((s) => (
          <li key={s.src}>
            <figure>
              <Image
                className="shot"
                src={s.src}
                alt={s.alt}
                width={s.w}
                height={s.h}
                sizes={`${Math.round((height * s.w) / s.h)}px`}
              />
              <figcaption>{s.label}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
      {caption ? <figcaption className="media-caption">{caption}</figcaption> : null}
    </figure>
  );
}

function BrowserFrame({ shot, small = false }: { shot: Shot; small?: boolean }) {
  return (
    <figure className={`browser${small ? " browser-sm" : ""}`}>
      <div className="browser-bar" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <Image
        className="browser-img"
        src={shot.src}
        alt={shot.alt}
        width={shot.w}
        height={shot.h}
        sizes={small ? "(max-width: 960px) 50vw, 280px" : "(max-width: 960px) 100vw, 580px"}
      />
      <figcaption>{shot.label}</figcaption>
    </figure>
  );
}

function BrowserSet({ shots }: { shots: Shot[] }) {
  const [main, ...rest] = shots;
  return (
    <div className="media browser-set">
      <BrowserFrame shot={main} />
      {rest.length ? (
        <div className={`browser-pair${rest.length === 1 ? " browser-pair-1" : ""}`}>
          {rest.map((s) => (
            <BrowserFrame key={s.src} shot={s} small={rest.length > 1} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export { default as Thumbs } from "./Thumbs";

export default function MediaBlock({ media }: { media: Media }) {
  return media.kind === "browser" ? (
    <BrowserSet shots={media.shots} />
  ) : (
    <PhoneStrip shots={media.shots} height={media.height} caption={media.caption} />
  );
}
