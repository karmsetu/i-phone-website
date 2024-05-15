import { Ref } from 'react';
import { Group } from 'three';

type ModelViewProps = {
    index: number;
    groupRef: Ref<Group>;
    gsapType: string;
    controlRef: any | null;
    setRotationState: any;
    item: {
        title: string;
        color: string[];
        img: string;
    };
    size: string;
};

const ModelView = (props: ModelViewProps) => {
    return <div>ModelView</div>;
};

export default ModelView;
