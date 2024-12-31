import { Html, useProgress } from "@react-three/drei"

export default function Loader() {
    const { progress } = useProgress()
    return (
      <Html 
      as='div'
     style={{ background: 'black'  ,
               width: '100%' , 
               height: '100%' ,
               display: 'flex' , 
               justifyContent: 'center' , 
               alignItems: 'center',
                
               }}
      
      >
        <div className="flex flex-col items-center justify-center z-40   ">
          <div className="w-32 h-32 border-4 shadow-md border-t-black/20 border-r-black/20 border-black rounded-full animate-spin" />
          <p className="text-xl mt-4 font-medium">{progress.toFixed(0)}%</p>
        </div>
      </Html>
    )
}