import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

const App = () => {

  useGSAP(() => {
    gsap.to(".box", {
      x: 600,
      delay: 2,
      duration: 1,
      borderRadius: "50%",
    })
  })

  return (
    <main className='h-screen w-full bg-[#111] p-5'>
      <div className="box h-[300px] w-[300px] bg-[crimson] rounded-[10px]">

      </div>
    </main>
  );
};

export default App;