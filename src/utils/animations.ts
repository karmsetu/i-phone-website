import { MutableRefObject } from 'react';
import { Group, Object3DEventMap } from 'three';

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
