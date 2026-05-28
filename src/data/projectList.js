// Centralized project data for the portfolio
const projectList = [
  {
    id: "01",
    client: "Sahara",
    year: 2025,
    url: "https://sahara-il0u.onrender.com",
    images: ["/projs/shara1.png", "/projs/shara2.png"],
    tagline: "Digital epilepsy care ecosystem connecting rural families, doctors, and emergency support.",
    description: "Sahara is a healthcare platform developed under the guidance of Civil Hospital Nashik to support children aged 1–14 suffering from epilepsy in rural communities. The system provides a dedicated mobile application for parents and a centralized web dashboard for doctors, enabling continuous healthcare monitoring, emergency coordination, medication adherence, and real-time communication between families and healthcare professionals.",
    techStack: ["React Native", "React.js", "Node.js", "Express.js", "MongoDB", "Firebase", "Tailwind CSS"],
    contributors: ["Vedant Purkar (Lead Developer)"],
    features: ["Emergency ambulance alerts with instant SMS notifications to doctors", "Medication reminders, AI chatbot assistance, and educational healthcare video access for parents", "Doctor dashboard for patient management, emergency response coordination, and real-time patient communication"]
},
{
    id: "02",
    client: "Pratibhara",
    year: 2026,
    url: "https://ai-for-her.onrender.com",
    images: ["/projs/prat1.png", "/projs/prat2.png"],
    tagline: "AI-driven ecosystem empowering women entrepreneurs through mentorship, funding, and innovation support.",
    description: "Pratibhara is an AI-powered entrepreneurship platform built to help women transform business ideas into scalable ventures through intelligent guidance, mentorship, and funding opportunities. The platform enables women entrepreneurs to generate business plans, budgets, and execution roadmaps using AI while connecting them with mentors, investors, self-help groups, and government schemes through a collaborative digital ecosystem. The project was selected among the Top 30 at the AI Impact Summit for its social innovation and AI-driven empowerment approach.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Python", "Flask", "LangChain", "AWS"],
    contributors: ["Vedant Purkar (Full-Stack Developer)"],
    features: ["AI chatbot for generating business ideas, planning strategies, budgeting, and execution workflows", "AI-powered mentor-mentee matchmaking with support for self-help group collaboration", "Integrated investor and government funding discovery system for women-led startups and initiatives"]
},
  {
    id: "03",
    client: "BridgeLink",
    year: 2025,
    url: "https://bridgelink.in",
    images: ["/projs/bridge1.png", "/projs/bridge2.png"],
    tagline: "Student-alumni networking ecosystem designed to bridge mentorship, careers, and collaboration.",
    description: "BridgeLink is a centralized student and alumni engagement platform developed as part of the Kumbathon Foundation Incubation Program. The platform helps institutions strengthen alumni relations while enabling students to access mentorship, career opportunities, hackathons, and professional networking through an interactive digital ecosystem.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Firebase"],
    contributors: ["Vedant Purkar (Full-Stack Developer)"],
    features: ["AI-powered mentor matchmaking with one-to-one meeting and communication support", "Integrated social feed with hackathon hosting, job postings, and commission-based project opportunities", "Administrative institute dashboard for managing students, alumni networks, and engagement activities"]
},
  
  {
    id: "04",
    client: "Indic",
    year: 2025,
    url: "https://indic.in.net",
    images: ["/projs/indic1.png", "/projs/indic2.png"],
    tagline: "Gamified Indian language learning platform powered by AI-driven real-time interaction.",
    description: "Indic is an interactive language learning platform designed to help students learn Indian languages through immersive and gamified experiences. The platform enables users to communicate with AI-powered avatars in real time while improving vocabulary, pronunciation, and conversational skills through quizzes, puzzles, and engaging learning activities. The platform also integrates AR-based Indian Sign Language learning to make communication education more inclusive and interactive. Built with a focus on accessibility and engagement, the project was recognized as the winner of the Innovera National-Level Hackathon.",
    techStack: ["React.js", "Tailwind CSS", "Node.js", "Framer Motion", "AR Integration", "AI Avatar Systems"],
    contributors: ["Vedant Purkar"],
    features: ["Real-time AI avatar conversations for immersive language practice", "AR-powered Indian Sign Language learning experience for inclusive education", "Gamified learning ecosystem with quizzes, puzzles, and interactive challenges"]
},
//   {
//     id: "05",
//     client: "Chavan Jewellers",
//     year: 2025,
//     url: "https://chavanjewellers.in/",
//     images: ["/imgs/placeholder1.jpeg", "/imgs/placeholder2.jpeg"],
//     tagline: "Premium digital storefront and immersive catalog for high-end luxury jewelry.",
//     description: "A tailored commercial platform built to host high-resolution product inventory, featuring graceful product filters, intuitive client interaction points, and smooth transition mechanics.",
//     techStack: ["React.js", "Tailwind CSS", "Framer Motion", "Figma"],
//     contributors: ["Vedant Purkar (Frontend Lead)"],
//     features: ["Premium high-fidelity interface with smooth infinite gallery carousels", "Advanced client-side search indexing and fine-grain facet filtering", "Optimized image loading pipelines built for ultra-high-resolution assets"]
//   },
  {
    id: "05",
    client: "TEDx KKWIEER",
    year: 2025,
    url: "https://www.tedxkkwieer.com/",
    images: ["/projs/ted1.png", "/projs/ted2.png"],
    tagline: "Official interactive media hub and ticket portal for TEDx KKWIEER.",
    description: "The primary digital face of the TEDx university conference, built to handle massive traffic bursts while executing high-impact typography and heavy fluid-scroll animation sequences.",
    techStack: ["React.js", "Tailwind CSS", "Framer Motion", "Vite"],
    contributors: ["Vedant Purkar (Website Manager)"],
    features: ["Sophisticated scroll-driven color filling and outline-to-solid title mechanics", "Interactive speaker profile card grids using performance-optimized layer bounds", "Responsive mobile menu setups engineered with resilient fallback mechanics"]
  },
  {
    id: "06",
    client: "SVICSM",
    year: 2026,
    url: "https://www.svicsm.com",
    images: ["/projs/svi1.png", "/projs/svi2.png"],
    tagline: "Full-stack institutional platform digitizing admissions and academic administration workflows.",
    description: "SVICSM is a modern institutional website developed for Swami Vivekananda Institute of Commerce, Science and Management to establish its digital presence and streamline the student admission process. The platform enables students to complete admissions fully online while providing administrators with a centralized management system for handling applications, student records, and automated document generation.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "PDF Generation"],
    contributors: ["Vedant Purkar (Full-Stack Developer)"],
    features: ["Complete online admission workflow with secure digital form submission", "Admin portal for managing student applications and institutional records", "Automated PDF generation for admission forms and application documentation"]
},
  
  {
    id: "07",
    client: "Prana Elixir",
    year: 2026,
    url: "https://www.thepranaelixir.com",
    images: ["/projs/prana1.png", "/projs/prana2.png"],
    tagline: "Luxury artisanal soap commerce platform with integrated payments and shipping automation.",
    description: "Prana Elixir is a full-stack e-commerce platform developed for a handcrafted artisanal soap brand to establish a premium online shopping experience and streamline digital operations. The platform supports secure product management, automated order processing, online payments, and shipping workflows while providing administrators with a centralized dashboard for managing inventory, customers, and sales activities.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Razorpay", "Shiprocket"],
    contributors: ["Vedant Purkar (Full-Stack Developer)"],
    features: ["Integrated Razorpay payment gateway for secure online transactions", "Automated shipping and order tracking workflows using Shiprocket APIs", "Admin dashboard for inventory management, order handling, and customer operations"]
},
// {
//     id: "08",
//     client: "Predictor Guru",
//     year: 2024,
//     url: "https://github.com/Thunderbeast5/Predictor-Guru",
//     images: ["/imgs/placeholder1.jpeg", "/imgs/placeholder2.jpeg"],
//     tagline: "Data-driven analytical forecasting system using machine learning engines.",
//     description: "An intuitive mathematical dashboard engineered to ingest trend datasets and construct precise predictive metrics, accompanied by a robust charting interface.",
//     techStack: ["Python", "Flask", "React.js", "Tailwind CSS", "Chart.js"],
//     contributors: ["Vedant Purkar"],
//     features: ["Advanced machine learning model integration for processing custom arrays", "Asynchronous data retrieval polling layers ensuring real-time UI synchronization", "Clean analytical data layout modules with easy-to-export reporting hooks"]
//   },
//   {
//     id: "09",
//     client: "DSA Visualiser",
//     year: 2025,
//     url: "https://github.com/Thunderbeast5/Data-Structures-Visualiser",
//     images: ["/imgs/placeholder1.jpeg", "/imgs/placeholder2.jpeg"],
//     tagline: "Interactive algorithmic rendering sandbox for core data structures.",
//     description: "An educational platform built to map structural memory layouts to interactive visuals, helping engineering students intuitively map complex pointers, graphs, and tree operations.",
//     techStack: ["React.js", "Tailwind CSS", "Framer Motion"],
//     contributors: ["Vedant Purkar"],
//     features: ["Step-by-step frame execution layers for traversal animations", "Interactive state modification graphs allowing users to add/delete live nodes", "Precise operational time-complexity tickers responding directly to live operations"]
//   },
//   {
//     id: "10",
//     client: "Sorting Algorithm Visualizer",
//     year: 2023,
//     url: "https://github.com/Thunderbeast5/Sorting-Algorithm-Visualizer",
//     images: ["/imgs/python.jpeg", "/imgs/python.jpeg"],
//     tagline: "Dynamic spatial computational engine tracking sorting performance.",
//     description: "A performance-focused visual sandbox tracing spatial index modifications for foundational sorting routines, accompanied by audio cues or discrete sorting metrics.",
//     techStack: ["Python", "Pygame", "Matplotlib"],
//     contributors: ["Vedant Purkar"],
//     features: ["Real-time comparative execution clocks tracing array mutation steps", "Highly configurable random generation fields with customizable element scaling", "Visual comparison of multi-track complexity equations running in lockstep"]
//   }
];

export function getOptimizedImageUrl(img, _opts) {
  // Placeholder: keep the same URL by default. Replace with real optimization later.
  return img;
}

export default projectList;
