import { Link } from "react-scroll"

const Navbar = () => (
  <nav className="fixed top-0 w-full bg-white shadow z-50 flex justify-center gap-6 py-4">
    <Link to="hero" smooth={true} duration={500} className="cursor-pointer hover:underline">Home</Link>
    <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:underline">About</Link>
    {/* Add more: projects, contact */}
  </nav>
)

export default Navbar;