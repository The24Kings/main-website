const transition = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.8
        }
    },
    exit: {
        opacity: 0
    }
}

const hoverNav = {
    hover: {
        scale: 1.05
    },
    click: {
        scale: 1
    }
};

const clickAnim = {
    click: {
        scale: 0.8
    }
}

const customButtonClick = {
    click: {
        scale: 0.95
    }
}

export { hoverNav, clickAnim, customButtonClick };
export default transition;