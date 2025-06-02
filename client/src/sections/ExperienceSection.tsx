import { motion } from "framer-motion"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "Emirates Airlines",
    duration: "May 2024 – Aug 2024",
    details: [
      "Developed live flight tracking with Google Maps API & SSE Emitter.",
      "Built reusable React TypeScript components for flight catering.",
      "Integrated geospatial data for user interaction enhancements.",
      "Automated CI/CD workflows using Jenkins.",
      "Awarded the Najm Appreciation Award for outstanding contributions.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Emirates Airlines",
    duration: "Sep 2023 – Dec 2023",
    details: [
      "Created a leave roster system with admin tools.",
      "Used Micro Frontends (React) and SpringBoot Microservices.",
      "Streamlined CI/CD pipelines using Jenkins.",
      "Optimized database performance using MariaDB.",
      "Recognized with the Najm Appreciation Award.",
    ],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-background text-foreground">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        <VerticalTimeline>
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              date={exp.duration}
              iconStyle={{ background: "#7c3aed", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid #2a2a2a" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-card backdrop-blur-md border border-muted p-5 rounded-xl shadow-md"
              >
                <h4 className="text-xl font-semibold">{exp.title}</h4>
                <p className="text-sm text-muted-foreground mb-2 italic">{exp.company}</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  {exp.details.map((pt, idx) => (
                    <li key={idx}>{pt}</li>
                  ))}
                </ul>
              </motion.div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  )
}