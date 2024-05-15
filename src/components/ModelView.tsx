/* eslint-disable @typescript-eslint/no-explicit-any */
import { OrbitControls, PerspectiveCamera, View } from '@react-three/drei';
import { Ref, Suspense } from 'react';
import { Group, Vector3 } from 'three';
import Lights from './Lights';
import Iphone from './Iphone.jsx';
import Loader from './Loader.js';

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
    return (
        <View
            index={props.index}
            id={props.gsapType}
            className={` absolute  w-full h-full ${
                props.index === 2 ? 'right-[-100%]' : ''
            }`}
        >
            <ambientLight intensity={0.3} />
            <PerspectiveCamera makeDefault position={[0, 0, 4]} />
            <Lights />
            <OrbitControls
                makeDefault
                ref={props.controlRef}
                enableZoom={false}
                enablePan={false}
                rotateSpeed={0.4}
                target={new Vector3(0, 0, 0)}
                onEnd={() =>
                    props.setRotationState(
                        props.controlRef.current.getAzimuthalAngle()
                    )
                }
            />

            <group
                ref={props.groupRef}
                name={`${props.index === 1 ? 'small' : 'large'}`}
                position={[0, 0, 0]}
            >
                <Suspense fallback={<Loader />}>
                    <Iphone
                        scale={props.index === 1 ? [15, 15, 15] : [17, 17, 17]}
                        item={props.item}
                        size={props.size}
                    />
                </Suspense>
            </group>
        </View>
    );
};

export default ModelView;
