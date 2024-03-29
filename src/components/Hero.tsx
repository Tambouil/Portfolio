import { AnimatePresence, motion } from 'framer-motion';
import HeroIllustration from '@/components/HeroIllustration';
import { AnimatedLetters, AnimatedText } from '@/components/AnimatedText/AnimatedText';
import MotionLinkButton from '@/components/LinkButton';

const Hero = () => {
  return (
    <header
      id="intro"
      className="pt-40 pb-80 shadow-[inset_0_-40px_15px_-10px_#ededed] transition duration-300 ease-in-out dark:shadow-[inset_0_-40px_15px_-10px_#171717] md:bg-auto lg:pt-48 lg:pb-64 xl:py-80 overflow-hidden"
    >
      <motion.section
        variants={{
          hidden: { transition: { staggerChildren: 0.25, delayChildren: 0.25 } },
          visible: { transition: { staggerChildren: 0.25, delayChildren: 0.25 } },
        }}
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        viewport={{ once: true }}
        className="container relative"
      >
        <AnimatePresence>
          <article className="lg:max-w-[60%]">
            <AnimatedLetters
              as="h1"
              text="Bonjour, I'm Valentin Berceaux"
              className="text-5xl font-medium md:text-6xl lg:text-7xl"
              textVariants={{
                hidden: { transition: { staggerChildren: 0.015 } },
                visible: { transition: { staggerChildren: 0.015 } },
              }}
              letterVariants={{
                hidden: { opacity: 0, y: 75 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.5 },
                },
              }}
            />
            <AnimatedText
              as="p"
              className="mt-10 text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200"
              text="I'm a full stack developer with a passion for great design and user
							experiences. I'm available for a full-time position"
            />
          </article>
        </AnimatePresence>

        <MotionLinkButton
          href="#projects"
          className="mt-8 inline-block md:mt-16"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { ease: 'circOut', duration: 0.5 },
            },
          }}
        >
          Explore my projects
        </MotionLinkButton>

        <HeroIllustration />
      </motion.section>
    </header>
  );
};

export default Hero;
