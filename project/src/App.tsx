import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import type { Profile, Skill, Experience as ExperienceType, Project, Contact as ContactType } from './types/portfolio';

const profile: Profile = {
  name: " Chirag Vishwakarma",
  title: "AI & Chatbot Developer-Data Analyst",
  bio: "Passionate developer with expertise in building modern AI solutions. I specialize in data analysis, machine learning, and AI agents with a focus on creating impactful solutions.",
  avatar: "https://i.postimg.cc/gr9ch7sZ/Chirag.jpg",
  resumeUrl: "/Chirag Vishwakarma Resume.pdf",
  github: "https://github.com/Chirag230861",
  linkedin: "http://www.linkedin.com/in/chirag-vishwakarma",
  instagram: "https://www.instagram.com/chiragggg.___"
};

const skills: Skill[] = [
  // Programming Languages & Core Technologies
  { 
    name: "Python",
    category: "frontend",
    level: 90,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  },
  { 
    name: "JavaScript",
    category: "frontend",
    level: 75,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  { 
    name: "MySQL",
    category: "backend",
    level: 85,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
  },
  { 
    name: "MongoDB",
    category: "backend",
    level: 80,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
  },
  { 
    name: "Vector Databases",
    category: "backend",
    level: 78,
    icon: "https://i.postimg.cc/y8hm8pg7/e8769bf4-53b8-4526-aed3-7143ab44076f.jpg"
  },

  // AI & Data Science
  { 
    name: "Machine Learning",
    category: "ai-data",
    level: 88,
    icon: "https://static.vecteezy.com/system/resources/previews/003/504/819/non_2x/brain-and-artificial-intelligence-line-icon-brain-innovation-logo-illustration-free-vector.jpg"
  },
  { 
    name: "Data Analysis",
    category: "ai-data",
    level: 85,
    icon: "https://thumbs.dreamstime.com/z/data-analysis-icon-vector-isolated-white-background-logo-con-concept-sign-transparent-filled-black-symbol-125781457.jpg"
  },
  { 
    name: "LLM & AI Agents",
    category: "ai-data",
    level: 82,
    icon: "https://thumbs.dreamstime.com/b/black-artificial-intelligence-ai-processor-chip-vector-line-art-icon-black-artificial-intelligence-ai-processor-chip-vector-line-296403109.jpg"
  },
  { 
    name: "Data Manipulation",
    category: "ai-data",
    level: 90,
    icon: "https://media.istockphoto.com/id/1172550193/vector/data-analysis-line-icon-with-business-graph-or-chart-with-magnifier.jpg?s=612x612&w=0&k=20&c=DPTn3O8ZeqRJETdiLf4fK3XACblE8UeMQNtCRSnrOd8="
  },

  //Tools
  { 
    name: "Git",
    category: "tools",
    level: 85,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
  },
  { 
    name: "GitHub",
    category: "tools",
    level: 85,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
  },
  {
    name: "VS Code",
    category: "tools",
    level: 90,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
  },
  {
    name: "Cursor",
    category: "tools",
    level: 80,
    icon: "https://miro.medium.com/v2/resize:fit:800/0*zWCTHFNFdGAgSw2d"
  },
  {
    name: "Tableau",
    category: "tools",
    level: 80,
    icon: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg"
  },
  {
    name: "Power BI",
    category: "tools",
    level: 80,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/1200px-New_Power_BI_Logo.svg.png"
  },
  {
    name: "Jupyter",
    category: "tools",
    level: 80,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jupyter_logo.svg/1200px-Jupyter_logo.svg.png"
  },
  {
    name: "LM Studio",
    category: "tools",
    level: 80,
    icon: "https://avatars.githubusercontent.com/u/133744619?s=280&v=4"
  },

  // Cloud & Infrastructure
  { 
    name: "AWS Cloud",
    category: "cloud",
    level: 75,
    icon: "https://banner2.cleanpng.com/20190418/qty/kisspng-amazon-web-services-logo-cloud-computing-amazon-co-logoaws-1-itnext-summit-1713897691932.webp"
  },

  // Other Skills
  { 
    name: "Issue Resolution",
    category: "Soft-Skills",
    level: 88,
    icon: "https://www.shutterstock.com/image-vector/dispute-resolution-icon-vector-illustration-600nw-2300404219.jpg"
  },
  { 
    name: "Strategic Decision Making",
    category: "Soft-Skills",
    level: 85,
    icon: "https://cdn3.vectorstock.com/i/1000x1000/59/12/strategic-decisions-icon-from-global-business-vector-35875912.jpg"
  },
  { 
    name: "Task Execution",
    category: "Soft-Skills",
    level: 92,
    icon: "https://w7.pngwing.com/pngs/185/850/png-transparent-task-computer-icons-tasks-s-angle-text-microsoft-office-thumbnail.png"
  },
  { 
    name: "Communication",
    category: "Soft-Skills",
    level: 90,
    icon: "https://i.pinimg.com/736x/91/dd/0a/91dd0a85d3e1303b5b2d3768f7638583.jpg"
  }
];

const experiences: ExperienceType[] = [
  {
    company: "AutoWhat ChatBot Services",
    position: "AI Developer Intern",
    startDate: "23/12/2024",
    endDate: "Present",
    description: [
      "Leveraged state-of-the-art Large Language Models (LLMs) to design AI agents capable of interpreting natural language inputs for human-like task generation",
      "Implemented prompt engineering techniques to ensure accurate and context-aware responses tailored to task management requirements",
      "Integrated LLM-powered agents into existing workflows, reducing manual task assignment efforts by 30%"
    ],
    technologies: ["Python", "LLMs", "Prompt Engineering", "AI Agents"]
  },
];

const projects: Project[] = [
  {
    title: "Emotion-Based Music Recommendation System",
    description: "Developed an AI project leveraging deep learning to detect useremotions via facial expressions and recommend suitable music based on their emotions. The system uses machine learning for real-time emotion analysis and music selection, enhancing user experience through personalized interaction.",
    technologies: ["Python", "Machine Learning", "NLP"],
    imageUrl: "https://i.postimg.cc/J0n39Yyq/DALL-E-2025-01-24-15-04-54-A-conceptual-illustration-of-an-emotion-based-music-recommender-system.webp",
    githubUrl: "https://github.com/Chirag230861/Emotion-music-recommender-system",
  },
  {
    title: "Eye-Tracker Mouse",
    description: "Developed a functional system using Python and OpenCV for hands-free cursor control via eye tracking. Features include eye gaze tracking for movement, blinks/gestures for clicks, and innovative accessibility solutions for enhanced human-computer interaction.",
    technologies: ["Python:pyautogui:MediaPipe", "NLP"],
    imageUrl: "https://i.postimg.cc/vZQH74KW/DALL-E-2025-01-24-15-23-03-A-conceptual-illustration-of-an-eye-tracker-mouse-system-The-scene-fea.webp",
    githubUrl: "https://github.com/Chirag230861/EyeTracker",
  },
  {
    title: "",
    description: "",
    technologies: ["Python:pyautogui:MediaPipe", "NLP"],
    imageUrl: "",
    githubUrl: "",
  },
];

const contact: ContactType = {
  email: "chiragvishwakarma520@gmail.com",
  phone: "8433675469",
  location: "Mumbai-97, Maharashtra",
  github: "https://github.com/Chirag230861",
  linkedin: "http://www.linkedin.com/in/chirag-vishwakarma",
  instagram: "https://www.instagram.com/chiragggg.___"
};

function App() {
  return (
    <div className="bg-white">
      <Hero profile={profile} />
      <About profile={profile} />
      <Skills skills={skills} />
      <Experience experiences={experiences} />
      <Projects projects={projects} />
      <Contact contact={contact} />
    </div>
  );
}

export default App;
