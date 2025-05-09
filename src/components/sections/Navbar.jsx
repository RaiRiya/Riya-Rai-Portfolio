import { Link } from "react-scroll";
import { FaHome, FaProjectDiagram, FaBook, FaSearch, FaEnvelope } from "react-icons/fa";
import user_info from "../../data/user_info.js";

function Navbar() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center space-y-6 p-4 
                    bg-zinc-50 dark:bg-zinc-900 shadow-md dark:shadow-lg rounded-l-2xl w-14">
      <Link
        to="hero"
        smooth={true}
        duration={500}
        className="text-zinc-600 dark:text-zinc-300 hover:text-red-600 dark:hover:text-red-400"
      >
        <FaHome className="text-xl" />
      </Link>
      <Link
        to="projects"
        smooth={true}
        duration={500}
        className="text-zinc-600 dark:text-zinc-300 hover:text-red-600 dark:hover:text-red-400"
      >
        <FaProjectDiagram className="text-xl" />
      </Link>
      <Link
        to="coursework"
        smooth={true}
        duration={500}
        className="text-zinc-600 dark:text-zinc-300 hover:text-red-600 dark:hover:text-red-400"
      >
        <FaBook className="text-xl" />
      </Link>
      <Link
        to="research"
        smooth={true}
        duration={500}
        className="text-zinc-600 dark:text-zinc-300 hover:text-red-600 dark:hover:text-red-400"
      >
        <FaSearch className="text-xl" />
      </Link>
      <Link
        to="contact"
        smooth={true}
        duration={500}
        className="text-zinc-600 dark:text-zinc-300 hover:text-red-600 dark:hover:text-red-400"
      >
        <FaEnvelope className="text-xl" />
      </Link>
    </div>
  );
}

export default Navbar;
