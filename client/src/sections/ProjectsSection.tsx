// Enhanced ProjectsSection.tsx with Modal Details, Screenshots, and README Display
import { useState } from "react"
import { motion } from "framer-motion"
import Tilt from "react-parallax-tilt"
import * as Dialog from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import DDA from "@/assets/dynamic_data_app.png"
import CSharp from "@/assets/CSharp.png"
import Apiary from "@/assets/apiary.png"
import Neo4j from "@/assets/neo4j.png"
import Mongo from "@/assets/mongo.png"
import DOM from "@/assets/DOM.png"
import Crash from "@/assets/crash.png"

const projects = [
  {
    title: "Apiary Data Visualization",
    description: "Full-stack data visualization of RIT apiary sensor data.",
    tech: ["JavaScript", "Python", "React", "Flask", "MongoDB", "Recharts", "Axios"],
    details: "Designed and deployed a full-stack application for visualizing time series data from RIT’s apiary sensors. Used MongoDB time series collections with metadata-based filtering (by hive, location, metric, and time range). Cleaned CSV data was imported into MongoDB with support for fields like temperature, humidity, battery, radar, and audio sensors. The Flask backend exposes RESTful endpoints, filters invalid data, and serves the React frontend as static files. The frontend includes a FilterPanel for selecting inputs and a SensorChart built with Recharts for dynamic graphing. All components are hosted on an RLES Ubuntu VM with secure external access. The system supports on-demand data loading, modular architecture, and performance-driven filtering for an interactive analytics experience.",
    image: Apiary,
    readme: "https://github.com/RIT-iSchool/bonus-exercise-apiary-data-SidGade04"
  },
  {
    title: "MongoDB Crash Map Explorer",
    description: "Map-based crash data viewer using GridFS and Flask.",
    tech: ["JavaScript", "Python", "React", "Vite", "Flask", "MongoDB", "GridFS", "TailwindCSS", "MUI", "Axios", "Google Street View API"],
    details: "Built a full-stack crash data explorer deployed on an RLES-hosted Ubuntu VM. The backend uses Flask, MongoDB, GridFS, and Flask-Paginate to deliver paginated crash data and images via a secure HTTPS endpoint. Cleaned crash location CSV data was imported into MongoDB, and Google Street View image URLs were generated using lat/lon coordinates. The frontend is a Vite-powered SPA built with React, styled using TailwindCSS and MUI. Axios handles API calls to dynamically load crash data and preview images. The application supports keyword-based search (e.g., 'queens', 'time square'), paginated filtering, and dynamic rendering of embedded Google Street View previews. Images are efficiently served from MongoDB using GridFS. The codebase follows modular patterns and RESTful design.",
    image: Mongo,
    readme: "https://github.com/RIT-iSchool/mongo-project-nosql-ninjas"
  },
  {
    title: "IMDb Graph Explorer",
    description: "Interactive movie–actor relationship explorer using Neo4j and D3.",
    tech: ["Python", "Neo4j", "D3.js", "Node.js", "Express", "Cypher", "CSV"],
    details: "Built a graph-based data explorer using Neo4j and D3.js to visualize actor–movie relationships from the IMDb dataset. The pipeline includes custom Python scripts to clean and filter IMDb .tsv files, reducing scope to 1,000 low-rated movies and actors/actresses. Generated three key CSV files — movies, actors, and ACTED_IN relationships. Loaded into Neo4j to create a graph with over 5,700 nodes and 4,900+ relationships. The app supports preset Cypher queries and user-defined input, rendering interactive force-directed graphs with zoom, pan, and tooltips. Nodes are styled by type (Movie vs Person), and layouts are dynamically tuned for readability. This tool helps users explore real-world data relationships in a visually meaningful way.",
    image: Neo4j,
    readme: "https://github.com/RIT-iSchool/neo4j-project-SidGade04"
  },
  {
    title: "Dynamic Data App",
    description: "Real-time dashboard with API integration and state management.",
    tech: ["React", "API", "Routing", "Fetch", "UI Components"],
    details: "Built a React single-page application that consumes live data from the RIT iSchool API. The project dynamically fetches and displays areas such as About, Degrees, Minors, Employment, and People using React Router for smooth client-side navigation. Used multiple React UI components to enhance user experience, including dynamic course listings and animated panels. Created reusable components for rendering structured content from JSON, and incorporated thoughtful navigation and styling to meet professional standards. The app uses fetch with a proxy and is fully built with a responsive layout and animation-enhanced interactivity. Designed for a client programming project to demonstrate modern frontend integration with external APIs.",
    image: DDA,
    readme: "https://people.rit.edu/sg2882/Project2/"
  },
  {
    title: "Desktop Client App",
    description: "C# app with MVC architecture and web service integration.",
    tech: ["C#", ".NET", "MVC", "API", "jQuery", "jQuery Plugins"],
    details: "Developed a desktop front-end in C# for consuming RESTful web services provided by the RIT iSchool API. Built using a modular MVC architecture with strong emphasis on responsive feedback and user experience. Leveraged jQuery and multiple jQuery plugins for enhanced UI interaction and usability. Displayed data across all major sections like About, Degrees, Minors, Employment, People, and on-demand course listings within Minors. Implemented visual navigation indicators, dynamic rendering based on API responses, and structured views for partial content such as courses and program details. Designed as a follow-up to the React API project, this C# implementation demonstrates the versatility and UI richness achievable with .NET and JavaScript libraries.",
    image: CSharp,
    readme: null
  },
  {
    title: "Data Mining EDA",
    description: "Weka + Python exploratory analysis on NYC motor vehicle collision data.",
    tech: ["Python", "Weka", "Jupyter", "Data Mining"],
    details: "Created a data mining pipeline to analyze real-world NYC motor vehicle collision data. Formed a data science consultancy scenario to simulate client-based problem solving. Conducted data cleaning, preprocessing, and exploratory analysis using Python. Applied Weka for classification (e.g., J48 decision trees), clustering (k-means), and association rule mining. The dataset included detailed location-based crash statistics such as injury/fatality counts, vehicle types, causes, and timestamps. Insights were presented through interactive visualizations and supported both supervised and unsupervised learning methods to uncover critical patterns in crash severity and contributing factors.",
    image: Crash,
    readme: "https://colab.research.google.com/drive/1zBQzdHmZMry7wSGqG0lOqFdpyPpP4Nrm?usp=sharing"
  },
  {
    title: "Live Flight Tracker",
    description: "Real-time flight tracking system and flight ops tools for Emirates Airlines.",
    tech: ["React", "SpringBoot", "TypeScript", "Maps API", "MUI", "TailwindCSS", "Jenkins"],
    details: "Developed a live flight tracking system for Emirates Airlines, integrating real-time aircraft data using server-sent events and Google Maps API. Contributed to operational tools including AOG (Aircrafts on Ground) and FAKMS (Flyaway Kit Management System) to support logistics and maintenance workflows. Created a suite of reusable, responsive React TypeScript components using Material UI (MUI) for the flight catering team, enhancing UI/UX and streamlining form and data table interactions. Interfaces were styled using MUI and TailwindCSS for consistency and accessibility. Automated CI/CD deployment using Jenkins and was recognized with the Najm Appreciation Award for outstanding contributions.",
    image: null,
    readme: null
  },
  {
    title: "Leave Roster System",
    description: "Admin dashboard and leave management tool for Emirates Airlines.",
    tech: ["React", "SpringBoot", "MariaDB", "Jenkins", "Microservices", "Micro Frontends", "TypeScript", "Java", "SLDC"],
    details: "Designed and implemented a modern leave roster system for Emirates Airlines with a clean and user-friendly admin interface. Built using Micro Frontends in React and Micro Backends in SpringBoot to enable modular and maintainable architecture. Developed core administrative features including approval/rejection workflows, real-time leave request tracking, and user-role access handling. Worked directly with stakeholders to translate operational requirements into system features. Leveraged MariaDB for data storage and optimization, and automated CI/CD deployments using Jenkins. Earned the Najm Appreciation Award for exceptional contributions to the project.",
    image: null,
    readme: null
  },
  {
    title: "Interactive Web Forms",
    description: "JS-powered web forms with DOM manipulation and UX focus.",
    tech: ["JavaScript", "DOM", "UX", "Form Validation", "Cookies", "localStorage"],
    details: "Built an interactive multi-layered form system that dynamically generates dropdown menus based on user choices, reaching a minimum depth of three selections. Utilized dynamic DOM manipulation with createElement, appendChild, and other core methods—no innerHTML or static visibility tricks. Included a user information form with JavaScript validation and storage of form data using both cookies and localStorage for broader browser compatibility. The app includes a full reset option and redirects unsupported browsers to a fallback page. Clean CSS-based layout with no tables, requestAnimationFrame for animation effects, and a modular constructor function for creating new dropdowns.",
    image: DOM,
    readme: "https://people.rit.edu/sg2882/Project%201/"
  }
]

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="py-20 bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <Tilt key={i} tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.2} scale={1.02}>
              <motion.div
                onClick={() => setSelectedProject(p)}
                className="cursor-pointer bg-card/80 border border-white/10 backdrop-blur-md rounded-2xl p-5 shadow-lg transition-transform hover:shadow-xl hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 bg-muted text-muted-foreground rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>

        <Dialog.Root open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40" />
            <Dialog.Content className="fixed inset-0 z-50 p-4 flex items-center justify-center">
            <div className="bg-background border border-muted rounded-xl shadow-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6">
              <div className="flex justify-between items-start mb-4">
                <Dialog.Title className="text-2xl font-bold mr-4">{selectedProject?.title}</Dialog.Title>
                <Dialog.Close className="hover:text-red-500"><X /></Dialog.Close>
              </div>
              {selectedProject?.image && (
                <img src={selectedProject.image} alt="project screenshot" className="rounded-lg mb-4 w-full h-auto" />
              )}
              <p className="text-muted-foreground mb-4">{selectedProject?.details}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject?.tech.map((t, i) => (
                  <span key={i} className="text-xs px-3 py-1 bg-muted text-muted-foreground rounded-full">
                    {t}
                  </span>
                ))}
              </div>
              {selectedProject?.readme && (
                <a
                  href={selectedProject.readme}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm underline text-primary hover:text-primary/80"
                >
                  View README / GitHub ↗
                </a>
              )}
            </div>
          </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </section>
  )
}
