import type { ReactNode } from 'react';
import type { HTMLMotionProps } from 'framer-motion';
import clsx from 'clsx';
import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { VscArrowRight } from 'react-icons/vsc';

type MotionLinkButtonProps = HTMLMotionProps<'a'> & {
  children: ReactNode;
  href: string;
  className?: string;
};

const MotionLinkButton = forwardRef<HTMLAnchorElement, MotionLinkButtonProps>(
  ({ children, href, className, ...props }, ref) => {
    return (
      <motion.a
        href={href}
        ref={ref}
        className={clsx(
          'group flex gap-3 text-3xl font-light text-dark-400 transition duration-300 ease-in-out hover:text-dark-500 dark:text-dark-200',
          className
        )}
        {...props}
      >
        {children}
        <VscArrowRight
          size={36}
          className="rotate-45 text-dark-200 transition duration-300 ease-in-out group-hover:translate-x-1 group-hover:translate-y-1 group-hover:text-dark-300 dark:text-dark-400"
        />
      </motion.a>
    );
  }
);
MotionLinkButton.displayName = 'MotionLinkButton';
export default MotionLinkButton;
