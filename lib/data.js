// =====================================================================
//  EDIT YOUR CONTENT HERE. This single file feeds the whole site.
// =====================================================================

export const profile = {
  name: "Dogbajale Muhydeen",
  shortName: "MUHY",
  title: "Software Engineer",
  roleLine: "Software Engineer",
  location: "Lagos, NG",
  email: "muhydogba@gmail.com",
  phone: "+234 902 666 5754",
  linkedin: "https://www.linkedin.com/in/muhydeen-dogbajale-29563635a",
  github: "https://github.com/MXHX03",
  resumePdf: "/Dogbajale_Muhydeen.pdf", // file lives in /public
  photo: "/profile.jpg", // file lives in /public
  currently: "automating network operations",
  intro:
    "I'm Muhydeen — a software engineer who turns messy problems into clean, working systems, from live telecom networks to the web.",
};

// Big three-beat hero headline. The last line renders in italic serif.
export const hero = {
  line1: ["Build.", "Automate."],
  line2: "Solve problems.",
};

export const stats = [
  { label: "Software projects", value: "05" },
  { label: "Live deployments", value: "04" },
];

// ---------------------------------------------------------------------
//  PROJECTS  (live = deployed URL, repo = GitHub URL; use null if none)
// ---------------------------------------------------------------------
export const projects = [
  {
    title: "Spam Email Detection System",
    blurb:
      "A machine-learning system that identifies and classifies spam emails using natural-language processing and multiple classification algorithms.",
    tags: ["Machine Learning", "Python", "NLP"],
    role: "Developer / Researcher",
    year: "2024",
    tech: ["Python", "Scikit-learn", "TF-IDF", "SVC", "Random Forest", "XGBoost", "LightGBM", "CatBoost"],
    live: null,
    repo: null,
  },
  {
    title: "HiTech Construction — Company Website",
    blurb:
      "A full multi-section website for a construction firm — animated hero, services, a completed-projects showcase, testimonials, and a blog, built as a fast single-page React app.",
    tags: ["React", "Vite", "Frontend"],
    role: "Frontend Developer",
    year: "2026",
    tech: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    live: "https://hitech-construction-app.vercel.app",
    repo: "https://github.com/MXHX03/Hitech-construction-app",
  },
  {
    title: "Forecast Aether — Weather App",
    blurb:
      "A clean weather application that fetches and displays real-time conditions and forecasts for any location.",
    tags: ["JavaScript", "Weather API", "Frontend"],
    role: "Software Developer",
    year: "2026",
    tech: ["JavaScript", "REST API", "HTML", "CSS"],
    live: "https://forecast-aether-app.vercel.app",
    repo: "https://github.com/MXHX03/forecast-aether-app",
  },
  {
    title: "Booking API",
    blurb:
      "A backend booking API with endpoints for creating and managing reservations — built during the Koya Academy cohort.",
    tags: ["Backend", "Node.js", "API"],
    role: "Backend Developer",
    year: "2026",
    tech: ["JavaScript", "Node.js", "REST"],
    live: "https://booking-api-js.vercel.app",
    repo: "https://github.com/MXHX03/Booking-api-koya",
  },
  {
    title: "Halloween Scare — E-commerce",
    blurb:
      "A themed e-commerce storefront for Halloween goods, with product listings and a shopping flow.",
    tags: ["HTML", "CSS", "E-commerce"],
    role: "Frontend Developer",
    year: "2025",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://e-commerce-scare-app.vercel.app",
    repo: "https://github.com/MXHX03/e-commerce-scare-app",
  },
];

// ---------------------------------------------------------------------
//  PROCESS  (the 4-drawer section)
// ---------------------------------------------------------------------
export const processSteps = [
  {
    key: "Investigate",
    text: "Before touching anything, I dig into what's actually happening — reading logs, alarms, and KPIs, mapping how the pieces connect, and talking to the people who feel the problem. Most issues look one way on the surface and turn out to be something else underneath, so I'd rather spend the time up front than fix the wrong thing fast.",
  },
  {
    key: "Build",
    text: "I write clean, practical code and ship the simplest thing that actually solves the problem — not the fanciest one. I keep it readable so the next person (often future me) can follow it, lean on small tested pieces instead of clever one-liners, and avoid building for problems nobody has yet.",
  },
  {
    key: "Automate",
    text: "Anything done by hand more than a couple of times becomes a script or a pipeline. I turn repetitive, error-prone tasks — pulling reports, reconciling data, handling routine alarms — into something that runs itself, which cuts mistakes and frees people up for the work that actually needs a human.",
  },
  {
    key: "Monitor",
    text: "Shipping isn't the finish line. I watch things in production through KPIs, alarms, and error logs, set up alerts so problems surface early instead of after users complain, and feed what I learn back into the next round of fixes. The goal is steady, stable systems that keep working when no one's looking.",
  },
];

// ---------------------------------------------------------------------
//  TERMINAL  (replacement section — commands and their output)
// ---------------------------------------------------------------------
export const terminal = {
  boot: "muhy-os v1.0 — booting…",
  commands: {
    whoami: [
      "Dogbajale Muhydeen",
      "Software / OSS / Datacom Engineer @ Huawei Technologies",
      "Lagos, Nigeria",
      "B.Sc. Computer Science — Al-Hikmah University (2024)",
    ],
    skills: [
      "languages   : Python, JavaScript, HTML, CSS",
      "frameworks  : React, Node.js, WordPress",
      "data / ml   : MySQL, Scikit-learn, NLP, Machine Learning",
      "networks    : OSS Ops, Datacom, Linux, Wireshark, Automation",
    ],
    experience: [
      "Huawei Technologies  — OSS / Datacom Engineer      Jul 2025 - Present",
      "Vivid Solution Assoc — Junior IT Analyst (intern)  Jul 2023 - Oct 2023",
      "Ceda AI (Brain Buddy)— Frontend Developer (intern) Jan 2023 - Mar 2023",
      "New Horizon Nigeria  — Frontend Developer (intern) Jul 2022 - Sep 2022",
    ],
    certs: [
      "Cyber Security for Service Work — Huawei",
      "PrePosition Competence (Maintenance Service) — Huawei",
      "Python Programming — New Horizon",
      "Frontend Development (HTML/CSS/JS) — New Horizon",
    ],
    contact: [
      "email    : muhydogba@gmail.com",
      "github   : github.com/MXHX03",
      "linkedin : muhydeen-dogbajale",
    ],
  },
  order: ["whoami", "skills", "experience", "certs", "contact"],
};

// ---------------------------------------------------------------------
//  RESUME  (the printer-themed /resume page — your reworked CV)
// ---------------------------------------------------------------------
export const resume = {
  summary:
    "OSS and Datacom-focused engineer supporting live telecom networks across transmission, IP, and core environments, with hands-on strength in Linux systems, packet analysis, and fault troubleshooting. Build Python automation, data pipelines, and operational dashboards that cut manual work and keep networks within SLA, backed by frontend and software development experience across React and backend APIs.",
  coreSkills: [
    "OSS Operations & Network Monitoring",
    "Datacom Networking (IP, TCP/IP, VLAN, Routing & Switching)",
    "Linux Systems (CLI, logs, performance monitoring)",
    "Wireshark & Packet Capture Analysis",
    "Fault, Performance & Incident Management",
    "Automation & Scripting (Python, Bash)",
    "Frontend Development (React, HTML, CSS, JS)",
    "Network Troubleshooting & Root Cause Analysis",
  ],
  experience: [
    {
      company: "Huawei Technologies",
      role: "OSS / Datacom Engineer",
      place: "Lagos",
      dates: "Jul 2025 - Present",
      points: [
        "Monitored and supported OSS platforms for datacom and telecom networks around the clock, sustaining ~99.9% service availability and catching faults early before they grew into customer-impacting outages.",
        "Performed IP and datacom troubleshooting using alarms, KPIs, logs, and packet captures, resolving ~95% of incidents within SLA and keeping downtime on critical services to a minimum.",
        "Analysed traffic flows and network issues with Wireshark and Linux-based tools, cutting average fault diagnosis time by ~30% and speeding restoration of affected links.",
        "Supported routing, switching, and VLAN issues across live network environments spanning 50+ sites, maintaining stable connectivity for high-priority enterprise and mobile traffic.",
        "Executed incident handling, escalation, and resolution in line with SLA requirements, lifting first-line resolution rates and reducing escalations to senior engineering teams.",
        "Contributed to automation initiatives that reduced manual operational tasks by ~40%, freeing engineers to focus on higher-value network reliability work.",
      ],
    },
    {
      company: "Vivid Solution Associates",
      role: "Junior IT Analyst (Intern)",
      place: "Lagos",
      dates: "Jul 2023 - Oct 2023",
      points: [
        "Documented and standardised IT and network infrastructure, improving support efficiency by 25% and reducing repeat support tickets.",
        "Resolved recurring network and system issues, reducing downtime by 20% and keeping staff productive through business hours.",
        "Implemented access control and security permissions across 50+ user accounts, tightening system security and lowering unauthorised-access risk.",
        "Supported datacom and LAN/WAN connectivity troubleshooting, restoring connectivity faster and minimising disruption to daily operations.",
      ],
    },
    {
      company: "Ceda AI (FKA Brain Buddy)",
      role: "Frontend Developer (Intern)",
      place: "Lagos",
      dates: "Jan 2023 - Mar 2023",
      points: [
        "Developed responsive user interfaces with React and CSS across multiple screens, improving usability and consistency on key user flows.",
        "Collaborated with the team to deliver reliable, user-focused features on schedule, contributing to a smoother product experience.",
      ],
    },
    {
      company: "New Horizon Nigeria",
      role: "Frontend Developer (Intern)",
      place: "Lagos",
      dates: "Jul 2022 - Sep 2022",
      points: [
        "Developed Python-based applications backed by MySQL databases, delivering features that handled core data operations reliably for end users.",
      ],
    },
  ],
  projects: [
    {
      name: "HiTech Construction: Company Website",
      text: "Designed and deployed a responsive construction-firm website on Vercel with a dark, high-impact brand theme and optimised social/link previews (Open Graph).",
    },
    {
      name: "Spam Email Detection (Machine Learning)",
      text: "Built an NLP pipeline to classify spam, comparing SVC, Random Forest, XGBoost, LightGBM, and CatBoost models.",
    },
    {
      name: "Forecast Aether: Weather App",
      text: "Delivered real-time weather data and forecasts through a clean JavaScript frontend.",
    },
    {
      name: "Booking API",
      text: "Built a backend booking API with endpoints for creating and managing reservations.",
    },
  ],
  education: {
    school: "Al-Hikmah University, Ilorin, Nigeria",
    degree: "B.Sc. Computer Science",
    dates: "Nov 2020 - Aug 2024",
    coursework:
      "Relevant coursework: Datacom & Networking, Computer Communication Networks, Database Systems, Software Engineering.",
  },
  certifications: [
    "Cyber Security Certificate for Service Work — Huawei",
    "PrePosition Competence Certification for Maintenance Service — Huawei",
    "Python Programming Certification — New Horizon",
    "Frontend Development (HTML, CSS, JavaScript) Certification — New Horizon",
  ],
  updated: "NOV 2026",
};
