import { motion } from 'framer-motion';
import { useScrollspy } from 'use-scrollspy';
import { linkVariants, navVariants } from './NavbarMotion';

const Navbar = () => {
  useScrollspy({
    ids: ['intro', 'projects', 'about', 'contact'],
    hrefs: ['/#intro', '/#projects', '/#about', '/#contact'],
    offset: 'topCenter',
    activeClass: 'active-nav-link',
  });

  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="container fixed inset-x-0 top-0 z-50 hidden h-32 w-full items-center justify-between md:flex"
    >
      <motion.a
        className="font-medium  text-dark-400 hover:text-dark-500 dark:text-dark-300 dark:hover:text-dark-200"
        href="/"
        variants={linkVariants}
      >
        VB.
      </motion.a>

      <nav className="flex items-center justify-center gap-x-14 text-lg">
        <motion.a className="nav-link" href="/#intro" variants={linkVariants}>
          Introduction
        </motion.a>
        <motion.a className="nav-link" href="/#projects" variants={linkVariants}>
          Projects
        </motion.a>
        <motion.a className="nav-link" href="/#about" variants={linkVariants}>
          About
        </motion.a>
        <motion.a className="nav-link" href="/#contact" variants={linkVariants}>
          Contact
        </motion.a>
      </nav>
    </motion.header>
  );
};

export default Navbar;
