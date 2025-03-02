const transition = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: [0.87, 0, 0.13, 1],
        }
    },
    exit: {
        opacity: 0
    }
}

export default transition;