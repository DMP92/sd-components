import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default class HorizontalScroll {
    constructor(wrapper, panels, direction, snapEnabled = true) {
        this.wrapper = document.querySelector(`[${wrapper}]`)
        this.panelGroup = document.querySelectorAll(`[${panels}]`)
        this.direction = direction
        this.snapEnabled = snapEnabled

        this.tlPosition = 0;

        this.handleScrollDirection()
        this.horizontalScroll()
    }

    handleScrollDirection() {
        this.direction === 100 ?
        this.wrapper.style.flexDirection = 'row-reverse'
        : this.wrapper.style.flexDirection = 'row'
    }

    horizontalScroll() {
        gsap.to(this.panelGroup, {
            xPercent: this.direction * (this.panelGroup.length - 1),
            ease: 'none',
            scrollTrigger: {
                trigger: this.wrapper,
                start: 'top top',
                pin: true,
                scrub: 1,
                end: () => "+=" + (this.wrapper.offsetWidth * this.panelGroup.length - 1),
                ...(snapEnabled && { snap: {
                    snapTo: 1 / (this.panelGroup.length - 1),
                    inertia: false,
                    duration: { min: 0.2, max: 0.3 },
                }}),
                onUpdate: (self) => {
                    this.tlPosition = self.progress;
                }
            },
        })
    }
}
