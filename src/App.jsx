import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { useState } from "react";

const App = () => {

  const [xValue, setxValue] = useState(0) 
  const [roti, setRoti ] = useState(0)
  const random = gsap.utils.random(-500, 500, 100);
  const rotateX = gsap.utils.random(-360, 360, 30);

  useGSAP(() => {
    gsap.to(".box", {
      x: xValue,
      duration: 0.5,
      rotate: roti,
    })
  }, [xValue, roti])

  return (
    <main className='h-screen w-full bg-[#111] p-5'>
      <div onClick={() => {
        setxValue(random)
        setRoti(rotateX)
        console.log("done")
        }} className="box h-[300px] w-[300px]  rounded-lg mx-auto ">
      <img src="https://i.pinimg.com/originals/ae/7f/0a/ae7f0aa6330f9db3896a4c9190281006.png" alt="" />
      </div>
      {/* <button onClick={() => {
        setxValue(random)
        setRoti(rotateX)
        console.log("done")
        }} className="px-8 pt-3 pb-4 bg-gradient-to-tr from-[crimson] to-[tomato] text-black text-xl font-semibold rounded-lg active:scale-90 ease-in">Animate</button> */}
    </main>
  );
};

export default App;