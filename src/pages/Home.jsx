import { Canvas } from "@react-three/fiber";
import {useState,Suspense } from "react";
import Loader from "../components/Loader";
import Island from "../components/models/island";
import Sky from "../components/models/sky";
import Birds from "../components/models/Birds";
import Plane from "../components/models/Plane";

const Home = () => {
  const [isRotating,setIsRotating] = useState(false);
  const adjustIslandForScreenSize =()=>{
    let screenScale =null;
    let screenPosition = [0,-6.5,-43];
    let rotation =[0.1,4.7,0];
    if(window.innerWidth<768){
      screenScale=[0.9,0.9,0.9];
    }else{
      screenScale=[1,1,1];
    }
    return [screenScale,screenPosition,rotation]
    
  }

  const adjustPlaneForScreenSize =()=>{
    let screenScale,screenPosition;
    if(window.innerWidth<768){
      screenScale=[1.5,1.5,1.5];
      screenPosition=[0,-1.5,0];
      let rotation =[0.1,4.7,0];
    }else{
      screenScale=[3,3,3];
      screenPosition=[0,-4,-4]
    }
    return [screenScale,screenPosition]
    
  }

  const [islandScale,islandPosition,islandrotation] = adjustIslandForScreenSize();

  const [planeScale,planePosition] = adjustPlaneForScreenSize();

  // <section className="w-full h-screen relative">
  //   <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">Home</div>
  // </section>
  return (
    <section className="w-full h-screen relative">
      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing':'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1,1,1]} intensity={2} />
          <ambientLight intensity={0.5}/>
          <hemisphereLight  skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>
          
          <Birds/>
          <Sky/>
          <Island
          position = {islandPosition}
          scale={islandScale}
          rotation = {islandrotation}
          isRotating={isRotating}
          setIsRotating={setIsRotating}
          />
          <Plane
          isRotating = {isRotating}
          planeScale ={planeScale}
          planePosition ={planePosition}
          rotation={[0,20,0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;