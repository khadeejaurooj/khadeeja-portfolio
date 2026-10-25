"use client";

import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import MediaBlock from "@/components/Shots";
import { ArrowUpRight, CheckIcon, CopyIcon } from "@/components/Icons";
import type { Experience } from "@/lib/data";

/* Experience as tabs: pick a role on the left, read the details on the right. */
export function ExperienceTabs({ items }: { items: Experience[] }) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const keys = ["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft", "Home", "End"];
    if (!keys.includes(e.key)) return;
    e.preventDefault();
    let next = active;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = (active + 1) % items.length;
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = (active - 1 + items.length) % items.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = items.length - 1;
    setActive(next);
    tabs.current[next]?.focus();
  };

  const cur = items[active];

  return (
    <div className="xp">
      <div className="xp-tabs" role="tablist" aria-label="Roles" aria-orientation="vertical" onKeyDown={onKey}>
        {items.map((e, i) => (
          <button
            key={e.company + e.role}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            id={`xp-tab-${i}`}
            role="tab"
            type="button"
            aria-selected={i === active}
            aria-controls="xp-panel"
            tabIndex={i === active ? 0 : -1}
            className={`xp-tab${i === active ? " is-active" : ""}`}
            onClick={() => setActive(i)}
          >
            <span className="xp-tab-company">{e.company.split(",")[0]}</span>
            <span className="xp-tab-period">{e.period}</span>
          </button>
        ))}
      </div>

      <div id="xp-panel" role="tabpanel" aria-labelledby={`xp-tab-${active}`} className="xp-panel card spot" key={active}>
        <p className="xp-period">{cur.period}</p>
        <h3>
          {cur.role}{" "}
          <span className="at">at {cur.company}</span>
        </h3>
        <ul className="bullets">
          {cur.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        {cur.link ? (
          <a className="text-link" href={cur.link.href} target="_blank" rel="noreferrer noopener">
            {cur.link.label} <ArrowUpRight />
          </a>
        ) : null}
        <ul className="tags" aria-label="Technologies">
          {cur.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        {cur.media ? <MediaBlock media={cur.media} /> : null}
      </div>
    </div>
  );
}

/* Copies the email address and confirms it inline. */
export function CopyEmail({ email }: { email: string }) {
  const [done, setDone] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setDone(true);
      setTimeout(() => setDone(false), 2200);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <button type="button" className="btn btn-primary magnetic copy-btn" onClick={copy}>
      <span className="copy-text">{email}</span>
      <span className="copy-ico" aria-hidden="true">
        {done ? <CheckIcon /> : <CopyIcon />}
      </span>
      <span className="sr-only" role="status" aria-live="polite">
        {done ? "Email address copied" : "Copy email address"}
      </span>
    </button>
  );
}
