import { Html } from '@react-three/drei';

const Loader = () => {
    return (
        <Html>
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <div className="w-8 h-8 rounded-full bg-blue-500 animate-spin"></div>
            </div>
        </Html>
    );
};

export default Loader;
