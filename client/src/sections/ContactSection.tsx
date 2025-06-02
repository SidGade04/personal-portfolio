import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin } from "lucide-react"
import toast from "react-hot-toast"

export default function ContactSection() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message")
    }

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      })

      if (res.ok) {
        toast.success("Message sent!")
        form.reset() // optional: clear form
      } else {
        toast.error("Failed to send message")
      }
    } catch (err) {
      toast.error("Network error")
    }
  }


  return (
    <motion.section
      id="contact"
      className="flex justify-center items-center min-h-screen px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h3 className="text-3xl font-bold text-center mb-6">Let's Connect</h3>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm font-medium text-muted-foreground">Name</label>
            <Input name="name" placeholder="Your Name" required />
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground">Email</label>
            <Input name="email" type="email" placeholder="Your Email" required />
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground">Message</label>
            <Textarea name="message" placeholder="Your Message" rows={4} required />
          </div>
          <Button className="w-full mt-2" type="submit">Send Message</Button>
        </form>

        <div className="flex justify-center gap-6 mt-8">
          <a
            href="mailto:siddhant.gade2004@gmail.com"
            className="hover:scale-110 transition-transform text-foreground"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/siddhantgade/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform text-foreground"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </motion.section>
  )
}
