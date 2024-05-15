import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { MutableRefObject } from 'react';
import { Group, Object3DEventMap } from 'three';

gsap.registerPlugin(ScrollTrigger);

export const animateWithGsap = (
    target: string,
    animationProps: gsap.AnimationVars | null,
    scrollProps?: object | null
) => {
    gsap.to(target, {
        ...animationProps,
        scrollTrigger: {
            trigger: target,
            toggleActions: 'restart reverse restart reverse',
            start: 'top 85%',
            ...scrollProps,
        },
    });
};

export const animateWithGsapTimeline = (
    timeline: gsap.core.Timeline,
    rotationRef: MutableRefObject<Group<Object3DEventMap>>,
    rotationState: number,
    firstTarget: '#view1' | '#view2',
    secondTarget: '#view1' | '#view2',
    animationProps: object
) => {
    timeline.to(rotationRef.current.rotation, {
        y: rotationState,
        duration: 1,
        ease: 'power1.inOut',
    });
    timeline.to(
        firstTarget,
        {
            ...animationProps,
            ease: 'power2.inOut',
        },
        '<'
    );
    timeline.to(
        secondTarget,
        {
            ...animationProps,
            ease: 'power2.inOut',
        },
        '<'
    );
};
