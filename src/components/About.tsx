import { motion } from 'framer-motion';
import { IoLogoFigma } from 'react-icons/io5';
import {
  SiDocker,
  SiFastify,
  SiNeovim,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { AnimatedText } from './AnimatedText/AnimatedText';
import { SectionHeader } from './HeaderSection';
import MotionLinkButton from './LinkButton';
import { SectionShell } from './ShellSection';

const About = () => {
  return (
    <SectionShell id="about">
      <SectionHeader heading="About" />

      <motion.section
        variants={{
          visible: { transition: { staggerChildren: 0.25 } },
        }}
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        viewport={{ once: true }}
        className="relative mt-16 grid grid-cols-12 gap-y-10 md:ml-24 md:gap-x-8 lg:gap-x-16"
      >
        <AnimatedText
          as="p"
          className="col-span-full text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200 md:col-span-6 xl:col-span-8"
          text="Get a brief look at who I am and what I do."
        />
        <MotionLinkButton
          href="https://www.linkedin.com/in/valentin-berceaux-240b5614b/"
          target="_blank"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { ease: 'circOut', duration: 0.5 } },
          }}
          className="col-span-full md:col-start-7 xl:col-start-9"
        >
          More about me
        </MotionLinkButton>
      </motion.section>

      <section className="relative mt-24 flex grid-cols-12 flex-col-reverse gap-y-10 md:ml-24 md:grid md:gap-x-8 lg:gap-x-16">
        <section className="col-span-full md:col-span-6 xl:col-span-8">
          <motion.article
            variants={{
              visible: { transition: { staggerChildren: 0.15, delayChildren: 0.25 } },
            }}
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ once: true }}
          >
            <AnimatedText
              as="h3"
              text="Who am I"
              className="text-sm uppercase tracking-wider text-dark-200 dark:text-dark-400"
            />
            <AnimatedText
              as="p"
              text="Self-taught and passionate about code, I have enhanced my skills with freelance projects and by graduating a 8 months fullstack bootcamp at OpenClassrooms."
              className="mt-6 text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200"
            />
            <AnimatedText
              as="p"
              text="I like to work on projects that are challenging and that I can be proud of. I am always looking for new opportunities to learn and improve my skills."
              className="mt-6 text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200"
            />
            <AnimatedText
              as="p"
              text="I'm currently looking for a full-time position as a Web Developer."
              className="mt-6 text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200"
            />
            <AnimatedText
              as="p"
              text="In my free time, I spend a lot of time in the water doing kitesurfing"
              className="mt-6 text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200"
            />
          </motion.article>

          <motion.section
            variants={{
              visible: { transition: { staggerChildren: 0.15, delayChildren: 0.25 } },
            }}
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ once: true }}
            className="col-span-full mt-14 overflow-hidden md:col-span-6 xl:col-span-8"
          >
            <AnimatedText
              as="h3"
              text="Tech I enjoy"
              className="text-sm uppercase tracking-wider text-dark-200 dark:text-dark-400"
            />
            <motion.div
              variants={{
                hidden: { y: 50, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.5, ease: 'circOut' },
                },
              }}
              className="mt-6 flex flex-wrap gap-6 text-dark-300"
            >
              <SiTypescript size={28} title="TypeScript" />
              <SiReact size={28} title="React.js" />
              <SiNextdotjs size={28} title="Next.js" />
              <SiFastify size={28} title="Fastify" />
              <SiTailwindcss size={28} title="TailwindCSS" />
              <SiPrisma size={28} title="Prisma" />
              <SiDocker size={28} title="Docker" />
              <SiPostgresql size={28} title="PostgreSQL" />
            </motion.div>
          </motion.section>
        </section>

        <motion.figure
          variants={{
            hidden: { scaleX: 0, originX: 0 },
            visible: {
              scaleX: 1,
              opacity: 1,
              transition: {
                duration: 0.75,
                ease: [0.9, 0.1, 0.3, 0.96],
                when: 'beforeChildren',
                delayChildren: 0.15,
                delay: 0.25,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ once: true }}
          className="mb-6 w-2/3 self-start md:col-span-full md:col-start-7 md:mb-0 md:w-full xl:col-start-9"
        >
          <motion.img
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { duration: 0.5, ease: [0.6, 0.5, 0.5, 0.9] },
              },
            }}
            src="/assets/surf.svg"
            alt="surfing"
            className="w-full"
          />
        </motion.figure>
      </section>
    </SectionShell>
  );
};

export default About;
