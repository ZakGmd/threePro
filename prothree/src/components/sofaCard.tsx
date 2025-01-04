import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { SofaCardProps} from '../types/types';
import ModelCard from './modelCard';

export default function SofaCard({ sofa, materials, onDelete }: SofaCardProps) {


    return(
        <div className="flex flex-col items-start w-full">
         <div className="flex items-center gap-2 w-full pt-2">
        <div className="w-[120px] h-[120px] relative">
          <Canvas 
            camera={{ position: [0, 2, 12.5], fov: 45 }}
            className=""
            style={{ width: '100%', height: '100%' , background: ''  }}

          >
            <directionalLight
            castShadow
            position={[10, 18, 11 ]}
          intensity={4}
        
        />

            <ambientLight intensity={0.5} castShadow />
            
            <ModelCard modelPath={sofa.modelPath} materials={materials} />
            <OrbitControls 
              enableZoom={true}
              enablePan={false}
              minPolarAngle={Math.PI / 3}
              maxPolarAngle={Math.PI / 2}
            />
          </Canvas>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col gap-1 items-start font-inter text-[#000000]">
            <div className="font-medium">{sofa.name}</div>
            <div className="text-[14px] leading-5">Classic Victorian sofa with light oak frame <br /> and khaki velvet. Handcrafted wooden details.</div>
          </div>
          <div className="flex flex-col items-start gap-1 justify-between font-inter text-[#000000]">
            <div className="flex flex-col items-baseline">
              <div className="text-[#0c0a09b2] text-[12px]">Price:</div>
              <div className="font-medium">${sofa.price?.toLocaleString()}</div>
            </div>
            <button 
              onClick={onDelete}
              className="py-1 px-3 rounded-md text-[#0c0a09fb] shadow-[0_1px_1.5px_rgba(0,0,0,0.1),inset_0px_1px_0px_rgba(0,0,0,0.1)] font-medium bg-black/15 hover:bg-black/20 text-[12px] leading-normal tracking-wide text-center cursor-pointer hover:text-[#0c0a09d2] transition-all duration-200"
            >
              Delete
            </button>
          </div>
        </div>
         </div>
         <div className="h-[0.5px] w-full bg-black/10 shadow-[0_0.2px_0px_rgba(0,0,0,0.1),inset_0px_0.2px_0.2px_rgba(0,0,0,0.1)] rounded-md" />
    </div>
  );
    
}