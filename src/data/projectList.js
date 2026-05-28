// Centralized project data for the portfolio
const projectList = [
  {
    id: "01",
    client: "Sahara",
    year: 2025,
    url: "https://github.com/Thunderbeast5/Seizure",
    images: ["/projs/shara1.png", "/projs/shara2.png"],
    tagline: "Digital epilepsy care ecosystem connecting rural families, doctors, and emergency support.",
    description: "Sahara is a healthcare platform developed under the guidance of Civil Hospital Nashik to support children aged 1–14 suffering from epilepsy in rural communities. The system provides a dedicated mobile application for parents and a centralized web dashboard for doctors, enabling continuous healthcare monitoring, emergency coordination, medication adherence, and real-time communication between families and healthcare professionals.",
    techStack: ["React Native", "React.js", "Node.js", "Express.js", "MongoDB", "Firebase", "Tailwind CSS"],
    contributors: ["Vedant Purkar (Lead Developer)"],
    features: ["Emergency ambulance alerts with instant SMS notifications to doctors", "Medication reminders, AI chatbot assistance, and educational healthcare video access for parents", "Doctor dashboard for patient management, emergency response coordination, and real-time patient communication"]
},
  {
    id: "02",
    client: "BRIDGELINK",
    year: 2025,
    url: "https://bridgelink.in/",
    images: ["/imgs/placeholder1.jpeg", "/imgs/placeholder2.jpeg"],
    tagline: "Real-time professional student-alumni networking and mentorship platform.",
    description: "BridgeLink bridges the gap between undergraduates and alumni by providing a secure, centralized hub for mentorship, professional referrals, and targeted career preparation pathways.",
    techStack: ["React.js", "Firebase", "Tailwind CSS", "Framer Motion"],
    contributors: ["Vedant Purkar (Full-Stack Developer)"],
    features: ["Real-time dynamic instant messaging architecture", "Algorithmic mentor-matching based on professional background fields", "Verified institutional onboarding flows for professional alumni"]
  },
  {
    id: "03",
    client: "Pratibhara",
    year: 2025,
    url: "https://ai-for-her.onrender.com/",
    images: ["/imgs/placeholder1.jpeg", "/imgs/placeholder2.jpeg"],
    tagline: "AI-driven digital platform empowering entrepreneurs through tailored mentorship.",
    description: "Pratibhara leverages multi-agent workflows and integrated Generative AI engines to supply early-stage business leaders with actionable growth roadmaps, localized market insights, and dynamic operational strategies.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Generative AI API", "LangChain"],
    contributors: ["Vedant Purkar (AI & Web Engineer)"],
    features: ["Multi-agent automated system architecture for deep market analysis", "Interactive AI conversational chatbot for personalized legal and strategic advice", "Fluid, high-performance UI workflows utilizing sophisticated layouts"]
  },
  {
    id: "04",
    client: "Indic",
    year: 2025,
    url: "https://indic.in.net/",
    images: ["/imgs/placeholder1.jpeg", "/imgs/placeholder2.jpeg"],
    tagline: "Localized web localization tools and high-impact digital experiences.",
    description: "Indic provides streamlined, modern web utilities focused on enhancing regional web accessibility, delivering rapid content translation services, and performant user interface elements.",
    techStack: ["React.js", "Tailwind CSS", "Node.js", "Framer Motion"],
    contributors: ["Vedant Purkar"],
    features: ["Highly responsive global state management layout modules", "Sub-millisecond interactive translation caching protocols", "Minimalist glassmorphic layout theme matching premium aesthetic guidelines"]
  },
  {
    id: "05",
    client: "Chavan Jewellers",
    year: 2025,
    url: "https://chavanjewellers.in/",
    images: ["/imgs/placeholder1.jpeg", "/imgs/placeholder2.jpeg"],
    tagline: "Premium digital storefront and immersive catalog for high-end luxury jewelry.",
    description: "A tailored commercial platform built to host high-resolution product inventory, featuring graceful product filters, intuitive client interaction points, and smooth transition mechanics.",
    techStack: ["React.js", "Tailwind CSS", "Framer Motion", "Figma"],
    contributors: ["Vedant Purkar (Frontend Lead)"],
    features: ["Premium high-fidelity interface with smooth infinite gallery carousels", "Advanced client-side search indexing and fine-grain facet filtering", "Optimized image loading pipelines built for ultra-high-resolution assets"]
  },
  {
    id: "06",
    client: "TEDx KKWIEER",
    year: 2025,
    url: "https://tedxkkwieer.onrender.com/",
    images: ["/imgs/placeholder1.jpeg", "/imgs/placeholder2.jpeg"],
    tagline: "Official interactive media hub and ticket portal for TEDx KKWIEER.",
    description: "The primary digital face of the TEDx university conference, built to handle massive traffic bursts while executing high-impact typography and heavy fluid-scroll animation sequences.",
    techStack: ["React.js", "Tailwind CSS", "Framer Motion", "Vite"],
    contributors: ["Vedant Purkar (Website Manager)"],
    features: ["Sophisticated scroll-driven color filling and outline-to-solid title mechanics", "Interactive speaker profile card grids using performance-optimized layer bounds", "Responsive mobile menu setups engineered with resilient fallback mechanics"]
  },
  {
    id: "07",
    client: "Predictor Guru",
    year: 2024,
    url: "https://github.com/Thunderbeast5/Predictor-Guru",
    images: ["/imgs/placeholder1.jpeg", "/imgs/placeholder2.jpeg"],
    tagline: "Data-driven analytical forecasting system using machine learning engines.",
    description: "An intuitive mathematical dashboard engineered to ingest trend datasets and construct precise predictive metrics, accompanied by a robust charting interface.",
    techStack: ["Python", "Flask", "React.js", "Tailwind CSS", "Chart.js"],
    contributors: ["Vedant Purkar"],
    features: ["Advanced machine learning model integration for processing custom arrays", "Asynchronous data retrieval polling layers ensuring real-time UI synchronization", "Clean analytical data layout modules with easy-to-export reporting hooks"]
  },
  {
    id: "08",
    client: "Health Pulse",
    year: 2024,
    url: "https://github.com/Thunderbeast5/HealthPulse",
    images: ["/imgs/python.jpeg", "/imgs/python.jpeg"],
    tagline: "Desktop health monitoring suite and patient diagnostics ledger.",
    description: "A secure standalone internal healthcare utility engineered to parse diagnostics arrays, calculate immediate health risk parameters, and organize records.",
    techStack: ["Python", "Tkinter", "SQLite", "NumPy"],
    contributors: ["Vedant Purkar"],
    features: ["Lightweight, dependency-optimized localized analytical database runtime", "Real-time anomaly checks on vitals using standard vector arrays", "Automated custom export routines for generation of static health files"]
  },
  {
    id: "09",
    client: "DSA Visualiser",
    year: 2025,
    url: "https://github.com/Thunderbeast5/Data-Structures-Visualiser",
    images: ["/imgs/placeholder1.jpeg", "/imgs/placeholder2.jpeg"],
    tagline: "Interactive algorithmic rendering sandbox for core data structures.",
    description: "An educational platform built to map structural memory layouts to interactive visuals, helping engineering students intuitively map complex pointers, graphs, and tree operations.",
    techStack: ["React.js", "Tailwind CSS", "Framer Motion"],
    contributors: ["Vedant Purkar"],
    features: ["Step-by-step frame execution layers for traversal animations", "Interactive state modification graphs allowing users to add/delete live nodes", "Precise operational time-complexity tickers responding directly to live operations"]
  },
  {
    id: "10",
    client: "Sorting Algorithm Visualizer",
    year: 2023,
    url: "https://github.com/Thunderbeast5/Sorting-Algorithm-Visualizer",
    images: ["/imgs/python.jpeg", "/imgs/python.jpeg"],
    tagline: "Dynamic spatial computational engine tracking sorting performance.",
    description: "A performance-focused visual sandbox tracing spatial index modifications for foundational sorting routines, accompanied by audio cues or discrete sorting metrics.",
    techStack: ["Python", "Pygame", "Matplotlib"],
    contributors: ["Vedant Purkar"],
    features: ["Real-time comparative execution clocks tracing array mutation steps", "Highly configurable random generation fields with customizable element scaling", "Visual comparison of multi-track complexity equations running in lockstep"]
  }
];

export function getOptimizedImageUrl(img, _opts) {
  // Placeholder: keep the same URL by default. Replace with real optimization later.
  return img;
}

export default projectList;
