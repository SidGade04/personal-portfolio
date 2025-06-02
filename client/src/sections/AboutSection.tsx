import { motion } from "framer-motion"
import profileGraphic from "@/assets/my_image.jpg"

export default function AboutSection() {
  const skills = [
    "React", "TypeScript", "Python", "SpringBoot", "MongoDB", "TailwindCSS",
    "Jenkins", "AWS", "MySQL", "C#", "Java"
  ]

  const highlights = [
    "2x Najm Appreciation Award recipient (Emirates Group IT)",
    "Built live flight tracking using Google Maps API",
    "Designed responsive UIs with MUI & Tailwind",
    "Worked on Micro Frontends and SpringBoot Microservices",
    "CI/CD automation using Jenkins"
  ]

  return (
    <section id="about" className="py-20 bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full h-auto rounded-xl overflow-hidden shadow-lg"
        >
            <img
            src={profileGraphic}
            alt="Siddhant illustration"
            className="w-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Who I Am</h2>
          <p className="text-muted-foreground mb-6">
            I’m Siddhant Gade, a Computer and Information Science graduate from <a href="https://www.rit.edu/">Rochester Institute of Technology</a>. I’ve interned with <a href="https://www.emirates.com/us/english/">Emirates Airlines</a> as a Software Engineer, working on systems like live flight tracking and leave roster management. I specialize in full-stack development with a keen interest in scalable systems and smart UI.
          </p>

          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Highlights:</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              {highlights.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-muted text-muted-foreground text-xs px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}