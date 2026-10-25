import type { ReactNode } from "react";

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function I({ size = 22, children }: { size?: number; children: ReactNode }) {
  return (
    <svg {...base} width={size} height={size}>
      {children}
    </svg>
  );
}

export type IconName = "web" | "mobile" | "ai" | "cloud";

export function FocusIcon({ name, size }: { name: IconName; size?: number }) {
  switch (name) {
    case "web":
      return (
        <I size={size}>
          <rect x="3" y="4" width="18" height="16" rx="2.5" />
          <path d="M3 9h18M7 6.5h.01M10 6.5h.01" />
          <path d="m9.5 14 2 2-2 2M14 18h2.5" />
        </I>
      );
    case "mobile":
      return (
        <I size={size}>
          <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
          <path d="M11 18.5h2" />
          <path d="M10 8.5 8.5 10l1.5 1.5M14 8.5l1.5 1.5-1.5 1.5" />
        </I>
      );
    case "ai":
      return (
        <I size={size}>
          <path d="M12 3.5 13.6 8l4.4 1.6-4.4 1.6L12 15.7l-1.6-4.5L6 9.6 10.4 8z" />
          <path d="M18.5 14.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7zM5.5 15l.5 1.3 1.3.5-1.3.5-.5 1.3-.5-1.3-1.3-.5 1.3-.5z" />
        </I>
      );
    case "cloud":
      return (
        <I size={size}>
          <path d="M7 18.5h9.5a3.5 3.5 0 0 0 .6-6.95A5.5 5.5 0 0 0 6.6 10.2 4.2 4.2 0 0 0 7 18.5Z" />
          <path d="M12 12v5m0 0-1.8-1.8M12 17l1.8-1.8" />
        </I>
      );
  }
}

export function ArrowUpRight({ size = 16 }: { size?: number }) {
  return (
    <I size={size}>
      <path d="M7 17 17 7M8 7h9v9" />
    </I>
  );
}

export function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.9.83.09-.64.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.9-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.86v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

export function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11.5H3V9.75Zm6.5 0h3.84v1.57h.06c.54-.96 1.85-1.97 3.8-1.97 4.06 0 4.8 2.57 4.8 5.91v6H18v-5.32c0-1.27-.02-2.9-1.84-2.9-1.84 0-2.12 1.38-2.12 2.8v5.42H9.5V9.75Z" />
    </svg>
  );
}

export function MailIcon({ size = 20 }: { size?: number }) {
  return (
    <I size={size}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </I>
  );
}

export function CopyIcon({ size = 18 }: { size?: number }) {
  return (
    <I size={size}>
      <rect x="9" y="9" width="11" height="11" rx="2.5" />
      <path d="M5 15V6.5A2.5 2.5 0 0 1 7.5 4H15" />
    </I>
  );
}

export function CheckIcon({ size = 18 }: { size?: number }) {
  return (
    <I size={size}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </I>
  );
}
