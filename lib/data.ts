// All site content lives here. Edit this file to update the portfolio.
// Source of truth: Khadeeja CV.pdf (latest) + Khadeeja portfolio.pdf and
// portfolio_assets (older projects and their real screenshots).

export const profile = {
  name: "Khadeeja Urooj",
  role: "Software Engineer",
  location: "Islamabad, Pakistan",
  email: "khadeejaurooj94@gmail.com",
  linkedin: "https://www.linkedin.com/in/khadeeja-urooj",
  github: "https://github.com/khadeejaurooj",
  // Add a reference-free CV PDF to /public and set this (e.g. "/Khadeeja-Urooj-CV.pdf")
  // to show a "Download CV" button. Left empty on purpose: the current CV lists
  // references' personal phone numbers and should not be published as-is.
  cvUrl: "" as string,
  headline: "Full-stack developer building web, mobile and AI-integrated apps.",
  intro:
    "I'm Khadeeja, a software engineer based in Islamabad. I mostly work with Next.js, React, Node.js and Python on the web, Flutter and native Android on mobile, and AWS for deployment.",
  about: [
    "I'm a software engineer with production experience across web and mobile: internal dashboards, e-commerce platforms, a network-monitoring app and AI-powered tools.",
    "I like owning a feature end to end, from the API and the UI to deployment and performance.",
  ],
};

/** Shown as small chips in the hero. */
export const techFocus = ["Next.js", "React", "Node.js", "Python", "Flutter", "Android", "AWS"];

// ---------- Screenshots (all real images from the old portfolio / the apps themselves) ----------

export type Shot = { src: string; w: number; h: number; alt: string; label: string };

export type Media = {
  kind: "browser" | "phones";
  shots: Shot[];
  /** Rendered height in px for phone strips. */
  height?: number;
  caption?: string;
};

const shot = (src: string, w: number, h: number, label: string, alt: string): Shot => ({
  src: `/projects/${src}.webp`,
  w,
  h,
  label,
  alt,
});

const netapiShots = [
  shot(
    "netapi/site-home",
    1400,
    788,
    "Home page",
    "NetAPI website home page with the headline 'Reliable SFP Transceivers for High-Speed Fiber Networks', a product image and Find your SFP and Browse products buttons."
  ),
  shot(
    "netapi/planner",
    1400,
    788,
    "Connectivity planner",
    "NetAPI Connectivity Planner with a three-step flow and three ways to start: configure from scratch, enter an OEM SKU, or upload a photo."
  ),
  shot(
    "netapi/industries",
    1400,
    788,
    "Industries",
    "NetAPI Industries page with cards for industrial and OT networks, telecom and service providers, enterprise IT and data centers, and AI/ML training."
  ),
  shot(
    "netapi/product-options",
    1465,
    850,
    "Product options and cart",
    "NetAPI product dialog for a 25G SFP28 module with interface, reach and vendor options, a price and an Add to Cart button."
  ),
  shot(
    "netapi/docs",
    1400,
    788,
    "Documentation",
    "NetAPI documentation page on form factors with a side navigation and a link to the Connectivity Planner."
  ),
];

const demarcAppShots = [
  shot(
    "demarc/app-watch",
    738,
    1479,
    "Watch",
    "Demarc app Watch screen with live download and upload rates, a traffic graph and a list of live connections with the app and host for each."
  ),
  shot(
    "demarc/app-guard",
    738,
    1492,
    "Guard",
    "Demarc app Guard screen with options for blocking ads and trackers, threat intelligence, a per-app firewall and recording traffic to a file."
  ),
  shot(
    "demarc/app-apps",
    738,
    1501,
    "Apps",
    "Demarc app Apps screen listing installed apps with how much data each used and whether it contacted trackers."
  ),
  shot(
    "demarc/app-settings",
    738,
    1495,
    "Settings",
    "Demarc app Settings screen with monitoring controls, always-on VPN, excluded apps and permissions."
  ),
  shot(
    "demarc/app-welcome",
    738,
    1485,
    "Welcome",
    "Demarc app welcome screen explaining Watch, Guard and that everything runs on your device only."
  ),
];

const nzShots = [
  shot(
    "nz/home",
    1400,
    788,
    "Home page",
    "NZ Solutions home page: 'Build reliable networks, modern web platforms, mobile apps, and custom software', with a project delivery board and key figures."
  ),
  shot(
    "nz/digital",
    1400,
    788,
    "Digital services",
    "NZ Solutions Digital Services page with cards for web development, mobile app development and AI solutions."
  ),
  shot(
    "nz/telecom",
    1400,
    788,
    "Telecom services",
    "NZ Solutions Telecom Services page with cards for surveying, civils and cabling."
  ),
  shot(
    "nz/about",
    1400,
    788,
    "About",
    "NZ Solutions About page with the founding year, accreditation and coverage figures."
  ),
];

const mindMenderShots = [
  shot("mindmender/chat", 417, 568, "Chat", "Mind Mender chat where the bot replies to 'I don't feel like doing anything' with supportive suggestions."),
  shot("mindmender/therapist-map", 466, 680, "Therapist map", "Mind Mender chat showing nearby therapists on an interactive map after the user asks for help."),
  shot("mindmender/consent", 472, 615, "Consent dialog", "Mind Mender 'Consent Required' dialog offering a helpline, an emergency contact or Not Now."),
  shot("mindmender/system-monitoring", 447, 601, "System monitoring", "Mind Mender admin System Monitoring screen with user counts and a chart of the emotion distribution."),
  shot("mindmender/therapist-list", 448, 589, "Therapist list", "Mind Mender list of nearby therapists with address, rating and distance."),
  shot("mindmender/professional-help", 471, 681, "Professional help", "Mind Mender 'Professional Help' dialog asking whether to show nearby therapists."),
  shot("mindmender/manage-recommendations", 964, 603, "Manage recommendations", "Mind Mender admin screen for managing the recommendations shown for each detected emotion."),
  shot("mindmender/manage-helpline", 475, 442, "Manage helplines", "Mind Mender admin screen for adding and editing helplines."),
  shot("mindmender/signup", 432, 580, "Sign up", "Mind Mender sign-up screen with username, email, password, confirm password and emergency contact fields."),
];

const pharmaShots = [
  shot(
    "pharmavital/site-home",
    1600,
    1000,
    "Home",
    "PharmaVital home page in a dark theme: navigation with a medicine search bar, a 'Welcome To PharmaVital' banner over a pharmaceutical production line and a See Medicines button."
  ),
  shot(
    "pharmavital/site-catalog",
    1600,
    777,
    "Medicine catalog",
    "PharmaVital 'Medicine & Health' section with medicine cards for Rovista, T-Day and Flagyl, each showing a pack image, a price and a Read More button."
  ),
  shot(
    "pharmavital/site-product",
    1600,
    724,
    "Product page",
    "PharmaVital product page for Panadol with the pack image, the price Rs. 150, a description of its uses and a Request A Call Back button."
  ),
  shot(
    "pharmavital/site-vendors",
    1600,
    947,
    "Vendors",
    "PharmaVital 'Our Vendors' page with a card for each partner pharmacy: D Watson, Dahl's Pharmacy, LifeCheck Pharmacy, Bravo DME and Med Equip."
  ),
  shot(
    "pharmavital/site-about",
    1600,
    862,
    "About",
    "PharmaVital About Us page with a company history section next to a photo of a scientist using a microscope."
  ),
];

const airlineShots = [
  shot("airline/booking", 602, 608, "Booking form", "Airline reservation system window with passenger details, class and additional services."),
  shot("airline/turkish", 646, 544, "Turkish Airlines", "Turkish Airlines flight list with flight numbers, routes, durations and charges."),
  shot("airline/air-canada", 651, 548, "Air Canada", "Air Canada flight list with flight numbers, routes, durations and charges."),
  shot("airline/british-airways", 651, 544, "British Airways", "British Airways flight list with flight numbers, routes, durations and charges."),
];

// ---------- Experience ----------

export type Experience = {
  role: string;
  company: string;
  period: string;
  link?: { label: string; href: string };
  bullets: string[];
  tags: string[];
  media?: Media;
};

export const experience: Experience[] = [
  {
    role: "Full-Stack Developer",
    company: "NetAPI",
    period: "Sep 2025 - Oct 2026",
    bullets: [
      "Built web and mobile features, including the Admin Dashboard, using Next.js, Node.js, Python, Flutter and Android.",
      "Managed AWS deployment, production infrastructure and application performance.",
      "Worked on Demarc, NetAPI's Android network firewall: traffic monitoring, DNS tracking and privacy features, plus AdMob and Facebook Ads integration.",
    ],
    tags: ["Next.js", "Node.js", "Python", "Flutter", "Android", "AWS"],
  },
  {
    role: "Full-Stack Web & Mobile Developer (Contract)",
    company: "NZ Solutions",
    period: "Jun 2026 - Aug 2026",
    link: { label: "nzsolutions.co.uk", href: "https://www.nzsolutions.co.uk/" },
    bullets: [
      "Developed and maintained the NZ Solutions website, working on frontend and backend features, API integration and UI.",
      "Worked on a gambling application, implementing features, fixing issues, testing functionality and deployment.",
    ],
    tags: ["Next.js", "API integration", "Testing", "Deployment"],
  },
  {
    role: "Software Engineering Intern",
    company: "One Network, Rawalpindi",
    period: "Jul 2025 - Sep 2025",
    bullets: [
      "Worked with Intelligent Transport Systems and communication technologies supporting large-scale transportation infrastructure.",
      "Built an AI-based tool using sensor data and toll logs to automate daily vehicle counts and toll balance calculations, improving operational efficiency.",
    ],
    tags: ["Python", "AI", "Sensor data"],
  },
  {
    role: "Android Developer Intern",
    company: "Rapidev, Islamabad",
    period: "Feb 2025 - Mar 2025",
    bullets: [
      "Developed real-time mission planning and tracking features using Flutter and MVVM, integrating third-party APIs and GPS tracking through Android and Java backend APIs.",
      "Built IoT-based Smart Fan controls and integrated them into the mobile application for device monitoring and control.",
    ],
    tags: ["Flutter", "MVVM", "Java", "GPS", "IoT"],
  },
];

// ---------- Projects ----------

export const inverterShots = [
  shot(
    "inverter/dashboard",
    620,
    1378,
    "Dashboard",
    "3POL dashboard with a generated-power card and chart, a status chip, and tiles for PV voltage, output voltage, output current and energy consumed. Demo data."
  ),
  shot(
    "inverter/devices",
    620,
    1378,
    "Devices",
    "3POL Inverter Devices screen listing inverters with their MAC address and owner details. Demo data."
  ),
  shot(
    "inverter/users",
    620,
    1378,
    "Users",
    "3POL All Users screen with avatars, role badges and a delete button per user. Demo data."
  ),
  shot(
    "inverter/details",
    620,
    1378,
    "Device details",
    "3POL dashboard scrolled to the metric tiles and the device details card with MAC address, version and last-updated time. Demo data."
  ),
  shot(
    "inverter/add-device",
    620,
    1378,
    "Add device",
    "3POL Add Device screen with MAC address and inverter name fields."
  ),
  shot(
    "inverter/login",
    620,
    1378,
    "Log in",
    "3POL log-in screen with username and password fields, social and fingerprint options and a create-account button."
  ),
];

export type Project = {
  name: string;
  period?: string;
  kind: string;
  summary: string;
  /** Short list of what the project does or what I built. */
  bullets: string[];
  /** Optional labelled parts (e.g. the app and the website). Shown instead of summary + bullets. */
  sections?: { label: string; text: string; bullets: string[] }[];
  tags: string[];
  links?: { label: string; href: string }[];
  /** How the project is shown: browser windows, a phone cluster or a grid of app screens. */
  visual: "brand" | "browser" | "phones" | "screens";
  shots?: Shot[];
  /** App icon (Demarc: the icon from its Play Store listing). No store screenshots are used. */
  icon?: { src: string; alt: string; name: string };
  /** Short facts shown under the icon on the brand panel. */
  facts?: string[];
  /** The project's website, shown as a single link with one line about it. */
  website?: { href: string; label: string; text: string };
  /** Accent colour for the project's glow. */
  accent: string;
  /** Small note under the visual, e.g. that screenshots use demo data. */
  note?: string;
};

/** Main projects, in display order. */
export const projects: Project[] = [
  {
    name: "Demarc",
    kind: "Android network firewall, built at NetAPI",
    period: "From May 2026",
    summary:
      "A root-free Android firewall that shows every connection your apps make and lets you block the ones you don't want. Everything runs on the phone.",
    bullets: [
      "Root-free VPN-based traffic interception for TCP/UDP, with per-app attribution and PCAP export.",
      "DoH/DoT DNS security, plus SNI and JA3 extraction from TLS/QUIC traffic.",
      "Per-app firewall, tracker and malware blocking, and behavioral threat detection.",
    ],
    tags: ["Kotlin", "Android VpnService", "Jetpack Compose", "TCP/UDP", "DNS", "TLS/QUIC"],
    visual: "phones",
    shots: demarcAppShots,
    icon: {
      src: "/projects/demarc/icon.png",
      alt: "Demarc app icon: a grid of grey and blue rounded squares.",
      name: "Demarc Network Firewall",
    },
    website: {
      href: "https://www.netapi.io/",
      label: "netapi.io",
      text: "The app's website: what Demarc does, how it works and the user guide.",
    },
    links: [{ label: "Get it on Google Play", href: "https://play.google.com/store/apps/details?id=io.netapi.demarc" }],
    accent: "#4C8DFF",
  },
  {
    name: "3POL Solar Inverter App",
    kind: "Flutter app, internship project",
    summary:
      "A mobile app for monitoring solar inverters: live readings, device management and user administration over a REST API.",
    bullets: [
      "Sign up and token-based sign in.",
      "Dashboard with generated power, PV and output voltage, current and a chart of recent readings.",
      "Register inverters by MAC address and see each device with its owner.",
      "User list with removal, for admins.",
    ],
    tags: ["Flutter", "Dart", "MVVM", "Provider", "Dio", "REST APIs"],
    visual: "phones",
    shots: inverterShots,
    note: "Screenshots show demo data from a local test server.",
    accent: "#FFB86B",
  },
  {
    name: "NetAPI Website",
    kind: "Shopify-integrated e-commerce",
    period: "Sep 2025 - Dec 2025",
    summary:
      "An e-commerce platform for NetAPI's optical transceivers with the full shopping flow, deployed on AWS.",
    bullets: [
      "Next.js storefront with product browsing, search, cart and checkout through Shopify APIs.",
      "Connectivity Planner, industry pages and documentation for choosing the right module.",
      "AWS production infrastructure with monitoring and performance optimization.",
    ],
    tags: ["Next.js", "Shopify APIs", "AWS"],
    visual: "browser",
    shots: netapiShots,
    accent: "#6C7BFF",
  },
  {
    name: "NZ Solutions Website",
    kind: "Next.js business platform, UK client",
    period: "Jul 2026",
    summary:
      "A production website for a UK telecom and digital engineering company, built for scale and easy iteration.",
    bullets: [
      "Scalable Next.js platform with dynamic data pipelines and third-party API integrations.",
      "Fully responsive, modular front end for the company's telecom and digital services.",
      "Turned evolving requirements into production features, improving performance and usability.",
    ],
    tags: ["Next.js", "APIs", "Responsive UI"],
    visual: "browser",
    shots: nzShots,
    links: [{ label: "nzsolutions.co.uk", href: "https://www.nzsolutions.co.uk/" }],
    accent: "#38BDF8",
  },
  {
    name: "Mind Mender",
    kind: "Mental health app, final year project",
    summary:
      "A cross-platform mental health app in Flutter with a Flask backend and Firebase Firestore.",
    bullets: [
      "AI chatbot with BERT-based emotion detection and real-time messaging.",
      "Safety layer: a risk model and a consent-gated flow to a helpline, an emergency contact or nearby therapists on a map.",
      "Admin dashboard for recommendations, helplines and system monitoring.",
    ],
    tags: ["Flutter", "Flask", "BERT", "Firebase Firestore", "Google Maps"],
    visual: "screens",
    shots: mindMenderShots,
    links: [{ label: "GitHub", href: "https://github.com/khadeejaurooj/MindMender-App" }],
    accent: "#A78BFA",
  },
];

export type MoreProject = {
  name: string;
  text: string;
  tags: string[];
  href?: string;
  shots: Shot[];
};

/** Smaller projects that still have real screenshots. */
export const moreProjects: MoreProject[] = [
  {
    name: "PharmaVital",
    text: "Responsive pharmaceutical website with a medicine catalog, vendor and company pages, built with HTML, CSS, JavaScript and Bootstrap.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    href: "https://github.com/khadeejaurooj/PharmaVital-website",
    shots: pharmaShots,
  },
  {
    name: "Airline Management System",
    text: "Java Swing/JavaFX desktop app for flight search and booking, passenger management and automatic ticket generation, backed by MySQL.",
    tags: ["Java", "MySQL"],
    shots: airlineShots,
  },
  {
    name: "AI Chatbot Prototype for Vehicle Information",
    text: "Prototype chatbot built with Haystack that answers vehicle queries for the M2 Motorway, using intent recognition and tag-based data handling.",
    tags: ["Python", "Haystack"],
    shots: [
      shot(
        "chatbot/vehicle-assistant",
        585,
        1170,
        "",
        "Illustration of a chat where the user asks for details of a vehicle on the M2 Motorway and the assistant replies with a small details card."
      ),
    ],
  },
];

export type OtherProject = {
  name: string;
  kind: string;
  period?: string;
  text: string;
  tags: string[];
  href?: string;
};

/** Projects without screenshots. Shown last, as plain entries. */
export const otherProjects: OtherProject[] = [
  {
    name: "AI Maps",
    kind: "Navigation app",
    period: "Feb 2025",
    text: "Flutter navigation app with real-time traffic, offline and satellite maps and route optimization, plus an AI Copilot, smart parking, GPS Camera and location-based recommendations.",
    tags: ["Flutter", "Google Maps", "GPS"],
  },
  {
    name: "Tactical Navigation & Mission Planning",
    kind: "Flutter app",
    text: "Cross-platform app for mission control and real-time tracking with drag-and-drop planning, geospatial tracking and JSON-based data management.",
    tags: ["Flutter", "MVVM"],
  },
];

// ---------- Technologies ----------

export const skills = [
  { group: "Languages", items: ["JavaScript", "TypeScript", "Python", "Dart", "Kotlin", "Java", "HTML", "CSS"] },
  { group: "Web", items: ["Next.js", "React", "Node.js", "Angular", "REST APIs"] },
  { group: "Mobile", items: ["Flutter", "Android (Kotlin/Java)", "React Native", "Android Studio"] },
  { group: "Cloud, data and tooling", items: ["AWS", "Firebase", "MongoDB", "Docker", "Git", "CI/CD", "Grafana"] },
];

export const education = {
  degree: "BS in Computer Science",
  school: "International Islamic University, Islamabad",
  period: "2021 - 2025",
  note: "Final year project: Mind Mender",
};
