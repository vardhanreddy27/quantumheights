import {
  FaArrowRight,
  FaBookOpen,
  FaBullseye,
  FaChalkboardTeacher,
  FaFacebookF,
  FaFlask,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTrophy,
  FaUserGraduate,
} from "react-icons/fa";
import { MdAutoGraph, MdEmail } from "react-icons/md";

export const schoolInfo = {
  name: "QUANTUM HEIGHTS School",
  tagline: "Quality Education • Smart Learning",
  logoTagline: "English Medium School",
  logoSubtagline: "IIT-JEE | NEET | Civil Services Foundation School",
  location: "Prakash Nagar, Kadapa",
  phones: ["+91 93908 98250", "+91 63035 07136"],
};

export const brand = {
  primary: "#8c1d2c",
  secondary: "#d4a11f",
  accent: "#123d6d",
};

export const navLinks = [
  { label: "Home", href: "#Home" },
  { label: "Why Us", href: "#why-us" },
  { label: "Programs", href: "#programs" }, // Our Specialized Programs
  { label: "About", href: "#academics" }, // New Way of Learning
  { label: "Smart School", href: "#smart-school" }, // Smart School ERP
  { label: "Contact", href: "#contact" }, // Get in Touch
];

export const heroCards = [
  {
    title: "STEM Labs",
    color: "bg-[#d4a11f]/15",
  },
  {
    title: "Guided Learning",
    color: "bg-[#8c1d2c]/10",
  },
  {
    title: "Campus Culture",
    color: "bg-[#123d6d]/10",
  },
];

export const programs = [
  {
    title: "Foundational School",
    subtitle: "Grades 1 to 5",
    description:
      "Activity-led classrooms that build literacy, numeracy, confidence, and disciplined study habits.",
    icon: FaBookOpen,
  },
  {
    title: "Middle School Excellence",
    subtitle: "Grades 6 to 8",
    description:
      "Project-based learning in Science and Mathematics with communication and leadership development.",
    icon: FaFlask,
  },
  {
    title: "Senior School + Career Tracks",
    subtitle: "Grades 9 to 12",
    description:
      "Board-focused academics with IIT-JEE, NEET, and Civil Services Foundation guidance pathways.",
    icon: FaUserGraduate,
  },
];

export const highlights = [
  {
    title: "Experienced Faculty",
    text: "Mentors with strong subject depth and student-friendly classroom teaching.",
    icon: FaChalkboardTeacher,
  },
  {
    title: "Personalized Attention",
    text: "Low student-teacher ratio with periodic parent-teacher mentoring support.",
    icon: FaBullseye,
  },
  {
    title: "Proven Results",
    text: "Consistent board outcomes and measurable student growth year after year.",
    icon: FaTrophy,
  },
  {
    title: "Smart Learning Methods",
    text: "Assessment analytics, revision maps, and concept reinforcement cycles.",
    icon: MdAutoGraph,
  },
];

export const examTraining = [
  {
    title: "IIT-JEE Preparation",
    detail:
      "Strong Physics, Chemistry, and Mathematics pipeline with concept classes, drills, and rank-oriented mock tests.",
  },
  {
    title: "NEET Preparation",
    detail:
      "Biology-first strategy with chapter planning, medical-entrance practice series, and mentor follow-up.",
  },
  {
    title: "Civil Services Foundation",
    detail:
      "Early training in current affairs, polity, writing, and analytical thinking for long-term UPSC direction.",
  },
];

export const stats = [
  { value: "1000+", label: "Students Trained" },
  { value: "95%", label: "Success Rate" },
  { value: "120+", label: "Top Rankers" },
  { value: "15+", label: "Years of Excellence" },
];

export const testimonials = [
  {
    name: "A. Meghana",
    role: "Parent, Grade 10",
    quote: "The discipline and personal attention transformed my child into a confident, focused learner.",
  },
  {
    name: "Rohit Varma",
    role: "Student, Grade 12",
    quote: "Teachers make difficult concepts simple, and academic guidance is consistently strong.",
  },
  {
    name: "S. Harini",
    role: "Parent, Grade 7",
    quote: "The school balances academics and values beautifully. We saw measurable growth in months.",
  },
];

export const trustLogos = [
  { src: "/standford.png", alt: "Stanford" },
  { src: "/cambridge.png", alt: "Cambridge" },
  { src: "/mit.png", alt: "MIT" },
  { src: "/harvard.png", alt: "Harvard" },
];
