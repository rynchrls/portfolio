import { gsap } from "gsap"
import { Navigation } from "../lib/headerFunc"


export const scrollHome = (scrollProperties: Navigation) => {

    const tl = gsap.timeline()



    tl.to('.h', {
        backgroundColor: "rgba(86, 230, 230, 1)",
        scrollTrigger: {
            trigger: ".hero-section",
            start: 'top bottom',
            end: 'top top',
            scrub: 2,
            immediateRender: false
        }
    })
    tl.to('.h', {
        backgroundColor: "transparent",
        scrollTrigger: {
            trigger: ".about-section",
            start: 'top bottom',
            end: 'top top',
            scrub: 2,
            immediateRender: false
        }
    })
}

export const scrollAbout = () => {
  
    const tl = gsap.timeline()

    tl.to('.a', {
        backgroundColor: "rgba(86, 230, 230, 1)",
        scrollTrigger: {
            trigger: ".about-section",
            start: 'top bottom',
            end: 'top top',
            scrub: 2,
            immediateRender: false
        }
    })
    tl.to('.a', {
        backgroundColor: "transparent",
        scrollTrigger: {
            trigger: ".project-section",
            start: 'top bottom',
            end: 'top top',
            scrub: 2,
            immediateRender: false
        }
    })
}


export const scrollProject = () => {
    const tl = gsap.timeline()

    tl.to('.p', {
        backgroundColor: "rgba(86, 230, 230, 1)",
        scrollTrigger: {
            trigger: ".project-section",
            start: 'top bottom',
            end: 'top top',
            scrub: 2,
            immediateRender: false
        }
    })
    tl.to('.p', {
        backgroundColor: "transparent",
        scrollTrigger: {
            trigger: ".cert-section",
            start: 'top bottom',
            end: 'top top',
            scrub: 2,
            immediateRender: false
        }
    })
}

export const scrollCert = () => {
    const tl = gsap.timeline()


    tl.to('.c1', {
        backgroundColor: "rgba(86, 230, 230, 1)",
        scrollTrigger: {
            trigger: ".cert-section",
            start: 'top bottom',
            end: 'top top',
            scrub: 2,
            immediateRender: false
        }
    })
    tl.to('.c1', {
        backgroundColor: "transparent",
        scrollTrigger: {
            trigger: ".contact-section",
            start: 'top bottom',
            end: 'top top',
            scrub: 2,
            immediateRender: false
        }
    })
}


export const scrollContact = () => {
    const tl = gsap.timeline()


    tl.to('.c2', {
        backgroundColor: "rgba(86, 230, 230, 1)",
        scrollTrigger: {
            trigger: ".contact-section",
            start: 'top bottom',
            end: 'top top',
            scrub: 2,
            immediateRender: false
        }
    })
    tl.to('.c2', {
        backgroundColor: "transparent",
        scrollTrigger: {
            trigger: ".cert-section",
            start: 'top bottom',
            end: 'top top',
            scrub: 2,
            immediateRender: false
        }
    })
}