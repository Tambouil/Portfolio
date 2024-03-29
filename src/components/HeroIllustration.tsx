import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';

const bigWidgetVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const smallWidgetVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 20,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const imageMap = {
  dark: {
    base: { webp: '/assets/hero-base-dark.webp', png: '/assets/hero-base-dark.png' },
    notification: {
      webp: '/assets/hero-notif-widget-dark.webp',
      png: '/assets/hero-notif-widget-dark.png',
    },
    heart: {
      webp: '/assets/hero-heart-widget-dark.webp',
      png: '/assets/hero-heart-widget-dark.png',
    },
    bigWidget: {
      webp: '/assets/hero-big-widget-dark.webp',
      png: '/assets/hero-big-widget-dark.png',
    },
  },
  light: {
    base: { webp: '/assets/hero-base-light.webp', png: '/assets/hero-base-light.png' },
    notification: {
      webp: '/assets/hero-notif-widget-light.webp',
      png: '/assets/hero-notif-widget-light.png',
    },
    heart: {
      webp: '/assets/hero-heart-widget-light.webp',
      png: '/assets/hero-heart-widget-light.png',
    },
    bigWidget: {
      webp: '/assets/hero-big-widget-light.webp',
      png: '/assets/hero-big-widget-light.png',
    },
  },
};

const HeroIllustration = () => {
  return (
    <section className="z-[-10] absolute scale-[0.6] -bottom-[38rem] right-[50%] translate-x-[50%] md:translate-x-0 md:scale-[0.8] md:bottom-auto md:top-52 md:-right-40 lg:-right-36 lg:top-16 xl:-top-24 xl:-right-20 2xl:-right-16 lg:scale-100">
      <picture>
        <source srcSet={imageMap.dark.base.webp} media="(prefers-color-scheme: dark)" type="image/webp" />
        <motion.img
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{
            duration: 0.75,
            ease: [0.455, 0.03, 0.515, 0.955],
            delay: 1,
          }}
          src={imageMap.light.base.webp}
          loading="lazy"
          width={693}
          height={706}
          alt="Hero illustration"
          className="object-cover w-full min-w-[693px] h-full min-h-[706px]"
        />
      </picture>
      <picture>
        <source srcSet={imageMap.dark.notification.webp} media="(prefers-color-scheme: dark)" type="image/webp" />
        <motion.img
          variants={smallWidgetVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{
            duration: 0.75,
            ease: [0.455, 0.03, 0.515, 0.955],
            delay: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: 'reverse',
            repeatDelay: 8,
          }}
          src={imageMap.light.notification.webp}
          loading="lazy"
          height={114}
          width={252}
          alt="Hero notification widget"
          className="absolute right-96 top-24"
        />
      </picture>
      <picture>
        <source srcSet={imageMap.dark.bigWidget.webp} media="(prefers-color-scheme: dark)" type="image/webp" />
        <motion.img
          variants={bigWidgetVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{
            duration: 0.75,
            ease: [0.455, 0.03, 0.515, 0.955],
            delay: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: 'reverse',
            repeatDelay: 8,
          }}
          src={imageMap.light.bigWidget.webp}
          loading="lazy"
          height={186}
          width={205}
          alt="Hero big widget"
          className="absolute left-[5rem] top-[19rem]"
        />
      </picture>
      <picture>
        <source srcSet={imageMap.dark.bigWidget.webp} media="(prefers-color-scheme: dark)" type="image/webp" />
        <motion.img
          variants={bigWidgetVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{
            duration: 0.75,
            ease: [0.455, 0.03, 0.515, 0.955],
            delay: 6,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: 'reverse',
            repeatDelay: 8,
          }}
          src={imageMap.light.bigWidget.webp}
          loading="lazy"
          height={186}
          width={205}
          alt="Hero big widget"
          className="absolute right-[8rem] top-[8.25rem]"
        />
      </picture>
      <picture>
        <source srcSet={imageMap.dark.heart.webp} media="(prefers-color-scheme: dark)" type="image/webp" />
        <motion.img
          variants={smallWidgetVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{
            duration: 0.75,
            ease: [0.455, 0.03, 0.515, 0.955],
            delay: 14,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: 'reverse',
            repeatDelay: 8,
          }}
          src={imageMap.light.heart.webp}
          loading="lazy"
          height={113}
          width={255}
          alt="Hero like widget"
          className="absolute right-[5.5rem] top-[24.75rem]"
        />
      </picture>
    </section>
  );
};

export default HeroIllustration;
