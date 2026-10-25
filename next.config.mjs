import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

// Dev and build use separate output folders, so running `npm run build`
// while `npm run dev` is open can't corrupt the dev server's cache.
export default (phase) => ({
  reactStrictMode: true,
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next-dev" : ".next",
});
