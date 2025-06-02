import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Link as ScrollLink } from "react-scroll"
import resume from "@/assets/resume.pdf"
import { TypeAnimation } from "react-type-animation"

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4">
      <motion.h1
        className="text-6xl font-extrabold tracking-tight bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Siddhant Gade
      </motion.h1>

      <TypeAnimation
        sequence={['scalable systems', 2000, 'immersive interfaces', 2000, 'smart tools', 2000]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="text-xl text-muted-foreground mt-4"
      />

      <div className="mt-6 flex gap-4">
        <ScrollLink to="projects" smooth={true} duration={500}>
          <Button>View Projects</Button>
        </ScrollLink>

        <a href={resume} download>
          <Button variant="outline">Download Resume</Button>
        </a>
      </div>
    </div>
  )
}