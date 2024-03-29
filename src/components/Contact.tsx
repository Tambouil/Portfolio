import type { ReactNode } from 'react';

import { motion } from 'framer-motion';
import { SectionShell } from './ShellSection';
import { SectionHeader } from './HeaderSection';

const Contact = () => (
  <SectionShell id="contact">
    <SectionHeader heading="Contact" />

    <motion.section
      variants={{
        visible: { transition: { staggerChildren: 0.15, delayChildren: 0.25 } },
      }}
      initial="hidden"
      whileInView="visible"
      exit="hidden"
      viewport={{ once: true }}
      className="mt-16 gap-x-16 gap-y-24 md:ml-24 "
    >
      <motion.p
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { ease: 'circOut', duration: 0.5 } },
        }}
        className="mt-8 md:mt-16 text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200"
      >
        Are you looking for a developer who enjoys taking on new challenges, working in a rapidly changing environment,
        learning new skills, and applying it all to solve large and impactful business problems?
      </motion.p>

      <motion.p
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { ease: 'circOut', duration: 0.5 } },
        }}
        className="mt-8 md:mt-16 text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200"
      >
        I await the opportunity to build modern applications with your team and for your users.
      </motion.p>
      <motion.p
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { ease: 'circOut', duration: 0.5 } },
        }}
        className="mt-8 md:mt-16 text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200"
      >
        Get in touch with me{' '}
        <a
          href="mailto:hello@valentinberceaux.com"
          className="underline decoration-dark-200 underline-offset-[6px] hover:decoration-dark-300 dark:decoration-dark-500 dark:hover:decoration-dark-400"
        >
          directly by email
        </a>{' '}
        or LinkedIn as early as possible!
      </motion.p>
    </motion.section>
  </SectionShell>
);

export default Contact;
