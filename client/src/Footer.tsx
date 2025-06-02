import { motion } from "framer-motion"
import { Mail, Linkedin, Github } from "lucide-react"

export default function Footer() {
  return (
    <motion.footer
      className="bg-muted text-muted-foreground py-6 border-t border-white/10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">© {new Date().getFullYear()} Siddhant Gade. All rights reserved.</p>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/siddhantgade/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com/SidGade04"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            <Github size={18} />
          </a>
          <a
            href="mailto:siddhant.gade2004@gmail.com"
            className="hover:text-primary transition"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </motion.footer>
  )
}