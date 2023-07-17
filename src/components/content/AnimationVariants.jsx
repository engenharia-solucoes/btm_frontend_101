export const fadeInVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};

export const flipVariants = {
    initial: { rotateY: 180 },
    animate: { rotateY: 0 },
    exit: { rotateY: 180 },
};

export const slideVariants = {
    initial: { x: '-100%' },
    animate: { x: '0%' },
    exit: { x: '100%' },
};

export const scaleVariants = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    exit: { scale: 0 },
};

export const bounceVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: 'bounce' } },
    exit: { scale: 0, opacity: 0 },
};

export const textVariants = {
    hidden: { width: 0 },
    visible: {
        width: '100%',
        transition: {
            duration: 1,
            ease: 'easeInOut',
        },
    },
};  